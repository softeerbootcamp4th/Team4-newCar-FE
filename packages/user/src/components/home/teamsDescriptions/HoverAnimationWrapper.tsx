import { forwardRef, PropsWithChildren } from 'react';

const HoverAnimationWrapper = forwardRef<HTMLButtonElement, PropsWithChildren>(
	({ children, ...props }, ref) => (
		<button
			className="transform transition-all duration-200"
			type="button"
			ref={ref}
			{...props}
		>
			{children}
		</button>
	),
);

export default HoverAnimationWrapper;
