# Performance

> Section: Performance · Owner: **Shubham Narware**

## Definition
JavaScript performance refers to how efficiently code executes and how responsive an application feels — covering execution speed, memory usage, and rendering smoothness.

## History
Performance concerns grew alongside JavaScript's expanding role — from simple form validation in the 1990s to complex single-page applications today — driving the creation of profiling tools, the V8 JIT compiler, and numerous browser optimization APIs.

## Why Performance Matters
Slow JavaScript directly hurts user experience — janky scrolling, unresponsive clicks, and slow page loads all drive users away, and search engines also factor page performance into rankings.

## Syntax
```js
// Measuring performance with the Performance API
const start = performance.now();
doExpensiveWork();
const end = performance.now();
console.log(`Took ${end - start}ms`);
```

## Types (common performance concerns)
| Concern | Focus |
|---|---|
| Load performance | Time to first render, time to interactive |
| Runtime performance | Smooth interactions, animations, scrolling (60fps) |
| Memory performance | Avoiding leaks, keeping memory footprint low |
| Network performance | Minimizing request size/count |

## Examples
```js
console.time("loop");
for (let i = 0; i < 1e6; i++) {}
console.timeEnd("loop"); // logs elapsed time
```

## Memory Diagram
```
Performance budget:
  Load time  ──► under ~2-3s for good UX
  Frame time ──► under ~16ms for 60fps (no jank)
  Memory     ──► stable over time (no leaks)
```

## Flowchart
```
Identify a performance problem (slow load, janky scroll, memory growth)
        │
Measure with tools (Performance API, DevTools Profiler/Memory panel)
        │
Identify the bottleneck (long task, layout thrashing, leak, etc.)
        │
Apply targeted fix (debounce, code-split, memoize, virtualize, etc.)
        │
Re-measure to confirm improvement
```

## Internal Working
Modern JS engines (like V8) use a **JIT (Just-In-Time) compiler** that optimizes "hot" (frequently executed) code paths at runtime — writing predictable, monomorphic code (consistent object shapes/types) helps the engine optimize more effectively than highly dynamic, polymorphic code.

## Beginner Example
```js
console.time("sum");
let sum = 0;
for (let i = 0; i < 1000000; i++) sum += i;
console.timeEnd("sum");
```

## Intermediate Example
```js
// Avoiding unnecessary re-computation with memoization
function memoize(fn) {
  const cache = new Map();
  return (arg) => {
    if (cache.has(arg)) return cache.get(arg);
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}
```

## Advanced Example
```js
// Using requestIdleCallback to defer non-urgent work
requestIdleCallback(() => {
  logAnalyticsData();
});
```

## Real World Example
```js
// Virtualized lists (rendering only visible rows) are a common
// performance technique for displaying thousands of items smoothly.
```

## Industry Example
```js
// Core Web Vitals (LCP, FID/INP, CLS) are performance metrics
// Google uses to evaluate real-world page experience and rankings.
```

## Interview Questions
See full list → [interview.md](./interview.md#performance)
1. What's the difference between load performance and runtime performance?
2. How does memoization improve performance, and what's the tradeoff?
3. What is a JIT compiler, and how does writing "monomorphic" code help it?
4. What tools would you use to diagnose a memory leak in a web app?
5. What are Core Web Vitals, and why do they matter?

## MCQs
See full list → [mcq.md](./mcq.md#performance)
1. Which API is used to measure precise elapsed time in JavaScript? (a) `Date.now()` only (b) **`performance.now()`** (c) `setTimeout()` (d) `console.log()` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#performance)
1. **(Easy)** Use `console.time`/`console.timeEnd` to measure a loop's execution time.
2. **(Medium)** Write a generic `memoize()` function and apply it to an expensive calculation.
3. **(Hard)** Identify and fix a performance bottleneck in a given snippet that repeatedly queries the DOM inside a loop.

## Assignments
- [ ] Explain why writing consistent object shapes helps JS engines optimize code.
- [ ] List three tools/techniques you'd use to diagnose slow page load performance.

## Mini Project
Build a small "Performance Dashboard": measure and display the load time, a simulated heavy computation's execution time, and memory usage trend over several operations.

## Common Mistakes
- Optimizing code without first measuring where the actual bottleneck is ("premature optimization").
- Querying/manipulating the DOM repeatedly inside a loop instead of batching changes.
- Ignoring memory growth over time, leading to gradually degrading performance (a slow leak).

## Best Practices
- Always measure before and after optimizing, using real profiling tools rather than guessing.
- Batch DOM reads and writes separately to avoid layout thrashing.

## Optimization Tips
- Use `requestIdleCallback`/`requestAnimationFrame` appropriately to schedule non-urgent work without blocking rendering.

## Summary
JavaScript performance spans load time, runtime responsiveness, and memory efficiency — best improved by measuring first with real profiling tools, then applying targeted techniques like memoization, batching, and code-splitting rather than guessing at optimizations.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#performance)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Debounce →](./debounce.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
