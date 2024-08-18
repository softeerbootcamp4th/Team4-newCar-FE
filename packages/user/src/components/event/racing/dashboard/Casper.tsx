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
	const activeStyles = useMemo(
		() => (isActive && isMyCasper ? 'scale-125' : ''),
		[isActive, isMyCasper],
	);
	return (
		<div
			className={`absolute flex flex-col items-center gap-8 ${activeStyles} ${rankStyles[rank]} ${transitionStyles}`}
		>
			<div className="h-[20px]">{isMyCasper && <MarkerIcon />}</div>
			<img src={imageUrls[type]} alt={`${rank}등 차`} className="object-contain" />
		</div>
	);
});
export default Casper;

const transitionStyles = 'transform transition-all duration-700 ease-in-out';

const rankStyles: Record<Rank, string> = {
	1: 'w-[335px] left-[380px] top-[285px] z-40 rotate-0',
	2: 'w-[270px] left-[170px] top-[325px] z-30 -rotate-[4deg]',
	3: 'w-[200px] left-[700px] top-[350px] z-20 rotate-6',
	4: 'w-[120px] left-[900px] top-[400px] z-10 rotate-[5deg]',
};

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/front/travel.png',
	leisure: '/images/racing/front/leisure.png',
	place: '/images/racing/front/place.png',
	pet: '/images/racing/front/pet.png',
};
