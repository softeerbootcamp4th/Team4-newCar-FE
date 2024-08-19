import { Category } from '@softeer/common/types';
import type { User } from 'src/types/user.d.ts';

const DOMAIN: Record<Category | 'default', string> = {
	default: 'www.batro.org',
	leisure: 'leisure.batro.org',
	pet: 'pet.batro.org',
	travel: 'travel.batro.org',
	place: 'space.batro.org',
};

export default function getSharedLink({
	type,
	encryptedUserId,
}: Pick<User, 'type' | 'encryptedUserId'>) {
	const url = type ? `${DOMAIN[type]}/${encryptedUserId}` : DOMAIN.default;
	return url;
}
