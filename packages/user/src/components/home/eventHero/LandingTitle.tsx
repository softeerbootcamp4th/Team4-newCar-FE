import { PropsWithChildren, Suspense } from 'react';
import EventDurationText from './EventDurationText.tsx';

export default function LandingTitle() {
	return (
		<Header>
			<p className="text-body-4 font-medium">CASPER Electric 출시 이벤트</p>
			<h1>1등하고 캐스퍼 EV 받자!</h1>
			<Subtitle>
				나에게 맞는 캐스퍼를 찾고
				<br />
				전력을 다해 레이싱에 참여하세요!
			</Subtitle>
			<div className="flex items-center gap-3">
				<Chip>이벤트 기간</Chip>
				<p className="text-detail-1 h-[22px] w-[160px]">
					<Suspense fallback="불러오는 중...">
						<EventDurationText />
					</Suspense>
				</p>
			</div>
		</Header>
	);
}

function Header({ children }: PropsWithChildren) {
	return <div className="flex flex-col items-center gap-5">{children}</div>;
}

function Subtitle({ children }: PropsWithChildren) {
	return (
		<div className="text-heading-12 relative text-center font-medium">
			<img
				className="absolute -left-6 top-1 w-[85px]"
				src="/images/hero/highlight.png"
				alt="서브 타이틀 강조"
			/>
			{children}
		</div>
	);
}

function Chip({ children }: PropsWithChildren) {
	return (
		<div className="bg-foreground w-[85px] rounded-[15px] text-center">
			<p className="text-detail-2 text-background font-medium">{children}</p>
		</div>
	);
}
