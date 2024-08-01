import { API_DEFAULT_HEADER, BASE_URL, METHOD } from 'src/constants/api';
import { FetchDataRequestOptions, Payload } from 'src/services/api/types/apiType';

const fetchData = async <K extends keyof Payload, T extends keyof Payload[K]>({
	path,
	payload,
	method,
	headers = {},
}: FetchDataRequestOptions<K, T>) =>
	fetch(
		BASE_URL + path,
		method === METHOD.GET
			? {
					...API_DEFAULT_HEADER,
					...headers,
					method,
				}
			: {
					...API_DEFAULT_HEADER,
					...headers,
					method,
					body: JSON.stringify(payload),
				},
	);

export default fetchData;
