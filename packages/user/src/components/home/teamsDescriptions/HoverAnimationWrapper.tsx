import { forwardRef, PropsWithChildren } from 'react';

const HoverAnimationWrapper = forwardRef<HTMLButtonElement, PropsWithChildren>(
	({ children, ...props }, ref) => (
		<button
			className="transform transition-all duration-200 focus-within:scale-[1.2] focus-within:opacity-100 hover:z-10 hover:scale-[1.2] focus:z-20 focus:scale-[1.2] group-hover:opacity-40 group-hover:hover:opacity-100"
			type="button"
			ref={ref}
			{...props}
		>
			{children}
		</button>
	),
);

export default HoverAnimationWrapper;
