import { Category } from '@softeer/common/types';
import { memo, useState } from 'react';
import TriggerButtonWrapper from 'src/components/common/TriggerButtonWrapper.tsx';
import TeamSelectModal, {
	type TeamSelectModalProps,
} from 'src/components/shared/modal/teamSelectModal/index.tsx';
import ShareCountTeamCard from 'src/components/shared/ShareCountTeamCard.tsx';
import withAuth from 'src/components/shared/withAuthHOC.tsx';
import useAuth from 'src/hooks/useAuth.ts';
import UnassignedCard from './UnassignedCard.tsx';

const ProtectedTeamSelectModal = memo(withAuth<TeamSelectModalProps>(TeamSelectModal));

export default function RacingCard() {
	const { user } = useAuth();
	const [type, setType] = useState<Category | undefined>(user?.type);

	return (
		<div className="bg-foreground/10 flex flex-col items-center rounded-[5px] p-4 pt-2 backdrop-blur-sm">
			<CardTitle name={user?.name} />
			{type ? (
				<ShareCountTeamCard type={type} encryptedUserId={user?.encryptedUserId} size="racing" />
			) : (
				<ProtectedTeamSelectModal
					openTrigger={
						<TriggerButtonWrapper>
							<UnassignedCard />
						</TriggerButtonWrapper>
					}
					onClose={() => setType(user?.type)}
					unauthenticatedDisplay={<UnassignedCard />}
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
