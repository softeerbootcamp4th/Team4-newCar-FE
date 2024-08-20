import { Category, SocketCategory } from 'src/types/category.ts';

export const CHAT_SOCKET_ENDPOINTS = {
	SUBSCRIBE_CHAT: '/topic/chat',
	PUBLISH_CHAT: '/app/chat.sendMessage',
	SUBSCRIBE_BLOCK: '/topic/block',
	PUBLISH_BLOCK: '/app/chat.sendBlock',
	SUBSCRIBE_NOTICE: '/topic/notice',
	PUBLISH_NOTICE: '/app/chat.sendNotice',
	SUBSCRIBE: '/topic/chat',
	PUBLISH: '/app/chat.sendMessage',
	BLOCK: '/topic/block',
	NOTICE: '/app/chat.sendNotice',
	SUBSCRIBE_CHAT_LIST: '/user/queue/chatHistory',
	PUBLISH_CHAT_LIST: '/app/chat.getHistory',
} as const;

export const RACING_SOCKET_ENDPOINTS = {
	SUBSCRIBE: '/topic/game',
	PUBLISH: '/app/game.sendGameData',
} as const;

/**
 * Mapping between Category and SocketCategory
 */
export const categoryToSocketCategory: Record<Category, SocketCategory> = {
	pet: 'p',
	travel: 't',
	place: 's',
	leisure: 'l',
};

export const socketCategoryToCategory: Record<SocketCategory, Category> = {
	p: 'pet',
	t: 'travel',
	s: 'place',
	l: 'leisure',
};
