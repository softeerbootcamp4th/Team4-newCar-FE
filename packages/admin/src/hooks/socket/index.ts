import { ACCESS_TOKEN_KEY } from '@softeer/common/constants';
import { Cookie } from '@softeer/common/utils';
import { useEffect } from 'react';
import socketManager from 'src/services/socket.ts';
import useChatSocket from './useChatSocket.ts';

export type UseSocketReturnType = ReturnType<typeof useSocket>;

export default function useSocket() {
	const accessToken = Cookie.getCookie<string>(ACCESS_TOKEN_KEY) ?? '';
	const chatSocket = useChatSocket();
	console.log(chatSocket)
	const { onReceiveMessage, ...chatSocketProps } = chatSocket;
	useEffect(() => {
		if(accessToken !== ""){
			socketManager.connectSocketClient({ token: accessToken, onReceiveMessage });
		}
	}, [socketManager, accessToken]);

	return { chatSocket: chatSocketProps };
}
