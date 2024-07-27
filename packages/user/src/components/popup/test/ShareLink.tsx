import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { forwardRef } from 'react';
import inputStyles from 'src/styles/input';
import cn from 'src/utils/cn';

const defaultStyles =
	'placeholder:text-neutral-300 text-neutral-400 flex h-[52px] w-[461px] rounded-[5px] bg-neutral-600 px-5';

const categoryStyles =
	'rounded-[10px] w-[380px] bg-neutral-400 text-neutral-200 disabled:bg-neutral-400/10 disabled:text-neutral-600';
const opacityCategoryStyles = clsx('opacity-50', categoryStyles);

const inputVariants = cva(clsx(defaultStyles, inputStyles), {
	variants: {
		variants: {
			default: 'text-neutral-300',
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
const ShareLink = forwardRef<HTMLInputElement, InputProps>(
	({ className, variants, ...props }, ref) => (
		<input
			type="text"
			readOnly
			className={cn(inputVariants({ variants, className }))}
			ref={ref}
			{...props}
		/>
	),
);

export default ShareLink;
