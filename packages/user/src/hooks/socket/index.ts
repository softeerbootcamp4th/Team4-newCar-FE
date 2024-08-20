import { useLayoutEffect, useRef } from 'react';
import useAuth from 'src/hooks/useAuth.ts';
import socketManager from 'src/services/socket.ts';
import useChatSocket from './useChatSocket.ts';
import useRacingSocket from './useRacingSocket.ts';

export default function useSocket() {
	const { token } = useAuth();
	const chatSocket = useChatSocket();
	const racingSocket = useRacingSocket();

	const { onReceiveMessage, onReceiveBlock, ...chatSocketProps } = chatSocket;
	const { onReceiveStatus, ...racingSocketProps } = racingSocket;

	const isSocketInitialized = useRef(false);

	useLayoutEffect(() => {
		if (!isSocketInitialized.current) {
			socketManager.connectSocketClient({
				token,
				onReceiveMessage,
				onReceiveStatus,
				onReceiveBlock,
			});
			isSocketInitialized.current = true;
		}
	}, [token, onReceiveMessage, onReceiveStatus, onReceiveBlock]);

	return { chatSocket: chatSocketProps, racingSocket: racingSocketProps };
}
