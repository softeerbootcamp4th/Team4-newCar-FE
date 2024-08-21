import { PropsWithChildren } from 'react';
import { MessageChatProps } from 'src/components/chat/index.ts';
import { SocketCategory } from 'src/types/category.ts';
import { cn } from 'src/utils/index.ts';

interface MessageProps extends Pick<MessageChatProps, 'sender' | 'team'> {
	isMyMessage?: boolean;
}

const TYPES: Record<SocketCategory | 'default', { casper: string; textColor: string }> = {
	default: { casper: '/casper/white.webp', textColor: 'text-neutral-200' },
	p: { casper: '/casper/yellow.webp', textColor: 'text-cream-600' },
	l: { casper: '/casper/khaki.webp', textColor: 'text-khaki-400' },
	t: { casper: '/casper/orange.webp', textColor: 'text-orange-500' },
	s: { casper: '/casper/white.webp', textColor: 'text-gray-300' },
};

export default function Message({
	sender,
	team,
	isMyMessage = false,
	children,
}: PropsWithChildren<MessageProps>) {
	const category = ['P', 'T', 'L', 'S'].includes(team)
	? (team.toLowerCase() as SocketCategory)
	: 'default';

	const { casper, textColor } = TYPES[category];

	return (
		<div className="flex w-full items-center gap-12">
			<div className="flex min-w-[180px] max-w-[180px] items-center gap-3">
				<img src={casper} className="h-8 w-11" alt="캐스퍼" />
				<p className={cn(textColor, 'text-body-3 truncate font-medium')}>익명 {sender} </p>
				{isMyMessage && <p className={cn(textColor, 'text-body-3 font-medium')}>(나)</p>}
			</div>
			<p
				className={`text-body-3 flex flex-1 flex-row justify-between truncate ${isMyMessage && 'font-medium'}`}
			>
				{children}
			</p>
		</div>
	);
}
