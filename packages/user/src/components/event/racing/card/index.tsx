import TriggerButtonWrapper from 'src/components/common/TriggerButtonWrapper.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import TeamSelectModal from '../teamSelectModal/index.tsx';
import RacingTeamCard from './RacingTeamCard.tsx';
import UnassignedCard from './UnassignedCard.tsx';

export default function RacingCard() {
	const { user } = useAuth();

	return (
		<div className="bg-foreground/10 flex flex-col items-center rounded-[5px] p-4 pt-2 backdrop-blur-sm">
			<CardTitle name={user?.name} />
			{user?.shareUrl ? (
				<RacingTeamCard user={user} />
			) : (
				<TeamSelectModal
					openTrigger={
						<TriggerButtonWrapper>
							<UnassignedCard />
						</TriggerButtonWrapper>
					}
				/>
			)}
		</div>
	);
}

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
