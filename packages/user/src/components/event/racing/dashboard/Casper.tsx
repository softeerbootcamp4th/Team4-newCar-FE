import type { Category } from '@softeer/common/types';
import MarkerIcon from 'src/assets/icons/car-marker.svg?react';
import useAuth from 'src/hooks/useAuth.tsx';
import type { Rank } from 'src/types/racing.ts';

interface CasperProps {
	type: Category;
	rank: Rank;
	className: string;
}
export default function Casper({ type, rank, className }: CasperProps) {
	const { user } = useAuth();
	const isMyCasper = user?.type === type;

	return (
		<div
			className={`absolute flex flex-col items-center gap-8 ${className} ${rankStyles[rank]} ${transitionStyles}`}
		>
			<div className="h-[10px]">{isMyCasper && <MarkerIcon />}</div>
			<img src={imageUrls[type]} alt={`${rank}등 차`} className="object-contain" />
		</div>
	);
}

const transitionStyles = 'transform transition-all duration-700 ease-in-out';

const rankStyles: Record<Rank, string> = {
	1: 'w-[335px] left-[380px] top-[295px] z-40 rotate-0',
	2: 'w-[270px] left-[170px] top-[335px] z-30 -rotate-[4deg]',
	3: 'w-[200px] left-[700px] top-[360px] z-20 rotate-6',
	4: 'w-[120px] left-[900px] top-[410px] z-10 rotate-[5deg]',
};

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/front/travel.png',
	leisure: '/images/racing/front/leisure.png',
	place: '/images/racing/front/place.png',
	pet: '/images/racing/front/pet.png',
};
