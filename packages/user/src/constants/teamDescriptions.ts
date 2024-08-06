import type { Category } from '@softeer/common/types';

export type TeamDescriptions = { title: string; summary: string };

export const TEAM_DESCRIPTIONS: Record<Category, TeamDescriptions> = {
	pet: {
		title: '펫 프렌들리',
		summary: '반려동물의 편안하고\n안전한 여행을 위한',
	},
	travel: {
		title: '여행의 정석',
		summary: '아웃도어 활동을 쉽고 편하게',
	},
	place: {
		title: '공간활용의 기술',
		summary: '많은 물건도 구석구석 알차게',
	},
	leisure: {
		title: '레저의 정석',
		summary: '오프로드도 캐스퍼와 함께',
	},
} as const;

export type HelmetOption = { image: string; description: string };

export const TEAM_HELMET_OPTIONS: Record<Category, HelmetOption> = {
	pet: {
		description: '펫 프렌들리\n반려동물의 편안하고\n안전한 여행을 위한',
		image: '/image/leisure.png',
	},
	travel: {
		description: '여행의 정석\n아웃도어 활동을 쉽고 편하게',
		image: '/image/pet.png',
	},
	place: {
		description: '공간활용의 기술\n많은 물건도 구석구석 알차게',
		image: '/image/place.png',
	},
	leisure: {
		description: '펫 프렌들리\n레저의 정석',
		image: '/image/travel.png',
	},
} as const;