import { useSuspenseQuery } from '@tanstack/react-query';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type FCFSChoice = { num: number; text: string };
export type FCFSQuiz = { id: number; question: string; choices: FCFSChoice[] };

export default function useGetFCFSQuiz() {
	const { data: quiz } = useSuspenseQuery<FCFSQuiz>({
		queryKey: [QUERY_KEYS.FCFS_QUIZ],
		queryFn: () => http.get('/quiz'),
	});

	return { quiz };
}
