/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { Category } from '@softeer/common/types';
import { useMutation } from '@tanstack/react-query';
import useTokenStorage from 'src/hooks/storage/useTokenStorage.ts';
import useAuth from 'src/hooks/useAuth.tsx';

type QuizId = number;
type ChoiceIndex = number;
export type SubmitQuizAnswersRequest = Record<QuizId, ChoiceIndex>;

export interface SubmitQuizAnswersResponse {
	team: Category;
	accesstoken:string
}

export default function useSubmitTeamTypeQuizAnswers() {
	const { setAuthData } = useAuth();
	const [_, setToken] = useTokenStorage();

	const mutation = useMutation<SubmitQuizAnswersResponse, Error, SubmitQuizAnswersRequest>({
		mutationFn: submitMockData,
		onSuccess: ({ team, accesstoken }) => {
			// TODO: replace
			// setAuthData({ userData: { ...user, type } });
			const mockUser = { id: 1, name: '보민', type: team };
			setToken(accesstoken);
			setAuthData({ userData: mockUser });
		},
	});

	return mutation;
}

const submitMockData = (): Promise<SubmitQuizAnswersResponse> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({ team: 'travel', accesstoken: 'mock-access-token' });
		}, 4000);
	});
