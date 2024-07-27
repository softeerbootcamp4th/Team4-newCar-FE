import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'src/utils/cn';

/** 랜딩 페이지 이동(size: lg), 팝업 버튼(size: default) */
const defaultButtonStyles = clsx(
	'bg-primary text-black rounded-[30px] gap-[10px] py-4 px-12',
	'disabled:bg-neutral-500',
	'hover:bg-skyblue-700',
	'active:bg-primary',
);

/** 팝업 퀴즈 선택지 */
const popupButtonStyles = clsx(
	'min-w-[275px] border border-primary text-primary rounded-2.5 gap-2 py-2.5 px-7',
	'disabled:bg-transparent disabled:border-foreground disabled:text-foreground disabled:opacity-40',
	'hover:bg-primary hover:text-foreground',
	'active:bg-black active:border-primary active:text-primary',
);

/** 이벤트 버튼 */
const outlinedButtonStyles = clsx(
	'border border-primary text-primary rounded-2.5 gap-[10px] py-[10px] px-7',
	'disabled:border-neutral-400 disabled:text-neutral-400',
	'hover:border-skyblue-700 hover:text-skyblue-700',
	'active:border-primary active:text-primary',
);

const focusStyles = 'focus-visible:ring focus-visible:ring-1 focus-visible:ring-offset-1';

const buttonVariants = cva(
	`h-fit w-max inline-flex items-center justify-center whitespace-nowrap transition-colors text-center ${focusStyles}`,
	{
		variants: {
			variant: {
				default: defaultButtonStyles,
				popup: popupButtonStyles,
				outline: outlinedButtonStyles,
			},
			size: {
				default: 'text-body-2 font-normal',
				sm: 'h-9',
				lg: 'rounded-2.5 text-heading-9 font-medium',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		);
	},
);

export { Button, buttonVariants };
