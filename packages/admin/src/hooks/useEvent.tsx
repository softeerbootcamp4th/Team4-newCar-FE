import { useMutation, useQuery } from '@tanstack/react-query';
import { API, METHOD } from 'src/constants/api';
import { CommonEvent, Response } from 'src/services/api/types/apiType';
import fetchData from 'src/utils/fetchData';

const useEvent = () => {
	const commonEventResult = useQuery<Response[API.COMMON_EVENT][METHOD.GET]>({
		queryFn: async () => {
			try {
				const response = await fetchData({
					path: API.COMMON_EVENT,
					method: METHOD.GET,
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

	const commonEventMutation = useMutation({
		mutationFn: async (commonEvent: CommonEvent) => {
			const response = await fetchData({
				path: API.COMMON_EVENT,
				method: METHOD.POST,
				payload: commonEvent,
			});
			const result = await response.json();
			return result;
		},
		onSuccess: () => {
			commonEventResult.refetch();
		},
	});

	const updateCommonEvent = async (commonEvent: CommonEvent) => {
		commonEventMutation.mutate(commonEvent);
	};

	// const POST /admin/common-event

	// {
	//   "eventName": "성락현",
	//   "eventManager": "배진환",
	//   "status": "COMPLETED",
	//   "startTime": "2024-02-28T11:11:11",
	//   "endTime": "2024-01-01T11:11:11"
	// }

	const quizEventResult = useQuery<Response[API.QUIZ_LIST][METHOD.GET]>({
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

	const racingWinnerResult = useQuery<Response[API.RACING_WINNERS][METHOD.GET]>({
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
			}
		},
		queryKey: [API.RACING_WINNERS],
	});

	const personalityTestListResult = useQuery<Response[API.PERSONALITY_TEST_LIST][METHOD.GET]>({
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
			}
		},
		queryKey: [API.PERSONALITY_TEST_LIST],
	});

	return {
		updateCommonEvent,
		commonEvent: commonEventResult.data,
		quizEvent: quizEventResult.data,
		racingWinners: racingWinnerResult.data,
		personalityTestList: personalityTestListResult.data,
	};
};
export default useEvent;
