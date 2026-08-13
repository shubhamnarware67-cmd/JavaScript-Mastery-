# Macrotask

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
A macrotask (also called a "task") is a unit of async work — such as `setTimeout`, `setInterval`, I/O, or UI events — that the event loop processes **one at a time**, after fully draining the microtask queue.

## History
The task/macrotask queue concept existed before Promises, going back to the earliest browser timer implementations (`setTimeout` dates to Netscape-era JavaScript, mid-1990s); it was formally distinguished from "microtasks" once Promises arrived in ES2015.

## Why Macrotasks Matter
They're how JavaScript schedules lower-priority async work like timers and UI event callbacks — understanding their priority relative to microtasks explains many "surprising" execution order results.

## Syntax
```js
setTimeout(() => console.log("macrotask"), 0);
setInterval(() => console.log("repeats"), 1000);
```

## Types (common macrotask sources)
| Source | Example |
|---|---|
| `setTimeout` / `setInterval` | Timer-based callbacks |
| UI events | `click`, `scroll`, `keydown` handlers |
| I/O | Node.js file system callbacks |
| `setImmediate` (Node.js) | Runs after the current poll phase |

## Examples
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// 1, 3, 2
```

## Memory Diagram
```
Macrotask Queue (FIFO, one processed per event loop cycle):
[ setTimeout callback A ] → [ click event handler ] → [ setTimeout callback B ]
     only ONE runs per loop iteration, then microtasks are re-checked
```

## Flowchart
```
Call Stack empty AND Microtask Queue empty
        │
Event loop picks the NEXT single macrotask
        │
Executes that one macrotask fully
        │
Re-check Microtask Queue (drain any new microtasks)
        │
Loop repeats: pick next macrotask...
```

## Internal Working
Only **one** macrotask is processed per event loop iteration, and afterward the microtask queue is drained again before the next macrotask runs — this interleaving is what keeps the UI responsive even with pending timers.

## Beginner Example
```js
setTimeout(() => console.log("Later"), 0);
console.log("Now");
// Now, Later
```

## Intermediate Example
```js
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);
Promise.resolve().then(() => console.log("Promise"));
// Promise, Timeout 1, Timeout 2
```

## Advanced Example
```js
setTimeout(() => {
  console.log("Macrotask");
  Promise.resolve().then(() => console.log("Microtask inside macrotask"));
}, 0);
// After this macrotask finishes: microtask queue is drained
// before the NEXT macrotask (if any) starts.
```

## Real World Example
```js
// A UI click handler (a macrotask) runs, and any Promise-based
// state updates it triggers (microtasks) all resolve before the
// browser processes the next queued click or timer.
```

## Industry Example
```js
// Node.js's event loop has multiple macrotask "phases" (timers, I/O,
// setImmediate, close callbacks) — a more detailed version of the
// browser's simpler single macrotask queue.
```

## Interview Questions
See full list → [interview.md](./interview.md#macrotask)
1. Name three examples of macrotasks.
2. How many macrotasks does the event loop process per loop iteration?
3. What happens to the microtask queue between two macrotasks?
4. Why might `setTimeout(fn, 0)` not actually run after exactly 0ms?
5. How does Node.js's event loop's macrotask handling differ from the browser's (phases vs a single queue)?

## MCQs
See full list → [mcq.md](./mcq.md#macrotask)
1. How many macrotasks are processed per event loop cycle? (a) All of them (b) **Exactly one** (c) Two (d) Depends on browser → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#macrotask)
1. **(Easy)** Predict output order for two `setTimeout(fn, 0)` calls plus a `console.log`.
2. **(Medium)** Show, with code, that microtasks queued inside a macrotask still run before the *next* macrotask.
3. **(Hard)** Explain and simulate (with comments) how Node.js's multi-phase event loop differs from the browser's single macrotask queue.

## Assignments
- [ ] Explain why two `setTimeout(fn, 0)` calls don't necessarily run back-to-back if microtasks are queued in between.
- [ ] Compare, in a short paragraph, "macrotask" in the browser vs Node.js's phase-based model.

## Mini Project
Build a small "Timer Race" demo: multiple `setTimeout` calls with 0ms delay interleaved with Promise `.then()` calls, logging execution order to prove macrotask vs microtask priority.

## Common Mistakes
- Assuming `setTimeout(fn, 0)` executes truly instantly / synchronously.
- Believing all pending macrotasks run together in one loop iteration (only one does).
- Overlooking that microtasks queued *during* a macrotask still run before the next macrotask.

## Best Practices
- Use `setTimeout` deliberately to yield control back to the event loop (e.g., breaking up long synchronous work into chunks).
- Don't rely on exact timer delays for critical timing — treat `setTimeout` delays as a minimum, not a guarantee.

## Optimization Tips
- Chunk large synchronous workloads using `setTimeout(fn, 0)` between chunks so the browser can process pending UI macrotasks (like rendering) in between.

## Summary
Macrotasks are the event loop's lower-priority queue — things like `setTimeout` and UI events — processed one at a time, with the microtask queue fully drained between each one, which is why Promise-based code always appears to "jump the line" over timers.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#macrotask)

---
[← Microtask](./microtask.md) | [Section Home](./README.md) | [Web API →](./web-api.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
