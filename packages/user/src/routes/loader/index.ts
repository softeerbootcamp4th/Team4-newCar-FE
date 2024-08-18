import { defer } from 'react-router-dom';
import { EventDuration, eventDurationQueryOptions } from 'src/hooks/query/useGetEventDuration.ts';
import { queryClient } from 'src/libs/query/index.tsx';
import QUERY_KEYS from 'src/services/api/queryKey.ts';
import CustomError from 'src/utils/error.ts';

export default async function indexLoader() {
	await queryClient.prefetchQuery(eventDurationQueryOptions);

	const duration = queryClient.getQueryData<EventDuration>([QUERY_KEYS.EVENT_DURATION]);

	if (!duration) {
		throw new CustomError('이벤트 기간 데이터를 불러올 수 없습니다.', 500);
	}

	const currentTime = new Date();
	const startTime = new Date(duration.startTime);

	if (startTime > currentTime) {
		throw new CustomError('이벤트가 아직 시작되지 않았습니다.', 403);
	}

	return defer({ duration });
}
