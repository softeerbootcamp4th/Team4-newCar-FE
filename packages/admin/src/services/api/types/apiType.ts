/* eslint-disable no-mixed-spaces-and-tabs */
import { API } from 'src/constants/api';

export interface Payload {
	[API.COMMON_EVENT]: Record<string, never>;
	[API.QUIZ]: Record<string, never>;
	[API.WINNERS]: Record<string, never>;
}

export interface CommonEvent {
	endTime: string;
	eventManager: string;
	eventName: string;
	startTime: string;
	status: string;
}

export interface Quiz {
	id: number
	winnerCount: number
	postDate: string
	question: string
	choice1: string
	choice2: string
	choice3: string
	choice4: string
	correctAnswer: number
}

export interface Winner {
	rank: number
	name: string
	phoneNumber: string
	clickNumber: number
	team: string
}

export interface Response {
	[API.COMMON_EVENT]: CommonEvent;
	[API.QUIZ]: Quiz[];
	[API.WINNERS]: Winner[];
}

export type FetchDataRequestOptions<K extends keyof Payload> = {
	path: K;
	payload?: Payload[K];
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: HeadersInit;
};
