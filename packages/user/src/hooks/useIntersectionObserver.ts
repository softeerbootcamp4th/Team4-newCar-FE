import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number | number[];
}

const useIntersectionObserver = <T extends Element>(
	options?: IntersectionObserverOptions,
): [MutableRefObject<T | null>, boolean] => {
	const targetRef = useRef<T | null>(null);
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries, thisObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsIntersecting(true);
					thisObserver.disconnect();
				}
			});
		}, options);

		if (targetRef.current) {
			observer.observe(targetRef.current);
		}

		return () => {
			if (targetRef.current) {
				observer.unobserve(targetRef.current);
			}
		};
	}, [options]);

	return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
