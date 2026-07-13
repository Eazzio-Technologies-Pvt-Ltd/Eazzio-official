import React from 'react';
import { motion } from 'framer-motion';
import { revealVariants } from './variants';
import { viewport as viewportTokens, distances, durations } from './motionTokens';

/**
 * Reusable Reveal component.
 * Abstracted interface so pages do not directly manipulate framer-motion settings.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elements to animate
 * @param {'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'} [props.direction='up'] - Direction or type of entrance
 * @param {number} [props.delay=0] - Initial delay before starting the animation (in seconds)
 * @param {number} [props.duration] - Length of transition (in seconds)
 * @param {number} [props.distance] - Translation offset distance (in pixels)
 * @param {boolean} [props.triggerOnce=true] - Set true to only animate once on viewport entry
 * @param {string} [props.className=''] - Custom DOM styling classes
 */
const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration,
  distance = distances.medium,
  triggerOnce = viewportTokens.once,
  className = '',
  ...rest
}) => {
  const customParams = {
    direction,
    distance,
    delay,
    duration
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: viewportTokens.margin, amount: viewportTokens.amount }}
      variants={revealVariants}
      custom={customParams}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
