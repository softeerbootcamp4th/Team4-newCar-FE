import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { Socket, SocketSubscribeCallbackType } from '@softeer/common/utils';
import { SOCKET_BASE_URL } from 'src/constants/environments.ts';
import { eventBus } from './eventBus.ts';

// import CustomError from 'src/utils/error.ts';

class SocketManager {
	private socketClient: Socket | null = null;

	private onReceiveMessage: SocketSubscribeCallbackType | null = null;

	private onReceiveBlock: SocketSubscribeCallbackType | null = null;

	private onReceiveNotice: SocketSubscribeCallbackType | null = null;

	private onReceiveMessageHistory: SocketSubscribeCallbackType | null = null;

	private isConnected: boolean = false;

	public getSocketClient() {
		return this.socketClient!;
	}

	public getIsConnected() {
		return this.isConnected;
	}

	private initializeSocketClient(token?: string | null) {
		if (token) {
			this.socketClient = new Socket(SOCKET_BASE_URL, token);
		}
	}

	async connectSocketClient({
		token,
		onReceiveMessage,
		onReceiveBlock,
		onReceiveNotice,
		onReceiveMessageHistory,
	}: {
		token: string | null | undefined;
		onReceiveMessage: SocketSubscribeCallbackType;
		onReceiveBlock: SocketSubscribeCallbackType;
		onReceiveNotice: SocketSubscribeCallbackType;
		onReceiveMessageHistory: SocketSubscribeCallbackType;
	}) {
		if (this.socketClient) {
			await this.socketClient.disconnect();
		}

		this.initializeSocketClient(token);

		this.onReceiveMessage = onReceiveMessage;
		this.onReceiveBlock = onReceiveBlock;
		this.onReceiveNotice = onReceiveNotice;
		this.onReceiveMessageHistory = onReceiveMessageHistory;

		try {
			await this.socketClient!.connect();
			this.subscribeToTopics();
			this.isConnected = true;
			eventBus.emit('socket_connected', {});
		} catch (error) {
			throw new Error('서버에서 데이터를 불러오는 데 실패했습니다.');
		}
	}

	async reconnectSocketClient(token?: string | null) {
		await this.connectSocketClient({
			token,
			onReceiveBlock: this.onReceiveBlock!,
			onReceiveMessage: this.onReceiveMessage!,
			onReceiveNotice: this.onReceiveNotice!,
			onReceiveMessageHistory: this.onReceiveMessageHistory!,
		});
	}

	private subscribeToTopics() {
		if (this.socketClient) {
			if (this.onReceiveMessage) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_MESSAGE,
					callback: this.onReceiveMessage,
				});
			}

			if (this.onReceiveBlock) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_BLOCK,
					callback: this.onReceiveBlock,
				});
			}
			if (this.onReceiveNotice) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_NOTICE,
					callback: this.onReceiveNotice,
				});
			}

			if (this.onReceiveMessageHistory) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIB_HISTORY,
					callback: this.onReceiveMessageHistory,
				});
			}
		}
	}
}
const socketManager = new SocketManager();

export default socketManager;
