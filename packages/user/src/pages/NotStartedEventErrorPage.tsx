import EventTimer from 'src/components/shared/timer/index.tsx';
import useGetEventDuration from 'src/hooks/query/useGetEventDuration.ts';

export default function NotStartedEventErrorPage() {
	const {
		duration: { startTime },
		formattedDuration,
	} = useGetEventDuration();

	return (
		<div
			role="alert"
			className="gap-15 flex h-screen w-screen flex-col items-center justify-center p-[200px]"
		>
			<div className="flex min-w-max flex-col items-center gap-5">
				<h3>이벤트가 시작하기까지</h3>
				<EventTimer endTime={startTime} />
				<p className="text-detail-1 min-w-max font-medium text-neutral-300">{formattedDuration}</p>
			</div>
			<img src="/images/fcfs/modal.png" alt="오류 발생 이미지" className="w-full" />
		</div>
	);
}
