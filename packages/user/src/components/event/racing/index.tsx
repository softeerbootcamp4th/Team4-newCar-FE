import { Category } from '@softeer/common/types';
import { useState } from 'react';
import SECTION_ID from 'src/constants/sectionId.ts';
import { UseSocketReturnType } from 'src/hooks/socket/index.ts';
import RacingRankingDisplay from './controls/index.tsx';
import RacingDashboard from './dashboard/index.tsx';

/** 실시간 레이싱 섹션 */
export default function RealTimeRacing({
	racingSocket,
}: Pick<UseSocketReturnType, 'racingSocket'>) {
	const [chargedCar] = useState<Category | null>(null);

	const { ranks, votes } = racingSocket;

	return (
		<section
			id={SECTION_ID.RACING}
			className="container flex w-[1200px] snap-start flex-col items-center gap-4 pb-[50px] pt-[80px]"
		>
			<RacingDashboard ranks={ranks} chargedCar={chargedCar} />
			<RacingRankingDisplay votes={votes} ranks={ranks} isActive />
		</section>
	);
}
