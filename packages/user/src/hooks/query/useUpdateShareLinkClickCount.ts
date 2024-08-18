/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import { useToast } from 'src/hooks/useToast.ts';
import http from 'src/services/api/index.ts';

export type SubmitQuizAnswersRequest = { id: string };

export default function useUpdateShareLinkClickCount() {
	const navigate = useNavigate();
	const { toast } = useToast();
	const mutation = useMutation<null, Error, SubmitQuizAnswersRequest>({
		mutationFn: ({ id }) => http.post(`/share-link/${id}`),
		onSettled: () => navigate(RoutePaths.Home, { replace: true }),
		onError: () => toast({ description: '공유 링크 클릭 수 업데이트 중에 문제가 발생했습니다.' }),
	});

	return mutation;
}
