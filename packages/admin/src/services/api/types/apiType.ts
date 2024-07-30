/* eslint-disable no-mixed-spaces-and-tabs */
import { API } from 'src/constants/api';

export interface Payload {
	[API.COMMON_EVENT]: Record<string, never>;
	[API.QUIZ]: Record<string, never>;
}

export interface Response {
	[API.COMMON_EVENT]: {
		endTime: string;
		eventManager: string;
		eventName: string;
		startTime: string;
		status: string;
	};
	[API.QUIZ]: {
		id: number
		winnerCount: number
		postDate: string
		question: string
		choice1: string
		choice2: string
		choice3: string
		choice4: string
		correctAnswer: number
	  }[];
}

export type FetchDataRequestOptions<K extends keyof Payload> = {
	path: K;
	payload?: Payload[K];
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: HeadersInit;
};
