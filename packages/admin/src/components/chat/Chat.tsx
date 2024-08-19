import { BlockedChat, ChatProps, Message, Notice } from '@softeer/common/components';
import { FunctionComponent, useCallback } from 'react';

export default function Chat({ type, team, sender, content }: ChatProps) {
	const Render: FunctionComponent = useCallback(() => {
		switch (type) {
			case 'n':
				return <Notice>{content}</Notice>;
			case 'b':
				return <BlockedChat />;
			case 'm':
			default:
				return (
					<Message sender={sender} team={team} isMyMessage={false}>
						{content}
					</Message>
				);
		}
	}, [type, sender, content]);

	return <Render />;
}
