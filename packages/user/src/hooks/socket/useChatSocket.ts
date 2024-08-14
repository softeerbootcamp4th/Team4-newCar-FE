import { ChatProps } from '@softeer/common/components';
import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { IMessage } from '@stomp/stompjs';
import { useState } from 'react';
import useAuth from 'src/hooks/useAuth.tsx';
import socketClient from 'src/services/socket.ts';
import { User } from 'src/types/user.js';

export type UseChatSocketReturnType = ReturnType<typeof useChatSocket>;

export default function useChatSocket() {
	const { user } = useAuth();

	const [chatMessages, setChatMessages] = useState<ChatProps[]>([]);

	const handleIncomingMessage = (messageId: string, message: IMessage) => {
		const parsedMessage: ChatProps = { id: messageId, ...JSON.parse(message.body) };
		setChatMessages((prevMessages) => [...prevMessages, parsedMessage]);
	};

	const handleSendMessage = (content: string) => {
		console.assert(user !== null, '로그인 되지 않은 사용자가 메세지 전송을 시도했습니다.');

		const { id: sender, type: team } = user as NonNullable<User>;
		const chatMessage = { sender, team, content };

		socketClient.sendMessages({
			destination: CHAT_SOCKET_ENDPOINTS.PUBLISH,
			body: chatMessage,
		});
	};

	return {
		onReceiveMessage: handleIncomingMessage,
		onSendMessage: handleSendMessage,
		messages: chatMessages,
	};
}
