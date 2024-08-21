import { CATEGORIES } from '@softeer/common/constants';
import { lazy } from 'react';
import Button from 'src/components/common/Button.tsx';
import TriggerButtonWrapper from 'src/components/common/TriggerButtonWrapper.tsx';
import EXTERNAL_LINKS from 'src/constants/externalLinks.ts';
import TeamInfoCard from './TeamInfoCard.tsx';

const TeamDescriptionModal = lazy(
	() => import('src/components/shared/modal/TeamDescriptionModal.tsx'),
);

/** 팀 소개 섹션 */
export default function TeamsDescriptions() {
	const goDetailDescriptions = () => window.open(EXTERNAL_LINKS.CASPER_HOMEPAGE);

	return (
		<section className="snap-start bg-neutral-700 py-[160px]">
			<div className="flex flex-col items-center">
				<h2>팀 소개</h2>
				<h6 className="text-heading-11 font-medium">
					캐스퍼의 <strong className="text-primary">다양한 활용 방안</strong>
				</h6>
				<div className="my-15 group-description flex gap-[21px]">
					{CATEGORIES.map((type) => (
						<TeamDescriptionModal
							key={type}
							type={type}
							openTrigger={
								<TriggerButtonWrapper>
									<TeamInfoCard type={type} />
								</TriggerButtonWrapper>
							}
						/>
					))}
				</div>
				<Button className="underline" size="lg" onClick={goDetailDescriptions}>
					자세한 설명 보러가기
				</Button>
			</div>
		</section>
	);
}
