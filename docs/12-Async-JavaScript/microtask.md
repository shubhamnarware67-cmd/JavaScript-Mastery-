# Microtask

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
A microtask is a short async task — primarily Promise callbacks (`.then`, `.catch`, `.finally`) and `queueMicrotask()` — that the event loop always executes before moving on to the next macrotask.

## History
Microtasks were formalized alongside Promises in **ES2015**, giving JavaScript a distinct, higher-priority queue separate from the older macrotask queue used by `setTimeout`.

## Why Microtasks Matter
They guarantee that Promise resolutions happen as soon as possible — right after the current synchronous code — rather than waiting behind other queued events like timers or UI interactions.

## Syntax
```js
Promise.resolve().then(() => console.log("microtask"));
queueMicrotask(() => console.log("also a microtask"));
```

## Types (sources of microtasks)
| Source | Example |
|---|---|
| Promise callbacks | `.then()`, `.catch()`, `.finally()` |
| `queueMicrotask()` | Direct API to schedule a microtask |
| `async/await` continuation | Code after `await` resumes as a microtask |
| `MutationObserver` | DOM mutation callbacks (browser-specific) |

## Examples
```js
console.log("1");
Promise.resolve().then(() => console.log("2"));
console.log("3");
// 1, 3, 2
```

## Memory Diagram
```
Microtask Queue (FIFO, drained completely each cycle):
[ .then() callback A ] → [ .then() callback B ] → [ queueMicrotask C ]
        all run before the next macrotask begins
```

## Flowchart
```
Current synchronous code finishes (call stack empty)
        │
Event loop checks Microtask Queue
        │
Run microtask 1 → may enqueue more microtasks
        │
Run microtask 2 → ... (queue not empty yet? keep going)
        │
Microtask queue fully empty
        │
Only THEN: proceed to next macrotask
```

## Internal Working
The microtask queue is drained **completely** — including any new microtasks scheduled while draining — before the event loop is allowed to process even one macrotask, which can cause macrotasks to be delayed if microtasks keep generating more microtasks.

## Beginner Example
```js
Promise.resolve().then(() => console.log("A"));
console.log("B");
// B, A
```

## Intermediate Example
```js
Promise.resolve()
  .then(() => console.log("1"))
  .then(() => console.log("2"))
  .then(() => console.log("3"));
console.log("main");
// main, 1, 2, 3
```

## Advanced Example
```js
function infiniteMicrotasks() {
  Promise.resolve().then(infiniteMicrotasks); // starves macrotasks!
}
infiniteMicrotasks();
setTimeout(() => console.log("This may be delayed indefinitely"), 0);
```

## Real World Example
```js
// Chained .then() calls in a data-processing pipeline all resolve
// before the browser handles the next setTimeout-based UI update.
```

## Industry Example
```js
// Frameworks like Vue use microtasks (via Promise.resolve().then())
// internally to batch reactive DOM updates efficiently within a single "tick."
```

## Interview Questions
See full list → [interview.md](./interview.md#microtask)
1. Name three sources that create microtasks.
2. Why do all Promise `.then()` callbacks run before a `setTimeout(fn, 0)` callback?
3. What is `queueMicrotask()` used for?
4. Can microtasks "starve" macrotasks? Give an example of how.
5. How does `await` relate to the microtask queue?

## MCQs
See full list → [mcq.md](./mcq.md#microtask)
1. Which of these does NOT create a microtask? (a) `Promise.resolve().then()` (b) `queueMicrotask()` (c) **`setTimeout(fn, 0)`** (d) code after `await` → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#microtask)
1. **(Easy)** Predict console output order for a mix of `console.log` and `.then()` calls.
2. **(Medium)** Use `queueMicrotask()` directly to schedule a callback and explain when it runs relative to `setTimeout`.
3. **(Hard)** Demonstrate microtask starvation with a recursive `Promise.resolve().then()` chain.

## Assignments
- [ ] Explain, with an example, why `await` effectively splits a function into "before" (sync) and "after" (microtask) parts.
- [ ] Write code proving that ALL queued microtasks run before a single macrotask.

## Mini Project
Build a small "Task Queue Tracer" that logs the exact order in which sync code, microtasks, and macrotasks run for a given snippet, to visually prove the priority rules.

## Common Mistakes
- Assuming microtasks and macrotasks have equal priority.
- Creating unbounded microtask chains that delay rendering or timers indefinitely.
- Forgetting that `async` function code before the first `await` runs synchronously, not as a microtask.

## Best Practices
- Avoid recursively scheduling microtasks without a terminating condition.
- Use `queueMicrotask()` (not `setTimeout(fn, 0)`) when you specifically need "run after current sync code, before anything else."

## Optimization Tips
- Batch multiple state updates within the same microtask cycle where possible, to avoid redundant work (a pattern many UI frameworks use internally).

## Summary
Microtasks — mainly Promise callbacks — form a high-priority queue that the event loop fully drains before handling the next macrotask, guaranteeing Promise-based code resolves as early as possible relative to timers and other queued events.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#microtask)

---
[← Call Stack](./call-stack.md) | [Section Home](./README.md) | [Macrotask →](./macrotask.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
