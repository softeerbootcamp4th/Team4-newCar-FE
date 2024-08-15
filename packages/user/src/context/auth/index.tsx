import { PropsWithChildren, useMemo } from 'react';
import AuthContext from 'src/context/auth/AuthContext.ts';
import useUserStorage from 'src/hooks/storage/useUserStorage.ts';
import type { User } from 'src/types/user.d.ts';

export default function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser, clearUser] = useUserStorage();

	const setAuthData = async ({ userData }: { userData: User }) => {
		setUser(userData);
	};

	const clearAuthData = () => {
		clearUser();
	};

	const authContextValue = useMemo(
		() => ({ isAuthenticated: Boolean(user), user, setAuthData, clearAuthData }),
		[user],
	);

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
