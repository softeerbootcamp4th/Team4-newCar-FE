import STORAGE_KEYS from 'src/constants/storageKey.ts';
import useStorage from 'src/hooks/storage/index.ts';
import type { RankStatus } from 'src/types/racing.d.ts';

const INIT_RANK: RankStatus = {
	pet: 1,
	place: 2,
	travel: 3,
	leisure: 4,
};

const useRacingRankStorage = () => useStorage<RankStatus | null>(STORAGE_KEYS.RANK, INIT_RANK);

export default useRacingRankStorage;
