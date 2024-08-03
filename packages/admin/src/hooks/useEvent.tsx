import { useMutation, useQuery } from '@tanstack/react-query';
import { API, METHOD } from 'src/constants/api';
import { CommonEvent, PersonalityTest, Quiz, Response } from 'src/services/api/types/apiType';
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

	const racingWinnerQuery = useQuery<Response[API.RACING_WINNERS][METHOD.GET]>({
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

	const personalityTestListQuery = useQuery<Response[API.PERSONALITY_TEST_LIST][METHOD.GET]>({
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

	const personalityTestMutation = useMutation({
		mutationFn: async (personalityTest: PersonalityTest) => {
			const response = await fetchData({
				path: API.PERSONALITY_TEST,
				method: METHOD.POST,
				payload: personalityTest,
			});
			const result = await response.json();
			return result;
		},
		onSuccess: () => {
			personalityTestListQuery.refetch();
		},
	});

	const updatePersonalityTest = async (personalityTest: PersonalityTest) => {
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
		personalityTestList: personalityTestListQuery.data,
		updatePersonalityTest,
		refetchPersonalityTestList: personalityTestListQuery.refetch,
	};
};
export default useEvent;
