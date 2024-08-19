import { PropsWithChildren, useMemo } from 'react';
import type { Rank } from 'src/types/racing.d.ts';

interface ControllButtonWrapperProps {
	rank: Rank;
	isMyCasper: boolean;
}

export default function ControllButtonWrapper({
	rank,
	isMyCasper,
	children,
}: PropsWithChildren<ControllButtonWrapperProps>) {
	const rankStyle = useMemo(() => styles[rank], [rank]);

	return (
		<div
			className={`${isMyCasper ? 'scale-100' : 'scale-75 opacity-60'} absolute flex transform flex-col gap-3 transition-all duration-500 ease-in-out ${rankStyle}`}
		>
			{children}
		</div>
	);
}

const styles: Record<Rank, string> = {
	1: 'left-[40px] z-40',
	2: 'left-[310px] z-30',
	3: 'left-[580px] z-20',
	4: 'left-[850px] z-10',
};
