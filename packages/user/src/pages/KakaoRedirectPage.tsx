import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import useAuth from 'src/hooks/useAuth.tsx';
import CustomError from 'src/utils/error.ts';

export default function KakaoRedirectPage() {
  const { setAuthData } = useAuth();
  const [searchParams] = useSearchParams();

  const accessToken = searchParams.get('accessToken');
  const userId = searchParams.get('userId');
  const userName = searchParams.get('userName') ?? '캐스퍼';

  useEffect(() => {
    if (!accessToken || !userId) {
      throw new CustomError('정상적으로 유저 정보가 전달되지 않았습니다.', 400);
    }

    setAuthData({ userData: { id: userId, name: userName }, accessToken });
    window.history.replaceState(null, '', RoutePaths.Home);
    window.history.go(-1);
  }, [accessToken, userId, userName, setAuthData]);

  return null;
}
