import React, { useState, useEffect, useRef } from 'react';

/**
 * Reusable, zero-dependency CountUp component.
 * Animates numbers using an easeOutCubic velocity curve on scroll entry.
 */
const CountUp = ({ end, duration = 800 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Return early if prefers-reduced-motion is active
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTimestamp = null;
        
        // Easing curve (easeOutCubic) for natural deceleration
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          
          const easedProgress = easeOutCubic(progress);
          setCount(Math.floor(easedProgress * end));
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [end, duration, hasAnimated]);

  return <span ref={elementRef}>{count}</span>;
};

export default CountUp;
