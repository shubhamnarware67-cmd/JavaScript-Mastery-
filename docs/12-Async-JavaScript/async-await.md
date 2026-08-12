# Async Await

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
`async`/`await` lets Promise-based code read like synchronous code — `async` marks a function as always returning a Promise; `await` pauses execution within it until a Promise settles.

## History
Introduced in **ES2017**, built as syntax sugar on top of Promises (ES2015).

## Why It Matters
Eliminates `.then()` chaining boilerplate, enabling natural `try/catch` error handling for async code.

## Syntax
```js
async function fetchData() {
  const result = await somePromise;
  return result;
}
```

## Types
Usable as function declarations, expressions, arrow functions, and (ES2022) top-level in ES modules.

## Examples
```js
async function getUser() {
  const response = await fetch("/api/user");
  return response.json();
}
```

## Memory Diagram
Not applicable — manages control flow, not a memory structure.

## Flowchart
```
Call async function → runs sync until first `await`
        │
await promise ──► function PAUSES, yields control
        │
Promise settles ──► function RESUMES with the value (or throws)
```

## Internal Working
`await` doesn't block the thread — it pauses only the async function, registering the rest as a continuation while other code keeps running.

## Beginner Example
```js
async function greet() { return "Hello!"; }
greet().then(msg => console.log(msg));
```

## Intermediate Example
```js
async function loadData() {
  try {
    const res = await fetch("/api/data");
    console.log(await res.json());
  } catch (err) {
    console.error("Failed:", err.message);
  }
}
```

## Advanced Example
```js
async function loadAll() {
  const [users, posts] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/posts").then(r => r.json())
  ]);
}
```

## Real World Example
```js
async function loadUserProfile(id) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
}
```

## Industry Example
```js
// Top-level await (ES2022) in ES modules
const config = await fetch("/config.json").then(r => r.json());
export default config;
```

## Interview Questions
See full list → [interview.md](./interview.md#async-await)
1. What does an `async` function always return?
2. Does `await` block the entire JS thread?
3. How do you handle errors in async/await?
4. Why is sequential await slower than `Promise.all()` for independent calls?
5. What is top-level await?

## MCQs
See full list → [mcq.md](./mcq.md#async-await)
1. An async function always returns: (a) undefined (b) **A Promise** (c) A callback (d) A string → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#async-await)
1. **(Easy)** Write an async function awaiting a delayed Promise.
2. **(Medium)** Add try/catch to an async function.
3. **(Hard)** Convert sequential awaits to `Promise.all()`.

## Assignments
- [ ] Convert a `.then()` chain into async/await.
- [ ] Explain why unnecessary sequential awaits hurt performance.

## Mini Project
Build a "Dashboard Loader" fetching multiple resources in parallel via `Promise.all()`.

## Common Mistakes
- Missing try/catch around await.
- Sequential await for independent operations.
- Forgetting async functions always return a Promise.

## Best Practices
- Wrap awaited code in try/catch.
- Use `Promise.all()` for independent work.

## Optimization Tips
- Batch independent awaits via `Promise.all()`.

## Summary
`async/await` is Promise syntax sugar enabling synchronous-looking async code with natural error handling — doesn't block the thread, and independent awaits should run in parallel.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#async-await)

---
[← Promise](./promise.md) | [Section Home](./README.md) | [Fetch →](./fetch.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
