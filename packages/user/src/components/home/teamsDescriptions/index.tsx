import { CATEGORIES } from '@softeer/common';
import Button from 'src/components/common/Button';
import EXTERNAL_LINKS from 'src/constants/externalLinks';
import HoverAnimationWrapper from './HoverAnimationWrapper';
import TeamDescriptionModal from './teamDescriptionModal';
import TeamInfoCard from './TeamInfoCard';

/** 팀 소개 섹션 */
export default function TeamsDescriptions() {
	const goDetailDescriptions = () => window.open(EXTERNAL_LINKS.CASPER_HOMEPAGE);

	return (
		<section className="bg-neutral-700 py-[160px]">
			<div className="flex flex-col items-center">
				<h2>팀 소개</h2>
				<h6 className="text-heading-11 font-medium">
					캐스퍼의 <strong className="text-primary">다양한 활용 방안</strong>
				</h6>
				<div className="my-15 group flex gap-[21px]">
					{CATEGORIES.map((type) => (
						<TeamDescriptionModal
							key={type}
							type={type}
							openTrigger={
								<HoverAnimationWrapper>
									<TeamInfoCard type={type} />
								</HoverAnimationWrapper>
							}
						/>
					))}
				</div>
				<Button size="lg" onClick={goDetailDescriptions}>
					자세한 설명 보러가기
				</Button>
			</div>
		</section>
	);
}
