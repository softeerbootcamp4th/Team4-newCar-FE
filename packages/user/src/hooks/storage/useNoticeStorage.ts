import { NoticeChatProps } from '@softeer/common/components';
import STORAGE_KEYS from 'src/constants/storageKey.ts';
import useStorage from 'src/hooks/storage/index.ts';

const useChatNoticeStorage = () => useStorage<NoticeChatProps>(STORAGE_KEYS.CHAT_NOTICE, { type: 'n', id: 'empty-notice', content: '오늘의 공지사항이 없습니다.' });

export default useChatNoticeStorage;
