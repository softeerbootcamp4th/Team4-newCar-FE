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

	private headers?: Record<string, string> = {};

	constructor(url: string, token?: string | null) {
		this.client = this.setup(url);
		this.headers = token ? { Authorization: token } : {};
	}

	private setup(url: string): Client {
		console.log(url);
		const stompClient = new Client({
			webSocketFactory: () => new SockJS(`${url}/ws`),
			connectHeaders: this.headers,
			reconnectDelay: 5000, // Reconnect if the connection drops
		});
		this.client = stompClient;
		return stompClient;
	}

	connect(callback?: (props: ConnectProps) => void) {
		this.client.onConnect = (options) => {
			callback?.({ isSuccess: true, options });
		};

		this.client.onStompError = (error) => {
			callback?.({ isSuccess: false, options: error });
		};

		this.client.activate();
	}

	disconnect() {
		this.subscriptions.forEach((subscription) => subscription.unsubscribe());
		this.subscriptions.clear();

		if (this.client.connected) {
			this.client.deactivate();
		}
	}

	sendMessages({ destination, body, headers = {} }: SendMessageProps) {
		if (!this.headers?.Authorization) {
			throw new Error('로그인 후 참여할 수 있어요!');
		}

		const messageProps = {
			destination,
			body: JSON.stringify(body),
			headers: { ...this.headers, ...headers },
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
			headers: { ...this.headers, ...headers },
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
		if (this.client.connected) {
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
