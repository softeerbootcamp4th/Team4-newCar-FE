import * as React from 'react';
import cn from 'src/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const ChatInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => (
		<input
			type="text"
			placeholder="기대평을 입력하세요!"
			className={cn(
				'placeholder:text-neutral-300 focus-visible:ring-primary !autofill:bg-neutral-800 !autofill:text-body-2!important flex h-[52px] w-[616px] rounded-2.5 bg-neutral-800 p-3 text-body-2 font-normal text-neutral-100 -shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);

export default ChatInput;
