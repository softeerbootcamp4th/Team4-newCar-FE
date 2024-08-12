import { Category } from '@softeer/common/types';
import LinkShare from 'src/components/shared/linkShare/index.tsx';
import RacingTeamCard from 'src/components/shared/RacingTeamCard.tsx';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import type { SubmitQuizAnswersResponse } from 'src/hooks/query/useSubmitTeamTypeQuizAnswers.ts';

interface ResultStepProps extends SubmitQuizAnswersResponse {}

export default function ResultStep({ team: type }: ResultStepProps) {
	const { details } = TEAM_DESCRIPTIONS[type];
	const title = TITLE[type];
	const { titleStyles, detailsStyles } = styles[type];

	return (
		<div className="grid h-full grid-flow-row items-center justify-start gap-11 p-[30px] sm:p-[50px] md:grid-flow-col lg:p-[70px]">
			<RacingTeamCard type={type} size="modal" />
			<div className="flex h-full max-w-[400px] flex-col items-start justify-between gap-10 pb-[50px] pt-[20px] sm:max-w-[500px] md:max-h-[400px] md:pb-[10px] lg:max-w-[490px]">
				<div>
					<p className={`${titleStyles} text-heading-8 mb-6 whitespace-pre-line font-bold`}>
						{title}
					</p>
					<p className={`text-body-3 ${detailsStyles} break-words break-all`}>{details}</p>
				</div>
				<div className="w-full">
					<p className="text-body-3 mb-4 w-full">내 링크 공유하고 추첨 당첨확률을 높여보세요!</p>
					<LinkShare category={type} />
				</div>
			</div>
		</div>
	);
}

const TITLE = {
	pet: (
		<>
			당신은 동물을 사랑하는
			<br />
			<strong className="text-foreground">펫 프렌들리</strong> 유형!
		</>
	),
	place: (
		<>
			차량 내부 <strong className="text-foreground">공간 활용</strong>이<br /> 뛰어난 유형!
		</>
	),
	travel: (
		<>
			캠핑과 피크닉을 즐기는
			<br />
			<strong className="text-foreground">여행의 정석</strong> 유형!
		</>
	),
	leisure: (
		<>
			오프로드와 액티비티를 즐기는
			<br />
			<strong className="text-foreground">레저의 정석</strong> 유형!
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
		detailsStyles: 'text-yello-100',
	},
	travel: {
		titleStyles: 'text-orange-300',
		detailsStyles: 'text-orange-100',
	},
	leisure: {
		titleStyles: 'text-gray-500',
		detailsStyles: 'text-foreground',
	},
};
