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
      cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);
}

export default useCursor;
