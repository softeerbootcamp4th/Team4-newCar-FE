import { Category } from '@softeer/common/types';
import type { User } from 'src/types/user.d.ts';

const DOMAIN: Record<Category | 'default', string> = {
	default: 'https://www.batro.org',
	leisure: 'https://leisure.batro.org',
	pet: 'https://pet.batro.org',
	travel: 'https://travel.batro.org',
	place: 'https://space.batro.org',
};

// eslint-disable-next-line import/prefer-default-export
export default function getSharedLink({ type }: Pick<User, 'type'>) {
	const domainType = type ?? 'default';
	return DOMAIN[domainType];
}
