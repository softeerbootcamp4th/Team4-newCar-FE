import React, { FunctionComponent, Suspense } from 'react';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver.ts';

interface InViewLoadSectionProps {
	component: FunctionComponent | React.LazyExoticComponent<FunctionComponent>;
	className?: string;
}

function InViewLoadSection<T extends HTMLElement>({
	component: Component,
	className = '',
}: InViewLoadSectionProps) {
	const [ref, isIntersecting] = useIntersectionObserver<T>();

	return (
		<div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
			{isIntersecting && (
				<Suspense fallback={null}>
					<Component />
				</Suspense>
			)}
		</div>
	);
}

export default InViewLoadSection;
