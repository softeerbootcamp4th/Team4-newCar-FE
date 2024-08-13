import { PropsWithChildren } from 'react';
import UnassignedCard from 'src/components/shared/UnassignedCard.tsx';

export default function PendingStatus({ children }: PropsWithChildren) {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-10">
			<UnassignedCard />
			<p className="text-heading-12 font-medium">{children}</p>
		</div>
	);
}
