import React from 'react';
import { motion } from 'framer-motion';
import { hoverVariants } from './variants';

/**
 * Reusable Hoverable component.
 * Attaches GPU-accelerated micro-animations on interactive items.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Element to attach hover animations to
 * @param {'card' | 'button' | 'icon' | 'link'} [props.type='button'] - Hover animation archetype
 * @param {string} [props.className=''] - Custom styling class
 */
const Hoverable = ({
  children,
  type = 'button',
  className = '',
  ...rest
}) => {
  const selectedVariant = hoverVariants[type] || hoverVariants.button;

  return (
    <motion.div
      className={className}
      whileHover={selectedVariant}
      style={{ display: 'inline-block', width: '100%' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Hoverable;
