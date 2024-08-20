import { ACCESS_TOKEN_KEY } from '@softeer/common/constants';
import { Cookie } from '@softeer/common/utils';
import { defer } from 'react-router-dom';
import { userInfoQueryOptions } from 'src/hooks/query/useGetUserInfo.ts';
import { queryClient } from 'src/libs/query/index.tsx';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export default async function layoutLoader() {
	const token = Cookie.getCookie<string | null>(ACCESS_TOKEN_KEY);

	if (token) {
		await queryClient.prefetchQuery(userInfoQueryOptions(token));

		const userStatus = queryClient.getQueryState([QUERY_KEYS.USER_INFO, token]);

		if (userStatus?.status === 'error') {
			Cookie.clearCookie(ACCESS_TOKEN_KEY);
		}

		return defer({ userStatus });
	}
}
