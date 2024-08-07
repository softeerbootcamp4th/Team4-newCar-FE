import { useMutation } from '@tanstack/react-query';
import { API, METHOD } from 'src/constants/api.ts';
import fetchData from 'src/utils/fetchData.ts';

const useAuth = () => {
    const loginMutation = useMutation({
        mutationFn: async ({ adminId, password }:{ adminId: string, password: string }) => {
            const response = await fetchData({
                path: API.LOGIN,
                method: METHOD.POST,
                payload: {
                    adminId,
                    password,
                },
            });
            const result = await response.json();
            return result;
        },
        onSuccess: () => {
            console.log('login');
        },
    });

    const login = (adminId: string, password: string) => {
        loginMutation.mutate({ adminId, password });
    };

    return {
        login,
        loginMutation,
    };
};
export default useAuth;
