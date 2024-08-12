import { useSuspenseQuery } from '@tanstack/react-query';
import QUERY_KEYS from 'src/constants/queryKey.ts';

export type EventDuration = { startDate: string; endDate: string };

export default function useGetEventDuration() {
	const { data: duration } = useSuspenseQuery<EventDuration>({
		queryKey: [QUERY_KEYS.EVENT_DURATION],
		queryFn: fetchMockData,
	});

	return { duration };
}

const fetchMockData = (): Promise<EventDuration> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({ startDate: '2024-07-31T15:00:00Z', endDate: '2024-09-10T15:00:00Z' });
		}, 1000);
	});
