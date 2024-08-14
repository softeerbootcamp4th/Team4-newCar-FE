// eslint-disable-next-line import/no-cycle
import { generateDefaultHeaders } from './index.ts';

type FetchOptions = RequestInit & { interceptors?: Interceptors };

interface Interceptors {
	request?: (url: string, options: FetchOptions) => Promise<FetchOptions> | FetchOptions;
	response?: <T>(response: Response) => Promise<T> | T;
}

const fetchWithInterceptors = async <T>(url: string, options: FetchOptions = {}): Promise<T> => {
	const { interceptors, ...fetchOptions } = options;
	if (!fetchOptions.headers) {
		fetchOptions.headers = {};
	}

	fetchOptions.headers = Object.assign(fetchOptions.headers, generateDefaultHeaders());

	if (interceptors?.request) {
		const modifiedOptions = await interceptors.request(url, fetchOptions);
		Object.assign(fetchOptions, modifiedOptions);
	}

	const response = await fetch(url, fetchOptions);

	if (interceptors?.response) {
		return interceptors.response<T>(response);
	}

	return response.json() as Promise<T>;
};

export default fetchWithInterceptors;
