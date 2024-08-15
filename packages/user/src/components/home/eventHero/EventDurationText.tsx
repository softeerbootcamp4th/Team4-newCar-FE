import useGetEventDuration, {
	EventDuration as EventDurationType,
} from 'src/hooks/query/useGetEventDuration.ts';

export default function EventDurationText() {
	const { duration } = useGetEventDuration();

	return formatDateRange(duration);
}

/* utils */

function formatDateRange({ startTime: startDate, endTime: endDate }: EventDurationType): string {
	const timeOptions: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};

	const start = new Date(startDate);
	const end = new Date(endDate);

	const formatDate = (date: Date) => {
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${month}.${day}`;
	};

	const startTimeFormatted = new Intl.DateTimeFormat('ko-KR', timeOptions).format(start);
	const endTimeFormatted = new Intl.DateTimeFormat('ko-KR', timeOptions).format(end);

	return `${formatDate(start)} ${startTimeFormatted} ~ ${formatDate(end)} ${endTimeFormatted}`;
}
