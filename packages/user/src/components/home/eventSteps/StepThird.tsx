import LinkShare from 'src/components/shared/linkShare/index.tsx';
import useAuth from 'src/hooks/useAuth.ts';
import ContentCard from './ContentCard.tsx';
import ContentsContainer from './ContentsContainer.tsx';

export default function StepThird() {
	return (
		<ContentsContainer gap={11}>
			<CopyAndShare />
			<ShareCountExample />
		</ContentsContainer>
	);
}

function CopyAndShare() {
	const { user } = useAuth();

	return (
		<div className="flex w-[595px] flex-col items-center">
			<LinkShare />
			<p className="text-body-3 mb-3 mt-7 font-medium">
				{user?.type ? (
					'링크를 복사하고 친구에게 공유하기'
				) : (
					<>
						나의 <strong>캐스퍼 유형</strong> 확인하고 <strong>나만의 공유 링크</strong>를 만들어
						보세요!
					</>
				)}
			</p>
		</div>
	);
}

function ShareCountExample() {
	return (
		<ContentCard size={{ width: '280px', height: '420px' }} imageUrl="images/step/3.png">
			내 링크로 접속한
			<br />
			친구 수 확인하기
		</ContentCard>
	);
}
