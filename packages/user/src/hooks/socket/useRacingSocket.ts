import { RACING_SOCKET_ENDPOINTS } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
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

/**
 * Mapping between Category and SocketCategory
 */
const categoryToSocketCategory: Record<Category, SocketCategory> = {
	pet: 'P',
	travel: 'T',
	place: 'S',
	leisure: 'L',
};

const socketCategoryToCategory: Record<SocketCategory, Category> = {
	P: 'pet',
	T: 'travel',
	S: 'place',
	L: 'leisure',
};

export type UseRacingSocketReturnType = ReturnType<typeof useRacingSocket>;

export default function useRacingSocket() {
	const [storedRank, storeRank] = useRacingRankStorage();
	const [rank, setRank] = useState<RankStatus>(storedRank);
	const [vote, setVote] = useState<VoteStatus>({
		pet: 0,
		place: 0,
		travel: 0,
		leisure: 0,
	});

	const newRankStatus = useMemo(() => calculateRank(vote), [vote]);

	useEffect(() => {
		if (hasRankChanged(newRankStatus, rank)) {
			setRank(newRankStatus);
			storeRank(newRankStatus);
		}
	}, [newRankStatus, rank, storeRank]);

	const handleStatusChange = useCallback((data: unknown) => {
		const newVoteStatus = parseSocketVoteData(data as SocketData);
		setVote(newVoteStatus);
	}, []);

	const handleCarFullyCharged = (category: Category) => {
		const chargeData = { [categoryToSocketCategory[category]]: 1 };

		socketClient.sendMessages({
			destination: RACING_SOCKET_ENDPOINTS.PUBLISH,
			body: chargeData,
		});
	};

	return {
		vote,
		rank,
		onReceiveStatus: handleStatusChange,
		onFullyChargeCar: handleCarFullyCharged,
	};
}

/**
 * Utility functions
 */

// Calculate the rank based on vote status
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

// Check if rank has changed
function hasRankChanged(newRank: RankStatus, currentRank: RankStatus): boolean {
	return Object.keys(newRank).some(
		(category) => newRank[category as Category] !== currentRank[category as Category],
	);
}

// Parse socket data to vote status
function parseSocketVoteData(data: SocketData): VoteStatus {
	return Object.entries(data).reduce<VoteStatus>((acc, [socketCategory, value]) => {
		const category = socketCategoryToCategory[socketCategory as SocketCategory];
		acc[category] = value;
		return acc;
	}, {} as VoteStatus);
}
