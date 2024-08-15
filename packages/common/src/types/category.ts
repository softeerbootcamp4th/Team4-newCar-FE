import CATEGORIES from 'src/constants/categories.ts';

export type Category = (typeof CATEGORIES)[number];
export type SocketCategory = 'p' | 't' | 's' | 'l';
