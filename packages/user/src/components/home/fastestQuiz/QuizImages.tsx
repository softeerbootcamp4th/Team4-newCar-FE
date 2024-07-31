import Chip from 'src/components/common/Chip';
import PrizeCard from 'src/components/shared/PrizeCard';

export default function QuizImages() {
	return (
		<div className="relative pb-[20px] pr-[155px]">
			<img
				className="w-[737px] overflow-hidden rounded-[20px] object-contain shadow-lg"
				src="/src/assets/images/quiz-popup.png"
				alt="선착순 퀴즈 팝업 예시"
			/>
			<div className="absolute bottom-0 right-0">
				<PrizeCard imageUrl="/src/assets/images/quiz-gift.png" badge={<Chip>선착순 100명</Chip>}>
					스타벅스 기프티콘 1만 원권
				</PrizeCard>
			</div>
		</div>
	);
}
