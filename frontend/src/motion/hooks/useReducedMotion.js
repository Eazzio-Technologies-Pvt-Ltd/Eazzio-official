import { useState, useEffect } from 'react';

/**
 * Reusable React Hook to check for prefers-reduced-motion.
 * Highly useful for custom animations, canvas systems, or future GSAP integrations.
 * 
 * @returns {boolean} True if the user prefers reduced motion at the OS/Browser level.
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (event) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  return reducedMotion;
}
