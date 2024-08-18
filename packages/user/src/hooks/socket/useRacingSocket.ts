import {
	categoryToSocketCategory,
	RACING_SOCKET_ENDPOINTS,
	socketCategoryToCategory,
} from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import type { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useMemo, useState } from 'react';
import useRacingVoteStorage from 'src/hooks/storage/useRacingVoteStorage.ts';
import { useToast } from 'src/hooks/useToast.ts';
import socketManager from 'src/services/socket.ts';
import type { Rank, SocketCategory, VoteStatus } from 'src/types/racing.d.ts';

export type UseRacingSocketReturnType = ReturnType<typeof useRacingSocket>;
type RankStatus = Record<Category, Rank>;
type SocketData = Record<SocketCategory, number>;

export default function useRacingSocket() {
	const { toast } = useToast();

	const socketClient = socketManager.getSocketClient();

	const [storedVote, storeVote] = useRacingVoteStorage();
	const [votes, setVotes] = useState<VoteStatus>(storedVote);

	const ranks = useMemo(() => calculateRank(votes), [votes]);

	const handleVoteChage = (newVoteStatus: VoteStatus) => {
		setVotes(newVoteStatus);
		storeVote(newVoteStatus);
	};

	const handleStatusChange: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const newVoteStatus = parseSocketVoteData(data as SocketData);
			const isVotesChanged = Object.keys(newVoteStatus).some(
				(category) => newVoteStatus[category as Category] !== votes[category as Category],
			);

			if (isVotesChanged) handleVoteChage(newVoteStatus);
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

		try {
			socketClient.sendMessages({
				destination: RACING_SOCKET_ENDPOINTS.PUBLISH,
				body: completeChargeData,
			});
		} catch (error) {
			const errorMessage = (error as Error).message;
			toast({ description: errorMessage.length > 0 ? errorMessage : '문제가 발생했습니다.' });
		}
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

// function hasRankChanged(newRank: RankStatus, currentRank: RankStatus): boolean {
// 	return Object.keys(newRank).some(
// 		(category) => newRank[category as Category] !== currentRank[category as Category],
// 	);
// }

function parseSocketVoteData(data: SocketData): VoteStatus {
	return Object.entries(data).reduce<VoteStatus>((acc, [socketCategory, value]) => {
		const category = socketCategoryToCategory[socketCategory.toLowerCase() as SocketCategory];
		acc[category] = value;
		return acc;
	}, {} as VoteStatus);
}
