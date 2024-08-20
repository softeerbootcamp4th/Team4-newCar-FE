import { useEffect } from 'react';
import useAuth from 'src/hooks/useAuth.ts';
import socketManager from 'src/services/socket.ts';
import useChatSocket from './useChatSocket.ts';
import useRacingSocket from './useRacingSocket.ts';

export type UseSocketReturnType = ReturnType<typeof useSocket>;

export default function useSocket() {
	const { token } = useAuth();
	const chatSocket = useChatSocket();

	const { onReceiveMessage, onReceiveBlock, ...chatSocketProps } = chatSocket;

	const racingSocket = useRacingSocket();
	const { onReceiveStatus, ...racingSocketProps } = racingSocket;

	useEffect(() => {
		socketManager.connectSocketClient({ token, onReceiveMessage, onReceiveStatus, onReceiveBlock });
	}, [socketManager, token]);

	return { chatSocket: chatSocketProps, racingSocket: racingSocketProps };
}
