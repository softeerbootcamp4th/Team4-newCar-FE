import { ChatProps } from '@softeer/common/components';
import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useState } from 'react';
import { useToast } from 'src/hooks/useToast.ts';
import socketManager from 'src/services/socket.ts';

export type UseChatSocketReturnType = ReturnType<typeof useChatSocket>;

export default function useChatSocket() {
	const { toast } = useToast();

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

	const handleIncomingBlock: SocketSubscribeCallbackType = useCallback(
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

	const handleSendMessage = useCallback(
		(content: string) => {
			try {
				const chatMessage = { content };

				socketClient.sendMessages({
					destination: CHAT_SOCKET_ENDPOINTS.PUBLISH,
					body: chatMessage,
				});
			} catch (error) {
				const errorMessage = (error as Error).message;
				toast({ description: errorMessage.length > 0 ? errorMessage : '문제가 발생했습니다.' });
			}
		},
		[socketClient],
	);

	return {
		onReceiveMessage: handleIncomingMessage,
		onReceiveBlock: handleIncomingBlock,
		onSendMessage: handleSendMessage,
		messages: chatMessages,
	};
}
