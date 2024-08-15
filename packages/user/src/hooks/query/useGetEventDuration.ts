import { useSuspenseQuery } from '@tanstack/react-query';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type EventDuration = { startTime: string; endTime: string };

export default function useGetEventDuration() {
	const { data: duration } = useSuspenseQuery<EventDuration>({
		queryKey: [QUERY_KEYS.EVENT_DURATION],
		queryFn: () => http.get('/event-time'),
	});

	return { duration };
}
