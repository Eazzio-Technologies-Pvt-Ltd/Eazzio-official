import React from 'react';
import { MotionConfig } from 'framer-motion';
import { easing, durations } from './motionTokens';

/**
 * Motion Provider Component.
 * Sets global constraints and fallback settings for the animation system.
 * Specifically handles prefers-reduced-motion using `reducedMotion="user"`.
 */
const MotionProvider = ({ children }) => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        ease: easing.primary,
        duration: durations.normal
      }}
    >
      {children}
    </MotionConfig>
  );
};

export default MotionProvider;
