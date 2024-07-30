import { Children, Fragment, PropsWithChildren } from 'react';
import StepArrow from 'src/assets/icons/step-arrow.svg?react';

export default function ContentsContainer({ children }: PropsWithChildren) {
	const contents = Children.toArray(children);

	return (
		<div className="flex items-center gap-5 p-10">
			{contents.map((content, index) => (
				<Fragment key={index}>
					{content}
					{index < contents.length - 1 && <StepArrow />}
				</Fragment>
			))}
		</div>
	);
}
