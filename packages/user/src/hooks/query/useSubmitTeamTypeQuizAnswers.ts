import { Category } from '@softeer/common/types';
import { useMutation } from '@tanstack/react-query';
import useAuth from 'src/hooks/useAuth.tsx';

type QuizId = number;
type ChoiceIndex = number;
export type SubmitQuizAnswersRequest = Record<QuizId, ChoiceIndex>;

export interface SubmitQuizAnswersResponse {
	type: Category;
}

export default function useSubmitTeamTypeQuizAnswers() {
	const { setAuthData } = useAuth();

	const mutation = useMutation<SubmitQuizAnswersResponse, Error, SubmitQuizAnswersRequest>({
		mutationFn: submitMockData,
		onSuccess: ({ type }) => {
			// TODO: replace
			// setAuthData({ userData: { ...user, type } });
			const mockUser = { id: 1, name: '보민', type };
			setAuthData({ userData: mockUser });
		},
	});

	return mutation;
}

const submitMockData = (): Promise<SubmitQuizAnswersResponse> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({ type: 'travel' });
		}, 4000);
	});
