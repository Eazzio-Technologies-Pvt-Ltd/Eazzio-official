# Eazzio Motion System

A centralized, performance-first motion design system. Designed to deliver subtle, premium interactions without compromising accessibility or layout stability.

---

## Design Philosophy

Motion on the Eazzio platform should enhance, not distract. We adopt a **utilitarian** philosophy:
- **Purpose-driven:** Every animation must guide user attention, establish hierarchy, or provide feedback.
- **Understated Quality:** Users should feel the platform's refinement subconsciously rather than being forced to watch decorative animations.
- **Linear/Stripe Aesthetics:** Smooth, fast-accelerating, slow-decelerating sweeps. No bouncy, spring-based, or overly elastic timing curves.

---

## Architectural Principles

1. **GPU Acceleration Only:** Animating attributes that cause page layout reflows (e.g. `width`, `height`, `margin`, `padding`, `top`, `left`) is strictly prohibited. Everything must run on `opacity` and `transform` (`x`, `y`, `scale`, `rotate`).
2. **Strict Token Adherence:** Timings, distances, scales, and offsets are fetched from `motionTokens.js`. Do not write arbitrary numbers in component transitions.
3. **OS-Level Accessibility:** The system respects `prefers-reduced-motion` at the OS level. If enabled, animations are automatically disabled or simplified.

---

## Motion Design Tokens (`motionTokens.js`)

Centralized constants controlling the motion feel:

| Token Category | Value | Usage |
| :--- | :--- | :--- |
| **Easing (`primary`)** | `cubic-bezier(0.16, 1, 0.3, 1)` | Default entrance/exit ease (easeOutExpo) |
| **Easing (`hover`)** | `cubic-bezier(0.25, 0.8, 0.25, 1)` | Highly responsive curve for cursor events |
| **Durations** | `fast: 0.25s` \| `normal: 0.45s` \| `slow: 0.75s` | Dictates animation speeds |
| **Distances** | `small: 12px` \| `medium: 24px` \| `large: 48px` | Maximum offset shift parameters |
| **Viewport** | `once: true`, `margin: "-10%"` | Controls intersection observer ranges |

---

## API Reference & Usage

### 1. Root Registration
Wrap the root layout in `<MotionProvider>` to inject default configurations and accessibility handlers:

```jsx
import MotionProvider from './motion/MotionProvider';

function App() {
  return (
    <MotionProvider>
      <Layout />
    </MotionProvider>
  );
}
```

### 2. Viewport Reveal Components
Animate elements into view as they scroll onto the screen.

```jsx
import Reveal from './motion/Reveal';

// Default fade-up reveal
<Reveal direction="up" delay={0.1}>
  <h2>Standard Section Header</h2>
</Reveal>

// Scale-in reveal (starts at scale: 0.975)
<Reveal direction="scale" duration={0.8}>
  <img src={heroVisual} alt="Hero Asset" />
</Reveal>
```

### 3. List Stagger Orchestration
Reveal groups of components sequentially.

```jsx
import Stagger from './motion/Stagger';
import Reveal from './motion/Reveal';

<Stagger staggerChildren={0.1}>
  {items.map(item => (
    <Reveal key={item.id} direction="up">
      <Card content={item} />
    </Reveal>
  ))}
</Stagger>
```

### 4. Interactive Micro-Interactions
Apply hover presets that utilize GPU compositing.

```jsx
import Hoverable from './motion/Hoverable';

// Interactive Card (Lifts 4px on Y-axis)
<Hoverable type="card">
  <div className="card">Card Content</div>
</Hoverable>

// Interactive Button (Subtly scales up by 2%)
<Hoverable type="button">
  <button className="btn">Action Button</button>
</Hoverable>
```

### 5. Custom JavaScript Animations (Hooks)
Query reduced motion settings programmatically for 3D elements, canvas widgets, or future library integrations:

```javascript
import { useReducedMotion } from './motion/hooks/useReducedMotion';

const isReduced = useReducedMotion();

if (isReduced) {
  // Disable intensive canvas/3D calculations
}
```
