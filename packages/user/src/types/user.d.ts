import { Category } from 'src/types/category';

interface User {
	id: number;
	name: string;
	category: Category;
	shareUrl: string;
}

export type { Category, User };
