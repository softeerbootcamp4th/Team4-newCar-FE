import { SocketCategory } from 'src/types/category.ts';

export type NoticeChatProps = {
	id: string;
	type: 'n';
	content: string;
	sender?: never;
	team?: never;
};

export type MessageChatProps = {
	id: string;
	type: 'm';
	sender: string;
	content: string;
	team: SocketCategory;
};

type BlockedChatProps = {
	id: string;
	type: 'b';
	sender?: never;
	content?: never;
	team?: never;
};

export type ChatProps = NoticeChatProps | MessageChatProps | BlockedChatProps;

export { default as BlockedChat } from './BlockedChat.tsx';
export { default as ChatList } from './ChatList.tsx';
export { default as Message } from './Message.tsx';
export { default as Notice } from './Notice.tsx';
