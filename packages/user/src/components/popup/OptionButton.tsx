/* eslint-disable react/button-has-type */
import { cn } from '@softeer/common/utils';
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import buttonStyles from 'src/styles/button.ts';

const styles = clsx(
	'border-primary text-primary rounded-2.5 px-15 min-w-[275px] gap-2 border py-2.5',
	'disabled:border-foreground disabled:text-foreground disabled:bg-transparent disabled:opacity-40',
	'hover:bg-primary hover:text-foreground',
	'active:border-primary active:text-primary active:bg-black',
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/** 팝업 퀴즈 선택지 버튼 */
const OptionButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
	<button className={cn(buttonStyles, styles, className)} ref={ref} {...props} />
));

export default OptionButton;
