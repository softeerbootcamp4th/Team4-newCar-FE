import { PropsWithChildren } from 'react';

export default function GradientBorderWrapper({ children, className }:
	PropsWithChildren<{ className?:string }>) {
	return (
		<div className={`gradient-border cursor-pointer rounded-[11px] ${className}`}>
			<div className="bg-background rounded-[9px]">{children}</div>
		</div>
	);
}
