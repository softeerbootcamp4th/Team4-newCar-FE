import { API_DEFAULT_HEADER, BASE_URL } from 'src/constants/api';
import { FetchDataRequestOptions, Payload } from 'src/services/api/types/apiType';

const fetchData = async <K extends keyof Payload>({
	path,
	payload = {},
	method,
	headers = {},
}: FetchDataRequestOptions<K>) =>
	fetch(
		BASE_URL + path,
		method === 'GET'
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
