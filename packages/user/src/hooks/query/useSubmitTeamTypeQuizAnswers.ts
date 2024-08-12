import { Category } from '@softeer/common/types';
import { useMutation } from '@tanstack/react-query';

type QuizId = number;
type ChoiceIndex = number;
export type SubmitQuizAnswersRequest = Record<QuizId, ChoiceIndex>;

export interface SubmitQuizAnswersResponse {
	type: Category;
	link: string;
}

export default function useSubmitTeamTypeQuizAnswers() {
	const mutation = useMutation<SubmitQuizAnswersResponse, Error, SubmitQuizAnswersRequest>({
		mutationFn: submitMockData,
	});

	return mutation;
}

const submitMockData = (): Promise<SubmitQuizAnswersResponse> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				type: 'travel',
				link: 'http://travel.batro.org',
			});
		}, 4000);
	});
