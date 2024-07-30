import { PropsWithChildren } from 'react';

export default function TopSection() {
	return (
		<div className="flex flex-col items-center gap-6">
			<Highlight>매일 3시 15분!</Highlight>
			<h2>깜짝 선착순 퀴즈 OPEN</h2>
		</div>
	);
}

function Highlight({ children }: PropsWithChildren) {
	return (
		<div className="border-primary rounded-[20px] border-2 px-[21px]">
			<p className="text-body-2 text-primary font-medium">{children}</p>
		</div>
	);
}
