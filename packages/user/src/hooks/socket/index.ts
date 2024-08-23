import { useLayoutEffect } from 'react';
import useAuth from 'src/hooks/useAuth.ts';
import socketManager from 'src/services/socket.ts';
import useChatSocket from './useChatSocket.ts';
import useRacingSocket from './useRacingSocket.ts';

export type UseSocketReturnType = ReturnType<typeof useSocket>;

export default function useSocket() {
	const { token } = useAuth();
	const chatSocket = useChatSocket();
	const racingSocket = useRacingSocket();

	const { onReceiveMessage, onReceiveChatList, ...chatSocketProps } = chatSocket;
	const { onReceiveStatus, ...racingSocketProps } = racingSocket;

	useLayoutEffect(() => {
		const connetSocket = async () => {
			await socketManager.connectSocketClient({
				token,
				onReceiveChatList,
				onReceiveMessage,
				onReceiveStatus,
			});
		};

		connetSocket();
	}, [socketManager, token]);

	return { chatSocket: chatSocketProps, racingSocket: racingSocketProps };
}
