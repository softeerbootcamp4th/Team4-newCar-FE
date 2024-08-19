import type { Category } from '@softeer/common/types';

export interface User {
	id: string;
	name: string;
	type: Category | null | undefined;
	encryptedUserId?: string | null | undefined;
}
