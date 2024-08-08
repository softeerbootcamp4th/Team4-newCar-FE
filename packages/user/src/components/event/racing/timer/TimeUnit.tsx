import { memo } from 'react';

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit = memo(({ value, label }: TimeUnitProps) => (
	<div className="flex flex-col items-center gap-4">
		<h4 className="bg-foreground/10 backdrop-blur-sm text-foreground/60 p-4 px-3 pt-6 rounded-[5px] leading-[38px]">
			{value < 10 ? `0${value}` : value}
		</h4>
		<p className="text-detail-2 opacity-60">{label}</p>
	</div>
));

export default TimeUnit;
