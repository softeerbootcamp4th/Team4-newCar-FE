import { PropsWithChildren, useEffect, useState } from 'react';

interface DeferredWrapperProps {
	ms?: number;
}

export default function DeferredWrapper({
	children,
	ms = 200,
}: PropsWithChildren<DeferredWrapperProps>) {
	const [isDeferred, setIsDeferred] = useState(false);

	useEffect(() => {
		/** ms lazy rendering */
		const timeoutId = setTimeout(() => setIsDeferred(true), ms);
		return () => clearTimeout(timeoutId);
	}, []);

	if (!isDeferred) {
		return null;
	}

	return children;
}
