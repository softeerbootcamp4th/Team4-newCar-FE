import type { Category } from '@softeer/common/types';

type TeamDescriptions = { title: string; subTitle: string; shortTitle?: string; details: string };

// eslint-disable-next-line import/prefer-default-export
export const TEAM_DESCRIPTIONS: Record<Category, TeamDescriptions> = {
	pet: {
		title: '펫 프렌들리',
		subTitle: '반려동물의 편안하고\n안전한 여행을 위한',
		details:
			'주행 중 반려견의 안전한 차량 거주를 위한 넉넉한 사이즈의 켄넬, 청결한 차량 관리를 위한 파티션 보드 방오 커버, 2열 방오 매트를 제공합니다. 캐스퍼 밴 전용 켄넬, 사다리를 활용하면 대형견도 안전한 여행을 함께할 수 있어요.',
	},
	travel: {
		title: '여행의 정석',
		subTitle: '아웃도어 활동을 쉽고 편하게',
		details:
			'1열, 2열 풀폴딩 시트와 함께 캠핑, 피크닉 상품이 더해지면 캐스퍼의 다양한 활용성이 더 확대됩니다. 동승석 시트백 보드 트레이와 에어매트, 사이드 어닝&크로스 바와 함께 아웃도어 활동을 쉽고 편하게 즐겨보세요.',
	},
	place: {
		title: '공간 활용의 기술',
		shortTitle: '공간 활용',
		subTitle: '많은 물건도 구석구석 알차게',
		details:
			'루프박스와 바스켓, 러기지 박스로 캐스퍼의 공간을 알차게 활용해보세요. 캐스퍼 일렉트릭 전용 상품인 에어백 스토리지, 동승석 시트백 보드 테이블 2.0을 활용하면 많은 물건도 깔끔하게 보관할 수 있습니다.',
	},
	leisure: {
		title: '레저의 정석',
		subTitle: '오프로드도 캐스퍼와 함께',
		details:
			'오프로드의 정석을 느끼게 해줄 다양한 액세서리를 캐스퍼에 적용해보세요.  자전거와 함께할 수 있도록 돕는 루프 자전거 캐리어, 험한 길도 끄떡없는 스틸 언더커버를 제공합니다.',
	},
} as const;
