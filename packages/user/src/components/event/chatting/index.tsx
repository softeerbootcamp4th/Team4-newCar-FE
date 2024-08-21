import { ChatList } from '@softeer/common/components';
import { useEffect, useRef } from 'react';
import { UseSocketReturnType } from 'src/hooks/socket/index.ts';
import Chat from './Chat.tsx';
import ChatInputArea from './inputArea/index.tsx';
import ChatInput from './inputArea/input/index.tsx';

/** 실시간 기대평 섹션 */
export default function RealTimeChatting({
	chatSocket: { onSendMessage, messages },
}: Pick<UseSocketReturnType, 'chatSocket'>) {
	const chatListRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (chatListRef.current) {
			chatListRef.current.scrollTop = 0;
		}
	}, [messages]);

	return (
		<section className="container flex max-w-[1200px] snap-start flex-col items-center pb-[115px] pt-[50px]">
			<h3 className="text-heading-10 mb-[25px] font-medium">기대평을 남겨보세요!</h3>
			<ChatInputArea>
				<ChatInput onSend={onSendMessage} />
			</ChatInputArea>
			<div ref={chatListRef} className="h-[1000px] w-full overflow-y-auto rounded-[10px] bg-neutral-800 py-10">
				<ChatList>
					{messages.map((message) => (
						<Chat key={message.id} {...message} />
					))}
				</ChatList>
			</div>
		</section>
	);
}
