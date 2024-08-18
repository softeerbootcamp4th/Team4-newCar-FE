import { Category } from '@softeer/common/types';

export type SocketTeamEnum = 'TRAVEL' | 'SPACE' | 'LEISURE' | 'PET';

const serverTeamEnumToClient: Record<SocketTeamEnum, Category> = {
	LEISURE: 'leisure',
	SPACE: 'place',
	PET: 'pet',
	TRAVEL: 'travel',
};

export default serverTeamEnumToClient;
