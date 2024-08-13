import { ACCESS_TOKEN_KEY } from '@softeer/common/constants';
import { Cookie } from '@softeer/common/utils';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { API, METHOD } from 'src/constants/api.ts';
import { ErrorMessage, InfoMessage } from 'src/constants/message.ts';
import RoutePaths from 'src/constants/routePath.ts';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';
import fetchData from 'src/utils/fetchData.ts';

const useAuth = () => {
	const { openAlert } = useAlert();
	const navigate = useNavigate();
	const loginMutation = useMutation({
		mutationFn: async ({ adminId, password }: { adminId: string; password: string }) => {
			const response = await fetchData({
				path: API.LOGIN,
				method: METHOD.POST,
				payload: {
					adminId,
					password,
				},
			});
			return response;
		},
		onSuccess: (data) => {
			openAlert(InfoMessage.WELCOME, 'alert');
			navigate(RoutePaths.EVENT_PAGE);
			Cookie.setCookie(ACCESS_TOKEN_KEY, data.accessToken, 7);
		},
		onError: () => {
			openAlert(ErrorMessage.INVALID_INPUT, 'alert');
		},
	});

	const login = (adminId: string, password: string) => {
		loginMutation.mutate({ adminId, password });
	};

	const logout = () => {
		Cookie.setCookie(ACCESS_TOKEN_KEY, '', 0);
		navigate(RoutePaths.ROOT);
	};

	return {
		login,
		logout,
		loginMutation,
	};
};
export default useAuth;
