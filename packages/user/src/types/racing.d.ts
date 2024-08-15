import type { Category } from '@softeer/common/types';

const ranks = [1, 2, 3, 4] as const;
export type Rank = (typeof ranks)[number];

type SocketCategory = 'P' | 'T' | 'S' | 'L';

export type SocketData = Record<SocketCategory, number>;
export type VoteStatus = Record<Category, number>;
export type RankStatus = Record<Category, Rank>;
