# Memoization

> Section: Functions · Owner: **Shubham Narware**

## Definition
Memoization is an optimization technique that caches a function's previous results, returning the cached value instantly for repeated calls with the same arguments instead of recomputing.

## History
A classic computer-science optimization technique (the term dates to the 1960s), commonly implemented in JavaScript using closures — became especially prominent with React's `useMemo`/`React.memo` (introduced with Hooks in 2019).

## Why Memoization Matters
For expensive, pure (side-effect-free) computations called repeatedly with the same inputs, memoization can turn an O(n) recomputation into an O(1) cache lookup.

## Syntax
```js
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
```

## Types
| Approach | Notes |
|---|---|
| Manual closure-based cache | Full control, simplest to understand |
| `Map`-based cache | Good general-purpose key-value cache |
| Library-based (Lodash `_.memoize`) | Battle-tested, configurable cache key resolution |
| React's `useMemo`/`React.memo` | Memoizes computed values/component renders |

## Examples
```js
function slowSquare(n) {
  for (let i = 0; i < 1e8; i++) {} // simulate expensive work
  return n * n;
}
const memoizedSquare = memoize(slowSquare);
console.log(memoizedSquare(5)); // slow the first time
console.log(memoizedSquare(5)); // instant — served from cache
```

## Memory Diagram
```
memoize(fn) creates a persistent `cache` Map via closure
        │
Each call: compute a cache key from arguments
        │
Key exists? ──Yes──► return cached value instantly
        │No
Compute result, store it in cache, then return it
```

## Flowchart
```
Call memoized function with arguments
        │
Generate cache key from arguments
        │
Key already in cache? ──Yes──► Return cached result (fast path)
        │No
Run the original expensive function
        │
Store result in cache under this key
        │
Return the newly computed result
```

## Internal Working
Memoization relies on a closure to keep a cache object alive across calls — the cache is checked first on every invocation; only a true cache-miss triggers the original (potentially expensive) computation.

## Beginner Example
```js
function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}
const square = memoize(n => n * n);
console.log(square(4)); // 16 (computed)
console.log(square(4)); // 16 (cached)
```

## Intermediate Example
```js
// Memoizing a recursive Fibonacci function — dramatic speedup
function memoize(fn) {
  const cache = new Map();
  return function (n) {
    if (cache.has(n)) return cache.get(n);
    const result = fn(n);
    cache.set(n, result);
    return result;
  };
}
const fib = memoize(function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});
console.log(fib(40)); // fast, thanks to memoized recursive calls
```

## Advanced Example
```js
// Memoizing based on multiple arguments using a serialized key
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
const add = memoize((a, b) => a + b);
console.log(add(2, 3)); // 5 (computed)
console.log(add(2, 3)); // 5 (cached)
```

## Real World Example
```js
// React's useMemo avoids recomputing an expensive derived value
// unless its dependencies actually change
// const sortedList = useMemo(() => expensiveSort(list), [list]);
```

## Industry Example
```js
// Lodash's _.memoize is widely used in production for caching
// expensive pure computations (e.g. formatting, parsing) across calls.
```

## Interview Questions
See full list → [interview.md](./interview.md#memoization)
1. What is memoization, and what kind of functions benefit most from it?
2. How does memoization typically use closures internally?
3. Why is memoization only safe for "pure" functions?
4. What's the tradeoff (cost) of memoization, even when it helps?
5. Give a real example (React or otherwise) where memoization is commonly used.

## MCQs
See full list → [mcq.md](./mcq.md#memoization)
1. Memoization primarily improves performance by: (a) Making functions run in parallel (b) **Caching results to avoid recomputation** (c) Reducing code size (d) Removing the need for arguments → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#memoization)
1. **(Easy)** Write a `memoize()` utility that caches results for a single-argument function.
2. **(Medium)** Use memoization to dramatically speed up a naive recursive Fibonacci implementation.
3. **(Hard)** Extend `memoize()` to support multi-argument functions using a serialized cache key.

## Assignments
- [ ] Benchmark a slow function with and without memoization (e.g. using `console.time`), and document the difference.
- [ ] Explain, with an example, why memoization is unsafe for impure functions (e.g. ones depending on external mutable state).

## Mini Project
Build a memoized "Expensive Calculation" demo: a slow computation function, a `memoize()` wrapper, and a small script proving the second call for the same input is dramatically faster.

## Common Mistakes
- Memoizing impure functions (relying on external state, randomness, or side effects), leading to stale/incorrect cached results.
- Using an unbounded cache for functions called with many unique argument combinations, risking memory bloat.
- Serializing complex/non-serializable arguments (like functions) incorrectly when generating cache keys.

## Best Practices
- Only memoize pure functions (same input always produces the same output, no side effects).
- Consider cache size limits (e.g. LRU eviction) for functions called with many distinct argument combinations over a long-running process.

## Optimization Tips
- Memoization trades memory for speed — profile first to confirm a function is actually a bottleneck before adding caching complexity.

## Summary
Memoization caches a pure function's previous results (typically via a closure-held cache), avoiding redundant recomputation for repeated calls with the same arguments — a powerful optimization for expensive, deterministic functions like recursive algorithms or derived UI computations.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#memoization)

---
[← Currying](./currying.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
