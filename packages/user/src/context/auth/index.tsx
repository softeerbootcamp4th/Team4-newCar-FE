import { PropsWithChildren, useCallback, useMemo } from 'react';
import AuthContext from 'src/context/auth/AuthContext.ts';
import useTokenStorage from 'src/hooks/storage/useTokenStorage.ts';
import useUserStorage from 'src/hooks/storage/useUserStorage.ts';
import type { User } from 'src/types/user.d.ts';

export default function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser, clearUser] = useUserStorage();
	const [,, clearToken] = useTokenStorage();

	const setAuthData = async ({ userData }: { userData: User }) => {
		setUser(userData);
	};

	const clearAuthData = useCallback(() => {
		clearUser();
		clearToken();
		window.location.reload();
	}, []);

	const authContextValue = useMemo(
		() => ({ isAuthenticated: Boolean(user), user, setAuthData, clearAuthData }),
		[user],
	);

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
