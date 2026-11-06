import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (window.innerWidth < 1024) return;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (ringRef.current) {
        ringRef.current.animate(
          { left: `${e.clientX}px`, top: `${e.clientY}px` },
          { duration: 220, fill: 'forwards' }
        );
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div ref={dotRef} id="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} id="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
