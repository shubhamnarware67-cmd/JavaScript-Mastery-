# Execution

> Section: Introduction to JavaScript · Owner: **Shubham Narware**

## Definition
"Execution" describes how JavaScript code actually runs step-by-step: how the engine creates execution contexts, manages the call stack, and processes code in phases (creation + execution).

## History
The execution model (single-threaded, call stack, execution contexts) has been core to JS since 1995; the **event loop** for async execution was refined heavily as browsers added timers, then again with Node.js and later Promises/async-await (ES2015/ES2017).

## Why Execution Matters
Understanding execution order explains classic "gotchas" — like why a variable logs `undefined` instead of throwing an error (hoisting), or why `setTimeout(fn, 0)` doesn't run immediately.

## Syntax
```js
// Execution context is created implicitly whenever code runs —
// there's no special syntax; it's a runtime process.
```

## Types of Execution Context
| Type | Created when |
|---|---|
| Global Execution Context | Once, when the script starts |
| Function Execution Context | Every time a function is called |
| Eval Execution Context | Inside `eval()` (rarely used, avoid) |

## Examples
```js
console.log(a); // undefined (not an error!) — due to hoisting
var a = 5;

// Under the hood, the engine does two phases:
// 1. Creation phase: `var a` is hoisted and initialized to undefined
// 2. Execution phase: code runs line by line, `a = 5` assigns the value
```

## Memory Diagram
```
Call Stack (grows/shrinks with function calls)
┌─────────────────────┐
│ innerFunction()        │ ← currently executing
├─────────────────────┤
│ outerFunction()        │
├─────────────────────┤
│ Global Execution Context│ ← always at the bottom
└─────────────────────┘
```

## Flowchart
```
Script starts
    │
Global Execution Context created
    │
 Creation Phase: hoist var/function declarations, set up scope, "this"
    │
 Execution Phase: run code top to bottom
    │
Function called? ──Yes──► New Function Execution Context pushed onto Call Stack
    │                              │
    No                       Function returns → context popped off stack
    │                              │
Continue ◄─────────────────────────┘
```

## Internal Working
1. **Creation phase**: the engine scans the code, hoists `var` declarations (set to `undefined`) and function declarations (fully hoisted), sets up the scope chain and `this`.
2. **Execution phase**: code runs line-by-line, assigning real values and calling functions.
3. Each function call pushes a new **execution context** onto the **call stack**; when the function returns, its context is popped off.

## Beginner Example
```js
function greet() {
  console.log("Hello!");
}
greet(); // Call Stack: [Global, greet] → prints "Hello!" → [Global]
```

## Intermediate Example
```js
function outer() {
  function inner() {
    console.log("inner running");
  }
  inner();
}
outer();
// Call Stack progression: [Global] → [Global, outer] → [Global, outer, inner] → unwinds back down
```

## Advanced Example
```js
// Stack overflow — infinite recursion exhausts the call stack
function recurse() {
  return recurse();
}
// recurse(); // ❌ RangeError: Maximum call stack size exceeded
```

## Real World Example
```js
// Understanding execution order explains why this logs "start", "end", "timeout"
console.log("start");
setTimeout(() => console.log("timeout"), 0);
console.log("end");
// Output: start, end, timeout
// (setTimeout callback waits for the call stack to be empty, even with delay 0)
```

## Industry Example
```js
// Debuggers (Chrome DevTools) show you the live call stack during a breakpoint —
// professional developers read this stack trace to trace bugs back to their origin.
```

## Interview Questions
See full list → [interview.md](./interview.md#execution)
1. What are the two phases of an execution context?
2. What is the call stack, and how does it grow/shrink?
3. Why does `console.log(a); var a = 5;` print `undefined` instead of throwing an error?
4. What causes a "Maximum call stack size exceeded" error?
5. Why does `setTimeout(fn, 0)` not run `fn` immediately?

## MCQs
See full list → [mcq.md](./mcq.md#execution)
1. Which phase hoists `var` declarations? (a) Execution phase (b) Creation phase (c) Compilation phase (d) None → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#execution)
1. **(Easy)** Predict the console output of a snippet mixing `var` hoisting and function calls.
2. **(Medium)** Trace the call stack state at each line of a 3-level nested function call.
3. **(Hard)** Explain, with a diagram, why a `setTimeout(fn, 0)` callback runs after synchronous code finishes.

## Assignments
- [ ] Draw the call stack diagram for a 4-function chain of calls.
- [ ] Explain hoisting's two-phase model in your own words with an example.

## Mini Project
Build a simple "Call Stack Visualizer" — as functions are called/return, animate pushing/popping labeled boxes on screen.

## Common Mistakes
- Believing JS "skips" undeclared-looking variables rather than understanding hoisting.
- Assuming `setTimeout(fn, 0)` runs instantly/synchronously.
- Writing unbounded recursion without a base case, causing stack overflow.

## Best Practices
- Always declare variables before use (avoid relying on hoisting for readability).
- Add clear base cases to recursive functions to prevent stack overflow.

## Optimization Tips
- Prefer iterative solutions over deep recursion for very large inputs to avoid stack limits.
- Use `console.trace()` during debugging to inspect the current call stack.

## Summary
JavaScript execution follows a two-phase model per execution context (creation then execution) and manages nested function calls via a call stack. This foundational model explains hoisting, stack overflows, and why asynchronous callbacks run only after synchronous code completes.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#execution)

---
[← Browser vs Node](./browser-vs-node.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
