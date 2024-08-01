/* eslint-disable react/button-has-type */
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import buttonStyles from 'src/styles/button';
import cn from 'src/utils/cn';

const defaultStyles = 'gap-[10px] py-4 px-12';

const buttonVariants = cva(clsx(buttonStyles, defaultStyles), {
	variants: {
		variants: {
			primary:
				'bg-primary text-background hover:bg-skyblue-700 active:bg-primary disabled:bg-foreground/10',
			secondary:
				'bg-foreground/25 text-background hover:bg-foreground/50 active:bg-foreground/25 disabled:bg-foreground/10',
		},
		size: {
			default: 'rounded-[30px] text-body-2 font-normal',
			lg: 'rounded-[34px] text-heading-9 font-medium',
		},
	},
	defaultVariants: {
		variants: 'primary',
		size: 'default',
	},
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

/** 랜딩 페이지 이동(size: lg), 팝업 버튼(size: default) */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variants, size, ...props }, ref) => (
		<button className={cn(buttonVariants({ variants, size, className }))} ref={ref} {...props} />
	),
);

export default Button;
