import { ServerCategoryEnum } from '@softeer/common/types';
import { useQuery } from '@tanstack/react-query';
import useAuth from 'src/hooks/useAuth.ts';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type UserResponse = {
	userId: string;
	userName: string;
	team: ServerCategoryEnum | null;
	url: string | null;
};

export default function useGetUserInfo() {
	const { isAuthenticated } = useAuth();

	const { data: userInfo } = useQuery<UserResponse>({
		queryKey: [QUERY_KEYS.USER_INFO],
		queryFn: () => http.get('/user-info'),
		enabled: isAuthenticated,
	});

	return { userInfo };
}
