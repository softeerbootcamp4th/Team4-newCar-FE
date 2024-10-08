/* eslint-disable react/button-has-type */
import { cn } from '@softeer/common/utils';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import buttonStyles from 'src/styles/button.ts';

const defaultStyles =
	'min-w-[101px] text-body-3 font-normal rounded-[10px] gap-[10px] py-[10px] px-5 hover:bg-foreground/50 active:bg-foreground/70';

const buttonVariants = cva(clsx(buttonStyles, defaultStyles), {
	variants: {
		variants: {
			pet: 'bg-yellow-200 text-cream-800 disabled:bg-yellow-200/10',
			place: 'bg-khaki-700 text-khaki-100 disabled:bg-khaki-700/10 disabled:text-khaki-600',
			travel: 'bg-orange-200 text-orange-900 disabled:bg-orange-200/10',
			leisure:
				'bg-neutral-400 text-neutral-200 disabled:bg-neutral-400/10 disabled:text-neutral-600',
		},
	},
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

/** 유형 검사 팝업 내 링크 공유 버튼  */
const LinkShareButton = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variants, ...props }, ref) => (
		<button className={cn(buttonVariants({ variants, className }))} ref={ref} {...props}>
			공유하기
		</button>
	),
);

export default LinkShareButton;
