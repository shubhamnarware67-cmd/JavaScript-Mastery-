# Debounce

> Section: Performance · Owner: **Shubham Narware**

## Definition
Debouncing is a technique that delays executing a function until a specified time has passed **without** the triggering event firing again — resetting the timer on every new call.

## History
A common performance pattern in JavaScript for well over a decade, popularized through libraries like Underscore.js and Lodash before becoming a standard technique developers implement directly.

## Why Debounce Matters
It prevents functions from running excessively during rapid-fire events (like keystrokes or window resizing), which can otherwise cause performance issues or unnecessary API calls.

## Syntax
```js
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

## Types (variations)
| Variation | Behavior |
|---|---|
| Trailing debounce (default) | Runs once, after the delay has passed with no new calls |
| Leading debounce | Runs immediately on the first call, then ignores subsequent calls until the delay passes |
| Debounce with `.cancel()` | Allows manually canceling a pending debounced call |

## Examples
```js
const debouncedSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 300);

input.addEventListener("input", (e) => debouncedSearch(e.target.value));
```

## Memory Diagram
```
Keystroke 1 ──► timer set for 300ms
Keystroke 2 (before timer fires) ──► timer CLEARED and reset for 300ms
Keystroke 3 (before timer fires) ──► timer CLEARED and reset for 300ms
... 300ms of silence ──► function FINALLY runs, once
```

## Flowchart
```
Event fires (e.g. keystroke)
        │
Is there a pending timer? ──Yes──► clear it
        │
Start a new timer for `delay` ms
        │
Event fires again before timer completes? ──Yes──► repeat (clear & restart)
        │ No
        ▼
Timer completes ──► function finally executes
```

## Internal Working
Debounce uses closures to maintain a single `timer` variable across calls — each new invocation clears the previous pending `setTimeout` and schedules a new one, so the wrapped function only actually runs once the calls have "settled down" for the full delay period.

## Beginner Example
```js
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
window.addEventListener("resize", debounce(() => console.log("Resized!"), 200));
```

## Intermediate Example
```js
const saveSettings = debounce((settings) => {
  api.save(settings);
}, 500);
// Called on every keystroke in a settings form, but only saves
// once the user pauses typing for 500ms.
```

## Advanced Example
```js
function debounce(fn, delay) {
  let timer;
  const debounced = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
  debounced.cancel = () => clearTimeout(timer);
  return debounced;
}
```

## Real World Example
```js
// A live search box debounces API calls so it only fetches
// results once the user pauses typing, instead of on every keystroke.
```

## Industry Example
```js
// Lodash's `_.debounce()` is one of the most widely used utility
// functions across production frontend codebases for exactly this purpose.
```

## Interview Questions
See full list → [interview.md](./interview.md#debounce)
1. How does debounce differ from throttle?
2. Why does debounce use `clearTimeout` on every call?
3. What's the difference between "leading" and "trailing" debounce?
4. Give a real use case where debounce improves performance.
5. How would you implement a `.cancel()` method for a debounced function?

## MCQs
See full list → [mcq.md](./mcq.md#debounce)
1. A debounced function set to run 300ms after the LAST call means: (a) It runs every 300ms regardless (b) **It only runs once calls stop for 300ms** (c) It runs immediately every time (d) It runs exactly once ever → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#debounce)
1. **(Easy)** Implement a basic `debounce(fn, delay)` function.
2. **(Medium)** Add a `.cancel()` method to your debounce implementation.
3. **(Hard)** Implement a "leading edge" debounce variant that runs immediately on the first call.

## Assignments
- [ ] Explain, with a timeline diagram (in comments), how debounce behaves for 5 rapid calls followed by silence.
- [ ] Identify a real feature in an app you use that likely relies on debounce, and explain why.

## Mini Project
Build a small "Live Search" input that debounces API calls by 300ms, showing a loading indicator only while waiting for the debounced call to fire.

## Common Mistakes
- Confusing debounce with throttle (they solve related but different problems).
- Forgetting to clear the timer on component unmount, causing a debounced call to fire after the component is gone.
- Setting the delay too high, making the UI feel unresponsive.

## Best Practices
- Use debounce for events where you only care about the "final" state after rapid changes stop (like search-as-you-type, form auto-save).
- Always clean up (cancel) pending debounced calls when a component/feature is torn down.

## Optimization Tips
- Tune the delay value based on the use case — shorter (~150-300ms) for perceived responsiveness in search, longer (~500ms-1s) for expensive operations like auto-save.

## Summary
Debounce delays a function's execution until a burst of calls has "settled" for a specified period, preventing excessive executions during rapid-fire events like typing or resizing — implemented via a closure-managed `setTimeout` that resets on every new call.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#debounce)

---
[← Performance](./performance.md) | [Section Home](./README.md) | [Throttle →](./throttle.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
