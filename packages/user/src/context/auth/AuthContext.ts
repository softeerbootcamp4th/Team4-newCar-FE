import { createContext } from 'react';
import { User } from 'src/types/user';

interface AuthContextType {
	isAuthenticated:boolean
  user: User | null;
  login: ({ userData }: { userData: User }) => Promise<void>;
  logout: () => void;
}

const initialAuthContext = {
	isAuthenticated: false,
	user: null,
	login: async () => {},
	logout: () => {},
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

export default AuthContext;
