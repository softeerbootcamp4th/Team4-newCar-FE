import { useSuspenseQuery } from '@tanstack/react-query';
import QUERY_KEYS from 'src/constants/queryKey.ts';

export type Quiz = { id: number; question: string; choices: { text: string }[] };

export default function useGetTeamTypeQuizzes() {
	// TODO: 빈 배열 내려올 경우 error handling
	const { data: quizzes } = useSuspenseQuery<Quiz[]>({
		queryKey: [QUERY_KEYS.TEAM_TYPE_QUIZ],
		queryFn: fetchMockData,
	});
	return { quizzes };
}

const fetchMockData = (): Promise<Quiz[]> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: 1,
					question: '오늘은 나들이 가는 날!\n나의 드라이브 스타일은?',
					choices: [
						{ text: '반려동물과 함께하는 드라이브' },
						{ text: '음악과 함께하는 혼자만의 드라이브' },
					],
				},
				{
					id: 2,
					question: '오랜만에 찾아온 주말,\n나만의 힐링 방법은?',
					choices: [
						{ text: '초록초록 자연 속에서 피톤치드 마시기' },
						{ text: '시원한 에어컨 아래에서 아아 마시기' },
					],
				},
				{
					id: 3,
					question: '나의 가방 속 물건은?',
					choices: [
						{ text: '가방 따위 필요 없다! 맨손으로 나들이 가기' },
						{ text: '무엇이든 준비됐어! 바리바리스타' },
					],
				},
				{
					id: 4,
					question: '나의 자전거 라이딩 스타일은?',
					choices: [{ text: '스릴만점! 산악 라이딩' }, { text: '자전거로 여유롭게 공원 한 바퀴!' }],
				},
			]);
		}, 1000);
	});
