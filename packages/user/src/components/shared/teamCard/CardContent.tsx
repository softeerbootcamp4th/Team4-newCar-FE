import { PropsWithChildren } from 'react';
import type { TeamDescriptions } from 'src/constants/team';

export default function CardContent({
	title,
	summary,
	children,
}: PropsWithChildren<TeamDescriptions>) {
	return (
		<div className="relative z-10 flex h-full flex-col items-center justify-between">
			<div className="text-center">
				<h5>{title}</h5>
				<p className="text-detail-2 whitespace-pre-line">{summary}</p>
			</div>
			<div>{children}</div>
		</div>
	);
}
