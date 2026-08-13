# Event Loop

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
The Event Loop is the mechanism that allows JavaScript — a single-threaded language — to perform non-blocking asynchronous operations by coordinating the Call Stack, Web APIs, and task queues.

## History
The event loop concept predates JavaScript itself (it's common in GUI programming), but became central to JS's design from the start since JavaScript runs on a **single thread** and needed a way to handle async work like timers and network requests without blocking.

## Why the Event Loop Matters
It's the reason JavaScript can handle things like `setTimeout`, network requests, and UI events without freezing the page, despite having only one thread of execution.

## Syntax
```js
// Not a syntax construct — it's a runtime mechanism, illustrated conceptually:
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
```

## Types (queues involved)
| Component | Role |
|---|---|
| Call Stack | Executes synchronous code, one frame at a time |
| Microtask Queue | Promises, `queueMicrotask` — highest priority |
| Macrotask (Task) Queue | `setTimeout`, `setInterval`, I/O — lower priority |
| Web APIs | Browser-provided async features (timers, DOM events, fetch) |

## Examples
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// Start, End, Promise, Timeout
```

## Memory Diagram
```
Call Stack ◄────────────┐
    │                    │ (pushed when empty)
    │ (empty after sync   │
    │  code finishes)     │
    ▼                    │
Event Loop checks: Microtask Queue first, then Macrotask Queue
    │
Web APIs (timers, fetch, DOM events) queue tasks here when ready
```

## Flowchart
```
Run all synchronous code (Call Stack)
        │
Call Stack empty?
        │ Yes
        ▼
Run ALL microtasks (Promises) until queue is empty
        │
Run ONE macrotask (e.g. one setTimeout callback)
        │
Repeat: check microtasks again, then next macrotask...
```

## Internal Working
On every iteration ("tick"), the event loop first drains the **entire microtask queue** completely before picking even a single task from the macrotask queue — this is why Promises always run before `setTimeout`, even a `setTimeout(fn, 0)`.

## Beginner Example
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// A, C, B
```

## Intermediate Example
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
Promise.resolve().then(() => console.log("4"));
console.log("5");
// 1, 5, 3, 4, 2
```

## Advanced Example
```js
async function asyncFn() {
  console.log("A");
  await null; // schedules the rest as a microtask
  console.log("B");
}
console.log("Start");
asyncFn();
console.log("End");
// Start, A, End, B
```

## Real World Example
```js
// UI stays responsive during a long fetch() because the request
// runs via Web APIs, letting the main thread keep handling clicks/scrolls
// until the response is ready to be processed on the microtask queue.
```

## Industry Example
```js
// Understanding the event loop is essential for debugging "why did my
// UI freeze" issues and for correctly reasoning about race conditions
// in Node.js servers handling many concurrent requests.
```

## Interview Questions
See full list → [interview.md](./interview.md#event-loop)
1. Why does a Promise's `.then()` run before a `setTimeout(fn, 0)` callback?
2. What happens to the call stack while `fetch()` is waiting for a network response?
3. Explain, step by step, how the event loop processes microtasks vs macrotasks.
4. Can the event loop starve macrotasks if microtasks keep being added? How?
5. Is JavaScript single-threaded? How does the event loop enable concurrency-like behavior despite this?

## MCQs
See full list → [mcq.md](./mcq.md#event-loop)
1. Between a microtask and a macrotask ready at the same time, which runs first? (a) Macrotask (b) **Microtask** (c) Whichever was scheduled first regardless of type (d) They run simultaneously → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#event-loop)
1. **(Easy)** Predict the console output order of a mix of `console.log`, `setTimeout`, and `Promise.then()` calls.
2. **(Medium)** Write code that demonstrates microtask starvation of a macrotask.
3. **(Hard)** Explain and demonstrate how `async/await` interacts with the microtask queue using `await`.

## Assignments
- [ ] Draw (in text/ASCII) the flow of the event loop for a snippet mixing `setTimeout` and Promises.
- [ ] Explain why JavaScript is described as "single-threaded but non-blocking."

## Mini Project
Build a small "Execution Order Visualizer": a page that logs timestamps as sync code, microtasks, and macrotasks execute, rendering the actual order to prove event loop behavior.

## Common Mistakes
- Assuming `setTimeout(fn, 0)` runs immediately/synchronously.
- Forgetting that ALL queued microtasks run before the next single macrotask, which can delay `setTimeout` callbacks if microtasks keep queuing more microtasks.
- Confusing "asynchronous" with "multi-threaded" — JS remains single-threaded.

## Best Practices
- Avoid creating infinite/recursive microtask chains, which can starve rendering and macrotasks.
- Use the mental model "sync code → all microtasks → one macrotask → repeat" when reasoning about ordering.

## Optimization Tips
- Break up long synchronous loops using `setTimeout`/`requestIdleCallback` so the event loop can process pending UI updates between chunks.

## Summary
The event loop is what lets single-threaded JavaScript stay non-blocking: it continuously moves completed async work from Web APIs into the microtask/macrotask queues, always draining microtasks (Promises) before macrotasks (`setTimeout`), producing predictable execution order.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#event-loop)

---
[← XMLHttpRequest](./xmlhttprequest.md) | [Section Home](./README.md) | [Call Stack →](./call-stack.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
