import { API_BASE_URL } from './environments.js';

export const BASE_URL = API_BASE_URL;

export const enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export const enum API {
	COMMON_EVENT = '/common-event',
	QUIZ_LIST = '/quiz-list',
	QUIZ = '/quiz',
	QUIZ_WINNER = '/quiz-winner',
	RACING_WINNERS = '/racing-winners',
	PERSONALITY_TEST_LIST = '/personality-test-list',
	PERSONALITY_TEST = '/personality-test',
	LOGIN = '/login',
}

export const API_DEFAULT_HEADER = {
	headers: { 'Content-Type': 'application/json' },
};
