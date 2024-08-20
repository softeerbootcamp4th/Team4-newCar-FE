import { BlockedChat, ChatProps, Message, Notice } from '@softeer/common/components';
import { FunctionComponent, useCallback } from 'react';
import { Button } from '../ui/button.tsx';

type AdminChatProps = {
	onBlock: (id: string) => void
} & ChatProps;

export default function Chat({ type, team, sender, content, id, onBlock }: AdminChatProps) {
	const handleHide = () => {
		onBlock(id);
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
					>
						<div className="flex flex-row flex-1 w-full justify-between">
							<div className="text-cream-100 flex mi-w-fit flex-1">{content}</div>
							<Button onClick={handleHide}>hide</Button>
						</div>
					</Message>
				);
		}
	}, [type, sender, content]);

	return <Render />;
}
