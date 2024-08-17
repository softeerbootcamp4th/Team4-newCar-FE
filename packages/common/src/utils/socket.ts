import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export type SocketSubscribeCallbackType = (data: unknown, messageId: string) => void;

export default class Socket {
	private client: Client;

	private subscriptions: Map<string, StompSubscription> = new Map();

	public isConnected: boolean = false;

	constructor(url: string, token?: string | null) {
		this.client = this.setup({ url, token });
	}

	private setup({ url }: { url: string; token?: string | null }): Client {
		const stompClient = new Client({
			webSocketFactory: () => new SockJS(`${url}/ws`),
			reconnectDelay: 5000, // Reconnect if the connection drops
		});
		this.client = stompClient;
		return stompClient;
	}

	connect(callback?: (isSuccess: boolean, options?: IFrame) => void) {
		this.client.onConnect = (options) => {
			this.isConnected = true;
			callback?.(true, options);
		};

		this.client.onStompError = (error) => {
			this.isConnected = false;
			callback?.(false, error);
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

	reconnect(callback?: (isSuccess: boolean, options?: IFrame) => void) {
		if (this.isConnected) {
			this.disconnect();
		}
		this.connect(callback);
	}

	sendMessages({ destination, body }: { destination: string; body: unknown }) {
		if (!this.client.connected) {
			this.connect(() => {
				this.client.publish({ destination, body: JSON.stringify(body) });
			});
		} else {
			this.client.publish({ destination, body: JSON.stringify(body) });
		}
	}

	private createSubscription({
		destination,
		callback,
	}: {
		destination: string;
		callback: SocketSubscribeCallbackType;
	}) {
		const subscription = this.client.subscribe(destination, (message: IMessage) => {
			const messageId = message.headers['message-id'];
			const data = JSON.parse(message.body);
			callback(data, messageId);
		});
		this.subscriptions.set(destination, subscription);
	}

	subscribe({
		destination,
		callback,
	}: {
		destination: string;
		callback: SocketSubscribeCallbackType;
	}) {
		if (this.isConnected) {
			this.createSubscription({ destination, callback });
		} else {
			this.connect(() => this.createSubscription({ destination, callback }));
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
