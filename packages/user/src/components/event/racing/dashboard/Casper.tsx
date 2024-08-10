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
	2: 'w-[260px] left-[170px] top-[390px] z-30 transform -rotate-[4deg]',
	3: 'w-[230px] left-[850px] top-[400px] z-20 transform rotate-6',
	4: 'w-[120px] left-[690px] top-[450px] z-10 transform rotate-[5deg]',
};
