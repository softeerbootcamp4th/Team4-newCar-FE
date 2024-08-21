import { Category, SocketCategory } from 'src/types/category.ts';

export const CHAT_SOCKET_ENDPOINTS = {
	SUBSCRIBE_MESSAGE: '/topic/chat',
	PUBLISH_CHAT: '/app/chat.sendMessage',
	SUBSCRIBE_BLOCK: '/topic/block',
	PUBLISH_BLOCK: '/app/chat.sendBlock',
	SUBSCRIBE_NOTICE: '/topic/notice',
	PUBLISH_NOTICE: '/app/chat.sendNotice',
	SUBSCRIBE_MESSAGE_HISTORY: '/user/queue/chatHistory',
	PUBLISH_MESSAGE_HISTORY: '/app/chat.getHistory',
	SUBSCRIBE_ERROR: '/user/queue/errors',
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
