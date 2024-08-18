import { CATEGORIES } from '@softeer/common/constants';
import type { Category } from '@softeer/common/types';
import { memo } from 'react';
import EventTimer from 'src/components/shared/timer/index.tsx';
import useGetEventDuration from 'src/hooks/query/useGetEventDuration.ts';
import { UseRacingSocketReturnType } from 'src/hooks/socket/useRacingSocket.ts';
import Background from './Background.tsx';
import RacingCard from './card/index.tsx';
import Casper from './Casper.tsx';
import RacingTitle from './RacingTitle.tsx';

interface RacingDashboardProps extends Pick<UseRacingSocketReturnType, 'ranks'> {
	chargedCar: Category | null;
}

const RacingDashboard = memo(({ ranks, chargedCar }: RacingDashboardProps) => (
	<div className="relative h-[685px] w-full">
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
	</div>
));

export default RacingDashboard;

const HeaderSection = memo(() => {
	const {
		duration: { endTime },
	} = useGetEventDuration();

	return (
		<div className="absolute -top-[5px] flex w-full flex-col items-center">
			<RacingTitle />
			<EventTimer endTime={endTime} />
		</div>
	);
});

const RacingCardSection = memo(() => (
	<div className="absolute left-[27px] top-[95px]">
		<RacingCard />
	</div>
));
