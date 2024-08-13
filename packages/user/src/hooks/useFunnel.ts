// reference: https://www.slash.page/ko/libraries/react/use-funnel/README.i18n
import { Children, isValidElement, ReactElement, ReactNode, useState } from 'react';

type StepsType = Readonly<NonEmptyArray<string | number>>;
type StepElements<Steps extends StepsType> = ReactElement<StepProps<Steps>>;

interface StepProps<Steps extends StepsType> {
	name: Steps[number];
	children: ReactNode;
}

interface FunnelProps<Steps extends StepsType> {
	children: ReactElement<StepProps<Steps>>[];
}

export default function useFunnel<Steps extends StepsType>(
	steps: Steps,
	{ initialStep }: { initialStep?: Steps[number] } = {},
) {
	const [step, setStep] = useState(initialStep ?? steps[0]);

	const Step = ({ children }: StepProps<Steps>) => children;

	const Funnel = ({ children }: FunnelProps<Steps>) => {
		const validChildren = Children.toArray(children)
			.filter(isValidElement)
			.filter((child) => steps.includes((child.props as StepProps<Steps>).name)) as Array<
			StepElements<Steps>
		>;

		const targetStep = validChildren.find((child) => child.props.name === step);

		return targetStep;
	};

	Funnel.Step = Step;

	return [Funnel, setStep] as const;
}
