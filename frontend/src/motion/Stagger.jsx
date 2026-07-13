import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from './variants';
import { viewport as viewportTokens, delays } from './motionTokens';

/**
 * Reusable Stagger Container.
 * Orchestrates sequenced reveals of nested motion elements.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements that contain animate/reveal bindings
 * @param {number} [props.staggerChildren=0.08] - Delay interval between child elements (in seconds)
 * @param {number} [props.delayChildren=0] - Initial delay before first child starts (in seconds)
 * @param {boolean} [props.triggerOnce=true] - Trigger when scrolled into view
 * @param {string} [props.className=''] - Custom CSS class
 */
const Stagger = ({
  children,
  staggerChildren = delays.stagger,
  delayChildren = 0,
  triggerOnce = viewportTokens.once,
  className = '',
  ...rest
}) => {
  const customParams = {
    staggerChildren,
    delayChildren
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: viewportTokens.margin, amount: viewportTokens.amount }}
      variants={staggerContainer}
      custom={customParams}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Stagger;
