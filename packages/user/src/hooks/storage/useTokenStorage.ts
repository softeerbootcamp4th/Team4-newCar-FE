import STORAGE_KEYS from 'src/constants/storageKey.ts';
import useStorage from 'src/hooks/storage/index.ts';

const useTokenStorage = () => useStorage<string | null>(STORAGE_KEYS.TOKEN, null);

export default useTokenStorage;
