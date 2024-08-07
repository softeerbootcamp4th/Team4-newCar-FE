import React, { FunctionComponent, Suspense } from 'react';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver.ts';

interface LazyLoadSectionProps {
	component: React.LazyExoticComponent<FunctionComponent>;
}

function LazyLoadSection<T extends HTMLElement>({ component: Component }: LazyLoadSectionProps) {
	const [ref, isIntersecting] = useIntersectionObserver<T>();

	return (
		<div ref={ref as React.RefObject<HTMLDivElement>} className="min-h-[1000px]">
			{isIntersecting && (
				<Suspense fallback={null}>
					<Component />
				</Suspense>
			)}
		</div>
	);
}

export default LazyLoadSection;
