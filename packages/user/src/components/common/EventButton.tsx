import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = clsx(
	'text-body-2 border-primary text-primary rounded-2.5 inline-flex h-[42px] items-center justify-center gap-[10px] whitespace-nowrap border-2 px-7 py-7 text-center font-normal transition-colors',
	'disabled:border-neutral-400 disabled:text-neutral-400',
	'hover:border-skyblue-700 hover:text-skyblue-700',
	'active:border-primary active:text-primary',
	'focus-visible:ring focus-visible:ring-1 focus-visible:ring-offset-1',
);

const EventButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
	({ className, type = 'button', ...props }, ref) => (
		// eslint-disable-next-line react/button-has-type
		<button className={clsx(buttonVariants, className)} ref={ref} type={type} {...props} />
	),
);

EventButton.displayName = 'EventButton';

export default EventButton;
