import { Suspense } from 'react';
import Background from './Background.tsx';
import RacingCard from './card/index.tsx';
import RacingTitle from './RacingTitle.tsx';
import EventTimer from './timer/index.tsx';

export default function CasperRacing() {
	return (
		<div className="relative h-[685px] w-full">
			<div className="absolute -top-[5px] z-10 flex w-full flex-col items-center">
				<RacingTitle />
				<Suspense>
					<EventTimer />
				</Suspense>
			</div>
			<div className="absolute left-[27px] top-[158px] z-10">
				<RacingCard />
			</div>
			<Background />
		</div>
	);
}
