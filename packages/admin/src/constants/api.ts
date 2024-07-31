export const BASE_URL = 'http://localhost:5173/src/services/api/mock';

export const enum API {
	COMMON_EVENT = '/common-event.json',
	QUIZ = '/quiz.json',
	WINNERS = '/winners.json',
}

export const API_DEFAULT_HEADER = {
	headers: { 'Content-Type': 'application/json' },
};
