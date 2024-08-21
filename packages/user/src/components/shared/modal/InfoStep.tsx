import { PropsWithChildren } from 'react';

export default function InfoStep({ children }: PropsWithChildren) {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-10 p-[20px]">
			<img src="/images/thumbnail.webp" alt="modal" className="max-w-[500px] object-contain" />
			<div className="text-heading-12 flex flex-col items-center gap-4 font-medium">{children}</div>
		</div>
	);
}
