import STORAGE_KEYS from 'src/constants/storageKey';
import { BASE_URL } from 'src/vite-env';
import fetchWithInterceptors from './fetchInterceptors';

interface Interceptors {
	request?: (url: string, options: RequestInit) => Promise<RequestInit> | RequestInit;
	response?: <T>(response: Response) => Promise<T> | T;
}

class FetchWrapper {
	private baseUrl: string;

	private interceptors: Interceptors;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
		this.interceptors = {
			request: async (_url: string, options: RequestInit) => {
				const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

				const modifiedOptions = {
					...options,
					headers: {
						...options.headers,
						...(token && { Authorization: `Bearer ${token}` }),
					},
				};
				return modifiedOptions;
			},
			response: async <T>(response: Response): Promise<T> => {
				if (!response.ok) {
					throw new Error('네트워크에 문제가 발생하였습니다.');
				}
				return response.json();
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
		return this.request<T>(url, {});
	}

	async put<T, U>(url: string, data: U): Promise<T> {
		return this.request<T>(url, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	async post<T, U>(url: string, data: U): Promise<T> {
		return this.request<T>(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	async delete<T>(url: string): Promise<T> {
		return this.request<T>(url, {
			method: 'DELETE',
		});
	}
}

const http = new FetchWrapper(BASE_URL);

export default http;
