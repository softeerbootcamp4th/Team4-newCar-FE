import { useSuspenseQuery } from '@tanstack/react-query';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type Quiz = { id: number; question: string; choices: string[] };

export default function useGetTeamTypeQuizzes() {
	const { data: quizzes } = useSuspenseQuery<Quiz[]>({
		queryKey: [QUERY_KEYS.TEAM_TYPE_QUIZ],
		queryFn: () => http.get('/personality-test-list'),
	});

	return { quizzes };
}
