import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export type SocketSubscribeCallbackType = (data: unknown) => void;

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

export default class Socket {
	client: Client;

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
			reconnectDelay: 5000,
		});
		this.client = stompClient;
		return stompClient;
	}

	async connect(): Promise<IFrame> {
		return new Promise((resolve, reject) => {
			this.client.onConnect = (options) => {
				this.isConnected = true;
				resolve(options);
			};

			this.client.onStompError = (error) => {
				this.isConnected = false;
				reject(error);
			};

			this.client.activate();
		});
	}

	async disconnect() {
		this.subscriptions.forEach((subscription) => subscription.unsubscribe());
		this.subscriptions.clear();

		if (this.client.connected) {
			this.client.deactivate();
			this.isConnected = false;
		}
	}

	async sendMessages({ destination, body }: SendMessageProps) {
		if (!this.token) {
			throw new Error('로그인 후 참여할 수 있어요!');
		}

		const messageProps = {
			destination,
			body: JSON.stringify(body),
		};

		if (!this.client.connected) {
			await this.connect();
		}
		this.client.publish(messageProps);
	}

	private createSubscription({ destination, callback, headers = {} }: SubscriptionProps) {
		const subscriptionProps = {
			destination,
			headers,
			callback: (message: IMessage) => callback(JSON.parse(message.body)),
		};

		const subscription = this.client.subscribe(
			subscriptionProps.destination,
			subscriptionProps.callback,
			subscriptionProps.headers,
		);

		this.subscriptions.set(destination, subscription);
	}

	async subscribe(props: SubscriptionProps) {
		if (!this.isConnected) {
			await this.connect();
		}
		this.createSubscription(props);
	}

	unsubscribe(destination: string) {
		const subscription = this.subscriptions.get(destination);
		if (subscription) {
			subscription.unsubscribe();
			this.subscriptions.delete(destination);
		}
	}
}
