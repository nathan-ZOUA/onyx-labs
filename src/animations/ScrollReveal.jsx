import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children, variant = 'fade-up', delay = 0, className = '' }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fromVars = { opacity: 0 };
    if (variant === 'fade-up') fromVars.y = 32;
    if (variant === 'fade-left') fromVars.x = -36;
    if (variant === 'fade-right') fromVars.x = 36;
    if (variant === 'scale-in') fromVars.scale = 0.92;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.75,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [variant, delay]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
