export const BASE_URL = 'http://localhost:5173/src/services/api/mock';

export const enum API {
	COMMON_EVENT = '/common-event.json',
	QUIZ_LIST = '/quiz-list.json',
	RACING_WINNERS = '/racing-winners.json',
	PERSONALITY_TEST_LIST = '/personality-test-list.json',
}

export const API_DEFAULT_HEADER = {
	headers: { 'Content-Type': 'application/json' },
};
