import { ChatProps, NoticeChatProps } from '@softeer/common/components';
import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useState } from 'react';
import { useToast } from 'src/hooks/useToast.ts';
import socketManager from 'src/services/socket.ts';

export type UseChatSocketReturnType = ReturnType<typeof useChatSocket>;

const INIT_NOTICE = { content: '오늘의 공지사항이 없습니다.' };
export default function useChatSocket() {
	const { toast } = useToast();

	const [notice, setNotice] = useState<Pick<NoticeChatProps, 'content'>>(INIT_NOTICE);
	const [messages, setMessages] = useState<ChatProps[]>([]);

	/* Helper Functions */

	const handleBlockData = useCallback(
		(data: BlockData) => {
			const { id, blockId } = data;
			setMessages((prevMessages) =>
				prevMessages.map((message) => (message.id === blockId ? { id, type: 'b' } : message)),
			);
		},
		[setMessages],
	);

	const handleChatMessage = useCallback(
		(data: ChatProps) => {
			if (isNoticeData(data)) {
				setNotice(data as NoticeChatProps);
			} else {
				setMessages((prevMessages) => [...prevMessages, data]);
			}
		},
		[setMessages, setNotice],
	);

	/* Main Handlers */

	const handleIncomingData: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			if (isBlockData(data)) {
				handleBlockData(data);
			} else {
				handleChatMessage(data as ChatProps);
			}
		},
		[handleBlockData, handleChatMessage],
	);

	const handleIncomingChatHistory: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const parsedData = Array.isArray(data) ? [...data] : ([] as ChatProps[]);
			if (parsedData.length > 0 && !parsedData.at(-1)?.sender) {
				setNotice({ ...parsedData.pop(), type: 'n' });
			}
			setMessages(parsedData);
		},
		[setMessages],
	);

	const handleSendMessage = useCallback(
		(content: string) => {
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
					description:
						errorMessage.length > 0 ? errorMessage : '기대평 전송 중 문제가 발생했습니다.',
				});
			}
		},
		[socketManager],
	);

	return {
		onReceiveMessage: handleIncomingData,
		onReceiveChatList: handleIncomingChatHistory,
		onSendMessage: handleSendMessage,
		messages,
		notice,
	};
}

/* Helper Functions */

type BlockData = { id: string; blockId: string };

const isBlockData = (data: unknown): data is BlockData => (data as BlockData).blockId !== undefined;

const isNoticeData = (data: ChatProps): data is NoticeChatProps => data.sender === undefined;
