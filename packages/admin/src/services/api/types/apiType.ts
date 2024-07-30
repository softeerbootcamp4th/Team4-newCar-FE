import { API } from 'src/constants/api';

export interface Payload {
	[API.COMMON_EVENT]: Record<string, never>;
}

export type FetchDataRequestOptions<K extends keyof Payload> = {
	path: K;
	payload?: Payload[K];
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: HeadersInit;
};
