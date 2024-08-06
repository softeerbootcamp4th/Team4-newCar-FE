import ContentCard from './ContentCard.tsx';
import ContentsContainer from './ContentsContainer.tsx';

const CONTENTS = ['내 캐스퍼 유형의 버튼 클릭!', '버튼 클릭 수에 따라 실시간 순위 변동'];

export default function StepSecond() {
	return (
		<ContentsContainer>
			{CONTENTS.map((content, index) => (
				<ContentCard
					key={content}
					step={index + 1}
					size={{ width: '470px', height: '427px' }}
					imageUrl={`images/step/2-${index + 1}.png`}
				>
					{content}
				</ContentCard>
			))}
		</ContentsContainer>
	);
}
