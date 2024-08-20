import { ACCESS_TOKEN_KEY } from '@softeer/common/constants';
import { Cookie } from '@softeer/common/utils';
import { defer } from 'react-router-dom';
import { EventDuration, eventDurationQueryOptions } from 'src/hooks/query/useGetEventDuration.ts';
import { userInfoQueryOptions } from 'src/hooks/query/useGetUserInfo.ts';
import { queryClient } from 'src/libs/query/index.tsx';
import QUERY_KEYS from 'src/services/api/queryKey.ts';
import CustomError from 'src/utils/error.ts';

export default async function rootLoader() {
	await queryClient.prefetchQuery(eventDurationQueryOptions);

	const eventDurationStatus = queryClient.getQueryState([QUERY_KEYS.EVENT_DURATION]);

	if (eventDurationStatus?.status === 'error') {
		throw new CustomError('이벤트 기간 데이터를 불러올 수 없습니다.', 500);
	}

	const duration = queryClient.getQueryData<EventDuration>([QUERY_KEYS.EVENT_DURATION]);

	if (duration) {
		const currentTime = new Date();
		const startTime = new Date(duration.startTime);

		if (startTime > currentTime) {
			throw new CustomError('이벤트가 아직 시작되지 않았습니다.', 403);
		}
	}

	const token = Cookie.getCookie<string | null>(ACCESS_TOKEN_KEY);

	if (token) {
		await queryClient.prefetchQuery(userInfoQueryOptions(token));

		const userStatus = queryClient.getQueryState([QUERY_KEYS.USER_INFO, token]);

		if (userStatus?.status === 'error') {
			throw new CustomError('사용자 정보를 불러올 수 없습니다.', 404);
		}
	}

	return defer({ duration });
}
