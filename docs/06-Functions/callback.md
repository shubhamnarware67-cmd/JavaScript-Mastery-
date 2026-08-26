# Callback

> Section: Functions · Owner: **Shubham Narware**

## Definition
A callback is a function passed as an argument to another function, to be invoked (called back) at a later point — often after an operation completes or an event occurs.

## History
Callbacks have existed since JavaScript's creation in 1995 as the original mechanism for async and event-driven code, later supplemented (not replaced) by Promises (ES2015) and async/await (ES2017).

## Why Callbacks Matter
They're the foundational pattern underlying event handling, array iteration methods, and (historically) async operations — understanding them is a prerequisite to understanding Promises.

## Syntax
```js
function doSomething(callback) {
  // ... some work ...
  callback();
}
```

## Types
| Type | Example |
|---|---|
| Synchronous callback | `[1,2,3].map(n => n*2)` |
| Asynchronous callback | `setTimeout(() => {}, 1000)` |
| Error-first callback (Node convention) | `fs.readFile(path, (err, data) => {})` |

## Examples
```js
function greet(name, callback) {
  const message = `Hello, ${name}`;
  callback(message);
}
greet("Shubham", (msg) => console.log(msg)); // "Hello, Shubham"
```

## Memory Diagram
```
doSomething(callback)
        │
Function stored as a value, passed just like any other argument
        │
Invoked later — possibly synchronously (immediately) or
asynchronously (after a timer/IO event completes)
```

## Flowchart
```
Call outer function, passing a callback
        │
Outer function does its work
        │
Work complete (sync) OR async event fires (timer, IO, network)
        │
Callback function is invoked with relevant result/error
```

## Internal Working
A callback is simply a regular function reference stored and invoked later by the receiving function — for async callbacks (like `setTimeout`), the callback is registered with the runtime's Web API/Node API, and only pushed onto the call stack once the corresponding async event fires and the call stack is empty.

## Beginner Example
```js
function processUserInput(callback) {
  const name = "Shubham";
  callback(name);
}
processUserInput(name => console.log(`Hi, ${name}`));
```

## Intermediate Example
```js
// Error-first callback convention (common in Node.js)
function readConfig(callback) {
  const success = true;
  if (success) callback(null, { debug: true });
  else callback(new Error("Failed to read config"));
}
readConfig((err, config) => {
  if (err) return console.error(err.message);
  console.log(config);
});
```

## Advanced Example
```js
// Callback hell — deeply nested async callbacks (the problem Promises later solved)
getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments); // 3 levels deep, hard to read/maintain
    });
  });
});
```

## Real World Example
```js
// Array methods use synchronous callbacks extensively
const total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
```

## Industry Example
```js
// Express.js middleware chains are built entirely from callbacks
app.use((req, res, next) => {
  console.log("Request received");
  next(); // calls the next middleware callback in the chain
});
```

## Interview Questions
See full list → [interview.md](./interview.md#callback)
1. What is a callback function, in your own words?
2. What's the difference between a synchronous and asynchronous callback?
3. What is the "error-first callback" convention, and where does it come from?
4. What is "callback hell," and what later features helped address it?
5. Give an example of a built-in JS method that takes a callback.

## MCQs
See full list → [mcq.md](./mcq.md#callback)
1. Which of these uses a callback? (a) `let x = 5;` (b) **`arr.map(fn)`** (c) `const y = "hi";` (d) `if (x) {}` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#callback)
1. **(Easy)** Write a function that takes a callback and calls it with a greeting message.
2. **(Medium)** Write a function using the error-first callback convention to simulate a data-fetch that might fail.
3. **(Hard)** Write 3 levels of nested callbacks simulating "callback hell," then note (in comments) how Promises would flatten it.

## Assignments
- [ ] Write your own version of `Array.prototype.map` using a callback parameter.
- [ ] Explain, with an example, why deeply nested callbacks become hard to maintain.

## Mini Project
Build a simple simulated "API client" using error-first callbacks for a `fetchUser`, `fetchPosts`, and `fetchComments` chain — then note where Promises would improve the code.

## Common Mistakes
- Forgetting to call the callback at all, silently breaking the flow.
- Calling the callback multiple times unintentionally.
- Not handling the "error" argument in error-first callbacks.

## Best Practices
- Follow the error-first convention (`callback(err, data)`) for consistency in Node-style async code.
- Prefer Promises/async-await over deeply nested callbacks for anything beyond 1-2 levels of async chaining.

## Optimization Tips
- Avoid creating new callback function instances unnecessarily inside hot loops/render cycles — reuse stable references where possible.

## Summary
Callbacks are functions passed to be invoked later, forming the foundation of JS's event-driven and array-iteration patterns — while still essential to understand, deeply nested async callbacks ("callback hell") are the exact problem Promises and async/await were designed to solve.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#callback)

---
[← Arrow Function](./arrow-function.md) | [Section Home](./README.md) | [Closure →](./closure.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
