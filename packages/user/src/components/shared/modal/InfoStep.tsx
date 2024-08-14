import { PropsWithChildren } from 'react';

export default function InfoStep({ children }: PropsWithChildren) {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-10 p-[20px]">
			<img src="/images/fcfs/modal.png" alt="modal" className="h-full object-contain" />
			<div className="text-heading-12 flex flex-col items-center gap-4 font-medium">{children}</div>
		</div>
	);
}
