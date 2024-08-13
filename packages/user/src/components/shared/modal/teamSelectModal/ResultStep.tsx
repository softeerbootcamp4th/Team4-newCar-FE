import type { SubmitQuizAnswersResponse } from 'src/hooks/query/useSubmitTeamTypeQuizAnswers.ts';

interface ResultStepProps extends SubmitQuizAnswersResponse {}

export default function ResultStep({ type, link }: ResultStepProps) {
	return (
		<>
			{type}
			{link}
		</>
	);
}
