import { ChatProps } from '@softeer/common/components';
import { categoryToSocketCategory, CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useState } from 'react';
import useAuth from 'src/hooks/useAuth.tsx';
import socketClient from 'src/services/socket.ts';
import type { User } from 'src/types/user.d.ts';

export type UseChatSocketReturnType = ReturnType<typeof useChatSocket>;

export default function useChatSocket() {
	const { user } = useAuth();

	const [chatMessages, setChatMessages] = useState<ChatProps[]>([]);

	const handleIncomingMessage: SocketSubscribeCallbackType = useCallback(
		(data: unknown, messageId: string) => {
			const parsedData = data as Omit<ChatProps, 'id'>;
			const parsedMessage = { id: messageId, ...parsedData };
			setChatMessages((prevMessages) => [...prevMessages, parsedMessage] as ChatProps[]);
		},
		[],
	);

	const handleSendMessage = useCallback(
		(content: string) => {
			console.assert(user !== null, '로그인 되지 않은 사용자가 메세지 전송을 시도했습니다.');

			const { id: sender, type } = user as NonNullable<User>;
			const chatMessage = { sender, team: categoryToSocketCategory[type as Category], content };

			socketClient.sendMessages({
				destination: CHAT_SOCKET_ENDPOINTS.PUBLISH,
				body: chatMessage,
			});
		},
		[socketClient],
	);

	return {
		onReceiveMessage: handleIncomingMessage,
		onSendMessage: handleSendMessage,
		messages: chatMessages,
	};
}
