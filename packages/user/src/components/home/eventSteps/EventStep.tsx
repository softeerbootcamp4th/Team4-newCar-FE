import { PropsWithChildren } from 'react';

interface EventStepProps {
	step: number;
	title: string;
}
export default function EventStep({ step, title, children }: PropsWithChildren<EventStepProps>) {
	const stepLabel = `Step ${step.toString().padStart(2, '0')}`;

	return (
		<div className="flex h-[660px] flex-col items-center">
			<p className="text-primary text-heading-8 mb-[30px] font-medium">{stepLabel}</p>
			<p className="text-heading-10 font-medium">{title}</p>
			{children}
		</div>
	);
}
