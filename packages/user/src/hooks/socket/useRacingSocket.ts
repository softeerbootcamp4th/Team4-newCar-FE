import { Category } from '@softeer/common/types';
import { SocketSubscribeCallbackType } from '@softeer/common/utils';
import { useState } from 'react';

export type UseRacingSocketReturnType = ReturnType<typeof useRacingSocket>;

const ranks = [1, 2, 3, 4] as const;
export type Rank = (typeof ranks)[number];

type SocketCategory = 'P' | 'T' | 'S' | 'L';

type SocketData = Record<SocketCategory, { rank: Rank; count: bigint | number }>;
type VoteStatus = Record<Category, { rank: Rank; count: bigint | number }>;

const categoryMapping: Record<SocketCategory, Category> = {
    P: 'pet',
    T: 'travel',
    S: 'place',
    L: 'leisure',
};

const INIT_STATUS: VoteStatus = {
	pet: { rank: 1, count: 0 },
	place: { rank: 2, count: 0 },
	travel: { rank: 3, count: 0 },
	leisure: { rank: 4, count: 0 },
};

export default function useRacingSocket() {
	const [chargedCar, setChargedCar] = useState<Category | null>(null);

	const [status, setStatus] = useState<VoteStatus>(INIT_STATUS);

	const handleChangeStatus :SocketSubscribeCallbackType = (data: unknown) => {
		const parsedData = parseSocketData(data as SocketData);
		setStatus(parsedData);
	};

	return { chargedCar, status, onChangeStatus: handleChangeStatus, onChargeCar: setChargedCar };
}

/** utils */

function parseSocketData(data: SocketData): VoteStatus {
	return Object.entries(data).reduce((acc, [socketCategory, value]) => {
			const categoryKey = categoryMapping[socketCategory as SocketCategory];
			acc[categoryKey] = value;
			return acc;
	}, {} as VoteStatus);
}
