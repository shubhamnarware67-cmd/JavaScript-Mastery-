# Lazy Loading

> Section: Performance · Owner: **Shubham Narware**

## Definition
Lazy loading is a performance technique that defers loading non-critical resources (images, modules, components) until they're actually needed — instead of loading everything upfront.

## History
Lazy loading for images predates modern JavaScript tooling (using scroll-event-based JS libraries in the 2000s-2010s); native browser support (`loading="lazy"` for images/iframes) arrived around **2019**, while dynamic `import()` for JS modules came with **ES2020**.

## Why Lazy Loading Matters
It reduces initial page load time and bandwidth usage by only fetching what's immediately visible or needed, deferring everything else until the user actually requires it (like scrolling to an image, or navigating to a route).

## Syntax
```js
// Native lazy image loading
// <img src="photo.jpg" loading="lazy" alt="..." />

// Lazy loading a JS module
async function loadChart() {
  const { renderChart } = await import("./chart.js");
  renderChart();
}
```

## Types (common lazy loading targets)
| Target | Technique |
|---|---|
| Images | `loading="lazy"` attribute, or IntersectionObserver |
| Below-the-fold content | IntersectionObserver-based rendering |
| JS modules/components | Dynamic `import()`, route-based code splitting |
| Third-party scripts | Load only when a related feature is used (e.g., a chat widget) |

## Examples
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll("img[data-src]").forEach((img) => observer.observe(img));
```

## Memory Diagram
```
Initial page load:
  Above-the-fold content ──► loaded immediately
  Below-the-fold images  ──► placeholder only, real src loaded on scroll-into-view
  Rarely-used JS modules ──► not downloaded until dynamically imported
```

## Flowchart
```
Page loads
        │
Critical, above-the-fold content loads immediately
        │
Non-critical content (images, routes, widgets) stays deferred
        │
Trigger occurs (scroll into view / user navigates / feature used)
        │
Deferred resource is fetched and rendered at that moment
```

## Internal Working
The `IntersectionObserver` API efficiently detects when an element enters the viewport without expensive scroll-event listeners, and dynamic `import()` returns a Promise that the bundler (Webpack/Vite) turns into a separate, on-demand-loaded chunk — both mechanisms avoid the cost of loading/executing code that isn't needed yet.

## Beginner Example
```html
<img src="hero.jpg" alt="Hero" />
<img src="footer-image.jpg" loading="lazy" alt="Footer" />
```

## Intermediate Example
```js
async function loadAdminPanel() {
  const { AdminPanel } = await import("./AdminPanel.js");
  return new AdminPanel();
}
if (userIsAdmin) loadAdminPanel();
```

## Advanced Example
```js
// React-style lazy component loading (conceptual)
const AdminPanel = lazy(() => import("./AdminPanel.js"));
// Only downloaded and rendered when the route/condition requires it
```

## Real World Example
```js
// E-commerce sites lazy-load product images below the fold so the
// initial page (with the hero banner and first few products) loads fast.
```

## Industry Example
```js
// Almost every modern SPA framework (React, Vue, Angular) provides
// built-in route-based lazy loading/code-splitting out of the box.
```

## Interview Questions
See full list → [interview.md](./interview.md#lazy-loading)
1. What's the difference between native `loading="lazy"` and using `IntersectionObserver` manually?
2. How does dynamic `import()` enable lazy loading of JavaScript code?
3. Why is lazy loading particularly important for below-the-fold images on long pages?
4. What's a downside of lazy loading if implemented incorrectly (e.g., lazy-loading above-the-fold content)?
5. How does route-based code splitting relate to lazy loading?

## MCQs
See full list → [mcq.md](./mcq.md#lazy-loading)
1. Which HTML attribute enables native lazy loading for images? (a) `defer` (b) `async` (c) **`loading="lazy"`** (d) `preload` → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#lazy-loading)
1. **(Easy)** Add native `loading="lazy"` to a set of below-the-fold images.
2. **(Medium)** Implement `IntersectionObserver`-based lazy loading for images with a `data-src` attribute.
3. **(Hard)** Implement lazy loading for a heavy JS module, only importing and initializing it when a specific button is clicked.

## Assignments
- [ ] Explain why lazy-loading above-the-fold (immediately visible) content can actually hurt perceived performance.
- [ ] Compare native `loading="lazy"` vs a manual `IntersectionObserver` approach — when would you need the latter?

## Mini Project
Build a small "Lazy Image Gallery": a scrollable page of images using `IntersectionObserver` so only visible (or nearly visible) images are actually loaded.

## Common Mistakes
- Lazy-loading critical above-the-fold content, causing a delay in what the user sees first.
- Forgetting to `unobserve()` an element after it's loaded, causing the observer to keep unnecessarily tracking it.
- Not providing a proper placeholder (size/aspect ratio), causing layout shift when lazy content finally loads.

## Best Practices
- Reserve lazy loading for genuinely non-critical, below-the-fold, or conditionally-needed content.
- Always reserve proper space (via CSS `aspect-ratio` or explicit dimensions) for lazy-loaded content to avoid layout shift.

## Optimization Tips
- Combine route-based code splitting with component-level lazy loading for the biggest wins on large single-page applications.

## Summary
Lazy loading defers non-critical resources — images, JS modules, or entire routes — until they're actually needed, using native `loading="lazy"`, `IntersectionObserver`, or dynamic `import()`, significantly improving initial load performance when applied to genuinely non-critical content.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#lazy-loading)

---
[← Throttle](./throttle.md) | [Section Home](./README.md) | [Tree Shaking →](./tree-shaking.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
