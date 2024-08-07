import { BlockedChat, ChatProps, Message, Notice } from '@softeer/common/components';
import { FunctionComponent, useCallback } from 'react';
import InViewLoadSection from 'src/components/common/InViewLoadSection.tsx';
import useAuth from 'src/hooks/useAuth.tsx';

export default function Chat({ type, user, message }: ChatProps) {
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
					<Message user={user} isMyMessage={me?.id === user.id}>
						{message}
					</Message>
				);
		}
	}, [type, user, message]);

	return <InViewLoadSection className="min-h-[30px]" component={render} />;
}
