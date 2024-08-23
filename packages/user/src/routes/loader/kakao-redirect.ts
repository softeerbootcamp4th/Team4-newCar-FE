import { Cookie } from '@softeer/common/utils';
import { LoaderFunction, redirect } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import STORAGE_KEYS from 'src/constants/storageKey.ts';
import CustomError from 'src/utils/error.ts';

const kakaoRedirectLoader: LoaderFunction = ({ request }) => {
	const accessToken = new URL(request.url).searchParams.get('accessToken');

	if (!accessToken) {
		throw new CustomError('로그인이 성공적으로 완료되지 않았습니다.', 400);
	}

	Cookie.setCookie(STORAGE_KEYS.TOKEN, accessToken);

	return redirect(RoutePaths.Event);
};

export default kakaoRedirectLoader;
