/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import buttonStyles from 'src/styles/button';
import cn from 'src/utils/cn';

const styles = clsx(
	'border-primary text-primary text-body-2 rounded-2.5 gap-[10px] border px-7 py-[10px] font-normal',
	'disabled:border-neutral-400 disabled:text-neutral-400',
	'hover:border-skyblue-700 hover:text-skyblue-700',
	'active:border-primary active:text-primary',
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/** 기대평 등록 버튼 */
const ChatSubmitButton = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, ...props }, ref) => (
		<button type="submit" className={cn(buttonStyles, styles, className)} ref={ref} {...props}>
			보내기
		</button>
	),
);

export default ChatSubmitButton;
