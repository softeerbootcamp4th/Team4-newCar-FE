import ContentCard from './ContentCard.tsx';
import ContentsContainer from './ContentsContainer.tsx';

const CONTENTS = ['버튼을 연타해 캐스퍼가 가득 충전되면', '우리 팀이 이길 확률이 올라가요!'];

export default function StepSecond() {
	return (
		<ContentsContainer>
			{CONTENTS.map((content, index) => (
				<ContentCard
					key={content}
					step={index + 1}
					size={{ width: '470px', height: '427px' }}
					imageUrl={`images/step/2-${index + 1}.webp`}
				>
					{content}
				</ContentCard>
			))}
		</ContentsContainer>
	);
}
