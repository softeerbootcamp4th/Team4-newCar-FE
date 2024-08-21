import { PropsWithChildren } from 'react';

export default function Notice({ children }: PropsWithChildren) {
	return (
		<div className="rounded-7 px-15 bg-skyblue-500 flex items-center justify-center gap-6 py-[10px]">
			<p className="text-body-3 text-foreground min-w-max font-medium">안내</p>
			<p className="text-body-3 text-foreground">{children}</p>
		</div>
	);
}
