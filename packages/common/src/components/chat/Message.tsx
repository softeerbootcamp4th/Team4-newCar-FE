import { PropsWithChildren } from 'react';
import { Category } from 'src/types/category.ts';
import { ChatUser } from 'src/types/chatUser.ts';
import { cn } from 'src/utils/index.ts';

interface MessageProps {
	user: ChatUser;
	isMyMessage?: boolean;
}

const TYPES: Record<Category, { casper: string; textColor: string }> = {
	pet: { casper: '/casper/yellow.svg', textColor: 'text-cream-600' },
	leisure: { casper: '/casper/khaki.svg', textColor: 'text-khaki-400' },
	travel: { casper: '/casper/orange.svg', textColor: 'text-orange-500' },
	place: { casper: '/casper/white.svg', textColor: 'text-gray-300' },
};

export default function Message({
	user,
	isMyMessage = false,
	children,
}: PropsWithChildren<MessageProps>) {
	const { id, category } = user;
	const { casper, textColor } = TYPES[category];

	return (
		<div className="flex w-full items-center gap-12">
			<div className="flex w-[180px] items-center gap-3">
				<img src={casper} style={{ width: '40px' }} alt="캐스퍼" />
				<p className={cn(textColor, 'text-body-3 truncate font-medium')}>익명 {id} </p>
				{!isMyMessage && <p className={cn(textColor, 'text-body-3 font-medium')}>(나)</p>}
			</div>
			<p className={`text-body-3 truncate ${isMyMessage && 'font-medium'}`}>{children}</p>
		</div>
	);
}
