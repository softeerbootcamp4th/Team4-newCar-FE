import { ChatList } from '@softeer/common/components';
import Chat from 'src/components/event/chatting/Chat.tsx';
import ChatInputArea from './inputArea/index.tsx';

export default function RealTimeChatting() {
	return (
		<section className="container flex max-w-[1200px] flex-col items-center pb-[115px] pt-[95px]">
			<h6 className="text-heading-10 mb-[25px] font-medium">기대평을 남겨보세요!</h6>
			<ChatInputArea />
			<ChatList>
				<Chat type="blocked" />
				<Chat type="blocked" />
				<Chat type="blocked" />
				<Chat type="blocked" />
				<Chat type="blocked" />
			</ChatList>
		</section>
	);
}
