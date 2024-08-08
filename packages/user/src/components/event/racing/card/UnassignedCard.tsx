import GradientBorderWrapper from './GradientBorderWrapper.tsx';

export default function UnassignedCard() {
	return (
		<GradientBorderWrapper>
			<div className="relative flex w-[160px] h-[234px] flex-col items-center justify-center gap-[8px] px-[14px]">
				<img
					src="/images/racing/casper.png"
					alt="캐스퍼 일렉트릭"
					className="absolute object-contain w-[140px]"
				/>
				<h1 className="z-10 text-[110px] leading-[70px] mt-[20px]">?</h1>
				<h5 className="z-10 whitespace-pre-line text-center text-[20px] leading-[25px]">
					당신은
					<br />
					<strong>어떤 팀</strong>인가요?
				</h5>
				<p className="z-10 text-[10px] leading-[10px] text-background bg-primary w-full rounded-[30px] py-[6px] text-center whitespace-nowrap">
					자신의 유형 카드를 뽑아보세요!
				</p>
			</div>
		</GradientBorderWrapper>
	);
}
