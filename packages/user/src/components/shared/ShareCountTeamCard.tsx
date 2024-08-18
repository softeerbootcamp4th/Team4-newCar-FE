/* eslint-disable jsx-a11y/control-has-associated-label */
import { Category } from '@softeer/common/types';
import { Suspense } from 'react';
import ShareIcon from 'src/assets/icons/share.svg?react';
import useGetLinkShareCount from 'src/hooks/query/useGetLinkShareCount.ts';
import copyLink from 'src/utils/copyLink.ts';
import getSharedLink from 'src/utils/getSharedLink.ts';
import TeamCardTemplate from './teamCardTemplate/index.tsx';

type ShareCountTeamCardProps = {
	type: Category;
	encryptedUserId: string | undefined;
	size: 'racing' | 'modal';
};
export default function ShareCountTeamCard({
	type,
	encryptedUserId,
	size,
}: ShareCountTeamCardProps) {
	const url = getSharedLink({ type, encryptedUserId });

	return (
		<TeamCardTemplate type={type} size={size}>
			<button
				type="button"
				onClick={() => copyLink(url)}
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
		</TeamCardTemplate>
	);
}

function LinkShareCount() {
	const {
		linkShareCount: { clickNumber: count },
	} = useGetLinkShareCount();

	return count;
}
