import useGetEventDuration, {
	EventDuration as EventDurationType,
} from 'src/hooks/query/useGetEventDuration';

export default function EventDuration() {
	const { duration } = useGetEventDuration();

	return formatDateRange(duration);
}

/* utils */

function formatDateRange({ startDate, endDate }: EventDurationType): string {
	const dateOptions: Intl.DateTimeFormatOptions = {
		month: 'numeric',
		day: 'numeric',
	};

	const timeOptions: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};

	const start = new Date(startDate);
	const end = new Date(endDate);

	const startDateFormatted = new Intl.DateTimeFormat('ko-KR', dateOptions).format(start);
	const startTimeFormatted = new Intl.DateTimeFormat('ko-KR', timeOptions).format(start);
	const endDateFormatted = new Intl.DateTimeFormat('ko-KR', dateOptions).format(end);
	const endTimeFormatted = new Intl.DateTimeFormat('ko-KR', timeOptions).format(end);

	return `${startDateFormatted.replace(/ /g, '')} ${startTimeFormatted} ~ ${endDateFormatted.replace(/ /g, '')} ${endTimeFormatted}`;
}
