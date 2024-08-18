import { useSuspenseQuery } from '@tanstack/react-query';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type EventDuration = { startTime: string; endTime: string };

export default function useGetEventDuration() {
	const { data: duration } = useSuspenseQuery<EventDuration>(eventDurationQueryOptions);
	const formattedDuration = formatEventDuration(duration);
	return { duration, formattedDuration };
}

export const eventDurationQueryOptions = {
	queryKey: [QUERY_KEYS.EVENT_DURATION],
	queryFn: () => http.get<EventDuration>('/event-time'),
};

function formatEventDuration({ startTime, endTime }: EventDuration): string {
	const timeOptions: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};

	const start = new Date(startTime);
	const end = new Date(endTime);

	const formatDate = (date: Date) => {
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${month}.${day}`;
	};

	const startTimeFormatted = new Intl.DateTimeFormat('ko-KR', timeOptions).format(start);
	const endTimeFormatted = new Intl.DateTimeFormat('ko-KR', timeOptions).format(end);

	return `${formatDate(start)} ${startTimeFormatted} ~ ${formatDate(end)} ${endTimeFormatted}`;
}
