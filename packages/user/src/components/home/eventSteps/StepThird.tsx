import LinkShare from 'src/components/shared/linkShare';
import ContentCard from './ContentCard';
import ContentsContainer from './ContentsContainer';

export default function StepThird() {
	return (
		<ContentsContainer gap={11}>
			<CopyAndShare />
			<ContentCard
				size={{ width: '280px', height: '420px' }}
				imageUrl={`/src/assets/images/step-3.png`}
			>
				내 링크로 접속한
				<br />
				친구 수 확인하기
			</ContentCard>
		</ContentsContainer>
	);
}

function CopyAndShare() {
	return (
		<div className="flex w-[595px] flex-col items-center gap-7">
			<LinkShare />
			<p className="text-body-3 font-medium">링크를 복사하고 친구에게 공유하기</p>
		</div>
	);
}
