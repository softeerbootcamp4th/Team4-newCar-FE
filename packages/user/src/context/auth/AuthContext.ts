import { createContext } from 'react';
import type { User } from 'src/types/user.d.ts';

interface AuthContextType {
	isAuthenticated: boolean;
	token: string | null;
	user: User | null;
	setAuthData: ({
		userData,
		accessToken,
	}: Partial<{ userData: User; accessToken: string }>) => void;
	clearAuthData: () => void;
}

const initialAuthContext = {
	isAuthenticated: false,
	user: null,
	token: null,
	setAuthData: async () => {},
	clearAuthData: () => {},
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

export default AuthContext;
