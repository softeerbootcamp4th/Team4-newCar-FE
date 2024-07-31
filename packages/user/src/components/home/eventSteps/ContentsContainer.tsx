import { Children, Fragment, PropsWithChildren } from 'react';
import StepArrow from 'src/assets/icons/step-arrow.svg?react';
import { spacing } from 'src/styles/theme';

interface ContentsContainerProps {
	gap?: keyof typeof spacing;
}
export default function ContentsContainer({
	gap = 5,
	children,
}: PropsWithChildren<ContentsContainerProps>) {
	const contents = Children.toArray(children);

	return (
		<div style={{ gap: spacing[gap] }} className="flex items-center p-10">
			{contents.map((content, index) => (
				<Fragment key={index}>
					{content}
					{index < contents.length - 1 && <StepArrow />}
				</Fragment>
			))}
		</div>
	);
}
