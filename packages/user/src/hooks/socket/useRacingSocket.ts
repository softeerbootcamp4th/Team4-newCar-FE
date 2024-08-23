import {
	categoryToSocketCategory,
	RACING_SOCKET_ENDPOINTS,
	socketCategoryToCategory,
} from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import type { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useRacingVoteStorage from 'src/hooks/storage/useRacingVoteStorage.ts';
import useAuth from 'src/hooks/useAuth.ts';
import { useToast } from 'src/hooks/useToast.ts';
import socketManager from 'src/services/socket.ts';
import type { Rank, SocketCategory, VoteStatus } from 'src/types/racing.d.ts';

export type UseRacingSocketReturnType = ReturnType<typeof useRacingSocket>;
type RankStatus = Record<Category, Rank>;
type SocketData = Record<SocketCategory, number>;

export default function useRacingSocket() {
	const { toast } = useToast();
	const { user } = useAuth();

	const [storedVote, storeVote] = useRacingVoteStorage();
	const [votes, setVotes] = useState<VoteStatus>(storedVote);

	const ranks = useMemo(() => calculateRank(votes), [votes]);

	useEffect(() => storeVote(votes), [votes, storeVote]);

	const handleStatusChange: SocketSubscribeCallbackType = useCallback(
		(data: unknown) => {
			const newVoteStatus = parseSocketVoteData(data as SocketData);
			if (!isEqualVoteStatus(newVoteStatus, votes)) {
				setVotes(newVoteStatus);
			}
		},
		[votes],
	);

	const handleCarFullyCharged = useCallback(() => {
		try {
			const socketClient = socketManager.getSocketClient();
			const category = user?.type as Category;
			const completeChargeData = prepareChargeData(category);

			socketClient.sendMessages({
				destination: RACING_SOCKET_ENDPOINTS.PUBLISH,
				body: completeChargeData,
			});
		} catch (error) {
			const errorMessage = (error as Error).message || '문제가 발생했습니다.';
			toast({ description: errorMessage });
		}
	}, [user?.type, toast]);

	return {
		votes: storedVote,
		ranks,
		onReceiveStatus: handleStatusChange,
		onCarFullyCharged: handleCarFullyCharged,
	};
}

/* Helper Functions */

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

function isEqualVoteStatus(newVoteStatus: VoteStatus, currentVoteStatus: VoteStatus): boolean {
	return Object.keys(newVoteStatus).every(
		(category) => newVoteStatus[category as Category] === currentVoteStatus[category as Category],
	);
}

function parseSocketVoteData(data: SocketData): VoteStatus {
	return Object.entries(data).reduce<VoteStatus>((acc, [socketCategory, value]) => {
		const category = socketCategoryToCategory[socketCategory.toLowerCase() as SocketCategory];
		acc[category] = value;
		return acc;
	}, {} as VoteStatus);
}

function prepareChargeData(category: Category): Record<SocketCategory, number> {
	const chargeData = {
		[categoryToSocketCategory[category].toLowerCase()]: 1,
	};

	return Object.entries(categoryToSocketCategory).reduce(
		(acc, [, socketCategory]) => {
			acc[socketCategory] = chargeData[socketCategory.toLowerCase()] ?? 0;
			return acc;
		},
		{} as Record<SocketCategory, number>,
	);
}
