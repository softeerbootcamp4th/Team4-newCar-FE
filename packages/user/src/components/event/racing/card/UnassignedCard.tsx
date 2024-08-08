import GradientBorderWrapper from './GradientBorderWrapper.tsx';

export default function UnassignedCard() {
	return (
		<GradientBorderWrapper>
			<div className="relative flex h-[365px] w-[244px] flex-col items-center justify-center gap-[8px] px-[15px]">
				<img
					src="/images/racing/casper.png"
					alt="캐스퍼 일렉트릭"
					className="absolute w-full max-w-[215px] object-contain"
				/>
				<h1 className="z-10 text-[180px]">?</h1>
				<h5 className="z-10 whitespace-pre-line text-center">
					당신은
					<br />
					<strong>어떤 팀</strong>인가요?
				</h5>
				<p className="text-detail-3 py-[5px] text-background rounded-[30px] w-full bg-primary">자신의 유형 카드를 뽑아보세요!</p>
			</div>
		</GradientBorderWrapper>
	);
}
