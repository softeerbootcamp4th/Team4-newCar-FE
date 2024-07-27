import * as React from 'react';
import inputStyles from 'src/styles/input';
import cn from 'src/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const ChatInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => (
		<input
			type="text"
			autoComplete="off"
			placeholder="기대평을 입력하세요!"
			className={cn(
				inputStyles,
				'placeholder:text-neutral-300 focus-visible:ring-primary h-[52px] w-[616px] rounded-2.5 bg-neutral-800 p-3',
				className,
			)}
			ref={ref}
			{...props}
		/>
	),
);

export default ChatInput;
