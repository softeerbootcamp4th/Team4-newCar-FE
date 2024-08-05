import ContentCard from './ContentCard.tsx';
import ContentsContainer from './ContentsContainer.tsx';

const CONTENTS = [
	'물음표 카드 클릭!',
	'유형 검사를 통해\n나에게 맞는 캐스퍼 카드 찾기',
	'나의 캐스퍼 유형 카드\n결과 확인',
];

export default function StepFirst() {
	return (
		<ContentsContainer>
			{CONTENTS.map((content, index) => (
				<ContentCard
					key={content}
					step={index + 1}
					size={{ width: '293px', height: '390px' }}
					imageUrl={`/src/assets/images/step/1-${index + 1}.png`}
				>
					{content}
				</ContentCard>
			))}
		</ContentsContainer>
	);
}
