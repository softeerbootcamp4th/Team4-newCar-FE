import type { SubmitQuizAnswersResponse } from 'src/hooks/query/useSubmitTeamTypeQuizAnswers.ts';
import { getShareLink } from 'src/utils/getShareLink.ts';

interface ResultStepProps extends SubmitQuizAnswersResponse {}

export default function ResultStep({ team }: ResultStepProps) {
	const url = getShareLink({ type: team });
	return url;
}
