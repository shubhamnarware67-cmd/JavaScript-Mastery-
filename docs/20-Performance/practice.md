# Performance — Coding Practice

> Owner: **Shubham Narware** · Status: ✅ Complete

### Performance {#performance}
1. **(Easy)** Use `console.time`/`console.timeEnd` to measure a loop's execution time.
2. **(Medium)** Write a generic `memoize()` function and apply it to an expensive calculation.
3. **(Hard)** Identify and fix a performance bottleneck in a snippet repeatedly querying the DOM in a loop.

### Debounce {#debounce}
1. **(Easy)** Implement a basic `debounce(fn, delay)` function.
2. **(Medium)** Add a `.cancel()` method to your debounce implementation.
3. **(Hard)** Implement a "leading edge" debounce variant that runs immediately on the first call.

### Throttle {#throttle}
1. **(Easy)** Implement a basic `throttle(fn, limit)` function using a boolean flag.
2. **(Medium)** Reimplement throttle using timestamps instead of a boolean flag.
3. **(Hard)** Implement a throttle variant that also guarantees a trailing call fires with the latest arguments.

### Lazy Loading {#lazy-loading}
1. **(Easy)** Add native `loading="lazy"` to below-the-fold images.
2. **(Medium)** Implement `IntersectionObserver`-based lazy loading for images with a `data-src` attribute.
3. **(Hard)** Lazy load a heavy JS module only when a specific button is clicked.

### Tree Shaking {#tree-shaking}
1. **(Easy)** Explain why a CommonJS module is harder to tree-shake than an ES Module.
2. **(Medium)** Rewrite an import pulling in an entire library's default export to import only the needed function.
3. **(Hard)** Explain how side effects in a module affect a bundler's ability to tree-shake it.

---
[← Section Home](./README.md)
