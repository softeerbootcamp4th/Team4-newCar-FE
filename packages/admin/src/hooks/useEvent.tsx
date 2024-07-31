import { useQuery } from '@tanstack/react-query';
import { API } from 'src/constants/api';
import { Response } from 'src/services/api/types/apiType';
import fetchData from 'src/utils/fetchData';

const useEvent = () => {
	const commonEventResult = useQuery<Response[API.COMMON_EVENT]>({
		queryFn: async () => {
			try {
				const response = await fetchData({
					path: API.COMMON_EVENT,
					method: 'GET',
				});
				const result = await response.json();
				return result;
			} catch (err) {
				console.log(err);
				// 핸들링 필요함
				// 백엔드 배포 되면 해야징~
			}
		},
		queryKey: [API.COMMON_EVENT],
	});

	const quizEventResult = useQuery<Response[API.QUIZ]>({
		queryFn: async () => {
			try {
				const response = await fetchData({
					path: API.QUIZ,
					method: 'GET',
				});
				const result = await response.json();
				return result;
			} catch (err) {
				console.log(err);
				// 핸들링 필요함
				// 백엔드 배포 되면 해야징~
			}
		},
		queryKey: [API.QUIZ],
	});

	const eventWinnerResult = useQuery<Response[API.WINNERS]>({
		queryFn: async () => {
			try {
				const response = await fetchData({
					path: API.WINNERS,
					method: 'GET',
				});
				const result = await response.json();
				return result;
			} catch (err) {
				console.log(err);
				// 핸들링 필요함
				// 백엔드 배포 되면 해야징~
			}
		},
		queryKey: [API.WINNERS],
	});

	return {
		commonEvent: commonEventResult.data,
		quizEvent: quizEventResult.data,
		eventWinners: eventWinnerResult.data,
	};
};
export default useEvent;
