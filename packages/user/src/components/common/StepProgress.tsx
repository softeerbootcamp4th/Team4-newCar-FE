interface StepProgressProps {
	currentIndex: number;
	totalStep: number;
}
export default function StepProgress({ currentIndex, totalStep }: StepProgressProps) {
	return (
		<div className="flex space-x-1 pb-10">
			{Array(totalStep)
				.fill(0)
				.map((index) => (
					// eslint-disable-next-line react/no-array-index-key
					<div
						key={index}
						className={`w-15 h-[3px] ${index === currentIndex ? 'bg-primary' : 'bg-neutral-300'}`}
					/>
				))}
		</div>
	);
}
