/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { Category } from '@softeer/common/types';
import { useMutation } from '@tanstack/react-query';
import useAuth from 'src/hooks/useAuth.tsx';
import http from 'src/services/api/index.ts';
import type { User } from 'src/types/user.d.ts';

export type SubmitQuizAnswersRequest = { id: number; answer: number }[];

export interface SubmitQuizAnswersResponse {
	team: string;
	accessToken: string;
}

export default function useSubmitTeamTypeQuizAnswers() {
	const { user, setAuthData } = useAuth();

	const mutation = useMutation<SubmitQuizAnswersResponse, Error, SubmitQuizAnswersRequest>({
		mutationFn: (data) => http.post('/personality-test', data),
		onSuccess: ({ team, accessToken }) => {
			const type = team === 'SPACE' ? 'place' : team.toLowerCase();
			const userData = { ...(user as User), type: type.toLowerCase() as Category };
			setAuthData({ userData, accessToken });
		},
	});

	return mutation;
}
