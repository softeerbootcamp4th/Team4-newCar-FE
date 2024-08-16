/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useMutation } from '@tanstack/react-query';
import useAuth from 'src/hooks/useAuth.tsx';
import { useToast } from 'src/hooks/useToast.ts';
import http from 'src/services/api/index.ts';

export type SubmitLoginRequest = { userId: string; password: string };

export interface SubmitLoginResponse {
	accessToken: string;
}

const LOGIN_ERROR_TOAST_DESCRIPTION = '문제가 발생했습니다. 다시 시도해주세요.';

export default function useSubmitLogin() {
	const { setAuthData } = useAuth();

	const { toast } = useToast();

	const mutation = useMutation<SubmitLoginResponse, Error, SubmitLoginRequest>({
		mutationFn: (data: SubmitLoginRequest) => http.post('/login', data),
		onSuccess: ({ accessToken }, { userId: id }) => {
			setAuthData({ userData: { id, name: '캐스퍼' }, accessToken });
		},
		onError: () => toast({ description: LOGIN_ERROR_TOAST_DESCRIPTION }),
	});

	return mutation;
}
