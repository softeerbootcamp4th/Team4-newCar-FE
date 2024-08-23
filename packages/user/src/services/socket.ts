import { CHAT_SOCKET_ENDPOINTS, RACING_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { Socket, SocketSubscribeCallbackType } from '@softeer/common/utils';
import { SOCKET_BASE_URL } from 'src/constants/environments.ts';
import { toast } from 'src/hooks/useToast.ts';

class SocketManager {
	private socketClient: Socket | null = null;

	private initializeSocketClient(token?: string | null) {
		this.socketClient = new Socket(SOCKET_BASE_URL, token);
	}

	public getSocketClient() {
		return this.socketClient!;
	}

	public async connectSocketClient({
		token,
		onReceiveMessage,
		onReceiveStatus,
		onReceiveChatList,
	}: {
		token: string | null | undefined;
		onReceiveMessage: SocketSubscribeCallbackType;
		onReceiveStatus: SocketSubscribeCallbackType;
		onReceiveChatList: SocketSubscribeCallbackType;
	}) {
		if (this.socketClient?.client.connected) {
			this.socketClient.disconnect();
		}

		this.initializeSocketClient(token);

		try {
			await this.socketClient!.connect();
		} catch (error) {
			toast({ description: '새로고침 후 다시 시도해주세요.' });
			console.error('[Socket Connection Error]', error);
		}

		try {
			await this.subscribeToTopics({ onReceiveMessage, onReceiveStatus, onReceiveChatList });
		} catch (error) {
			toast({ description: '새로고침 후 다시 시도해주세요.' });
			console.error('[Socket Subscribe Error]', error);
		}
	}

	private async subscribeToTopics({
		onReceiveMessage,
		onReceiveStatus,
		onReceiveChatList,
	}: {
		onReceiveMessage: SocketSubscribeCallbackType;
		onReceiveStatus: SocketSubscribeCallbackType;
		onReceiveChatList: SocketSubscribeCallbackType;
	}) {
		if (this.socketClient && this.socketClient.client.connected) {
			this.socketClient.subscribe({
				destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_ERROR,
				callback: (errorMessage) => console.error(errorMessage),
			});

			if (onReceiveChatList) {
				await this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIB_HISTORY,
					callback: onReceiveChatList,
				});
				this.socketClient.sendMessages({
					destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_HISTORY,
					body: {},
					requiresAuth: false,
				});
			}

			if (onReceiveMessage) {
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_MESSAGE,
					callback: onReceiveMessage,
				});
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_NOTICE,
					callback: onReceiveMessage,
				});
				this.socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE_BLOCK,
					callback: onReceiveMessage,
				});
			}

			if (onReceiveStatus) {
				this.socketClient.subscribe({
					destination: RACING_SOCKET_ENDPOINTS.SUBSCRIBE,
					callback: onReceiveStatus,
				});
			}
		}
	}
}

const socketManager = new SocketManager();
export default socketManager;
