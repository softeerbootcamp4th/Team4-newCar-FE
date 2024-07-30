import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface NavigateTabProps {
	isSelected: boolean;
	onSelect: () => void;
}
export default function NavigateTab({
	isSelected,
	children,
	onSelect,
}: PropsWithChildren<NavigateTabProps>) {
	return (
		<button
			type="button"
			onClick={onSelect}
			className={clsx(
				'text-body-3 flex w-[230px] flex-col items-center font-medium transition-all duration-100',
				isSelected ? 'opacity-100' : 'opacity-70',
			)}
		>
			{children}
		</button>
	);
}
