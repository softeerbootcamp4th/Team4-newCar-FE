import { Category } from 'src/types/category.ts';

type NoticeChatProps = {
	id: string;
	type: 'notice';
	content: string;
	sender?: never;
	team?: never;
};

export type MessageChatProps = {
	id: string;
	type: 'message';
	sender: number;
	content: string;
	team: Category;
};

type BlockedChatProps = {
	id: string;
	type: 'blocked';
	sender?: never;
	content?: never;
	team?: never;
};

export type ChatProps = NoticeChatProps | MessageChatProps | BlockedChatProps;

export { default as BlockedChat } from './BlockedChat.tsx';
export { default as ChatList } from './ChatList.tsx';
export { default as Message } from './Message.tsx';
export { default as Notice } from './Notice.tsx';
