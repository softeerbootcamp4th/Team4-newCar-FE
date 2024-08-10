import type { Rank } from 'src/types/rank.d.ts';

interface CarProps {
	rank: Rank;
	imageUrl: string;
	className: string;
}
export default function Casper({ rank, imageUrl, className }: CarProps) {
	return (
		<img
			src={imageUrl}
			alt={`${rank}등 차`}
			className={`${styles[rank]} absolute transition-all duration-700 ease-in-out ${className}`}
		/>
	);
}

const styles: Record<Rank, string> = {
	1: 'w-[335px] left-[378px] top-[335px] z-40 transform rotate-0',
	2: 'w-[240px] left-[170px] top-[400px] z-30 transform -rotate-6',
	3: 'w-[220px] left-[840px] top-[400px] z-20 transform rotate-6',
	4: 'w-[108px] left-[690px] top-[470px] z-10 transform rotate-[5deg]',
};
