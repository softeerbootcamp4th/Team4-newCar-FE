import { PropsWithChildren } from 'react';
import DeferredWrapper from 'src/components/common/DeferredWrapper.tsx';

export default function PendingStep({ children }: PropsWithChildren) {
	return (
		<DeferredWrapper>
			<div className="flex h-full w-full flex-col items-center justify-center gap-10 p-[20px]">
				<img src="/images/fcfs/modal.png" alt="modal" className="h-full object-contain" />
				<p className="text-heading-12 font-medium">{children}</p>
			</div>
		</DeferredWrapper>
	);
}
