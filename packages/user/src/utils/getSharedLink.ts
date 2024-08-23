import { Category } from '@softeer/common/types';
import type { User } from 'src/types/user.d.ts';

const DOMAIN: Record<Category | 'default', string> = {
	default: 'https://www.batro.org',
	leisure: 'https://leisure.batro.org',
	pet: 'https://pet.batro.org',
	travel: 'https://travel.batro.org',
	place: 'https://space.batro.org',
};

export default function getSharedLink({
	type,
	encryptedUserId,
}: Pick<User, 'type' | 'encryptedUserId'>) {
	const url = type ? `${DOMAIN[type]}/${encryptedUserId}` : DOMAIN.default;
	return url;
}
