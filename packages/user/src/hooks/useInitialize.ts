import { useLayoutEffect } from 'react';
import useGetUserInfo from 'src/hooks/query/useGetUserInfo.ts';
import useAuth from 'src/hooks/useAuth.ts';

export default function useInitialize() {
	const { user, setAuthData } = useAuth();
	const { userInfo, ...options } = useGetUserInfo();

	useLayoutEffect(() => {
		if (userInfo) {
			setAuthData({ userData: userInfo });
		}
	}, [userInfo]);

	return { user, ...options };
}
