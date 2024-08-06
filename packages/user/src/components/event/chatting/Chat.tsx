import { BlockedChat, ChatProps, Message, Notice } from '@softeer/common/components';
import useAuth from 'src/hooks/useAuth.tsx';

export default function Chat({ type, user, message }: ChatProps) {
	const { user: me } = useAuth();
	const isMyMessage = me?.id === user?.id;

	switch (type) {
		case 'notice':
			return <Notice>{message}</Notice>;
		case 'blocked':
			return <BlockedChat />;
		case 'message':
			return (
				<Message user={user} isMyMessage={isMyMessage}>
					{message}
				</Message>
			);
		default:
			return null;
	}
}
