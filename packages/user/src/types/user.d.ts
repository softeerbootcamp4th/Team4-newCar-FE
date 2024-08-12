import type { Category } from '@softeer/common/types';

export interface User {
	id: number;
	name: string;
	type?: Category;
}
