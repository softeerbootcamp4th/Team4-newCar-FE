import { Category } from '@softeer/common/types';
import { useMutation } from '@tanstack/react-query';

interface Answer {
	id: number;
	choice: number;
}

export type SubmitQuizAnswersRequest = Answer[];

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
