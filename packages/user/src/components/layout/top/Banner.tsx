import ScrollToQuizButton from 'src/components/layout/top/ScrollToQuizButton';

export default function Banner() {
	return (
		<section className="bg-gradient-lineBanner min-h-[50px] min-w-max py-[6px]">
			<div className="container flex items-center">
				<div className="flex flex-grow flex-col items-center justify-center gap-x-6 md:flex-row">
					<p className="text-body-3">매일 오후 3시 15분 선착순 퀴즈 이벤트</p>
					<p className="text-detail-2">캐스퍼 정보를 미리 숙지해야 퀴즈를 풀 수 있어요!</p>
				</div>
				<ScrollToQuizButton />
			</div>
		</section>
	);
}
