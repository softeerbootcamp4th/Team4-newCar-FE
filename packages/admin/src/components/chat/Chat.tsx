import { BlockedChat, ChatProps, Message, Notice } from '@softeer/common/components';
import { FunctionComponent, useCallback } from 'react';

export default function Chat({ type, team, sender, content }: ChatProps) {
	const handleHide = () => {
		console.log('hide!');
	};
	const Render: FunctionComponent = useCallback(() => {
		switch (type) {
			case 'n':
				return <Notice>{content}</Notice>;
			case 'b':
				return <BlockedChat />;
			case 'm':
			default:
				return (
					<Message
						sender={sender}
						team={team}
						isMyMessage={false}
						hideAction={() => {
							handleHide();
						}}
					>
						<div className="text-cream-100 flex mi-w-fit flex-1">{content}</div>
					</Message>
				);
		}
	}, [type, sender, content]);

	return <Render />;
}
