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

	const handleIncomingMessage: SocketSubscribeCallbackType = useCallback(
		(data: unknown, messageId: string) => {
			const parsedData = data as Omit<ChatProps, 'id'>;
			const parsedMessage = { id: messageId, ...parsedData };
			setChatMessages((prevMessages) => [...prevMessages, parsedMessage] as ChatProps[]);
		},
		[],
	);

	const handleIncomintBlock: SocketSubscribeCallbackType = useCallback(
		(data: unknown, messageId: string) => {
			const { blockId } = data as { blockId: string };
			setChatMessages(prevMessages => {
				const tmpMessages = prevMessages.slice();
				// console.log(chatMessages);
				tmpMessages.some((tmpMessage, index) => {
					if (tmpMessage.id === blockId) {
						tmpMessages[index].type = 'b';
						return true;
					} return false;
				});
				return tmpMessages;
			});
		},
		[chatMessages],
	);

	const handleBlock = useCallback(
		(id: string) => {
			const blockId = {
				blockId: id,
			};
			try {
				socketClient.sendMessages({
					destination: CHAT_SOCKET_ENDPOINTS.BLOCK,
					body: blockId,
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
		onBlock: handleBlock,
		messages: chatMessages,
	};
}
