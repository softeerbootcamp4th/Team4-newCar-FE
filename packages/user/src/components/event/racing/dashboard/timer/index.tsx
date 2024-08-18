import { useCallback, useEffect, useMemo, useState } from 'react';
import { EventDuration } from 'src/hooks/query/useGetEventDuration.ts';
import TimeUnit from './TimeUnit.tsx';

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export default function EventTimer({ endTime: endDate }: Pick<EventDuration, 'endTime'>) {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(endDate));

	const updateTimer = useCallback(() => {
		setTimeLeft(calculateTimeLeft(endDate));
	}, [endDate]);

	useEffect(() => {
		const timerId = setInterval(updateTimer, 1000);
		return () => clearInterval(timerId);
	}, [updateTimer]);

	return useMemo(
		() => (
			<div className="flex items-center justify-center space-x-10">
				<TimeUnit value={timeLeft.days} label="DAY" />
				<TimeUnit value={timeLeft.hours} label="HOUR" />
				<TimeUnit value={timeLeft.minutes} label="MIN" />
				<TimeUnit value={timeLeft.seconds} label="SEC" />
			</div>
		),
		[timeLeft],
	);
}

const calculateTimeLeft = (endDate: string): TimeLeft => {
	const now = new Date();
	const endTime = new Date(endDate);
	const difference = endTime.getTime() - now.getTime();

	if (difference <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}

	return {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / 1000 / 60) % 60),
		seconds: Math.floor((difference / 1000) % 60),
	};
};
