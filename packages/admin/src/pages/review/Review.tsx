import { useEffect } from 'react';
import RealTimeChatting from 'src/components/chat/RealTimeChatting.tsx';
import useSocket from 'src/hooks/socket/index.ts';

function Review() {
	const { chatSocket } = useSocket();
	useEffect(() => {
		if (chatSocket.isValid) {
			chatSocket.onRequestMessageHistory();
		}
	}, [chatSocket.isValid]);
	return <RealTimeChatting chatSocket={chatSocket} />;
}
export default Review;
