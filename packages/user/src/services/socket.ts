import {
	ACCESS_TOKEN_KEY,
	CHAT_SOCKET_ENDPOINTS,
	RACING_SOCKET_ENDPOINTS,
} from '@softeer/common/constants';
import { Cookie, Socket, SocketSubscribeCallbackType } from '@softeer/common/utils';
import { SOCKET_BASE_URL } from 'src/constants/environments.ts';
import CustomError from 'src/utils/error.ts';

class SocketManager {
	private socketClient: Socket | null = null;

	private onReceiveMessage: SocketSubscribeCallbackType | null = null;

	private onReceiveBlock: SocketSubscribeCallbackType | null = null;

	private onReceiveStatus: SocketSubscribeCallbackType | null = null;

	constructor(token: string | null) {
		this.initializeSocketClient(token);
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
		onReceiveBlock,
		onReceiveStatus,
	}: {
		token: string | null | undefined;
		onReceiveMessage: SocketSubscribeCallbackType;
		onReceiveBlock: SocketSubscribeCallbackType;
		onReceiveStatus: SocketSubscribeCallbackType;
	}) {
		this.initializeSocketClient(token);

		this.onReceiveMessage = onReceiveMessage;
		this.onReceiveBlock = onReceiveBlock;
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
			onReceiveBlock: this.onReceiveBlock!,
			onReceiveMessage: this.onReceiveMessage!,
			onReceiveStatus: this.onReceiveStatus!,
		});
	}

	private subscribeToTopics() {
		if (this.socketClient) {
			if (this.onReceiveMessage) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_CHAT,
					callback: this.onReceiveMessage,
				});
			}

			if (this.onReceiveBlock) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_BLOCK,
					callback: this.onReceiveBlock,
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

const socketManager = new SocketManager(Cookie.getCookie(ACCESS_TOKEN_KEY));
export default socketManager;
