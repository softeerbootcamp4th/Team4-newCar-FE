import { BlockedChat, Message, Notice } from '@softeer/common/components';
import { FunctionComponent, useCallback } from 'react';
import InViewLoadSection from 'src/components/common/InViewLoadSection.tsx';
import { ChatProps } from 'src/components/event/chatting/index.tsx';
import useAuth from 'src/hooks/useAuth.tsx';

export default function Chat({ type, team, sender: senderId, content: message }: ChatProps) {
	const { user: me } = useAuth();

	const render: FunctionComponent = useCallback(() => {
		switch (type) {
			case 'notice':
				return <Notice>{message}</Notice>;
			case 'blocked':
				return <BlockedChat />;
			case 'message':
			default:
				return (
					<Message user={{ id: senderId, category: team }} isMyMessage={me?.id === senderId}>
						{message}
					</Message>
				);
		}
	}, [type, senderId, message]);

	return <InViewLoadSection className="min-h-[30px]" component={render} />;
}
