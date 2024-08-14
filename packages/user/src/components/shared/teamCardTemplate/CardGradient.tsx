import { cva, VariantProps } from 'class-variance-authority';

type CardGradientProps = VariantProps<typeof gradientVariants>;

export default function CardGradient({ variant }: CardGradientProps) {
	return <div className={gradientVariants({ variant })} />;
}

const gradientVariants = cva('absolute inset-0 bg-gradient-to-b-card', {
	variants: {
		variant: {
			pet: 'from-yellow-900',
			place: 'from-khaki-600',
			travel: 'from-orange-800',
			leisure: 'from-background',
		},
	},
});
