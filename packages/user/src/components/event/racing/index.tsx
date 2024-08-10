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
			className="container flex w-[1200px] snap-start flex-col items-center pb-[50px] pt-[100px]"
		>
			<div className="relative h-[685px] w-full">
				<div className="absolute -top-[5px] z-10 flex w-full flex-col items-center">
					<h3>
						버튼을 연타해 승리를 <strong>CHARGE</strong>하세요!
					</h3>
					<div className="mb-5 flex items-center gap-3">
						<p className="text-body-2 text-foreground/60">
							1등에 가까워질 수 있도록 배터리를 가득 충전
							<strong className="inline-block align-bottom leading-6">🔋</strong>해주세요!
						</p>
					</div>
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
					<TeamGaugeButton key={type} type={type} rank={(index + 1) as Rank} percentage={25} />
				))}
			</div>
		</section>
	);
}
