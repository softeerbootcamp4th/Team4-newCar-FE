import { createContext } from 'react';
import type { User } from 'src/types/user.d.ts';

interface AuthContextType {
	isAuthenticated: boolean;
	user: User | null;
	setAuthData: ({ userData, accessToken }: { userData: User;accessToken:string }) => void
	clearAuthData: () => void;
}

const initialAuthContext = {
	isAuthenticated: false,
	user: null,
	setAuthData: async () => {},
	clearAuthData: () => {},
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

export default AuthContext;
