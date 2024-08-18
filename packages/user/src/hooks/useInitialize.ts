import { useEffect } from 'react';
import serverTeamEnumToClient from 'src/constants/serverMapping.ts';
import useGetUserInfo from 'src/hooks/query/useGetUserInfo.ts';
import useAuth from 'src/hooks/useAuth.ts';
import type { User } from 'src/types/user.d.ts';

export default function useInitialize() {
	const { user, setAuthData } = useAuth();
	const { userInfo } = useGetUserInfo();

	useEffect(() => {
		if (userInfo) {
			const { userName: name, userId: id, team, url: encryptedUserId } = userInfo;

			const type = team ? serverTeamEnumToClient[team] : null;

			const userData: User = { id, name, type, encryptedUserId };
			setAuthData({ userData });
			/**
			 * 유저 정보를 사용하는 컴포넌트 강제 리렌더링을 위함
			 */
			if (user?.encryptedUserId !== userData.encryptedUserId) {
				window.location.reload();
			}
		}
	}, [userInfo]);
}
