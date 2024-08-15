import { CATEGORIES } from '@softeer/common/constants';
import type { Category } from '@softeer/common/types';
import { Suspense } from 'react';
import { UseRacingSocketReturnType } from 'src/hooks/socket/useRacingSocket.ts';
import Background from './Background.tsx';
import RacingCard from './card/index.tsx';
import Casper from './Casper.tsx';
import RacingTitle from './RacingTitle.tsx';
import EventTimer from './timer/index.tsx';

interface RacingDashboardProps extends Pick<UseRacingSocketReturnType, 'ranks'> {
	chargedCar: Category | null;
}

export default function RacingDashboard({ ranks, chargedCar }: RacingDashboardProps) {
  return <div className="relative h-[685px] w-full">
			<HeaderSection />
			<RacingCardSection />
			{CATEGORIES.map((type) => (
				<Casper
					key={type}
					type={type}
					rank={ranks[type]}
					className={chargedCar === type ? 'scale-110' : ''}
				/>
			))}
			<Background />
         </div>;
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
