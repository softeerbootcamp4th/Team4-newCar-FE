import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import useTokenStorage from 'src/hooks/storage/useTokenStorage.ts';
import socketManager from 'src/services/socket.ts';
import CustomError from 'src/utils/error.ts';

export default function KakaoRedirectPage() {
	const [, setToken] = useTokenStorage();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const accessToken = searchParams.get('accessToken');

	useEffect(() => {
		if (!accessToken) {
			throw new CustomError('로그인이 성공적으로 완료되지 않았습니다.', 400);
		}
		socketManager.reconnectSocketClient(accessToken);
		setToken(accessToken);
		navigate(RoutePaths.Event, { replace: true });
	}, [accessToken]);

	return null;
}
