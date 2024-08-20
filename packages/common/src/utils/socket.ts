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

	private token?: string | undefined | null = undefined;

	isConnected: boolean = false;

	constructor(url: string, token?: string | null) {
		let baseUrl = url;
		if (token) {
			this.token = token;
			baseUrl += `?Authorization=${token}`;
		}
		this.client = this.setup(baseUrl);
	}

	private setup(url: string): Client {
		const stompClient = new Client({
			webSocketFactory: () => new SockJS(url),
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

	sendMessages({ destination, body }: SendMessageProps) {
		if (!this.token) {
			throw new Error('로그인 후 참여할 수 있어요!');
		}

		const messageProps = {
			destination,
			body: JSON.stringify(body),
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
			headers,
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
