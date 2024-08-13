import { useMutation, useQuery } from '@tanstack/react-query';
import { API, METHOD } from 'src/constants/api.ts';
import {
	CommonEvent,
	PersonalityTest,
	Quiz,
	Response,
	WinnerSetting,
} from 'src/services/api/types/apiType.ts';
import fetchData from 'src/utils/fetchData.ts';

const useEvent = () => {
	// const { openAlert } = useAlert();

	const commonEventQuery = useQuery<Response[API.COMMON_EVENT][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.COMMON_EVENT,
				method: METHOD.GET,
			});
			return response;
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
			return response;
		},
		onSuccess: () => {
			commonEventQuery.refetch();
		},
	});

	const updateCommonEvent = (commonEvent: CommonEvent) => {
		commonEventMutation.mutate(commonEvent);
	};

	const quizEventQuery = useQuery<Response[API.QUIZ_LIST][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.QUIZ_LIST,
				method: METHOD.GET,
			});
			return response;
		},
		queryKey: [API.QUIZ_LIST],
	});

	const quizEventMutation = useMutation({
		mutationFn: async (quizEvent: Quiz) => {
			const tmp = quizEvent;
			delete tmp.postDate;
			const payload: Quiz = tmp;
			const response = await fetchData({
				path: API.QUIZ,
				method: METHOD.POST,
				payload,
			});
			return response;
		},
		onSuccess: () => {
			quizEventQuery.refetch();
		},
	});

	const updateQuizEvent = (quizEvent: Quiz) => {
		quizEventMutation.mutate(quizEvent);
	};

	const racingWinnerQuery = useQuery<Response[API.RACING_WINNERS][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.RACING_WINNERS,
				method: METHOD.GET,
			});
			return response;
		},
		queryKey: [API.RACING_WINNERS],
	});

	const racingWinnerMutation = useMutation({
		mutationFn: async (winnerSettings: WinnerSetting[]) => {
			const response = await fetchData({
				path: API.RACING_WINNERS,
				method: METHOD.POST,
				payload: winnerSettings,
			});
			return response;
			// response
			// openAlert(await response.text(), 'alert');
			// if (response.status === 200) {
			// 	openAlert('추첨이 완료되었습니다.', 'alert');
			// 	const result = await response.json();
			// 	return result;
			// }
		},
		onSuccess: () => {
			racingWinnerQuery.refetch();
		},
	});

	const updateRacingWinner = (winnerSettings: WinnerSetting[]) => {
		racingWinnerMutation.mutate(winnerSettings);
	};

	const personalityTestListQuery = useQuery<Response[API.PERSONALITY_TEST_LIST][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.PERSONALITY_TEST_LIST,
				method: METHOD.GET,
			});
			return response;
		},
		queryKey: [API.PERSONALITY_TEST_LIST],
	});

	const personalityTestMutation = useMutation({
		mutationFn: async (personalityTest: PersonalityTest) => {
			const response = await fetchData({
				path: API.PERSONALITY_TEST,
				method: METHOD.POST,
				payload: personalityTest,
			});
			return response;
		},
		onSuccess: () => {
			personalityTestListQuery.refetch();
		},
	});

	const updatePersonalityTest = (personalityTest: PersonalityTest) => {
		personalityTestMutation.mutate(personalityTest);
	};

	return {
		commonEvent: commonEventQuery.data,
		updateCommonEvent,
		refechCommonEvent: commonEventQuery.refetch,
		quizEvent: quizEventQuery.data,
		updateQuizEvent,
		refechQuizEvent: quizEventQuery.refetch,
		racingWinners: racingWinnerQuery.data,
		refetchRacingWinners: racingWinnerQuery.refetch,
		updateRacingWinner,
		personalityTestList: personalityTestListQuery.data,
		updatePersonalityTest,
		refetchPersonalityTestList: personalityTestListQuery.refetch,
	};
};
export default useEvent;
