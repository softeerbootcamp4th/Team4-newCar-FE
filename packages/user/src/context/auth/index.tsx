import { PropsWithChildren, useCallback, useMemo } from 'react';
import AuthContext from 'src/context/auth/AuthContext.ts';
import useTokenStorage from 'src/hooks/storage/useTokenStorage.ts';
import useUserStorage from 'src/hooks/storage/useUserStorage.ts';
import type { User } from 'src/types/user.d.ts';

export default function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser, clearUser] = useUserStorage();
	const [,setToken, clearToken] = useTokenStorage();

	const setAuthData = useCallback(
		({ userData, accessToken }: { userData: User ;accessToken:string }) => {
		setUser(userData);
		setToken(accessToken);
	}, [setUser, setToken]);

	const clearAuthData = useCallback(() => {
		clearUser();
		clearToken();
		window.location.reload();
	}, [clearUser, clearToken]);

	const authContext = useMemo(() => ({
		isAuthenticated: Boolean(user),
		user,
		setAuthData,
		clearAuthData,
	}), [user]);

	return <AuthContext.Provider value={authContext}>{children}
        </AuthContext.Provider>;
}
