import { forwardRef, PropsWithChildren } from 'react';

const TriggerButtonWrapper = forwardRef<HTMLButtonElement, PropsWithChildren>(
	({ children, ...props }, ref) => (
		<button type="button" ref={ref} {...props}>
			{children}
		</button>
	),
);

export default TriggerButtonWrapper;
