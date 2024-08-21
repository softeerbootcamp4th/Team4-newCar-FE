import { useEffect, useRef } from 'react';
import { useRouteError } from 'react-router-dom';
import EventTimer from 'src/components/shared/timer/index.tsx';
import useGetEventDuration from 'src/hooks/query/useGetEventDuration.ts';
import ErrorPage from 'src/pages/error/ErrorPage.tsx';
import CustomError from 'src/utils/error.ts';

export default function NotStartedEventPage() {
	const error = useRouteError() as CustomError;
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const {
		duration: { startTime },
		formattedDuration,
	} = useGetEventDuration();

  useEffect(() => {
    if (error.status === 403 && startTime) {
      const current = new Date().getTime();
      const start = new Date(startTime).getTime();
      const timeUntilStart = start - current;

      if (timeUntilStart > 0) {
        timerRef.current = setTimeout(() => window.location.reload(), timeUntilStart);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startTime, error.status]);

	if (error.status === 403) {
		return (
			<div
				role="alert"
				className="gap-15 flex h-screen w-screen flex-col items-center justify-center p-[200px]"
			>
				<div className="flex min-w-max flex-col items-center gap-5">
					<h3>이벤트가 시작하기까지</h3>
					<EventTimer endTime={startTime} />
					<p className="text-detail-1 min-w-max font-medium text-neutral-300">
						{formattedDuration}
					</p>
				</div>
				<img
					src="/images/thumbnail.webp"
					alt="오류 발생 이미지"
					className="w-full max-w-[1000px]"
				/>
			</div>
		);
	}

	return <ErrorPage message={error.message} />;
}
