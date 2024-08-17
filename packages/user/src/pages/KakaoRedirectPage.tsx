import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import useTokenStorage from 'src/hooks/storage/useTokenStorage.ts';
import useUserStorage from 'src/hooks/storage/useUserStorage.ts';
import { socketManager } from 'src/services/socket.ts';
import CustomError from 'src/utils/error.ts';

export default function KakaoRedirectPage() {
	const [, setUser] = useUserStorage();
	const [, setToken] = useTokenStorage();
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	const accessToken = searchParams.get('accessToken');
	const userId = searchParams.get('userId');
	const userName = searchParams.get('userName') ?? '캐스퍼';

	useEffect(() => {
		if (!accessToken || !userId) {
			throw new CustomError('로그인 동작 중 정상적으로 유저 정보가 전달되지 않았습니다.', 400);
		}
		setUser({ id: userId, name: userName });
		setToken(accessToken);

		socketManager.reconnectSocketClient(accessToken);

		navigate(RoutePaths.Event, { replace: true });
	}, [accessToken, userId, userName]);

	return null;
}
