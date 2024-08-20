/* eslint-disable jsx-a11y/label-has-associated-control */
import { cn } from '@softeer/common/utils';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { forwardRef } from 'react';
import inputStyles from 'src/styles/input.ts';

const defaultStyles = 'flex px-5';

const categoryStyles =
	'rounded-[10px] w-full max-w-[380px] h-[48px] bg-neutral-400 text-neutral-200 disabled:bg-neutral-400/10 disabled:text-neutral-600';
const opacityCategoryStyles = clsx('opacity-50', categoryStyles);

const inputVariants = cva(clsx(defaultStyles, inputStyles), {
	variants: {
		variants: {
			default: 'bg-neutral-600 text-neutral-300 h-[54px] w-[461px] rounded-[5px]',
			pet: categoryStyles,
			travel: opacityCategoryStyles,
			place: opacityCategoryStyles,
			leisure: opacityCategoryStyles,
		},
	},
	defaultVariants: {
		variants: 'default',
	},
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

/** 유저 별 이벤트 공유 링크 */
const LinkDisplay = forwardRef<HTMLInputElement, InputProps>(
	({ className, variants, ...props }, ref) => (
		<>
			<label htmlFor="sharedLink" className="sr-only">
				유저 별 이벤트 공유 링크
			</label>
			<input
				id="shareLink"
				type="text"
				readOnly
				className={cn(inputVariants({ variants, className }))}
				ref={ref}
				{...props}
			/>
		</>
	),
);

export default LinkDisplay;
