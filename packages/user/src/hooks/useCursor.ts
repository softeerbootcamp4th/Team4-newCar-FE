import { useEffect } from 'react';

function useCursor() {
	useEffect(() => {
		const cursorRounded = document.querySelector('.custom-cursor-obj') as HTMLElement;
		if (!cursorRounded) {
			console.error('커서 요소가 페이지에서 발견되지 않았습니다.');
			return;
		}
		const moveCursor = (e: MouseEvent) => {
			const mouseY = e.clientY;
			const mouseX = e.clientX;
			// position을 transform(GPU)으로 관리하면 실제로 화면상 위치와 조금 다를 수 있음
			// style의 포지션을 기반으로 관리하면 조금 느려도 확실하게 위치를 잡을 수 있음
			cursorRounded.style.top = `${mouseY - 0}px`;
			cursorRounded.style.left = `${mouseX - 0}px`;
			// cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
		};
		window.addEventListener('mousemove', moveCursor);
		return () => {
			window.removeEventListener('mousemove', moveCursor);
		};
	}, []);
}

export default useCursor;
