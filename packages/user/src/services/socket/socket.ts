import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

/**
 * 임시로 error 해결 전까지 common 에 존재하는 Socket class 대신 사용
 * Error: Dynamic require of "crypto" is not supported
 * */
export default class Socket {
	private client: Client;

	private subscriptions: Map<string, StompSubscription> = new Map();

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

	connect(callback?: (isConnected: boolean, options?: IFrame) => void) {
		// TODO: 채팅 메시지 리스트 받아오기
		// this.client.onConnect = (options) => callback?.(true, options);
		this.client.onConnect = () => callback?.(true);

		this.client.onStompError = (error) => {
			console.error('STOMP Error', error);
			callback?.(false);
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
		callback: (messageId: string, message: IMessage) => void;
	}) {
		const subscription = this.client.subscribe(destination, (message: IMessage) => {
			const messageId = message.headers['message-id'];
			callback(messageId, message);
		});
		this.subscriptions.set(destination, subscription);
	}

	subscribe({
		destination,
		callback,
	}: {
		destination: string;
		callback: (messageId: string, message: IMessage) => void;
	}) {
		if (this.client.connected) {
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