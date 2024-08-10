import { Suspense } from 'react';
import type { CategoryRankMap } from 'src/types/rank.d.ts';
import Background from './Background.tsx';
import RacingCard from './card/index.tsx';
import Caspers from './casper/index.tsx';
import RacingTitle from './RacingTitle.tsx';
import EventTimer from './timer/index.tsx';

interface CasperRacingProps {
	ranks: CategoryRankMap;
}
export default function CasperRacing({ ranks }: CasperRacingProps) {
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
			<Caspers ranks={ranks} />
			<Background />
		</div>
	);
}
