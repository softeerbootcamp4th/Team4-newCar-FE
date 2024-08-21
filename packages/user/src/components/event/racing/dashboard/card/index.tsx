import { lazy, memo } from 'react';
import type { TeamSelectModalProps } from 'src/components/shared/modal/teamSelectModal/index.tsx';
import withAuth from 'src/components/shared/withAuthHOC.tsx';
import useGetUserInfo from 'src/hooks/query/useGetUserInfo.ts';
import UnassignedCard from './UnassignedCard.tsx';

const TeamSelectModal = lazy(() => import('src/components/shared/modal/teamSelectModal/index.tsx'));

const ProtectedTeamSelectModal = withAuth<TeamSelectModalProps>(TeamSelectModal);

const RacingCard = memo(() => {
	const { userInfo } = useGetUserInfo();

	return (
		<div className="bg-foreground/10 flex flex-col items-center rounded-[5px] p-4 pt-2 backdrop-blur-sm">
			<CardTitle name={userInfo?.name} />
			<ProtectedTeamSelectModal type={userInfo?.type} unauthenticatedDisplay={<UnassignedCard />} />
		</div>
	);
});

export default RacingCard;

function CardTitle({ name }: { name: string | undefined }) {
	return (
		<p className="text-body-4 font-medium leading-[34px]">
			{name ? (
				<>
					<strong>{name}</strong>님의 카드
				</>
			) : (
				'카드를 뽑아보세요!'
			)}
		</p>
	);
}
