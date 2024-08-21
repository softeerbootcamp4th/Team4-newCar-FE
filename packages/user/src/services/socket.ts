import { CHAT_SOCKET_ENDPOINTS, RACING_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { Socket, SocketSubscribeCallbackType } from '@softeer/common/utils';
import { SOCKET_BASE_URL } from 'src/constants/environments.ts';
import { toast } from 'src/hooks/useToast.ts';

class SocketManager {
	private socketClient: Socket | null = null;

	private onReceiveMessage: SocketSubscribeCallbackType | null = null;

	private onReceiveBlock: SocketSubscribeCallbackType | null = null;

	private onReceiveChatList: SocketSubscribeCallbackType | null = null;

	private onReceiveStatus: SocketSubscribeCallbackType | null = null;

	private initializeSocketClient(token?: string | null) {
		this.socketClient = new Socket(SOCKET_BASE_URL, token);
	}

	public getSocketClient() {
		return this.socketClient!;
	}

	async connectSocketClient({
		token,
		onReceiveMessage,
		onReceiveBlock,
		onReceiveStatus,
		onReceiveChatList,
	}: {
		token: string | null | undefined;
		onReceiveMessage: SocketSubscribeCallbackType;
		onReceiveBlock: SocketSubscribeCallbackType;
		onReceiveStatus: SocketSubscribeCallbackType;
		onReceiveChatList: SocketSubscribeCallbackType;
	}) {
		this.initializeSocketClient(token);

		this.onReceiveChatList = onReceiveChatList;
		this.onReceiveMessage = onReceiveMessage;
		this.onReceiveBlock = onReceiveBlock;
		this.onReceiveStatus = onReceiveStatus;

		try {
			await this.socketClient!.connect();
		} catch (error) {
			toast({ description: '새로고침 후 다시 시도해주세요.' });
			console.error('[Socket Connection Error]', error);
		}

		try {
			await this.subscribeToTopics();
		} catch (error) {
			toast({ description: '새로고침 후 다시 시도해주세요.' });
			console.error('[Socket Subscribe Error]', error);
		}
	}

	async reconnectSocketClient(token?: string | null) {
		await this.connectSocketClient({
			token,
			onReceiveBlock: this.onReceiveBlock!,
			onReceiveMessage: this.onReceiveMessage!,
			onReceiveStatus: this.onReceiveStatus!,
			onReceiveChatList: this.onReceiveChatList!,
		});
	}

	async subscribeToTopics() {
		if (this.socketClient && this.socketClient.client.connected) {
			this.socketClient.subscribe({
				destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_ERROR,
				callback: (errorMessage) => console.error(errorMessage),
			});

			if (this.onReceiveChatList) {
				await this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIB_HISTORY,
					callback: this.onReceiveChatList,
				});
				this.socketClient.sendMessages({
					destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_HISTORY,
					body: {},
					requiresAuth: false,
				});
			}

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

			if (this.onReceiveStatus) {
				this.socketClient.subscribe({
					destination: RACING_SOCKET_ENDPOINTS.SUBSCRIBE,
					callback: this.onReceiveStatus,
				});
			}
		}
	}
}

const socketManager = new SocketManager();
export default socketManager;
