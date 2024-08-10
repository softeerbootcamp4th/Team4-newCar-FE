import { CATEGORIES } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import { Suspense } from 'react';
import type { CategoryRankMap } from 'src/types/rank.d.ts';
import Background from './Background.tsx';
import RacingCard from './card/index.tsx';
import Casper from './Casper.tsx';
import RacingTitle from './RacingTitle.tsx';
import EventTimer from './timer/index.tsx';

interface RacingDashboardProps {
	ranks: CategoryRankMap;
	scaledType: Category | null;
}
export default function RacingDashboard({ ranks, scaledType }: RacingDashboardProps) {
	return (
		<div className="relative h-[685px] w-full">
			<div className="absolute -top-[5px] flex w-full flex-col items-center">
				<RacingTitle />
				<Suspense>
					<EventTimer />
				</Suspense>
			</div>
			<div className="absolute left-[27px] top-[95px]">
				<RacingCard />
			</div>
			{CATEGORIES.map((type) => (
				<Casper
					key={type}
					rank={ranks[type]}
					imageUrl={imageUrls[type]}
					className={
						scaledType === type
						? 'scale-110'
						: ''
					}
				/>
			))}
			<Background />
		</div>
	);
}

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/front/travel.png',
	leisure: '/images/racing/front/leisure.png',
	place: '/images/racing/front/place.png',
	pet: '/images/racing/front/pet.png',
};
