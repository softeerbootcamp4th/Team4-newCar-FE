import GradientBorderWrapper from 'src/components/common/GradientBorderWrapper.tsx';

export default function UnassignedCard() {
	return (
		<GradientBorderWrapper>
			<div className="relative flex h-[234px] w-[160px] flex-col items-center justify-center gap-[8px] px-[14px]">
				<img
					src="/images/racing/front/pet.webp"
					alt="캐스퍼 일렉트릭"
					className="absolute w-[140px] opacity-20 object-contain"
				/>
				<p className="text-heading-1 z-10 mt-[20px] text-[110px] font-extrabold leading-[70px]">
					?
				</p>
				<p className="text-body-3 z-10 whitespace-pre-line text-center font-extrabold">
					당신은
					<br />
					<strong>어떤 팀</strong>인가요?
				</p>
				<p className="text-background bg-primary z-10 w-full whitespace-nowrap rounded-[30px] py-[6px] text-center text-[10px] leading-[10px]">
					자신의 유형 카드를 뽑아보세요!
				</p>
			</div>
		</GradientBorderWrapper>
	);
}
