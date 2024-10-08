/* eslint-disable react/no-unused-prop-types */
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface GaugeProps {
	percentage: number;
	isActive: boolean;
}

const Gauge = memo((props: GaugeProps) => {
	const { progress } = useGaugeProgress(props);

	const backgroundColor = useMemo(() => {
		if (progress < 22) return 'bg-gradient-gauge1';
		if (progress < 57) return 'bg-gradient-gauge2';
		if (progress < 88) return 'bg-gradient-gauge3';
		return 'bg-gradient-gauge4';
	}, [progress]);

	return (
		<div className="flex items-center gap-2">
			<img src="images/hero/casper/lighting.webp" alt="번개" className="w-[16px]" />
			<div className="relative h-[4px] w-full rounded-[2px] bg-neutral-600">
				<div
					className={`ease-&lsqb;cubic-bezier(0.14,0.63,0.82,0.72)&rsqb; absolute z-10 h-full transform rounded-[2px] transition-all duration-1000 ${backgroundColor}`}
					style={{ width: `${progress.toFixed(0)}%` }}
				/>
			</div>
		</div>
	);
});

export default Gauge;

function useGaugeProgress({ percentage, isActive }: GaugeProps) {
	const [progress, setProgress] = useState(percentage);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const resetProgress = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	}, [percentage]);

	useEffect(() => {
		resetProgress();

		if (isActive) {
			setProgress(80);
			timeoutRef.current = setTimeout(() => {
				timeoutRef.current = setTimeout(() => {
					setProgress(100);
					timeoutRef.current = setTimeout(() => setProgress(percentage), 700); // 사용자가 인식한 후 내려옴
				}, 100);
			}, 400);
		} else {
			setProgress(percentage);
		}
	}, [isActive, percentage, resetProgress]);

	useEffect(
		() => () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		},
		[],
	);

	return { progress };
}
