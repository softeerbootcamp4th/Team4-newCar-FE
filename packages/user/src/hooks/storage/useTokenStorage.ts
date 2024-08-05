import STORAGE_KEYS from 'src/constants/storageKey';
import useStorage from 'src/hooks/storage';

const useTokenStorage = () => useStorage<string | null>(STORAGE_KEYS.TOKEN, null);

export default useTokenStorage;
