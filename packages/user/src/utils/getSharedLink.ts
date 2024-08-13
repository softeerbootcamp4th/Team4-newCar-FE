import { Category } from '@softeer/common/types';
import { User } from 'src/types/user.js';

const DOMAIN: Record<Category | 'default', string> = {
	default: 'https://www.batro.org',
	leisure: 'https://leisure.batro.org',
	pet: 'https://pet.batro.org',
	travel: 'https://travel.batro.org',
	place: 'https://space.batro.org',
};

// eslint-disable-next-line import/prefer-default-export
export function getSharedLink({ type }: Pick<User, 'type'>) {
	const domainType = type ?? 'default';
	return DOMAIN[domainType];
}
