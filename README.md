<<<<<<< HEAD
# 🧩 Omnistra — Interactive Navigation & Scroll Experience

A modern SaaS-style frontend implementation built with:
=======
## Getting Started
>>>>>>> fefe98e67136ef423afb4fa70ee5cf532471f401

- **Next.js (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **Lenis (Smooth Scrolling)**

This project demonstrates advanced navigation patterns, hover-safe mega menus, scroll-driven animations, and production-level motion design.

---

## 🚀 Live Preview

👉 https://omnistra-test.vercel.app  

---

# 📌 Submission Details

**GitHub Repository:**  
https://github.com/xnafi/omnistra-test

---

# 🛠 Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/xnafi/omnistra-test.git
cd omnistra-test
```

---

## 2️⃣ Install Dependencies

Ensure you are using **Node.js v18+**

```bash
npm install
```

or

```bash
yarn install
```

---

# ▶ Run Instructions

## Start Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Production Build

```bash
npm run build
npm start
```

---

# 🏗 Project Architecture

The project follows a modular, feature-based structure with clear separation of concerns.

```
src/
 ├── app/
 │   ├── layout.tsx
 │   └── page.tsx
 │
 ├── components/
 │   ├── pages/
 │   ├── re-ui/
 │   │   └── ReButton.tsx
 │   │
 │   ├── shared/
 │   │   ├── Footer/
 │   │   └── Navbar/
 │   │       ├── Company/
 │   │       ├── Customer/
 │   │       ├── Integrations/
 │   │       ├── MobileMenu/
 │   │       ├── Product/
 │   │       ├── Resources/
 │   │       ├── MegaMenu.tsx
 │   │       ├── NavActions.tsx
 │   │       ├── NavLogo.tsx
 │   │       ├── NavMenu.tsx
 │   │       └── Marquee.tsx
 │   │
 │   └── ui/
 │       ├── Integrations/
 │       └── Navbar/
 │
 ├── data/
 ├── types/
 └── utils/
```

---

## 📐 Architectural Decisions

### 1. Feature-Based Organization
Navigation logic is grouped inside:

```
components/shared/Navbar/
```

Each menu category is modularized into its own folder for scalability.

---

### 2. Clear Separation of Responsibilities

- `shared/Navbar` → layout + interaction logic
- `ui/Integrations` → scroll animation section
- `re-ui` → reusable UI components
- `data` → structured content
- `types` → centralized TypeScript definitions
- `utils` → helper utilities

---

### 3. Motion Isolated Per Section

Scroll-based animations are isolated inside the Integrations section to prevent global scroll side effects.

---

# ✨ Core Features

---

# 1️⃣ Scroll-Aware Navigation

### Behavior

- Navbar shrinks on scroll.
- Logo transitions between large and compact states.
- Background blur appears after scroll.
- Width transitions from full-width to centered container.
- Hovering mega menu also triggers compact mode.

---

### Technical Implementation

- `window.scrollY` listener
- Framer Motion `layout` animation
- Conditional container switching
- Smooth cubic-bezier easing

```tsx
const isCompact = scrolled || activeMenu !== null;
```

All transitions use:

```
ease: [0.16, 1, 0.3, 1]
```

This produces a premium deceleration curve.

---

# 2️⃣ Hover-Safe Mega Menu

### Problem

Dropdowns often disappear when moving from nav item to submenu.

---

### Solution

- Shared hover boundary wrapping Nav + MegaMenu
- 120ms delayed close using `setTimeout`
- `AnimatePresence` for clean exit animation

Result:

✔ No flicker  
✔ Smooth interaction  
✔ Production-grade dropdown behavior  

---

# 🚀 3️⃣ Integrations Scroll Animation

This section delivers the most advanced UI behavior in the project.

---

## 🎯 Objective

Create a scroll-driven transformation where integration logos:

- Start in circular formation
- Gradually shrink
- Fade and blur
- Converge into a final centered logo

---

## 🔧 Implementation

### Step 1 — Section Structure

- Parent container height: `200vh`
- Inner content: `position: sticky`

```tsx
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end end"]
});
```

---

### Step 2 — Scroll Interpolation

```tsx
const scale = useTransform(scrollYProgress, [0.45, 0.7], [1, 0.4]);
const opacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);
const blur = useTransform(scrollYProgress, [0.5, 0.75], [0, 10]);
```

---

## 🎥 Visual Outcome

As the user scrolls:

1. Logos float in a circular orbit.
2. Move inward toward the center.
3. Scale down.
4. Fade out.
5. Apply subtle blur.
6. Final logo scales and fades into view.

This creates motion storytelling rather than static animation.

---

# 🌊 4️⃣ Smooth Scrolling with Lenis

To enhance motion quality, the project integrates **Lenis** for inertia-based smooth scrolling.

---

## Why Lenis?

Default browser scroll feels abrupt, especially for scroll-driven animations.

Lenis provides:

- Smooth inertia
- Consistent scroll timing
- Better perceived performance
- Cinematic feel

---

## Implementation

```tsx
useEffect(() => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);
```

---

### Impact on Integrations Animation

Without smooth scroll:
- Scroll progress feels mechanical.

With Lenis:
- Motion becomes fluid.
- Scroll interpolation feels premium.
- Entire page has cohesive motion language.

---

# 📱 5️⃣ Mobile Navigation

- Accordion-based interaction
- Independent open state
- Arrow rotation animation

```tsx
animate={{ rotate: open ? 180 : 0 }}
```

Ensures mobile UX parity with desktop interaction depth.

---

# 🎨 Motion Philosophy

All animations follow:

- Transform-based movement (GPU accelerated)
- No layout-heavy transitions
- Cubic-bezier premium easing
- Clean mount/unmount transitions
- No unnecessary re-renders

---

# 📈 Performance Considerations

- Transform-only animations
- Scroll isolated per section
- Lenis ensures consistent frame updates
- Framer Motion used selectively
- No heavy animation libraries

---

# ✋ Assumptions

1. Desktop-first SaaS design was prioritized.
2. Accessibility improvements can be added (ARIA roles, keyboard nav).
3. Mobile drawer could be extended further.
4. Focus placed on motion quality and architecture.

---

# 🔮 Future Improvements

- Keyboard-accessible mega menu
- Content crossfade between nav categories
- Staggered dropdown animation
- Scroll progress indicator
- Accessibility audit

---

# 🏁 Outcome

This project demonstrates:

- Scroll-reactive navigation
- Flicker-free mega dropdown
- Advanced scroll-driven animation
- Smooth inertia-based scrolling
- Scalable frontend architecture
- Production-ready motion system

---

## 👤 Author

**Xnafi**  
GitHub: https://github.com/xnafi