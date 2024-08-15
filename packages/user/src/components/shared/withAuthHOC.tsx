import React, { PropsWithChildren, ReactElement, useCallback, useState } from 'react';
import TriggerButtonWrapper from 'src/components/common/TriggerButtonWrapper.tsx';
import LoginModal from 'src/components/shared/modal/login/index.tsx';
import useAuth from 'src/hooks/useAuth.tsx';

interface WithAuthProps {
	unauthenticatedDisplay: ReactElement;
}

export default function withAuth<T extends object>(WrappedComponent: React.ComponentType<T>) {
	return function AuthWrapper({
		unauthenticatedDisplay,
		...props
	}: T & PropsWithChildren<WithAuthProps>) {
		const { isAuthenticated } = useAuth();
		const [isUnauthenticatedDisplay, setIsUnauthenticatedDisplay] = useState(false);

		const handleLoginModalClose = useCallback(() => setIsUnauthenticatedDisplay(false), []);

		if (!isAuthenticated || isUnauthenticatedDisplay) {
			if (!isUnauthenticatedDisplay) setIsUnauthenticatedDisplay(true);
			return (
				<LoginModal
					openTrigger={<TriggerButtonWrapper>{unauthenticatedDisplay}</TriggerButtonWrapper>}
					onClose={handleLoginModalClose}
				/>
			);
		}

		return <WrappedComponent {...(props as T)} />;
	};
}
