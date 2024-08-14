import { BlockedChat, ChatProps, Message, Notice } from '@softeer/common/components';
import { FunctionComponent, useCallback } from 'react';
import InViewLoadSection from 'src/components/common/InViewLoadSection.tsx';
import useAuth from 'src/hooks/useAuth.tsx';

export default function Chat({ type, team, sender, content }: ChatProps) {
	const { user: me } = useAuth();

	const render: FunctionComponent = useCallback(() => {
		switch (type) {
			case 'n':
				return <Notice>{content}</Notice>;
			case 'b':
				return <BlockedChat />;
			case 'm':
			default:
				return (
					<Message sender={sender} team={team} isMyMessage={me?.id === sender}>
						{content}
					</Message>
				);
		}
	}, [type, sender, content]);

	return <InViewLoadSection className="min-h-[30px]" component={render} />;
}
