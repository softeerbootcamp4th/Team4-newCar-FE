import { PropsWithChildren } from 'react';
import type { CardTitle } from './index';

export default function CardContent({ label, details, children }: PropsWithChildren<CardTitle>) {
	return (
		<div className="relative z-10 flex h-full flex-col items-center justify-between">
			<div className="text-center">
				<h5>{label}</h5>
				<p className="text-detail-2 whitespace-pre-line">{details}</p>
			</div>
			<div>{children}</div>
		</div>
	);
}
