import { PropsWithChildren } from 'react';
import DeferredWrapper from 'src/components/common/DeferredWrapper.tsx';
import InfoStep from './InfoStep.tsx';

export default function PendingStep({ children }: PropsWithChildren) {
	return (
		<DeferredWrapper>
			<InfoStep>{children}</InfoStep>
		</DeferredWrapper>
	);
}
