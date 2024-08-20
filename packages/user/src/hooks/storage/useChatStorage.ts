import { ChatProps } from '@softeer/common/components';
import STORAGE_KEYS from 'src/constants/storageKey.ts';
import useStorage from 'src/hooks/storage/index.ts';

const useChatListStorage = () => useStorage<ChatProps[]>(STORAGE_KEYS.CHAT_LIST, []);

export default useChatListStorage;
