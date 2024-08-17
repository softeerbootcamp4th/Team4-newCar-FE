import useChatSocket from './useChatSocket.ts';
import useRacingSocket from './useRacingSocket.ts';

export default function useSocketHandlers() {
	const chatSocket = useChatSocket();
	const racingSocket = useRacingSocket();

	return {
		onReceiveMessage: chatSocket.onReceiveMessage,
		onReceiveStatus: racingSocket.onReceiveStatus,
	};
}
