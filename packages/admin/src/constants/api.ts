// export const BASE_URL = 'http://localhost:5173/src/services/api/mock';
export const BASE_URL = 'http://172.30.1.22:8080/admin';
// export const BASE_URL = 'http://ec2-52-78-125-116.ap-northeast-2.compute.amazonaws.com:8080/admin';
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
	RACING_WINNERS = '/racing-winners',
	PERSONALITY_TEST_LIST = '/personality-test-list',
	PERSONALITY_TEST = '/personality-test',
}

export const API_DEFAULT_HEADER = {
	headers: { 'Content-Type': 'application/json' },
};
