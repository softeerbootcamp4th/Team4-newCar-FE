import type { Category } from '@softeer/common/types';

interface User {
	id: number;
	name: string;
	category: Category;
	shareUrl: string;
}

export default User;
