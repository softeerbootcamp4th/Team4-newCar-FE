import { CHAT_SOCKET_ENDPOINTS, RACING_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import useSocketHandlers from 'src/hooks/socket/useSocketHandlers.ts';
import useAuth from 'src/hooks/useAuth.tsx';
import socketClient from 'src/services/socket.ts';
import CustomError from 'src/utils/error.ts';

export default function KakaoRedirectPage() {
	const { onReceiveMessage, onReceiveStatus } = useSocketHandlers();
	const { setAuthData } = useAuth();

	const [searchParams] = useSearchParams();

	const accessToken = searchParams.get('accessToken');
	const userId = searchParams.get('userId');
	const userName = searchParams.get('userName') ?? '캐스퍼';

	useEffect(() => {
		if (!accessToken || !userId) {
			throw new CustomError('로그인 동작 중 정상적으로 유저 정보가 전달되지 않았습니다.', 400);
		}

		setAuthData({ userData: { id: userId, name: userName }, accessToken });

		if (socketClient.isConnected) {
			socketClient.reconnect((isSuccess) => {
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

		window.history.replaceState(null, '', RoutePaths.Home);
		window.history.go(-1);
	}, [accessToken, userId, userName, setAuthData]);

	return null;
}
