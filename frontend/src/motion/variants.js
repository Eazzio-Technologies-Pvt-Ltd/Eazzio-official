import { easing, durations, distances, scales, opacities } from './motionTokens';

/**
 * Reusable reveal variants for page elements.
 * Maps directions to x/y displacement arrays.
 */
export const revealVariants = {
  hidden: (custom = {}) => {
    const { direction = 'up', distance = distances.medium, scale = scales.default } = custom;
    
    const offsets = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
      scale: { x: 0, y: 0, scale: custom.scale !== undefined ? custom.scale : scales.entrance },
      fade: { x: 0, y: 0 }
    };

    return {
      opacity: opacities.hidden,
      ...(offsets[direction] || offsets.up),
      transition: {
        duration: custom.duration || durations.normal,
        ease: easing.primary
      }
    };
  },
  
  visible: (custom = {}) => {
    return {
      opacity: opacities.visible,
      x: 0,
      y: 0,
      scale: 1.0,
      transition: {
        duration: custom.duration || durations.normal,
        delay: custom.delay || 0,
        ease: easing.primary
      }
    };
  }
};

/**
 * Orchestrator variant to stagger children elements.
 */
export const staggerContainer = {
  hidden: {},
  visible: (custom = {}) => ({
    transition: {
      staggerChildren: custom.staggerChildren || 0.08,
      delayChildren: custom.delayChildren || 0,
      ease: easing.primary
    }
  })
};

/**
 * Hover presets utilizing GPU-accelerated transforms.
 */
export const hoverVariants = {
  card: {
    y: -4,
    scale: scales.hoverCard,
    transition: {
      duration: durations.fast,
      ease: easing.hover
    }
  },
  
  button: {
    scale: scales.hoverButton,
    transition: {
      duration: durations.fast,
      ease: easing.hover
    }
  },
  
  icon: {
    scale: scales.hoverIcon,
    rotate: 2,
    transition: {
      duration: durations.fast,
      ease: easing.hover
    }
  },
  
  link: {
    opacity: 0.85,
    transition: {
      duration: durations.fast,
      ease: easing.hover
    }
  }
};
