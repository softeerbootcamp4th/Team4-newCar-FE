import type { ServerCategoryEnum } from '@softeer/common/types';
import { useMutation } from '@tanstack/react-query';
import serverTeamEnumToClient from 'src/constants/serverMapping.ts';
import useAuth from 'src/hooks/useAuth.ts';
import http from 'src/services/api/index.ts';
import type { User } from 'src/types/user.d.ts';

export type SubmitQuizAnswersRequest = { id: number; answer: number }[];

export interface SubmitQuizAnswersResponse {
	team: ServerCategoryEnum;
	accessToken: string;
	url: string;
}

export default function useSubmitTeamTypeQuizAnswers() {
	const { user, setAuthData } = useAuth();

	const mutation = useMutation<SubmitQuizAnswersResponse, Error, SubmitQuizAnswersRequest>({
		mutationFn: (data) => http.post('/personality-test', data),
		onSuccess: ({ accessToken, team }) => {
			const userData = {
				...(user as User),
				type: serverTeamEnumToClient[team],
			};

			setAuthData({ accessToken, userData });
		},
	});

	return mutation;
}
