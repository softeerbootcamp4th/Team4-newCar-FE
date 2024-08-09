import { CATEGORIES } from '@softeer/common/constants';
import { Suspense } from 'react';
import SECTION_ID from 'src/constants/sectionId.ts';
import RacingCard from './card/index.tsx';
import TeamGaugeButton, { type Rank } from './gaugeButton/index.tsx';
import EventTimer from './timer/index.tsx';

/** 실시간 레이싱 섹션 */
export default function RealTimeRacing() {
	const ranks = CATEGORIES;

	return (
		<section
			id={SECTION_ID.RACING}
			className="container flex w-[1200px] flex-col items-center pt-[100px]"
		>
			<div className="relative h-[685px] w-full">
				<div className="absolute -top-[5px] z-10 flex w-full flex-col items-center gap-5">
					<h3>아래 버튼을 클릭해서 1등을 차지하세요!</h3>
					<Suspense>
						<EventTimer />
					</Suspense>
				</div>
				<div className="absolute left-[27px] top-[158px] z-10">
					<RacingCard />
				</div>
				<img
					className="absolute h-full w-full object-contain"
					alt="레이싱 배경"
					src="/images/racing/background.png"
				/>
			</div>
			<div className="mt-[70px] flex space-x-11">
				{ranks.map((type, index) => (
					<TeamGaugeButton key={type} type={type} rank={(index + 1) as Rank} />
				))}
			</div>
		</section>
	);
}
