import { useMemo } from 'react';

interface GaugeProps {
	percent: number;
}
export default function Gauge({ percent }: GaugeProps) {
	const backgroundColor = useMemo(() => {
		if (percent < 33) return 'bg-gradient-gauge1';
    if (percent < 72) return 'bg-gradient-gauge2';
    return 'bg-gradient-gauge3';
	}, [percent]);

	return (
		<div className="relative h-[4px] w-full rounded-[2px] bg-neutral-600">
			<div
				className={`absolute z-10 h-full transform rounded-[2px] transition-all duration-700 ease-[cubic-bezier(0.14,0.63,0.82,0.72)] ${backgroundColor}`}
				style={{ width: `${percent}%` }}
			/>
		</div>
	);
}
