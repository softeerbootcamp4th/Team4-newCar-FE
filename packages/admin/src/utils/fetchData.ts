import { FetchWrapper } from '@softeer/common/utils';
import { BASE_URL, METHOD } from 'src/constants/api.ts';
import { FetchDataRequestOptions, Payload, Response } from 'src/services/api/types/apiType.ts';

// FetchDataRequestOptions의 제네릭 타입을 수정합니다.
  // fetchData 함수의 제네릭 타입을 수정합니다.
const fetchData = async <
		K extends keyof Payload,
		T extends keyof Payload[K] & keyof Response[K] & METHOD,
	>(
	{
		path,
		payload,
		method,
	}: FetchDataRequestOptions<K, T>): Promise<Response[K][T]> => {
    const http = new FetchWrapper(BASE_URL);

    if (method === METHOD.GET) {
        return http.get<Response[K][T]>(path);
    }

    return http.post<Response[K][T], Payload[K][T]>(
        path,
        payload as Payload[K][T],
    );
};

export default fetchData;
