import PrizeCard from 'src/components/home/eventPrizes/PrizeCard';

const EVENT_PRIZES = [
	{
		drawCount: 1,
		imageUrl: '/src/assets/images/gifts-1.png',
		description: (
			<>
				CASPER <strong className="text-primary">Electric</strong>
			</>
		),
	},
	{
		drawCount: 3,
		imageUrl: '/src/assets/images/gifts-2.png',
		description: '캐스퍼와 함께하는 여행 지원금',
	},
	{
		drawCount: 10,
		imageUrl: '/src/assets/images/gifts-3.png',
		description: '현대백화점 상품권 10만 원권',
	},
	{
		drawCount: 30,
		imageUrl: '/src/assets/images/gifts-4.png',
		description: '현대백화점 상품권 5만 원권',
	},
	{
		drawCount: 315,
		imageUrl: '/src/assets/images/gifts-5.png',
		description: '스타벅스 기프티콘 1만 원권',
	},
];

export default function EventPrizes() {
	return (
		<section className="gap-15 mt-[80px] flex flex-col items-center">
			<h2>이벤트 경품</h2>
			<h5 className="text-heading-10">캐스퍼 레이싱</h5>
			<div className="mb-8 flex gap-3">
				{EVENT_PRIZES.map(({ drawCount, imageUrl, description }) => (
					<PrizeCard drawCount={drawCount} key={drawCount} imageUrl={imageUrl}>
						{description}
					</PrizeCard>
				))}
			</div>
		</section>
	);
}
