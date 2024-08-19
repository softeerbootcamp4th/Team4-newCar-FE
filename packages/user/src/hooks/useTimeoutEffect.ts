import { useEffect, useRef } from 'react';

export default function useTimeoutEffect(callback: () => void, delay: number, deps: any[] = []) {
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(callback, delay);

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, deps);
}
