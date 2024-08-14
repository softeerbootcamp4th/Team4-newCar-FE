import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { SOCKET_BASE_URL } from 'src/constants/environments.ts';

export class Socket {
	private client: Client;

	private subscriptions: Map<string, StompSubscription> = new Map();

	constructor(url: string, token?: string | null) {
		this.client = this.setup({ url, token });
	}

	private setup({ url = SOCKET_BASE_URL }: { url: string; token?: string | null }): Client {
		const stompClient = new Client({
			webSocketFactory: () => new SockJS(`${url}/ws`),
			reconnectDelay: 5000, // Reconnect every 5 seconds if the connection drops
			heartbeatIncoming: 4000, // Check for server heartbeat every 4 seconds
			heartbeatOutgoing: 4000, // Send a heartbeat every 4 seconds
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

const socketClient = new Socket(SOCKET_BASE_URL);
export default socketClient;
