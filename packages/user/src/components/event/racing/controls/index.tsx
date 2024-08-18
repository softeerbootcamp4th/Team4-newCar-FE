import { CATEGORIES } from '@softeer/common/constants';
import { useMemo } from 'react';
import type { UseRacingSocketReturnType } from 'src/hooks/socket/useRacingSocket.ts';
import type { VoteStatus } from 'src/types/racing.d.ts';
import ControlButton from './ControlButton.tsx';

interface RacingRankingDisplayProps extends Pick<UseRacingSocketReturnType, 'ranks' | 'votes'> {
	isActive: boolean;
}
export default function RacingRankingDisplay({
	isActive,
	ranks,
	votes,
}: RacingRankingDisplayProps) {
	const percentage = useMemo(() => calculatePercentage(votes), [votes]);

	return (
		<div className="relative h-[150px] w-full">
			{CATEGORIES.map((type) => (
				<ControlButton
					key={type}
					type={type}
					isActive={isActive}
					data={{
						rank: ranks[type],
						percentage: percentage[type],
						vote: votes[type],
					}}
				/>
			))}
		</div>
	);
}

/** Helper Function */
function calculatePercentage(voteStatus: VoteStatus): VoteStatus {
	const totalVotes = Object.values(voteStatus).reduce((sum, value) => sum + value, 0);

	if (totalVotes === 0) {
		return {
			pet: 0,
			place: 0,
			travel: 0,
			leisure: 0,
		};
	}

	return {
		pet: (voteStatus.pet / totalVotes) * 100,
		place: (voteStatus.place / totalVotes) * 100,
		travel: (voteStatus.travel / totalVotes) * 100,
		leisure: (voteStatus.leisure / totalVotes) * 100,
	};
}
