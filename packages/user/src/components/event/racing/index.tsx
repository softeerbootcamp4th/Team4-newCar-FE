import RacingCard from './card/index.tsx';
import EventTimer from './timer/index.tsx';

/** 실시간 레이싱 섹션 */
export default function RealTimeRacing() {
	return (
		<section className="container flex flex-col items-center pt-[80px]">
			<div className="relative h-[685px] w-[1200px]">
				<div className="absolute z-10 -top-[5px] flex w-full flex-col items-center gap-5">
					<h3>아래 버튼을 클릭해서 1등을 차지하세요!</h3>
					<EventTimer />
				</div>
					<div className="absolute z-10 left-[27px] top-[158px]">
						<RacingCard />
					</div>
				<img
					className="absolute h-full w-full object-contain"
					alt="레이싱 배경"
					src="/images/racing/background.png"
				/>
			</div>
		</section>
	);
}
