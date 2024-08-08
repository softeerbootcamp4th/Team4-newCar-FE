import { PropsWithChildren } from 'react';

export default function GradientBorderWrapper({ children }: PropsWithChildren) {
	return (
		<div className="gradient-border cursor-pointer rounded-[5px]">
			<div className="bg-background rounded-[3px]">{children}</div>
		</div>
	);
}
