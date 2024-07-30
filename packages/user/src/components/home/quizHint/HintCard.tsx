import { ReactElement } from 'react';

interface HintCardProps {
	left: ReactElement;
	right: ReactElement;
}

export default function HintCard({ left, right }: HintCardProps) {
	return (
		<div className="gap-15 flex h-[315px] items-start">
			<div className="h-full w-[420px]">{left}</div>
			<div className="h-full w-[685px]">{right}</div>
		</div>
	);
}
