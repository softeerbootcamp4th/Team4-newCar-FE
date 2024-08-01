/* eslint-disable no-mixed-spaces-and-tabs */
import { API } from 'src/constants/api';

export interface Payload {
	[API.COMMON_EVENT]: Record<string, never>;
	[API.QUIZ_LIST]: Record<string, never>;
	[API.RACING_WINNERS]: Record<string, never>;
	[API.PERSONALITY_TEST_LIST]: Record<string, never>;
}

export interface CommonEvent {
	endTime: string;
	eventManager: string;
	eventName: string;
	startTime: string;
	status: string;
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

export interface Response {
	[API.COMMON_EVENT]: CommonEvent;
	[API.QUIZ_LIST]: Quiz[];
	[API.RACING_WINNERS]: RacingWinner[];
	[API.PERSONALITY_TEST_LIST]: PersonalityTest[];
}

export type FetchDataRequestOptions<K extends keyof Payload> = {
	path: K;
	payload?: Payload[K];
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: HeadersInit;
};
