import useStorage from 'src/hooks/storage';
import { User } from 'src/types/user';

const USER_STORAGE_KEY = 'user';

const useUserStorage = (initialVal: User | null) =>
	useStorage<User | null>(USER_STORAGE_KEY, initialVal);

export default useUserStorage;
