import { CATEGORIES } from '@softeer/common/constants';
import CasperRacing from 'src/components/event/racing/CasperRacing.tsx';
import SECTION_ID from 'src/constants/sectionId.ts';
import TeamGaugeButton, { type Rank } from './teamGaugeButton/index.tsx';

/** 실시간 레이싱 섹션 */
export default function RealTimeRacing() {
	const ranks = CATEGORIES;

	return (
		<section
			id={SECTION_ID.RACING}
			className="container flex w-[1200px] snap-start flex-col items-center pb-[50px] pt-[100px]"
		>
			<CasperRacing />
			<div className="mt-[70px] flex space-x-11">
				{ranks.map((type, index) => (
					<TeamGaugeButton key={type} type={type} rank={(index + 1) as Rank} percentage={25} />
				))}
			</div>
		</section>
	);
}
