import { useSuspenseQuery } from '@tanstack/react-query';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type EventDuration = { startTime: string; endTime: string };

export default function useGetEventDuration() {
	const { data: duration } = useSuspenseQuery<EventDuration>(eventDurationQueryOptions);

	return { duration };
}

export const eventDurationQueryOptions = {
	queryKey: [QUERY_KEYS.EVENT_DURATION],
	queryFn: () => http.get<EventDuration>('/event-time'),
};
