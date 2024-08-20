import { ACCESS_TOKEN_KEY, CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { Cookie, Socket, SocketSubscribeCallbackType } from '@softeer/common/utils';
import { SOCKET_BASE_URL } from 'src/constants/environments.ts';
// import CustomError from 'src/utils/error.ts';

class SocketManager {
	private socketClient: Socket | null = null;

	private onReceiveMessage: SocketSubscribeCallbackType | null = null;

	private onReceiveBlock: SocketSubscribeCallbackType | null = null;

	private onReceiveNotice: SocketSubscribeCallbackType | null = null;

	constructor(token: string | null) {
		this.initializeSocketClient(token);
	}

	public getSocketClient() {
		return this.socketClient!;
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
	}: {
		token: string | null | undefined;
		onReceiveMessage: SocketSubscribeCallbackType;
		onReceiveBlock: SocketSubscribeCallbackType;
		onReceiveNotice: SocketSubscribeCallbackType;
	}) {
		if (this.socketClient) {
			await this.socketClient.disconnect();
		}

		this.initializeSocketClient(token);

		this.onReceiveMessage = onReceiveMessage;
		this.onReceiveBlock = onReceiveBlock;
		this.onReceiveNotice = onReceiveNotice;

		try {
			await this.socketClient!.connect();
			this.subscribeToTopics();
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
			if (this.onReceiveNotice) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_NOTICE,
					callback: this.onReceiveNotice,
				});
			}
		}
	}
}

const socketManager = new SocketManager(Cookie.getCookie(ACCESS_TOKEN_KEY));
export default socketManager;
