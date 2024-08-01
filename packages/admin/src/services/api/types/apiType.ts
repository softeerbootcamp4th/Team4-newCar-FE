/* eslint-disable no-mixed-spaces-and-tabs */
import { API, METHOD } from 'src/constants/api';

export interface CommonEvent {
	endTime: string;
	eventManager: string;
	eventName: string;
	startTime: string;
}

export interface Quiz {
	id: number;
	winnerCount: number;
	postDate: string;
	question: string;
	choice1: string;
	choice2: string;
	choice3: string;
	choice4: string;
	correctAnswer: number;
}

export interface RacingWinner {
	rank: number;
	name: string;
	phoneNumber: string;
	clickNumber: number;
	team: string;
}

export interface PersonalityTest {
	id: number;
	question: string;
	choice1: string;
	choice2: string;
	choice1_pet_score: number;
	choice1_travel_score: number;
	choice1_space_score: number;
	choice1_leisure_score: number;
	choice2_pet_score: number;
	choice2_travel_score: number;
	choice2_space_score: number;
	choice2_leisure_score: number;
}

export interface Payload {
	[API.COMMON_EVENT]: {
		[METHOD.GET]: Record<string, never>;
		[METHOD.POST]: CommonEvent;
	};
	[API.QUIZ_LIST]: {
		[METHOD.GET]: Record<string, never>;
	};
	[API.RACING_WINNERS]: {
		[METHOD.GET]: Record<string, never>;
	};
	[API.PERSONALITY_TEST_LIST]: {
		[METHOD.GET]: Record<string, never>;
	};
}

export interface Response {
	[API.COMMON_EVENT]: {
		[METHOD.GET]: CommonEvent;
	};
	[API.QUIZ_LIST]: {
		[METHOD.GET]: Quiz[];
	};
	[API.RACING_WINNERS]: {
		[METHOD.GET]: RacingWinner[];
	};
	[API.PERSONALITY_TEST_LIST]: {
		[METHOD.GET]: PersonalityTest[];
	};
}

export type FetchDataRequestOptions<K extends keyof Payload, T extends keyof Payload[K]> = {
	path: K;
	payload?: Payload[K][T];
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: HeadersInit;
};
