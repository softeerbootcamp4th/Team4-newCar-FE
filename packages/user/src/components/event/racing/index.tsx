import { CATEGORIES } from '@softeer/common/constants';
import CasperRacing from 'src/components/event/racing/CasperRacing.tsx';
import SECTION_ID from 'src/constants/sectionId.ts';
import { CategoryRankMap } from 'src/types/rank.js';
import TeamGaugeButton from './teamGaugeButton/index.tsx';

/** 실시간 레이싱 섹션 */
export default function RealTimeRacing() {
	const ranks: CategoryRankMap = {
		pet: 4,
		place: 2,
		leisure: 3,
		travel: 1,
	};

	return (
		<section
			id={SECTION_ID.RACING}
			className="container flex w-[1200px] snap-start flex-col items-center pb-[50px] pt-[100px]"
		>
			<CasperRacing ranks={ranks} />
			<div className="relative mt-[50px] h-[300px] w-full">
				{CATEGORIES.map((type) => (
					<TeamGaugeButton key={type} type={type} rank={ranks[type]} percentage={25} />
				))}
			</div>
		</section>
	);
}
