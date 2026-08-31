# Performance — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### Performance {#performance}
1. **What's the difference between load performance and runtime performance?** Load performance covers time-to-first-render/interactive; runtime performance covers ongoing responsiveness like smooth scrolling and animations.
2. **How does memoization improve performance, and what's the tradeoff?** It caches results of expensive calls, trading memory usage for avoided recomputation.
3. **What is a JIT compiler, and how does monomorphic code help it?** A Just-In-Time compiler optimizes hot code paths at runtime; consistent object shapes/types let it generate faster optimized code instead of falling back to slower generic paths.
4. **What tools diagnose a memory leak in a web app?** Browser DevTools' Memory panel — taking heap snapshots before/after a suspected leaking action and comparing.
5. **What are Core Web Vitals?** Metrics (LCP, INP, CLS) Google uses to evaluate real-world page experience and search rankings.

### Debounce {#debounce}
1. **How does debounce differ from throttle?** Debounce waits for a pause in calls before running once; throttle guarantees periodic execution regardless of pauses.
2. **Why does debounce use `clearTimeout` on every call?** To reset the pending timer, ensuring the function only runs after calls have stopped for the full delay.
3. **What's the difference between "leading" and "trailing" debounce?** Leading runs immediately on the first call; trailing (default) runs only after the calls settle.
4. **Give a real use case for debounce.** Search-as-you-type, only firing the API call once the user pauses typing.
5. **How would you implement a `.cancel()` method?** Store the timer reference and expose a method that calls `clearTimeout()` on it.

### Throttle {#throttle}
1. **How does throttle differ from debounce in execution guarantees?** Throttle guarantees regular execution at fixed intervals; debounce waits for silence before running once.
2. **Why choose throttle over debounce for scroll handlers?** Scroll needs regular, ongoing updates, not just a final settled value.
3. **What is "leading" vs "trailing" throttle?** Leading runs immediately then blocks further calls; trailing also fires once more at the end of the window with the latest args.
4. **How would you implement throttle using timestamps instead of a boolean flag?** Compare `Date.now()` to the last call time, only executing if enough time has elapsed.
5. **Give a use case where throttle is clearly better than debounce.** Infinite scroll position checks, which need periodic updates during continuous scrolling.

### Lazy Loading {#lazy-loading}
1. **What's the difference between native `loading="lazy"` and manual `IntersectionObserver`?** Native lazy loading is built-in and simpler for images/iframes; `IntersectionObserver` gives more control for custom triggers/animations.
2. **How does dynamic `import()` enable lazy loading of JS?** It returns a Promise resolving to the module, letting bundlers split it into a separate chunk loaded only when called.
3. **Why is lazy loading important for below-the-fold images?** It avoids fetching content the user may never scroll to, speeding up initial load.
4. **What's a downside of lazy loading implemented incorrectly?** Lazy-loading above-the-fold content delays what the user sees first, hurting perceived performance.
5. **How does route-based code splitting relate to lazy loading?** Each route's JS bundle is dynamically imported only when the user navigates there.

### Tree Shaking {#tree-shaking}
1. **Why does tree shaking require ES Modules rather than CommonJS?** ES Module imports/exports are statically analyzable at build time; CommonJS's dynamic `require()` isn't.
2. **What does `"sideEffects": false` communicate to a bundler?** That a package is safe to aggressively remove unused parts of, since nothing relies on side effects from unused code.
3. **Why might importing an entire default export prevent tree shaking?** The bundler can't tell which parts of the default object are actually used, so it may keep the whole thing.
4. **What is "dead code," and how does tree shaking identify it?** Exported code never actually imported anywhere in the app's dependency graph.
5. **How does tree shaking relate to page load performance?** Smaller bundles mean less JS to download and parse, directly improving load time.

---
[← Section Home](./README.md)
