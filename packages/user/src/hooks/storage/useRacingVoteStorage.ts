import STORAGE_KEYS from 'src/constants/storageKey.ts';
import useStorage from 'src/hooks/storage/index.ts';
import type { VoteStatus } from 'src/types/racing.d.ts';

const INIT_VOTE: VoteStatus = {
	pet: 0,
	place: 0,
	travel: 0,
	leisure: 0,
};

const useRacingVoteStorage = () => useStorage<VoteStatus>(STORAGE_KEYS.RANK, INIT_VOTE);

export default useRacingVoteStorage;
