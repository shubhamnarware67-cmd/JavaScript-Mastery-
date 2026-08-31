# Throttle

> Section: Performance · Owner: **Shubham Narware**

## Definition
Throttling is a technique that ensures a function executes **at most once** within a specified time window, regardless of how many times the triggering event fires during that window.

## History
Like debounce, throttling became a standard JavaScript performance pattern popularized through Underscore.js and Lodash, addressing scenarios where debounce's "wait for silence" behavior isn't appropriate.

## Why Throttle Matters
It guarantees a function runs at a steady, predictable rate during continuous events (like scrolling or mouse movement), rather than either firing excessively or waiting for the event to stop entirely.

## Syntax
```js
function throttle(fn, limit) {
  let inThrottle = false;
  return (...args) => {
    if (inThrottle) return;
    fn(...args);
    inThrottle = true;
    setTimeout(() => (inThrottle = false), limit);
  };
}
```

## Types (variations)
| Variation | Behavior |
|---|---|
| Leading throttle (default) | Runs immediately, then ignores calls until the window passes |
| Trailing throttle | Also runs once more at the end of the window if calls happened during it |
| Throttle vs Debounce | Throttle guarantees periodic execution; debounce waits for silence |

## Examples
```js
const throttledScroll = throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 200);

window.addEventListener("scroll", throttledScroll);
```

## Memory Diagram
```
Scroll event fires rapidly: |||||||||||||||||||||||||
Throttle (200ms window):    X.......X.......X.......X
                             (function runs only at these points)
```

## Flowchart
```
Event fires (e.g. scroll)
        │
Is throttle currently "active" (within its window)? ──Yes──► ignore this call
        │ No
        ▼
Run the function immediately
        │
Mark throttle as "active" for `limit` ms
        │
After `limit` ms passes ──► throttle resets, ready for next call
```

## Internal Working
Throttle uses a boolean flag (`inThrottle`) combined with `setTimeout` to enforce a "cooldown" window — unlike debounce (which resets its timer on every call), throttle's timer is set once and simply blocks further executions until it expires, guaranteeing regular, predictable execution frequency.

## Beginner Example
```js
function throttle(fn, limit) {
  let inThrottle = false;
  return (...args) => {
    if (inThrottle) return;
    fn(...args);
    inThrottle = true;
    setTimeout(() => (inThrottle = false), limit);
  };
}
window.addEventListener("resize", throttle(() => console.log("Resizing"), 200));
```

## Intermediate Example
```js
const throttledMouseMove = throttle((e) => {
  updateCursorTrail(e.clientX, e.clientY);
}, 100);
document.addEventListener("mousemove", throttledMouseMove);
```

## Advanced Example
```js
function throttle(fn, limit) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}
```

## Real World Example
```js
// Infinite scroll implementations throttle their scroll-position
// checks so the "load more" logic doesn't fire dozens of times per second.
```

## Industry Example
```js
// Analytics tracking (e.g. logging scroll depth) commonly uses
// throttling to sample events periodically instead of on every pixel of scroll.
```

## Interview Questions
See full list → [interview.md](./interview.md#throttle)
1. How does throttle differ from debounce in terms of execution guarantees?
2. Why might you choose throttle over debounce for a scroll event handler?
3. What is "leading" vs "trailing" throttle?
4. How would you implement throttle using timestamps instead of `setTimeout` + a boolean flag?
5. Give a real use case where throttle is clearly more appropriate than debounce.

## MCQs
See full list → [mcq.md](./mcq.md#throttle)
1. A throttled function with a 200ms limit will run: (a) Only once ever (b) **At most once every 200ms, however many times the event fires** (c) Only after the event stops firing (d) Immediately every single time → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#throttle)
1. **(Easy)** Implement a basic `throttle(fn, limit)` function using a boolean flag.
2. **(Medium)** Reimplement throttle using timestamps (`Date.now()`) instead of a boolean flag.
3. **(Hard)** Implement a throttle variant that also guarantees a final "trailing" call fires with the most recent arguments.

## Assignments
- [ ] Explain, with a timeline diagram (in comments), how throttle behaves for a continuous stream of events over 1 second.
- [ ] Compare debounce and throttle side by side for a scroll event — which is more appropriate, and why?

## Mini Project
Build a small "Infinite Scroll" demo: throttle the scroll event to check position at most every 200ms, loading more mock content when nearing the bottom.

## Common Mistakes
- Using debounce when throttle is actually needed (e.g., for continuous scroll tracking that shouldn't wait for scrolling to stop entirely).
- Setting the throttle limit too low, effectively negating its performance benefit.
- Forgetting that leading-edge throttle can miss the "final" event in a burst unless a trailing call is also implemented.

## Best Practices
- Use throttle for continuous, ongoing events (scroll, mousemove, resize) where you need regular updates, not a final settled state.
- Choose a throttle limit that balances responsiveness with performance (commonly 100-250ms for UI updates).

## Optimization Tips
- Combine throttle with `requestAnimationFrame` for visual updates tied to scroll/resize, syncing execution with the browser's paint cycle for smoother results.

## Summary
Throttle ensures a function executes at most once per fixed time window regardless of how often the triggering event fires — ideal for continuous events like scrolling or mouse movement where regular, predictable execution matters more than waiting for the event to settle (which is debounce's job instead).

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#throttle)

---
[← Debounce](./debounce.md) | [Section Home](./README.md) | [Lazy Loading →](./lazy-loading.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
