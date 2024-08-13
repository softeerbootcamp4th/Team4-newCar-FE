/* eslint-disable react/button-has-type */
import { cn } from '@softeer/common/utils';
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import buttonStyles from 'src/styles/button.ts';

const activeStyles = (isActive: boolean) => (isActive ? 'bg-primary text-foreground' : '');

const styles = clsx(
	'border-primary text-primary rounded-2.5 w-full gap-2 border p-[10px] text-center',
	'disabled:border-foreground disabled:text-foreground disabled:bg-transparent disabled:opacity-40',
	'hover:bg-primary hover:text-foreground',
	'active:border-primary active:text-primary active:bg-black',
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isActive?: boolean;
}

/** 팝업 퀴즈 선택지 버튼 */
const OptionButton = forwardRef<HTMLButtonElement, ButtonProps>(
	({ isActive = false, className, ...props }, ref) => (
		<button
			className={cn(buttonStyles, styles, className, activeStyles(isActive))}
			ref={ref}
			{...props}
		/>
	),
);

export default OptionButton;
