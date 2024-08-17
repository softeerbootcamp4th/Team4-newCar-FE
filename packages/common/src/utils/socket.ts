import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export type SocketSubscribeCallbackType = (data: unknown, messageId: string) => void;

export interface SubscriptionProps {
  destination: string;
  callback: SocketSubscribeCallbackType;
  headers?: Record<string, string>;
}

export interface SendMessageProps {
  destination: string;
  body: unknown;
  headers?: Record<string, string>;
}

export interface ConnectProps {
  isSuccess: boolean;
  options?: IFrame;
}

export default class Socket {
	private client: Client;

	private subscriptions: Map<string, StompSubscription> = new Map();

	public isConnected: boolean = false;

	constructor(url: string, token?: string | null) {
		this.client = this.setup({ url, token });
	}

	private setup({ url, token }: { url: string; token?: string | null }): Client {
		const stompClient = new Client({
			connectHeaders: token ? { Authorization: token } : {},
			webSocketFactory: () => new SockJS(`${url}/ws`),
			reconnectDelay: 5000, // Reconnect if the connection drops
		});
		this.client = stompClient;
		return stompClient;
	}

  connect(callback?: (props: ConnectProps) => void) {
    this.client.onConnect = (options) => {
      this.isConnected = true;
      callback?.({ isSuccess: true, options });
    };

    this.client.onStompError = (error) => {
      this.isConnected = false;
      callback?.({ isSuccess: false, options: error });
    };

    this.client.activate();
  }

	disconnect() {
		this.subscriptions.forEach((subscription) => subscription.unsubscribe());
		this.subscriptions.clear();

		if (this.client.connected) {
			this.client.deactivate();
			this.isConnected = false;
		}
	}

  reconnect(callback?: (props: ConnectProps) => void) {
    if (this.isConnected) {
      this.disconnect();
    }
    this.connect(callback);
  }

  sendMessages({ destination, body, headers = {} }: SendMessageProps) {
    const messageProps = {
      destination,
      body: JSON.stringify(body),
      headers: { ...this.client.connectHeaders, ...headers },
    };

    if (!this.client.connected) {
      this.connect(() => {
        this.client.publish(messageProps);
      });
    } else {
      this.client.publish(messageProps);
    }
  }

  private createSubscription({ destination, callback, headers = {} }: SubscriptionProps) {
    const subscriptionProps = {
      destination,
      headers: { ...this.client.connectHeaders, ...headers },
      callback: (message: IMessage) => {
        const messageId = message.headers['message-id'];
        const data = JSON.parse(message.body);
        callback(data, messageId);
      },
    };

    const subscription = this.client.subscribe(
      subscriptionProps.destination,
      subscriptionProps.callback,
      subscriptionProps.headers,
    );

    this.subscriptions.set(destination, subscription);
  }

  subscribe(props: SubscriptionProps) {
    if (this.isConnected) {
      this.createSubscription(props);
    } else {
      this.connect(() => this.createSubscription(props));
    }
  }

  unsubscribe(destination: string) {
    const subscription = this.subscriptions.get(destination);
    if (subscription) {
      subscription.unsubscribe();
      this.subscriptions.delete(destination);
    }
  }
}
