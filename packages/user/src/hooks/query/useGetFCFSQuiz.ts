import { useSuspenseQuery } from '@tanstack/react-query';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type FCFSChoice = { num: number; text: string };
export type FCFSQuiz = { id: number; question: string; choices: FCFSChoice[] };

export default function useGetFCFSQuiz() {
	const { data: quiz } = useSuspenseQuery<FCFSQuiz>({
		queryKey: [QUERY_KEYS.FCFS_QUIZ],
		queryFn: fetchMockData,
	});

	return { quiz };
}

const fetchMockData = (): Promise<FCFSQuiz> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: 5,
				question: '질문',
				choices: [
					{
						num: 0,
						text: '보기1번',
					},
					{
						num: 1,
						text: '보기2번',
					},
					{
						num: 2,
						text: '보기3번',
					},
					{
						num: 3,
						text: '보기4번',
					},
				],
			});
		}, 1000);
	});
