import { CHAT_SOCKET_ENDPOINTS, RACING_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { useEffect } from 'react';
import socketClient from 'src/services/socket.ts';
import CustomError from 'src/utils/error.ts';
import useChatSocket from './useChatSocket.ts';
import useRacingSocket from './useRacingSocket.ts';

export type UseSocketReturnType = ReturnType<typeof useSocket>;

export default function useSocket() {
	const chatSocket = useChatSocket();

	const { onReceiveMessage, ...chatSocketProps } = chatSocket;

	const racingSocket = useRacingSocket();
	const { onReceiveStatus, ...racingSocketProps } = racingSocket;

	useEffect(() => {
		if (!socketClient.isConnected) {
			socketClient.connect((isSuccess) => {
				if (isSuccess) {
					socketClient.subscribe({
						destination: CHAT_SOCKET_ENDPOINTS.SUBSCRIBE,
						callback: onReceiveMessage,
					});
					socketClient.subscribe({
						destination: RACING_SOCKET_ENDPOINTS.SUBSCRIBE,
						callback: onReceiveStatus,
					});
				} else {
					throw new CustomError('서버에서 데이터를 불러오는 데 실패했습니다.', 500);
				}
			});
		}
	}, [socketClient, onReceiveMessage, onReceiveStatus]);

	return { chatSocket: chatSocketProps, racingSocket: racingSocketProps };
}
