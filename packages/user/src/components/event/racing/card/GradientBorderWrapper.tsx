import { PropsWithChildren } from 'react';

export default function GradientBorderWrapper({ children }: PropsWithChildren) {
	return (
		<div className="gradient-border cursor-pointer rounded-[11px]">
			<div className="bg-background rounded-[9px]">{children}</div>
		</div>
	);
}
