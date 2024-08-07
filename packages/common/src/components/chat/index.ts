import { ChatUser } from 'src/types/chatUser.ts';

type NoticeChatProps = {
	type: 'notice';
	message: string;
	user?: never;
};

type MessageChatProps = {
	type: 'message';
	user: ChatUser;
	message: string;
};

type BlockedChatProps = {
	type: 'blocked';
	user?: never;
	message?: never;
};

export type ChatProps = NoticeChatProps | MessageChatProps | BlockedChatProps;

export { default as BlockedChat } from './BlockedChat.tsx';
export { default as ChatList } from './ChatList.tsx';
export { default as Message } from './Message.tsx';
export { default as Notice } from './Notice.tsx';
