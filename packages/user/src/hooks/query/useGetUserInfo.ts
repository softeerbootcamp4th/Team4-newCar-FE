import { ServerCategoryEnum } from '@softeer/common/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import serverTeamEnumToClient from 'src/constants/serverMapping.ts';
import useAuth from 'src/hooks/useAuth.ts';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';
import { User } from 'src/types/user.js';
import CustomError from 'src/utils/error.ts';

export interface UserInfoResponse {
	userId: string;
	userName: string;
	team: ServerCategoryEnum | null;
	url: string | null;
}

export default function useGetUserInfo() {
	const { token, clearAuthData } = useAuth();

	const { data: userInfo, status, ...props } = useQuery<User>(userInfoQueryOptions(token));

	useEffect(() => {
		if (status === 'error') {
			clearAuthData();
			throw new CustomError('유저 정보를 불러오는 중에 문제가 발생하였습니다.', 400);
		}
	}, [status]);

	return { userInfo, ...props };
}

export const userInfoQueryOptions = (token: string | null) => ({
	queryKey: [QUERY_KEYS.USER_INFO, token],
	queryFn: async () => {
		const {
			userName: name,
			userId: id,
			team,
			url: encryptedUserId,
		} = await http.get<UserInfoResponse>('/user-info');

		const type = team ? serverTeamEnumToClient[team] : null;

		const userData: User = { id, name, type, encryptedUserId };

		return userData;
	},
	enabled: Boolean(token),
});
