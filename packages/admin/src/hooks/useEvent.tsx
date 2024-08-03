import { useMutation, useQuery } from '@tanstack/react-query';
import { API, METHOD } from 'src/constants/api';
import { CommonEvent, Quiz, Response } from 'src/services/api/types/apiType';
import fetchData from 'src/utils/fetchData';

const useEvent = () => {
	const commonEventQuery = useQuery<Response[API.COMMON_EVENT][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.COMMON_EVENT,
				method: METHOD.GET,
			});
			const result = await response.json();
			return result;
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
			commonEventQuery.refetch();
		},
	});

	const updateCommonEvent = async (commonEvent: CommonEvent) => {
		commonEventMutation.mutate(commonEvent);
	};

	const quizEventQuery = useQuery<Response[API.QUIZ_LIST][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.QUIZ_LIST,
				method: METHOD.GET,
			});
			const result = await response.json();
			return result;
		},
		queryKey: [API.QUIZ_LIST],
	});

	const quizEventMutation = useMutation({
		mutationFn: async (quizEvent: Quiz) => {
			const response = await fetchData({
				path: API.QUIZ,
				method: METHOD.POST,
				payload: quizEvent,
			});
			const result = await response.json();
			return result;
		},
		onSuccess: () => {
			quizEventQuery.refetch();
		},
	});

	const updateQuizEvent = async (quizEvent: Quiz) => {
		quizEventMutation.mutate(quizEvent);
	};

	const racingWinnerResult = useQuery<Response[API.RACING_WINNERS][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.RACING_WINNERS,
				method: METHOD.GET,
			});
			const result = await response.json();
			return result;
		},
		queryKey: [API.RACING_WINNERS],
	});

	const personalityTestListResult = useQuery<Response[API.PERSONALITY_TEST_LIST][METHOD.GET]>({
		queryFn: async () => {
			const response = await fetchData({
				path: API.PERSONALITY_TEST_LIST,
				method: METHOD.GET,
			});
			const result = await response.json();
			return result;
		},
		queryKey: [API.PERSONALITY_TEST_LIST],
	});

	return {
		commonEvent: commonEventQuery.data,
		updateCommonEvent,
		quizEvent: quizEventQuery.data,
		updateQuizEvent,
		refechQuizEvent: quizEventQuery.refetch,
		racingWinners: racingWinnerResult.data,
		personalityTestList: personalityTestListResult.data,
	};
};
export default useEvent;
