import { CHAT_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { useEffect } from 'react';
import socketClient from 'src/services/socket.ts';
import useChatSocket, { UseChatSocketReturnType } from './useChatSocket.ts';
import useRacingSocket, { UseRacingSocketReturnType } from './useRacingSocket.ts';

export type UseSocketType = {
	chatSocket: UseChatSocketReturnType;
	racingSocket:UseRacingSocketReturnType;
};
export default function useSocket() {
	const chatSocket = useChatSocket();
	const { onReceiveMessage } = chatSocket;

	const racingSocket = useRacingSocket();

	useEffect(() => {
		socketClient.connect((isConnected) => {
			if (isConnected) {
				socketClient.subscribe({
					destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE,
					callback: onReceiveMessage,
				});
			}
		});
		return () => socketClient.disconnect();
	}, [socketClient]);

	return { chatSocket, racingSocket };
}
