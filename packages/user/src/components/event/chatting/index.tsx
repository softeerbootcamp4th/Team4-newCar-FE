import { ChatList } from '@softeer/common/components';
import { UseChatSocketReturnType } from 'src/hooks/socket/useChatSocket.ts';
import Chat from './Chat.tsx';
import ChatInputArea from './inputArea/index.tsx';

/** 실시간 기대평 섹션 */

export default function RealTimeChatting({ onSendMessage, messages }: UseChatSocketReturnType) {
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
