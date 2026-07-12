/**
 * Motion Design Tokens
 * 
 * Centralized constants for the animation design system.
 * Follows premium, high-fidelity interaction guidelines.
 */

export const easing = {
  // Premium cubic-bezier curve (easeOutExpo): fast acceleration, slow deceleration
  primary: [0.16, 1, 0.3, 1],
  
  // Custom curve for micro-interactions/hovers: responsive and snappy
  hover: [0.25, 0.8, 0.25, 1],
  
  // Linear for simple fades/progress indicators
  linear: [0, 0, 1, 1],
};

export const durations = {
  instant: 0.1,
  fast: 0.25,     // For hovers, tooltips, and small toggles
  normal: 0.45,   // For card expansions, medium transitions
  slow: 0.75,     // For page transitions, hero reveals
  deliberate: 1.0 // For complex animations
};

export const distances = {
  none: 0,
  small: 12,      // Subtly shifts text elements
  medium: 24,     // Default for card/section fades
  large: 48       // Dramatic reveals for large imagery
};

export const scales = {
  default: 1.0,
  hoverButton: 1.02,
  hoverCard: 1.01,
  hoverIcon: 1.1,
  entrance: 0.975  // Starting scale for scale reveals
};

export const delays = {
  none: 0,
  stagger: 0.08,   // Delay between list items
  entry: 0.15      // Default wait time before starting reveals
};

export const opacities = {
  hidden: 0,
  visible: 1
};

export const viewport = {
  once: true,      // Trigger animations only once on scroll
  margin: "-10%",  // Trigger when 10% of the element is visible
  amount: 0.15     // Required element portion in view
};
