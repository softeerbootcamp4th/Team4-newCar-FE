import clsx from 'clsx';

interface SelectedTabIndicatorProps {
	selectedTab: string;
}

export default function SelectedTabIndicator({ selectedTab }: SelectedTabIndicatorProps) {
	return (
		<div
			className={clsx(
				'bg-foreground h-1 w-1/2 transition-all duration-100',
				selectedTab === 'Home' ? 'translate-x-0' : 'translate-x-full',
			)}
		/>
	);
}
