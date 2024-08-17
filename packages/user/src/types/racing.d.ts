import type { Category } from '@softeer/common/types';

const ranks = [1, 2, 3, 4] as const;
export type Rank = (typeof ranks)[number];

type SocketCategory = 'p' | 't' | 's' | 'l';
export type VoteStatus = Record<Category, number>;
