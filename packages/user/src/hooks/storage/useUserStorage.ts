import useStorage from 'src/hooks/storage';
import { User } from 'src/types/user';

const USER_STORAGE_KEY = 'user';

const useUserStorage = () =>
	useStorage<User | null>(USER_STORAGE_KEY, null);

export default useUserStorage;
