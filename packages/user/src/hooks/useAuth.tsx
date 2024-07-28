import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath';
import useUserStorage from 'src/hooks/storage/useUserStorage';
import { User } from 'src/types/user';

const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }:PropsWithChildren) {
	const [user, setUser] = useUserStorage();

	const navigate = useNavigate();

	const login = async ({ userData }:{ userData:User }) => {
		setUser(userData);
		navigate(RoutePaths.Home, { replace: true });
	};

	const logout = () => {
		setUser(null);
		navigate(RoutePaths.Home, { replace: true });
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const authContextValue = useMemo(() => ({ user, login, logout }), [user]);

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuth };
