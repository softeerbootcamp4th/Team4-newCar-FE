import { Category, SocketCategory } from 'src/types/category.ts';

export const CHAT_SOCKET_ENDPOINTS = {
	SUBSCRIBE: '/topic/chat',
	PUBLISH: '/app/chat.sendMessage',
	BLOCK: '/topic/block',
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
