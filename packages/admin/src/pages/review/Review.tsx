import RealTimeChatting from 'src/components/chat/RealTimeChatting.tsx';
import useSocket from 'src/hooks/socket/index.ts';

function Review() {
	const { chatSocket } = useSocket();
	return <RealTimeChatting chatSocket={chatSocket} />;
}
export default Review;
