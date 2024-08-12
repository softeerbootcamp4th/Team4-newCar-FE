import { Category } from '@softeer/common/types';
import { useState } from 'react';
import TriggerButtonWrapper from 'src/components/common/TriggerButtonWrapper.tsx';
import TeamSelectModal from 'src/components/shared/modal/teamSelectModal/index.tsx';
import RacingTeamCard from 'src/components/shared/RacingTeamCard.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import UnassignedCard from './UnassignedCard.tsx';

export default function RacingCard() {
	const { user } = useAuth();
	const [type, setType] = useState<Category | undefined>(user?.type);

	return (
		<div className="bg-foreground/10 flex flex-col items-center rounded-[5px] p-4 pt-2 backdrop-blur-sm">
			<CardTitle name={user?.name} />
			{type ? (
				<RacingTeamCard type={type} size="racing" />
			) : (
				<TeamSelectModal
					openTrigger={
						<TriggerButtonWrapper>
							<UnassignedCard />
						</TriggerButtonWrapper>
					}
					onClose={() => setType(user?.type)}
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
