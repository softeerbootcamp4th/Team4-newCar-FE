/* eslint-disable jsx-a11y/control-has-associated-label */
import { Suspense } from 'react';
import ShareIcon from 'src/assets/icons/share.svg?react';
import TeamCard from 'src/components/shared/teamCard/index.tsx';
import useGetLinkShareCount from 'src/hooks/query/useGetLinkShareCount.ts';
import { User } from 'src/types/user.js';
import copyLink from 'src/utils/copyLink.ts';

interface RacingTeamCardProps {
	user: User;
}
export default function RacingTeamCard({ user }: RacingTeamCardProps) {
	return (
		<TeamCard type={user.type} size="racing">
			<button
				type="button"
				onClick={() => copyLink(user.shareUrl as string)}
				className="text-detail-3 bg-background flex items-center justify-center gap-3 rounded-[30px] px-[16px] py-[4px] text-center"
			>
				<ShareIcon />
				<span>링크 클릭 수</span>
				<span>|</span>
				<span className="w-[10px] font-medium">
					<Suspense fallback="-">
						<LinkShareCount />
					</Suspense>
				</span>
			</button>
		</TeamCard>
	);
}

function LinkShareCount() {
	const {
		linkShareCount: { count },
	} = useGetLinkShareCount();

	return count;
}
