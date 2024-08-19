import { Category, ServerCategoryEnum } from '@softeer/common/types';

const serverTeamEnumToClient: Record<ServerCategoryEnum, Category> = {
	LEISURE: 'leisure',
	SPACE: 'place',
	PET: 'pet',
	TRAVEL: 'travel',
};

export default serverTeamEnumToClient;
