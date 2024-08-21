import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { API, METHOD } from 'src/constants/api.ts';
import RoutePaths from 'src/constants/routePath.ts';
import {
	CommonEvent,
	PersonalityTest,
	Quiz,
	Response,
	WinnerSetting,
} from 'src/services/api/types/apiType.ts';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';
import fetchData from 'src/utils/fetchData.ts';

const useEvent = () => {
	const { openAlert } = useAlert();
	const navigate = useNavigate();

	const commonEventQuery = useSuspenseQuery<Response[API.COMMON_EVENT][METHOD.GET]>({
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

	const quizEventQuery = useSuspenseQuery<Response[API.QUIZ_LIST][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.QUIZ_LIST,
				method: METHOD.GET,
			});
			return response;
		},
		queryKey: [API.QUIZ_LIST],
	});

	const quizWinnerQuery = useSuspenseQuery<Response[API.QUIZ_WINNER][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.QUIZ_WINNER,
				method: METHOD.GET,
			});
			return response;
		},
		queryKey: [API.QUIZ_WINNER],
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
		onError: (error) => {
			openAlert(error.message, 'alert');
		},
	});

	const updateQuizEvent = (quizEvent: Quiz) => {
		quizEventMutation.mutate(quizEvent);
	};

	const racingWinnerQuery = useSuspenseQuery<Response[API.RACING_WINNERS][METHOD.GET]>({
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
		},
		onSettled: () => {
			navigate(RoutePaths.WINNER_RESULT);
		},
		onError: async (error) => {
			if (error.name !== 'SyntaxError') {
				openAlert(error.message, 'alert');
			}
		},
	});

	const updateRacingWinner = (winnerSettings: WinnerSetting[]) => {
		racingWinnerMutation.mutate(winnerSettings);
	};

	const personalityTestListQuery = useSuspenseQuery<
		Response[API.PERSONALITY_TEST_LIST][METHOD.GET]
	>({
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
		onError: (error) => {
			openAlert(error.message, 'alert');
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
		quizWinner: quizWinnerQuery.data,
		refetchQuizWinner: quizWinnerQuery.refetch,

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
