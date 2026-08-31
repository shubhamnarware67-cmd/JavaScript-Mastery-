# Performance — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### Performance {#performance}
```js
const start = performance.now(); doWork(); console.log(performance.now() - start);
```
JIT compiler optimizes hot, monomorphic code. Core Web Vitals: LCP, INP, CLS.

### Debounce {#debounce}
```js
function debounce(fn, delay) {
  let timer;
  return (...a) => { clearTimeout(timer); timer = setTimeout(() => fn(...a), delay); };
}
```
Waits for silence. Use for search-as-you-type, auto-save.

### Throttle {#throttle}
```js
function throttle(fn, limit) {
  let inThrottle;
  return (...a) => { if (!inThrottle) { fn(...a); inThrottle = true; setTimeout(() => inThrottle = false, limit); } };
}
```
Regular interval execution. Use for scroll/resize.

### Lazy Loading {#lazy-loading}
```html
<img src="x.jpg" loading="lazy" />
```
```js
const mod = await import("./heavy.js");
```

### Tree Shaking {#tree-shaking}
Requires ES Modules (static `import`/`export`). Mark `"sideEffects": false` in package.json for aggressive shaking.

---
[← Section Home](./README.md)
