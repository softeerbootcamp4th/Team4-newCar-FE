import { ChatList, ChatProps } from '@softeer/common/components';
import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth.tsx';
import { CHAT_SOCKET_ENDPOINTS } from 'src/services/socket/endpoints.ts';
import socketClient from 'src/services/socket/index.ts';
import Chat from './Chat.tsx';
import ChatInputArea from './inputArea/index.tsx';

/** 실시간 기대평 섹션 */
export default function RealTimeChatting() {
	const { onSendMessage, messages } = useChatSocket();

	return (
		<section className="container flex max-w-[1200px] snap-start flex-col items-center pb-[115px] pt-[50px]">
			<h6 className="text-heading-10 mb-[25px] font-medium">기대평을 남겨보세요!</h6>
			<ChatInputArea onSend={onSendMessage} />
			<div className="h-[1000px] w-full overflow-y-auto rounded-[10px] bg-neutral-800 py-10">
				<ChatList>
					{messages.map((message) => (
						<Chat key={message.id} {...message} />
					))}
				</ChatList>
			</div>
		</section>
	);
}

function useChatSocket() {
	const { isAuthenticated } = useAuth();

	const [messages, setMessages] = useState<ChatProps[]>([]);

	const handleIncomingMessage = (payload: { body: string }) => {
		const parsedMessage = Object.assign(JSON.parse(payload.body)) as ChatProps;
		setMessages((prevMessages) => [...prevMessages, parsedMessage]);
	};

	useEffect(() => {
		if (isAuthenticated) {
			socketClient.connect((isConnected) => {
				if (isConnected) {
					socketClient.subscribe({
						destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE,
						callback: handleIncomingMessage,
					});
				}
			});
		}
		return () => socketClient.disconnect();
	}, [isAuthenticated, socketClient, handleIncomingMessage]);

	const handleSendMessage = (text: string) => {
		const chatMessage = {
			sender: 1,
			team: 'pet',
			content: text,
		};

		socketClient.sendMessages({
			destination: CHAT_SOCKET_ENDPOINTS.PUBLISH,
			body: chatMessage,
		});
	};

	return { onSendMessage: handleSendMessage, messages };
}
