import { PropsWithChildren } from 'react';
import { MessageChatProps } from 'src/components/chat/index.ts';
import { Category } from 'src/types/category.ts';
import { cn } from 'src/utils/index.ts';

interface MessageProps extends Pick<MessageChatProps, 'sender' | 'team'> {
	isMyMessage?: boolean;
}

const TYPES: Record<Category, { casper: string; textColor: string }> = {
	pet: { casper: '/casper/yellow.svg', textColor: 'text-cream-600' },
	leisure: { casper: '/casper/khaki.svg', textColor: 'text-khaki-400' },
	travel: { casper: '/casper/orange.svg', textColor: 'text-orange-500' },
	place: { casper: '/casper/white.svg', textColor: 'text-gray-300' },
};

export default function Message({
	sender,
	team,
	isMyMessage = false,
	children,
}: PropsWithChildren<MessageProps>) {
	const { casper, textColor } = TYPES[team];

	return (
		<div className="flex w-full items-center gap-12">
			<div className="flex min-w-[180px] max-w-[180px] items-center gap-3">
				<img src={casper} className="h-8 w-11" alt="캐스퍼" />
				<p className={cn(textColor, 'text-body-3 truncate font-medium')}>익명 {sender} </p>
				{isMyMessage && <p className={cn(textColor, 'text-body-3 font-medium')}>(나)</p>}
			</div>
			<p className={`text-body-3 truncate ${isMyMessage && 'font-medium'}`}>{children}</p>
		</div>
	);
}
