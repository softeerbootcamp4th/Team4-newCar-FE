/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import buttonStyles from 'src/styles/button';
import cn from 'src/utils/cn';

const styles = clsx(
	'min-w-[275px] border border-primary text-primary rounded-2.5 gap-2 py-2.5 px-15',
	'disabled:bg-transparent disabled:border-foreground disabled:text-foreground disabled:opacity-40',
	'hover:bg-primary hover:text-foreground',
	'active:bg-black active:border-primary active:text-primary',
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/** 팝업 퀴즈 선택지 버튼 */
const OptionButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
	<button className={cn(buttonStyles, styles, className)} ref={ref} {...props} />
));

export default OptionButton;
