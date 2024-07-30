import { useContext } from 'react';
import AuthContext from 'src/context/auth/AuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
