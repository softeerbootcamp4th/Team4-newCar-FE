/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { Category } from '@softeer/common/types';
import { useMutation } from '@tanstack/react-query';
import useTokenStorage from 'src/hooks/storage/useTokenStorage.ts';
import useAuth from 'src/hooks/useAuth.tsx';
import http from 'src/services/api/index.ts';
import type { User } from 'src/types/user.d.ts';

export type SubmitQuizAnswersRequest = { id:number, answer: number }[];

export interface SubmitQuizAnswersResponse {
	team: string;
	accessToken: string;
}

export default function useSubmitTeamTypeQuizAnswers() {
	const { user, setAuthData } = useAuth();
	const [_, setToken] = useTokenStorage();

	const mutation = useMutation<SubmitQuizAnswersResponse, Error, SubmitQuizAnswersRequest>({
		mutationFn: (data: SubmitQuizAnswersRequest) => http.post('/personailty-test', data),
		onSuccess: ({ team, accessToken }) => {
			const type = team === 'SPACE' ? 'place' : team;
			const userData = { ...(user as User), type: type.toLowerCase() as Category };

			setToken(accessToken);
			setAuthData({ userData });
		},
	});

	return mutation;
}
