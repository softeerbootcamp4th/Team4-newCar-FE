import { memo, useMemo } from 'react';
import Lightning from 'src/assets/icons/lighting.svg?react';

interface GaugeProps {
	percent: number;
}
const Gauge = memo(({ percent }: GaugeProps) => {
	const backgroundColor = useMemo(() => {
		if (percent < 22) return 'bg-gradient-gauge1';
		if (percent < 57) return 'bg-gradient-gauge2';
		if (percent < 88) return 'bg-gradient-gauge3';
		return 'bg-gradient-gauge4';
	}, [percent]);

	return (
		<div className="flex items-center gap-2">
			<Lightning />
			<div className="relative h-[4px] w-full rounded-[2px] bg-neutral-600">
				<div
					className={`ease-&lsqb;cubic-bezier(0.14,0.63,0.82,0.72)&rsqb; absolute z-10 h-full transform rounded-[2px] transition-all duration-700 ${backgroundColor}`}
					style={{ width: `${percent.toFixed(0)}%` }}
				/>
			</div>
		</div>
	);
});
export default Gauge;
