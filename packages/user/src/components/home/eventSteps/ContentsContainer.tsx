import { spacing } from '@softeer/common/theme';
import { Children, Fragment, PropsWithChildren } from 'react';
import StepArrow from 'src/assets/icons/step-arrow.svg?react';

interface ContentsContainerProps {
	gap?: keyof typeof spacing;
}
export default function ContentsContainer({
	gap = 5,
	children,
}: PropsWithChildren<ContentsContainerProps>) {
	const contents = Children.toArray(children);

	return (
		<div className={`flex items-center p-1 gap-${gap}`}>
			{contents.map((content, index) => (
				// eslint-disable-next-line react/no-array-index-key
				<Fragment key={index}>
					{content}
					{index < contents.length - 1 && <StepArrow />}
				</Fragment>
			))}
		</div>
	);
}
