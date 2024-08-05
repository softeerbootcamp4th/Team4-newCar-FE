import type { Category } from '@softeer/common';
import Modal, { ModalProps } from 'src/components/common/Modal';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions';

const TEAM_DETAILS: Record<Category, string> = {
	pet: '주행 중 반려견의 안전한 차량 거주를 위한 넉넉한 사이즈의 켄넬, 청결한 차량 관리를 위한 파티션 보드 방오 커버, 2열 방오 매트를 제공합니다. 캐스퍼 밴 전용 켄넬, 사다리를 활용하면 대형견도 안전한 여행을 함께할 수 있어요.',
	place:
		'루프박스와 바스켓, 러기지 박스로 캐스퍼의 공간을 알차게 활용해보세요. 캐스퍼 일렉트릭 전용 상품인 에어백 스토리지, 동승석 시트백 보드 테이블 2.0을 활용하면 많은 물건도 깔끔하게 보관할 수 있습니다.',
	travel:
		'1열, 2열 풀폴딩 시트와 함께 캠핑, 피크닉 상품이 더해지면 캐스퍼의 다양한 활용성이 더 확대됩니다. 동승석 시트백 보드 트레이와 에어매트, 사이드 어닝&크로스 바와 함께 아웃도어 활동을 쉽고 편하게 즐겨보세요.',
	leisure:
		'오프로드의 정석을 느끼게 해줄 다양한 액세서리를 캐스퍼에 적용해보세요.  자전거와 함께할 수 있도록 돕는 루프 자전거 캐리어, 험한 길도 끄떡없는 스틸 언더커버를 제공합니다.',
} as const;

interface TeamDescriptionModalProps extends ModalProps {
	type: Category;
}

export default function TeamDescriptionModal({ type, openTrigger }: TeamDescriptionModalProps) {
	const { title, summary } = TEAM_DESCRIPTIONS[type];
	const content = TEAM_DETAILS[type];

	const imageBaseUrl = `/src/assets/images/team-modal/${type}`;

	return (
		<Modal openTrigger={openTrigger}>
			<div className="flex flex-col items-center justify-center px-[75px]">
				<div className="flex flex-col items-center gap-2.5">
					<h6 className="text-heading-11 font-medium text-neutral-100">{summary}</h6>
					<h3>{title}</h3>
				</div>
				<div className="my-[20px] inline-flex h-[241px]">
					<DescriptionImage src={`${imageBaseUrl}-1.png`} />
					<DescriptionImage src={`${imageBaseUrl}-2.png`} />
				</div>
				<p className="text-body-4 text-neutral-100">{content}</p>
			</div>
		</Modal>
	);
}

function DescriptionImage({ src }: { src: string }) {
	return <img src={src} alt="팀 소개" className="h-full w-full object-cover" />;
}
