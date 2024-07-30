const categories = ['pet', 'place', 'travel', 'leisure'] as const;

type Category = (typeof categories)[number];
interface User {
	id: number;
	name: string;
	category: Category;
	shareUrl: string;
}

export type { Category, User };
