import { CHAT_SOCKET_ENDPOINTS, RACING_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { Socket, SocketSubscribeCallbackType } from '@softeer/common/utils';
import { SOCKET_BASE_URL } from 'src/constants/environments.ts';
import CustomError from 'src/utils/error.ts';

export class SocketManager {
	private static instance: SocketManager | null = null;

	private socketClient: Socket | null = null;

	private onReceiveMessage: SocketSubscribeCallbackType | null = null;

	private onReceiveStatus: SocketSubscribeCallbackType | null = null;

	private constructor() {
		this.initializeSocketClient();
	}

	public static getInstance() {
		if (!SocketManager.instance) {
			SocketManager.instance = new SocketManager();
		}
		return SocketManager.instance;
	}

	private initializeSocketClient(token?: string | null) {
		this.socketClient = new Socket(SOCKET_BASE_URL, token);
	}

	public getSocketClient() {
		return this.socketClient!;
	}

	connectSocketClient({
		token,
		onReceiveMessage,
		onReceiveStatus,
	}: {
		token: string | null | undefined;
		onReceiveMessage: SocketSubscribeCallbackType;
		onReceiveStatus: SocketSubscribeCallbackType;
	}) {
		this.initializeSocketClient(token);

		this.onReceiveMessage = onReceiveMessage;
		this.onReceiveStatus = onReceiveStatus;

		this.socketClient!.connect((isConnected) => {
			if (isConnected) {
				this.subscribeToTopics();
			} else {
				throw new CustomError('서버에서 데이터를 불러오는 데 실패했습니다.', 500);
			}
		});
	}

	reconnectSocketClient(token?: string | null) {
		if (this.socketClient) {
			this.socketClient.disconnect();
		}

		this.connectSocketClient({
			token,
			onReceiveMessage: this.onReceiveMessage!,
			onReceiveStatus: this.onReceiveStatus!,
		});
	}

	private subscribeToTopics() {
		if (this.socketClient) {
			if (this.onReceiveMessage) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE,
					callback: this.onReceiveMessage,
				});
			}

			if (this.onReceiveStatus) {
				this.socketClient.subscribe({
					destination: RACING_SOCKET_ENDPOINTS.SUBSCRIBE,
					callback: this.onReceiveStatus,
				});
			}
		}
	}
}

export const socketManager = SocketManager.getInstance();
