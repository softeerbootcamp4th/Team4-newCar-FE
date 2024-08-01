import Chip from 'src/components/common/Chip';
import PrizeCard from 'src/components/shared/PrizeCard';

const EVENT_PRIZES = [
	{
		drawCount: 1,
		description: (
			<>
				CASPER <strong>Electric</strong>
			</>
		),
	},
	{
		drawCount: 3,
		description: '캐스퍼와 함께하는 여행 지원금',
	},
	{
		drawCount: 10,
		description: '현대백화점 상품권 10만 원권',
	},
	{
		drawCount: 30,
		description: '현대백화점 상품권 5만 원권',
	},
	{
		drawCount: 315,
		description: '스타벅스 기프티콘 1만 원권',
	},
];

/** 이벤트(캐스퍼 레이싱) 경품 섹션 */
export default function EventPrizes() {
	return (
		<section className="gap-15 flex flex-col items-center pt-[80px]">
			<h2>이벤트 경품</h2>
			<h6 className="text-heading-10">캐스퍼 레이싱</h6>
			<div className="mb-8 flex gap-3">
				{EVENT_PRIZES.map(({ drawCount, description }, index) => (
					<PrizeCard
						key={drawCount}
						badge={<Chip variants="secondary">{drawCount}명</Chip>}
						imageUrl={`/src/assets/images/prize/${index + 1}.png`}
					>
						{description}
					</PrizeCard>
				))}
			</div>
		</section>
	);
}
