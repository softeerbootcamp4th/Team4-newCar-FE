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

	const quizEventResult = useQuery<Response[API.QUIZ_LIST]>({
		queryFn: async () => {
			try {
				const response = await fetchData({
					path: API.QUIZ_LIST,
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
		queryKey: [API.QUIZ_LIST],
	});

	const racingWinnerResult = useQuery<Response[API.RACING_WINNERS]>({
		queryFn: async () => {
			try {
				const response = await fetchData({
					path: API.RACING_WINNERS,
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
		queryKey: [API.RACING_WINNERS],
	});

	const personalityTestListResult = useQuery<Response[API.PERSONALITY_TEST_LIST]>({
		queryFn: async () => {
			try {
				const response = await fetchData({
					path: API.PERSONALITY_TEST_LIST,
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
		queryKey: [API.PERSONALITY_TEST_LIST],
	});

	return {
		commonEvent: commonEventResult.data,
		quizEvent: quizEventResult.data,
		racingWinners: racingWinnerResult.data,
		personalityTestList: personalityTestListResult.data,
	};
};
export default useEvent;
