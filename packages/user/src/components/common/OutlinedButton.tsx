import { cn } from '@softeer/common/utils';
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import buttonStyles from 'src/styles/button.ts';

const styles = clsx(
	'border-primary text-primary text-body-2 rounded-2.5 gap-[10px] border px-7 py-[10px] font-normal',
	'disabled:border-neutral-400 disabled:text-neutral-400',
	'hover:border-skyblue-700 hover:text-skyblue-700',
	'active:border-primary active:text-primary',
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	as?: 'button' | 'div' | 'span';
}

/** 기대평 등록, 랜딩 페이지 링크 공유 버튼 */
const OutlinedButton = forwardRef<HTMLButtonElement, ButtonProps>(
	({ as: Component = 'button', className, ...props }, ref) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const Tag = Component as any;
		return <Tag className={cn(buttonStyles, styles, className)} ref={ref} {...props} />;
	},
);

export default OutlinedButton;
