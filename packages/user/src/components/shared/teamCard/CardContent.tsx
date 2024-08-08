import { PropsWithChildren } from 'react';

export default function CardContent({ children }: PropsWithChildren) {
	return (
		<div className="relative z-10 flex h-full flex-col items-center justify-between">
			{children}
		</div>
	);
}
