import { Category } from '@softeer/common/types';
import { FunctionComponent, PropsWithChildren } from 'react';
import LinkShare from 'src/components/shared/linkShare/index.tsx';
import RacingTeamCard from 'src/components/shared/RacingTeamCard.tsx';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import type { SubmitQuizAnswersResponse } from 'src/hooks/query/useSubmitTeamTypeQuizAnswers.ts';

interface ResultStepProps extends SubmitQuizAnswersResponse {}

export default function ResultStep({ team: type }: ResultStepProps) {
	const { title, shortTitle, details } = TEAM_DESCRIPTIONS[type];
	const displayTitle = shortTitle ?? title;

	const CategoryTitleTemplate = TITLE[type];
	const { titleStyles, detailsStyles } = styles[type];

	return (
		<div className="grid h-full items-center gap-11 p-8 sm:p-12 md:grid-flow-col lg:p-16">
			<RacingTeamCard type={type} size="modal" />
			<div className="flex h-full max-w-lg flex-col justify-between gap-10 pb-12 pt-5 sm:max-w-xl md:max-h-[400px] md:pb-2">
				<div>
					<p className={`${titleStyles} text-heading-8 mb-6 whitespace-pre-line font-bold`}>
						<CategoryTitleTemplate>
							<strong className="text-foreground">{displayTitle}</strong>
						</CategoryTitleTemplate>
					</p>
					<p className={`text-body-3 ${detailsStyles} break-words`}>{details}</p>
				</div>
				<div>
					<p className="text-body-3 mb-4">내 링크 공유하고 추첨 당첨확률을 높여보세요!</p>
					<LinkShare category={type} />
				</div>
			</div>
		</div>
	);
}

const TITLE: Record<Category, FunctionComponent<PropsWithChildren>> = {
	pet: ({ children }) => (
		<>
			당신은 동물을 사랑하는
			<br />
			{children} 유형!
		</>
	),
	place: ({ children }) => (
		<>
			차량 내부 {children}이<br /> 뛰어난 유형!
		</>
	),
	travel: ({ children }) => (
		<>
			캠핑과 피크닉을 즐기는
			<br />
			{children} 유형!
		</>
	),
	leisure: ({ children }) => (
		<>
			오프로드와 액티비티를 즐기는
			<br />
			{children} 유형!
		</>
	),
};

const styles: Record<Category, { titleStyles: string; detailsStyles: string }> = {
	place: {
		titleStyles: 'text-khaki-200',
		detailsStyles: 'text-khaki-100',
	},
	pet: {
		titleStyles: 'text-cream-700',
		detailsStyles: 'text-yellow-100',
	},
	travel: {
		titleStyles: 'text-orange-300',
		detailsStyles: 'text-orange-100',
	},
	leisure: {
		titleStyles: 'text-neutral-600',
		detailsStyles: 'text-neutral-100',
	},
};
