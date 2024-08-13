import { CATEGORIES } from '@softeer/common/constants';
import type { Category } from '@softeer/common/types';
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
			<HeaderSection />
			<RacingCardSection />
			<CaspersSection ranks={ranks} scaledType={scaledType} />
			<Background />
		</div>
	);
}

function HeaderSection() {
	return (
		<div className="absolute -top-[5px] flex w-full flex-col items-center">
			<RacingTitle />
			<Suspense>
				<EventTimer />
			</Suspense>
		</div>
	);
}

function RacingCardSection() {
	return (
		<div className="absolute left-[27px] top-[95px]">
			<RacingCard />
		</div>
	);
}

function CaspersSection({ ranks, scaledType }: RacingDashboardProps) {
	return (
		<>
			{CATEGORIES.map((type) => (
				<Casper
					key={type}
					type={type}
					rank={ranks[type]}
					className={scaledType === type ? 'scale-110' : ''}
				/>
			))}
		</>
	);
}
