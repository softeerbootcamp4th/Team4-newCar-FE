import type { Category } from '@softeer/common/types';

interface User {
	id: number;
	name: string;
	type: Category;
	shareUrl?: string | null;
}

// eslint-disable-next-line import/prefer-default-export
export { User };
