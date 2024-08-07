import { cn } from '@softeer/common/utils';
import * as React from 'react';
import inputStyles from 'src/styles/input.ts';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
	<input
		type="text"
		autoComplete="off"
		placeholder="기대평을 입력하세요!"
		className={cn(
			inputStyles,
			'focus-visible:ring-primary rounded-2.5 h-[54px] w-[616px] bg-neutral-800 p-3 placeholder:text-neutral-300',
			className,
		)}
		ref={ref}
		{...props}
	/>
));

export default Input;
