import { PropsWithChildren } from 'react';

interface EventStepProps {
	step: number;
	title: string;
}
export default function EventStep({ step, title, children }: PropsWithChildren<EventStepProps>) {
	const stepLabel = `Step ${step.toString().padStart(2, '0')}`;

	return (
		<section className="flex flex-col items-center snap-start">
			<h6 className="text-primary text-heading-10 mb-[30px] font-medium">{stepLabel}</h6>
			<h6 className="text-heading-10 font-medium">{title}</h6>
			{children}
		</section>
	);
}
