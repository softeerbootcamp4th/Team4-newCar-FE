/* eslint-disable react/button-has-type */
import { cn } from '@softeer/common';
import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const defaultStyles = 'rounded-[17px] px-4 py-2 font-medium text-detail-1';

const chipVariants = cva(defaultStyles, {
	variants: {
		variants: {
			primary: 'bg-background text-primary',
			secondary: 'bg-primary text-background',
		},
	},
	defaultVariants: {
		variants: 'primary',
	},
});

export type ButtonProps = VariantProps<typeof chipVariants>;

export default function Chip({ variants, children }: PropsWithChildren<ButtonProps>) {
	return <div className={cn(chipVariants({ variants }))}>{children}</div>;
}
