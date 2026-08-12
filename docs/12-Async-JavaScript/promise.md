# Promise

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation, existing in one of three states: pending, fulfilled, or rejected.

## History
Introduced in **ES2015**, standardizing patterns that libraries (like jQuery's Deferred, Q, Bluebird) had already popularized to fix "callback hell."

## Why Promises Matter
They provide a cleaner, chainable way to handle async operations and their errors, compared to deeply nested callbacks.

## Syntax
```js
const promise = new Promise((resolve, reject) => {
  if (success) resolve(value);
  else reject(error);
});
promise.then(onFulfilled).catch(onRejected).finally(onDone);
```

## Types (states)
| State | Meaning |
|---|---|
| Pending | Initial state, neither fulfilled nor rejected |
| Fulfilled | Operation succeeded, `resolve(value)` was called |
| Rejected | Operation failed, `reject(error)` was called |

## Examples
```js
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Data loaded!"), 1000);
});
promise.then(result => console.log(result));
```

## Memory Diagram
```
Promise states:
   pending ──resolve()──► fulfilled ──► .then() callbacks run
      │
      └──reject()──► rejected ──► .catch() callbacks run
```

## Flowchart
```
new Promise(executor)
        │
executor runs immediately (synchronously)
        │
Async operation completes
        │
   ┌────┴────┐
resolve()   reject()
   │           │
fulfilled   rejected
   │           │
.then()     .catch()
```

## Internal Working
A Promise's `.then()`/`.catch()` callbacks are always scheduled as **microtasks** — they run after the current synchronous code finishes but before the next "macrotask" (like a `setTimeout` callback).

## Beginner Example
```js
const promise = new Promise((resolve) => resolve("Success!"));
promise.then(result => console.log(result)); // "Success!"
```

## Intermediate Example
```js
fetchUser(1)
  .then(user => fetchPosts(user.id))
  .then(posts => console.log(posts))
  .catch(err => console.error("Something failed:", err));
```

## Advanced Example
```js
Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
  .then(users => console.log("All loaded:", users))
  .catch(err => console.error("At least one failed:", err));

Promise.allSettled([fetchUser(1), fetchBadUrl()])
  .then(results => console.log(results));
```

## Real World Example
```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(1000).then(() => console.log("1 second passed"));
```

## Industry Example
```js
// Most modern HTTP client libraries (fetch, axios) return Promises,
// making them chainable and compatible with async/await throughout an app.
```

## Interview Questions
See full list → [interview.md](./interview.md#promise)
1. What are the 3 states of a Promise?
2. What's the difference between `Promise.all()` and `Promise.allSettled()`?
3. Are `.then()` callbacks executed synchronously or asynchronously?
4. What happens if you call both `resolve()` and `reject()` in the same executor?
5. How would you convert a callback-based function into a Promise-based one?

## MCQs
See full list → [mcq.md](./mcq.md#promise)
1. A Promise can be in how many possible states? (a) 2 (b) **3** (c) 4 (d) Unlimited → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#promise)
1. **(Easy)** Create a Promise that resolves with a message after a 1-second delay.
2. **(Medium)** Chain 3 `.then()` calls, each transforming the previous value.
3. **(Hard)** Use `Promise.all()` to fetch 3 different resources in parallel and log all results together.

## Assignments
- [ ] Convert a callback-based `setTimeout`-wrapped function into a Promise-returning function.
- [ ] Explain, with an example, the difference between `Promise.all()` (fails fast) and `Promise.allSettled()` (always resolves).

## Mini Project
Build a small "Multi-Source Loader": 3 simulated async data-fetch functions (using `setTimeout` + Promise), loaded in parallel with `Promise.all()`, displaying a combined result.

## Common Mistakes
- Forgetting to add a `.catch()`, leaving rejected promises unhandled.
- Nesting `.then()` calls instead of chaining them flatly.
- Assuming `.then()` runs synchronously immediately after `resolve()` is called.

## Best Practices
- Always include error handling (`.catch()`) for any Promise chain that could fail.
- Keep `.then()` chains flat rather than nested.

## Optimization Tips
- Use `Promise.all()` for independent async operations that can run in parallel, rather than awaiting them sequentially.

## Summary
Promises represent the eventual result of an async operation through 3 states (pending, fulfilled, rejected), enabling cleaner chaining and error handling than raw callbacks — and forming the foundation that `async/await` builds on.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#promise)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Async Await →](./async-await.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
