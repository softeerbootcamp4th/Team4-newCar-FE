import { CATEGORIES } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import { memo, useMemo } from 'react';
import type { UseRacingSocketReturnType } from 'src/hooks/socket/useRacingSocket.ts';
import type { VoteStatus } from 'src/types/racing.d.ts';
import ControlButton from './ControlButton.tsx';

interface RacingRankingDisplayProps extends Pick<UseRacingSocketReturnType, 'ranks' | 'votes'> {
	isActive: boolean;
}

const RacingRankingDisplay = memo(({ isActive, ranks, votes }: RacingRankingDisplayProps) => {
	const percentage = usePercentage(votes);

	const getData = (type: Category) => ({
		rank: ranks[type],
		percentage: percentage[type],
		vote: votes[type],
	});

	return (
		<div className="relative h-[150px] w-full">
			{CATEGORIES.map((type) => (
				<ControlButton key={type} type={type} isActive={isActive} data={getData(type)} />
			))}
		</div>
	);
});

export default RacingRankingDisplay;

/** Custom Hook */

function usePercentage(voteStatus: VoteStatus): VoteStatus {
	const totalVotes = useMemo(
		() => Object.values(voteStatus).reduce((sum, value) => sum + value, 0),
		[voteStatus],
	);

	return useMemo(() => {
		if (totalVotes === 0) {
			return CATEGORIES.reduce((acc, category) => {
				acc[category] = 0;
				return acc;
			}, {} as VoteStatus);
		}

		return CATEGORIES.reduce((acc, category) => {
			acc[category] = Number(((voteStatus[category] / totalVotes) * 100).toFixed(1));
			return acc;
		}, {} as VoteStatus);
	}, [totalVotes, voteStatus]);
}
