import { ACCESS_TOKEN_KEY } from 'src/constants/api.ts';
import fetchWithInterceptors from 'src/utils/api/fetchInterceptors.ts';
import getCookie from 'src/utils/storage/cookie/getCookie.ts';

interface Interceptors {
	request?: (url: string, options: RequestInit) => Promise<RequestInit> | RequestInit;
	response?: <T>(response: Response) => Promise<T> | T;
}

export function generateDefaultHeaders(): HeadersInit {
	const headers: HeadersInit = {
		'Content-Type': 'application/json',
	};
	const accessToken = getCookie<string>(ACCESS_TOKEN_KEY);
	if (accessToken) {
		headers.Authorization = accessToken;
	}
	return headers;
}

export default class FetchWrapper {
	private baseUrl: string;

	private interceptors: Interceptors;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
		this.interceptors = {
			response: async <T>(response: Response): Promise<T> => {
				const textResult = await response.text();
				if (!response.ok) {
					throw new Error(textResult);
				}
				try {
					return JSON.parse(textResult);
				} catch (err) {
					throw new Error(textResult);
				}
			},
		};
	}

	private async request<T>(url: string, options: RequestInit): Promise<T> {
		return fetchWithInterceptors<T>(`${this.baseUrl}${url}`, {
			...options,
			interceptors: this.interceptors,
		});
	}

	async get<T>(url: string): Promise<T> {
		return this.request<T>(url, {
			// credentials: 'include',
		});
	}

	async put<T, U>(url: string, data: U): Promise<T> {
		return this.request<T>(url, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				...generateDefaultHeaders(),
			},
			// credentials: 'include',
		});
	}

	async post<T, U>(url: string, data?: U): Promise<T> {
		return this.request<T>(url, {
			method: 'POST',
			body: data ? JSON.stringify(data) : null,
			headers: {
				...generateDefaultHeaders(),
			},
			// credentials: 'include',
		});
	}

	async delete<T>(url: string): Promise<T> {
		return this.request<T>(url, {
			method: 'DELETE',
		});
	}
}
