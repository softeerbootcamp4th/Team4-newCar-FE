import { useMutation } from '@tanstack/react-query';
import http from 'src/services/api/index.ts';

export type SubmitFCFSQuizAnswerRequest = { answer: number };

export interface SubmitFCFSQuizResponse {
	status: 'WRONG' | 'END' | 'PARTICIPATED' | 'RIGHT';
}

export default function useSubmitFCFSQuiz() {
	const mutation = useMutation<SubmitFCFSQuizResponse, Error, SubmitFCFSQuizAnswerRequest>({
		mutationFn: (data) => http.post('/quiz-user', data),
	});

	return mutation;
}
