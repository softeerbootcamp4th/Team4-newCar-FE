import { memo } from 'react';

interface TimeUnitProps {
	value: number;
	label: string;
}

const TimeUnit = memo(({ value, label }: TimeUnitProps) => (
	<div className="relative flex flex-col items-center gap-4">
		<div className="bg-foreground/10 rounded-[5px] p-4 px-3 pt-6 leading-[38px] backdrop-blur-sm">
			<span className="text-heading-4 text-foreground/60 text-2xl font-extrabold">
				{value < 10 ? `0${value}` : value}
			</span>
		</div>
		<p className="text-detail-2 opacity-60">{label}</p>
	</div>
));

export default TimeUnit;
