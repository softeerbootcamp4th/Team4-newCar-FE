import { ChatProps } from '@softeer/common/components';
import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useState } from 'react';
import socketManager from 'src/services/socket.ts';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';

export type AdminChatSocketReturnType = ReturnType<typeof useChatSocket>;

export default function useChatSocket() {
	const { openAlert } = useAlert();

	const socketClient = socketManager.getSocketClient();

	const [chatMessages, setChatMessages] = useState<ChatProps[]>([]);
	const [notice, setNotice] = useState<string>('');

	const handleIncomingMessage: SocketSubscribeCallbackType = useCallback((data: unknown) => {
		setChatMessages((prevMessages) => [...prevMessages, data] as ChatProps[]);
	}, []);

	const handleIncomintBlock: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const { blockId } = data as { blockId: string };
			setChatMessages((prevMessages) => {
				const tmpMessages = prevMessages.slice();
				tmpMessages.some((tmpMessage, index) => {
					if (tmpMessage.id === blockId) {
						tmpMessages[index].type = 'b';
						return true;
					}
					return false;
				});
				return tmpMessages;
			});
		},
		[chatMessages],
	);

	const handleIncomingNotice: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const { content } = data as { content: string };
			setNotice(content);
		},
		[socketClient],
	);

	const handleBlock = useCallback(
		(id: string) => {
			const blockId = {
				blockId: id,
			};
			try {
				socketClient.sendMessages({
					destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_BLOCK,
					body: blockId,
				});
			} catch (error) {
				const errorMessage = (error as Error).message;
				openAlert(errorMessage.length > 0 ? errorMessage : '문제가 발생했습니다.', 'alert');
			}
		},
		[socketClient],
	);

	const handleSendNotice = useCallback(
		(content: string) => {
			try {
				const chatMessage = { content };
				socketClient.sendMessages({
					destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_NOTICE,
					body: chatMessage,
				});
			} catch (error) {
				const errorMessage = (error as Error).message;
				openAlert(errorMessage.length > 0 ? errorMessage : '문제가 발생했습니다.', 'alert');
			}
		},
		[socketClient],
	);

	return {
		onReceiveMessage: handleIncomingMessage,
		onReceiveBlock: handleIncomintBlock,
		onReceiveNotice: handleIncomingNotice,
		onBlock: handleBlock,
		onNotice: handleSendNotice,
		messages: chatMessages,
		notice,
	};
}
