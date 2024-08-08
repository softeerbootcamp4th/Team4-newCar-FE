import TeamCard from 'src/components/shared/teamCard/index.tsx';
import { User } from 'src/types/user.js';

interface RacingTeamCardProps {
	user: User;
}
export default function RacingTeamCard({ user }: RacingTeamCardProps) {
	return (
		<TeamCard type={user.category} size="racing">
			<div className="text-detail-2 bg-background text-foreground flex h-[33px] items-center justify-center rounded-[21px] px-12 font-normal">
				공유 링크 클릭 수
			</div>
		</TeamCard>
	);
}
