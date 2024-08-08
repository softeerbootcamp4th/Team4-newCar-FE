/* eslint-disable jsx-a11y/control-has-associated-label */
import ShareIcon from 'src/assets/icons/share.svg?react';
import TeamCard from 'src/components/shared/teamCard/index.tsx';
import { User } from 'src/types/user.js';
import copyLink from 'src/utils/copyLink.ts';

interface RacingTeamCardProps {
	user: User;
}
export default function RacingTeamCard({ user }: RacingTeamCardProps) {
	const number = 9;

	return (
		<TeamCard type={user.category} size="racing">
			<button
				type="button"
				onClick={() => copyLink(user.shareUrl as string)}
				className="text-detail-3 bg-background flex items-center justify-center gap-3 rounded-[30px] px-[16px] py-[4px] text-center"
			>
				<ShareIcon />
				<span>링크 클릭 수</span>
				<span>|</span>
				<span className="font-medium">{number}</span>
			</button>
		</TeamCard>
	);
}
