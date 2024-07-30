import { ReactElement } from 'react';

interface InfoBoxProps {
	title: string | ReactElement;
	details: string;
}
export default function InfoBox({ title, details }: InfoBoxProps) {
	return (
		<div className="flex h-full flex-col justify-center gap-10 pl-[50px]">
			{title}
			<p className="text-body-2 z-10 overflow-visible whitespace-pre-line text-nowrap">{details}</p>
		</div>
	);
}
