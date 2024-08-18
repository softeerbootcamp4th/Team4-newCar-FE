import { ServerCategoryEnum } from '@softeer/common/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import useAuth from 'src/hooks/useAuth.ts';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';
import CustomError from 'src/utils/error.ts';

export type UserResponse = {
	userId: string;
	userName: string;
	team: ServerCategoryEnum | null;
	url: string | null;
};

export default function useGetUserInfo() {
	const { isAuthenticated, token } = useAuth();

	const { data: userInfo, status } = useQuery<UserResponse>({
		queryKey: [QUERY_KEYS.USER_INFO, token],
		queryFn: () => http.get('/user-info'),
		enabled: isAuthenticated,
	});

	useEffect(() => {
		if (status === 'error') {
			throw new CustomError('유저 정보를 불러오는 중에 문제가 발생하였습니다.', 400);
		}
	}, [status]);

	return { userInfo };
}
