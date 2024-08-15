export const CHAT_SOCKET_ENDPOINTS = {
	SUBSCRIBE: '/topic/chat',
	PUBLISH: '/app/chat.sendMessage',
} as const;

export const RACING_SOCKET_ENDPOINTS = {
	SUBSCRIBE: '/topic/game',
	PUBLISH: '/app/game.sendGameData',
} as const;
