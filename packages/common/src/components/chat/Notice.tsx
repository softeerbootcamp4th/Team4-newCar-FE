import { PropsWithChildren } from 'react';

export default function Notice({ children }: PropsWithChildren) {
	return (
		<div className="rounded-7 px-15 flex items-center justify-center gap-6 bg-neutral-600 py-[10px]">
			<p className="text-body-3 min-w-max font-medium">안내</p>
			<p className="text-body-3">{children}</p>
		</div>
	);
}
