import STORAGE_KEYS from 'src/constants/storageKey';
import useStorage from 'src/hooks/storage';
import { User } from 'src/types/user';

const useUserStorage = () => useStorage<User | null>(STORAGE_KEYS.USER, null);

export default useUserStorage;
