import { Category } from '@softeer/common/types';
import { useState } from 'react';
import SECTION_ID from 'src/constants/sectionId.ts';
import type { CategoryRankMap } from 'src/types/rank.d.ts';
import RacingControls from './controls/index.tsx';
import RacingDashboard from './dashboard/index.tsx';

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
			className="container flex w-[1200px] snap-start flex-col items-center gap-4 pb-[50px] pt-[80px]"
		>
			<RacingDashboard ranks={ranks} scaledType={scaledType} />
			<RacingControls ranks={ranks} setScaledType={setScaledType} />
		</section>
	);
}
