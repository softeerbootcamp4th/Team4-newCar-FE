import { memo, useEffect, useState } from 'react';

interface TimeUnitProps {
	value: number;
	label: string;
}

const TimeUnit = memo(({ value, label }: TimeUnitProps) => {
	const [animation, setAnimation] = useState('animate-fold');
	useEffect(() => {
		setTimeout(() => {
			setAnimation('animate-fold');
		}, 0);
		setTimeout(() => {
			setAnimation('animate-unfold');
		}, 500);
	}, [value]);

	return <div className="flex flex-col items-center gap-4 relative">
		<div>
			<h4 className="bg-foreground/10 text-foreground/60 rounded-[5px] p-4 px-3 pt-6 leading-[38px] backdrop-blur-sm">
				{value < 10 ? `0${value}` : value}
			</h4>
		</div>
		<div className={`${animation} ${animation === 'animate-unfold' ? 'hidden' : 'visible'} absolute`}>
			<h4 className="bg-foreground/10 text-foreground/60 rounded-[5px] p-4 px-3 pt-6 leading-[38px] backdrop-blur-sm">
				{value < 10 ? `0${value}` : value}
			</h4>
		</div>
		<p className="text-detail-2 opacity-60">{label}</p>
        </div>;
});

export default TimeUnit;
