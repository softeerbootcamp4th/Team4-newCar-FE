import { CATEGORIES } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import { useState } from 'react';
import SECTION_ID from 'src/constants/sectionId.ts';
import { CategoryRankMap } from 'src/types/rank.js';
import RacingDashboard from './RacingDashboard.tsx';
import RaceControlButton from './controlButtons/index.tsx';

/** 실시간 레이싱 섹션 */
export default function RealTimeRacing() {
	const [scaledType, setScaledType] = useState<Category | null>(null);

	const ranks: CategoryRankMap = {
		pet: 1,
		place: 2,
		leisure: 4,
		travel: 3,
	};

	return (
		<section
			id={SECTION_ID.RACING}
			className="container flex w-[1200px] snap-start flex-col items-center pb-[50px] pt-[100px]"
		>
			<RacingDashboard ranks={ranks} scaledType={scaledType} />
			<div className="relative mt-[50px] h-[300px] w-full">
				{CATEGORIES.map((type) => (
					<RaceControlButton
						key={type}
						type={type}
						rank={ranks[type]}
						percentage={25}
						onScale={() => setScaledType(type)}
					/>
				))}
			</div>
		</section>
	);
}
