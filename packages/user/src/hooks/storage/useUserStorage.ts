import STORAGE_KEYS from 'src/constants/storageKey.ts';
import useStorage from 'src/hooks/storage/index.ts';
import type { User } from 'src/types/user.d.ts';

const useUserStorage = () => useStorage<User | null>(STORAGE_KEYS.USER, null);

export default useUserStorage;
