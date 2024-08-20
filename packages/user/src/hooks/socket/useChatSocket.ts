import { ChatProps } from '@softeer/common/components';
import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useEffect, useState } from 'react';
import useChatListStorage from 'src/hooks/storage/useChatStorage.ts';
import { useToast } from 'src/hooks/useToast.ts';
import socketManager from 'src/services/socket.ts';

export type UseChatSocketReturnType = ReturnType<typeof useChatSocket>;

export default function useChatSocket() {
	const { toast } = useToast();

	const [storedChatList, storeChatList] = useChatListStorage();
	const [chatList, setChatList] = useState<ChatProps[]>(storedChatList);

	const [isChatListSubscribed, setIsChatListSubscribed] = useState(false);

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

	const socketClient = socketManager.getSocketClient();

	const handleSendMessage = useCallback(
		(content: string) => {
			try {
				const chatMessage = { content };

				socketClient.sendMessages({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE,
					body: chatMessage,
				});
			} catch (error) {
				const errorMessage = (error as Error).message;
				toast({
					description:
						errorMessage.length > 0 ? errorMessage : '기대평 전송 중 문제가 발생했습니다.',
				});
			}
		},
		[socketClient],
	);

	const handleIncomingChatHistory: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			setChatList(data as ChatProps[]);
		},
		[setChatList],
	);

	const handleRequestForSendingChatHistory = useCallback(async () => {
		try {
			await socketClient.sendMessages({
				destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_CHAT_LIST,
				body: {},
			});
			setIsChatListSubscribed(true);
		} catch (error) {
			const errorMessage = (error as Error).message;
			toast({
				description:
					errorMessage.length > 0 ? errorMessage : '기대평 내역을 불러오는 중 문제가 발생했습니다.',
			});
		}
	}, [setIsChatListSubscribed, socketClient]);

	const handleReceiveChatList: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			if (!isChatListSubscribed) {
				handleRequestForSendingChatHistory();
			}
			handleIncomingChatHistory(data);
		},
		[isChatListSubscribed],
	);

	return {
		onReceiveMessage: handleIncomingMessage,
		onReceiveBlock: handleIncomingBlock,
		onReceiveChatList: handleReceiveChatList,
		onSendMessage: handleSendMessage,
		messages: chatList,
	};
}
