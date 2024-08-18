import type { ServerCategoryEnum } from '@softeer/common/types';
import { useMutation } from '@tanstack/react-query';
import useAuth from 'src/hooks/useAuth.ts';
import { queryClient } from 'src/libs/query/index.tsx';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type SubmitQuizAnswersRequest = { id: number; answer: number }[];

export interface SubmitQuizAnswersResponse {
	team: ServerCategoryEnum;
	accessToken: string;
	url: string;
}

export default function useSubmitTeamTypeQuizAnswers() {
	const { setAuthData } = useAuth();

	const mutation = useMutation<SubmitQuizAnswersResponse, Error, SubmitQuizAnswersRequest>({
		mutationFn: (data) => http.post('/personality-test', data),
		onSuccess: ({ accessToken }) => {
			setAuthData({ accessToken });
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO] });
		},
	});

	return mutation;
}
