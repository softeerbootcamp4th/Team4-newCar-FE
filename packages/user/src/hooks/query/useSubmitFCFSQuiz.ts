/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useMutation } from '@tanstack/react-query';

export type SubmitFCFSQuizAnswerRequest = { answer: number };

/** success 는 따로 status 내려주지 않음 */
export interface SubmitFCFSQuizResponse {
	status: 'WRONG' | 'END' | 'PARTICIPATED';
}

export default function useSubmitFCFSQuiz() {
	const mutation = useMutation<SubmitFCFSQuizResponse, Error, SubmitFCFSQuizAnswerRequest>({
		mutationFn: submitMockData,
	});

	return mutation;
}

const submitMockData = (): Promise<SubmitFCFSQuizResponse> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({ status: 'END' });
		}, 2000);
	});
