import type { Category } from '@softeer/common/types';

interface User {
	id: number;
	name: string;
	category: Category;
	shareUrl: string;
}

// eslint-disable-next-line import/prefer-default-export
export { User };
