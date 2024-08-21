import { useLayoutEffect, useRef } from 'react';
import useAuth from 'src/hooks/useAuth.ts';
import socketManager from 'src/services/socket.ts';
import useChatSocket from './useChatSocket.ts';
import useRacingSocket from './useRacingSocket.ts';

export type UseSocketReturnType = ReturnType<typeof useSocket>;

export default function useSocket() {
	const { token } = useAuth();
	const chatSocket = useChatSocket();
	const racingSocket = useRacingSocket();

	const { onReceiveMessage, onReceiveChatList, onReceiveBlock, ...chatSocketProps } = chatSocket;
	const { onReceiveStatus, ...racingSocketProps } = racingSocket;

	const isSocketInitialized = useRef(false);

	useLayoutEffect(() => {
		const connetSocket = async () => {
			if (!isSocketInitialized.current) {
				await socketManager.connectSocketClient({
					token,
					onReceiveChatList,
					onReceiveMessage,
					onReceiveStatus,
					onReceiveBlock,
				});
				isSocketInitialized.current = true;
			}
		};

		connetSocket();
	}, [token, onReceiveMessage, onReceiveStatus, onReceiveBlock]);

	return { chatSocket: chatSocketProps, racingSocket: racingSocketProps };
}
