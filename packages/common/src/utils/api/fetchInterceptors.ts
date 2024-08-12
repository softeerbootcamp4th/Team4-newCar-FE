import { ACCESS_TOKEN_KEY } from 'src/constants/api.ts';
import getCookie from '../storage/cookie/getCookie.ts';

type FetchOptions = RequestInit & { interceptors?: Interceptors };

interface Interceptors {
	request?: (url: string, options: FetchOptions) => Promise<FetchOptions> | FetchOptions;
	response?: <T>(response: Response) => Promise<T> | T;
}

const fetchWithInterceptors = async <T>(url: string, options: FetchOptions = {}): Promise<T> => {
	const { interceptors, ...fetchOptions } = options;

	if (interceptors?.request) {
		const accessToken = getCookie(ACCESS_TOKEN_KEY);
		fetchOptions.headers = fetchOptions.headers || {};
		if (accessToken) {
			(fetchOptions.headers as Record<string, string>).Authorization = accessToken;
		}
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
