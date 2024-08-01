import { Category } from 'src/types/user';

export type TeamDescription = { label: string; details: string };

export const TEAM_DESCRIPTIONS: Record<Category, TeamDescription> = {
	pet: { label: '펫 프렌들리', details: '반려동물의 편안하고\n안전한 여행을 위한' },
	travel: { label: '여행의 정석', details: '아웃도어 활동을 쉽고 편하게' },
	place: { label: '공간활용의 기술', details: '많은 물건도 구석구석 알차게' },
	leisure: { label: '레저의 정석', details: '오프로드도 캐스퍼와 함께' },
} as const;
