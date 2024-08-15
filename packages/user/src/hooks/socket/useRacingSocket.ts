import { categoryToSocketCategory, RACING_SOCKET_ENDPOINTS, socketCategoryToCategory } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import type { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useRacingRankStorage from 'src/hooks/storage/useRacingRankStorage.ts';
import socketClient from 'src/services/socket.ts';
import type {
	Rank,
	RankStatus,
	SocketCategory,
	SocketData,
	VoteStatus,
} from 'src/types/racing.d.ts';

export type UseRacingSocketReturnType = ReturnType<typeof useRacingSocket>;

export default function useRacingSocket() {
	const [storedRank, storeRank] = useRacingRankStorage();
	const [ranks, setRanks] = useState<RankStatus>(storedRank);
	const [votes, setVotes] = useState<VoteStatus>({
		pet: 0,
		place: 0,
		travel: 0,
		leisure: 0,
	});

	const newRankStatus = useMemo(() => calculateRank(votes), [votes]);

	useEffect(() => {
		if (hasRankChanged(newRankStatus, ranks)) {
			setRanks(newRankStatus);
			storeRank(newRankStatus);
		}
	}, [newRankStatus, ranks]);

	const handleStatusChange: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const newVoteStatus = parseSocketVoteData(data as SocketData);
			const isVotesChanged = Object.keys(newVoteStatus).some(
				(category) => newVoteStatus[category as Category] !== votes[category as Category],
			);

			if (isVotesChanged) setVotes(newVoteStatus);
		},
		[votes],
	);

	const handleCarFullyCharged = useCallback((category: Category) => {
		const chargeData = { [categoryToSocketCategory[category].toLowerCase()]: 1 };

		const completeChargeData = Object.keys(categoryToSocketCategory).reduce(
			(acc, key) => {
				const socketCategory = categoryToSocketCategory[key as Category];
				acc[socketCategory] = chargeData[socketCategory] ?? 0;
				return acc;
			},
			{} as Record<SocketCategory, number>,
		);

		socketClient.sendMessages({
			destination: RACING_SOCKET_ENDPOINTS.PUBLISH,
			body: completeChargeData,
		});
	}, []);

	return {
		votes,
		ranks,
		onReceiveStatus: handleStatusChange,
		onCarFullyCharged: handleCarFullyCharged,
	};
}

/**
 * Helper Functions
 */

function calculateRank(vote: VoteStatus): RankStatus {
	const sortedCategories = (Object.keys(vote) as Category[]).sort(
		(a, b) => Number(vote[b]) - Number(vote[a]),
	);

	return sortedCategories.reduce<RankStatus>(
		(rankStatus, category, index) => ({
			...rankStatus,
			[category]: (index + 1) as Rank,
		}),
		{} as RankStatus,
	);
}

function hasRankChanged(newRank: RankStatus, currentRank: RankStatus): boolean {
	return Object.keys(newRank).some(
		(category) => newRank[category as Category] !== currentRank[category as Category],
	);
}

function parseSocketVoteData(data: SocketData): VoteStatus {
	return Object.entries(data).reduce<VoteStatus>((acc, [socketCategory, value]) => {
		const category = socketCategoryToCategory[socketCategory.toLowerCase() as SocketCategory];
		acc[category] = value;
		return acc;
	}, {} as VoteStatus);
}
