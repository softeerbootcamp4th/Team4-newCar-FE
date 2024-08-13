import { PropsWithChildren } from 'react';

interface GradientBorderWrapperProps {
	className?: string | undefined;
}

export default function GradientBorderWrapper({
	children,
	className,
}: PropsWithChildren<GradientBorderWrapperProps>) {
	return (
		<div className={`gradient-border cursor-pointer rounded-[11px] ${className}`}>
			<div className="bg-background rounded-[9px]">{children}</div>
		</div>
	);
}
