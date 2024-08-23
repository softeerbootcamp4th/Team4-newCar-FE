import { ChatProps } from '@softeer/common/components';
import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { Socket, SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useEffect, useState } from 'react';
import { eventBus } from 'src/services/eventBus.ts';

import socketManager from 'src/services/socket.ts';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';

export type AdminChatSocketReturnType = ReturnType<typeof useChatSocket>;

export default function useChatSocket() {
	const { openAlert } = useAlert();
	const [socketClient, setSocketClient] = useState<Socket | null>(null);
	const [isValid, setIsValid] = useState(false);
	const [chatMessages, setChatMessages] = useState<ChatProps[]>([]);
	const [notice, setNotice] = useState<string>('');

	const updateSocket = () => {
		setSocketClient(socketManager.getSocketClient());
		setIsValid(true);
	};

	useEffect(() => {
		eventBus.on('socket_connected', updateSocket);
	}, []);

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
		[chatMessages],
	);

	const handleIncomingHistory: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const parsedDataList = data as Omit<ChatProps, 'id'>[];
			if (parsedDataList.length > 0 && !parsedDataList.at(-1)?.sender) {
				const tmpNotice = parsedDataList.pop();
				setNotice(tmpNotice?.content ?? '');
			}
			setChatMessages((prevMessages) => [...parsedDataList, ...prevMessages] as ChatProps[]);
		},
		[chatMessages],
	);

	const handleBlock = useCallback(
		(id: string) => {
			const blockId = {
				blockId: id,
			};
			try {
				if (socketClient) {
					socketClient.sendMessages({
						destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_BLOCK,
						body: blockId,
					});
				} else {
					openAlert('소켓이 연결되지 않았습니다.', 'alert');
				}
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
				if (socketClient) {
					const chatMessage = { content };
					socketClient.sendMessages({
						destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_NOTICE,
						body: chatMessage,
					});
				} else {
					openAlert('소켓이 연결되지 않았습니다.', 'alert');
				}
			} catch (error) {
				const errorMessage = (error as Error).message;
				openAlert(errorMessage.length > 0 ? errorMessage : '문제가 발생했습니다.', 'alert');
			}
		},
		[socketClient],
	);

	const handleRequestHistory = useCallback(() => {
		try {
			if (socketClient) {
				socketClient.sendMessages({
					destination: CHAT_SOCKET_ENDPOINTS.PUBLISH_HISTORY,
					body: {},
				});
			} else {
				openAlert('소켓이 연결되지 않았습니다.', 'alert');
			}
		} catch (error) {
			const errorMessage = (error as Error).message;
			openAlert(errorMessage.length > 0 ? errorMessage : '문제가 발생했습니다.', 'alert');
		}
	}, [socketClient]);

	return {
		onReceiveMessage: handleIncomingMessage,
		onReceiveBlock: handleIncomintBlock,
		onReceiveNotice: handleIncomingNotice,
		onReceiveMessageHistory: handleIncomingHistory,
		onBlock: handleBlock,
		onNotice: handleSendNotice,
		onRequestMessageHistory: handleRequestHistory,
		messages: chatMessages,
		notice,
		isValid,
	};
}
