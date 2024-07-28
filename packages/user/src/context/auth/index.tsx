import { PropsWithChildren, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath';
import AuthContext from 'src/context/auth/AuthContext';
import useUserStorage from 'src/hooks/storage/useUserStorage';
import { User } from 'src/types/user';

export default function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser] = useUserStorage();

	const navigate = useNavigate();

	const login = async ({ userData }: { userData: User }) => {
		setUser(userData);
		navigate(RoutePaths.Home, { replace: true });
	};

	const logout = () => {
		setUser(null);
		navigate(RoutePaths.Home, { replace: true });
	};

	const authContextValue = useMemo(
		() => ({ isAuthenticated: Boolean(user), user, login, logout }),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[user],
	);

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
