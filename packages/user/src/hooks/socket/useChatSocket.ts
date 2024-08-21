import { ChatProps } from '@softeer/common/components';
import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useEffect, useState } from 'react';
import useChatListStorage from 'src/hooks/storage/useChatStorage.ts';
import useChatNoticeStorage from 'src/hooks/storage/useNoticeStorage.ts';
import { useToast } from 'src/hooks/useToast.ts';
import socketManager from 'src/services/socket.ts';

export type UseChatSocketReturnType = ReturnType<typeof useChatSocket>;

export default function useChatSocket() {
	const { toast } = useToast();

	const [storedChatList, storeChatList] = useChatListStorage();
	const [storedNotice, storeNotice] = useChatNoticeStorage();
	const [chatList, setChatList] = useState<ChatProps[]>(storedChatList);

	useEffect(() => storeChatList(chatList), [chatList]);

	const handleIncomingMessage: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			setChatList((prevMessages) => [...prevMessages, data] as ChatProps[]);
		},
		[setChatList],
	);

	const handleIncomingBlock: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const { id, blockId } = data as { id: string; blockId: string };
			setChatList((prevMessages) =>
				prevMessages.map((message) => (message.id === blockId ? { id, type: 'b' } : message)),
			);
		},
		[setChatList],
	);

	const handleSendMessage = useCallback((content: string) => {
		try {
			const socketClient = socketManager.getSocketClient();

			const chatMessage = { content };

			socketClient.sendMessages({
				destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_CHAT,
				body: chatMessage,
			});
		} catch (error) {
			const errorMessage = (error as Error).message;
			toast({
				description: errorMessage.length > 0 ? errorMessage : '기대평 전송 중 문제가 발생했습니다.',
			});
		}
	}, []);

	const handleIncomingChatHistory: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const parsedData = Array.isArray(data) ? [...data] : [] as ChatProps[];
			if (parsedData.length > 0 && !parsedData.at(-1)?.sender) {
				const notice={...parsedData.pop(),type:'n'}
				storeNotice(notice);
			}
			setChatList(parsedData);
		},
		[setChatList],
	);

	return {
		onReceiveMessage: handleIncomingMessage,
		onReceiveBlock: handleIncomingBlock,
		onReceiveChatList: handleIncomingChatHistory,
		onSendMessage: handleSendMessage,
		messages: chatList,
		notice: storedNotice
	};
}
