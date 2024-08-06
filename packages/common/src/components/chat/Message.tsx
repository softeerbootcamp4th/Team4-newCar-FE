import { PropsWithChildren } from 'react';
import { Category } from 'src/types/category.ts';
import { ChatUser } from 'src/types/chatUser.ts';

interface MessageProps {
	user: ChatUser;
	isMyMessage?: boolean;
}

const TYPES: Record<Category, { iconPath: string; textColor: string }> = {
	pet: { iconPath: 'src/assets/casper/yellow.svg', textColor: 'text-cream-600' },
	leisure: { iconPath: 'src/assets/casper/khaki.svg', textColor: 'text-khaki-400' },
	travel: { iconPath: 'src/assets/casper/orange.svg', textColor: 'text-orange-500' },
	place: { iconPath: 'src/assets/casper/white.svg', textColor: 'text-gray-300' },
};

export default function Message({
	user,
	isMyMessage = false,
	children,
}: PropsWithChildren<MessageProps>) {
	const { id, category } = user;
	const { iconPath, textColor } = TYPES[category];

	return (
		<div className="flex w-full items-center gap-12">
			<div className="flex min-w-[180px] max-w-[180px] items-center gap-3">
				<img src={iconPath} alt="캐스퍼 캐릭터" className="h-8 w-11" />
				<p className={`text-body-3 truncate ${textColor} font-medium`}>익명 {id} </p>
				{!isMyMessage && <p className={`text-body-3 ${textColor} font-medium`}>(나)</p>}
			</div>
			<p className={`text-body-3 truncate ${isMyMessage && 'font-medium'}`}>{children}</p>
		</div>
	);
}
