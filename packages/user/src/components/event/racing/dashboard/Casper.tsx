import type { Category } from '@softeer/common/types';
import { memo, useMemo } from 'react';
import MarkerIcon from 'src/assets/icons/car-marker.svg?react';
import useAuth from 'src/hooks/useAuth.ts';
import type { Rank } from 'src/types/racing.d.ts';

interface CasperProps {
	type: Category;
	rank: Rank;
	isActive: boolean;
}

const Casper = memo(({ type, rank, isActive }: CasperProps) => {
	const { user } = useAuth();
	const isMyCasper = useMemo(() => user?.type === type, [user?.type, type]);

	const animationClasses = useMemo(() => {
		if (isMyCasper && isActive) {
			return 'animate-engine-start';
		}

		if (isMyCasper) {
			return 'animate-special-my-casper';
		}

		switch (rank) {
			case 1:
				return 'animate-drive-rank-1';
			case 2:
				return 'animate-drive-rank-2';
			case 3:
				return 'animate-drive-rank-3';
			case 4:
				return 'animate-drive-rank-4';
			default:
				return '';
		}
	}, [isMyCasper, isActive, rank]);

	return (
		<div
			className={`absolute flex flex-col items-center gap-8 ${animationClasses} ${transitionStyles} ${rankStyles[rank]}`}
		>
			<div className="h-[20px]">{isMyCasper && <MarkerIcon />}</div>
			<img src={imageUrls[type]} alt={`${rank}등 차`} className="object-contain" />
		</div>
	);
});

export default Casper;

const transitionStyles = 'transform transition-all ease-in-out duration-1500';

const rankStyles: Record<Rank, string> = {
	1: 'w-[335px] left-[380px] top-[285px] z-40 rotate-0',
	2: 'w-[270px] left-[170px] top-[325px] z-30 -rotate-[4deg]',
	3: 'w-[200px] left-[700px] top-[350px] z-20 rotate-6',
	4: 'w-[120px] left-[900px] top-[400px] z-10 rotate-[5deg]',
};

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/front/travel.webp',
	leisure: '/images/racing/front/leisure.webp',
	place: '/images/racing/front/place.webp',
	pet: '/images/racing/front/pet.webp',
};
