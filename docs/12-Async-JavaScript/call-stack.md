# Call Stack

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
The Call Stack is the data structure JavaScript's engine uses to track function execution — it records which function is currently running and what to return to once it finishes.

## History
The call stack is a general computer science concept (used by virtually every programming language runtime), applied to JavaScript engines since the language's creation in **1995** as the mechanism for tracking function invocation.

## Why the Call Stack Matters
Understanding it explains *why* JavaScript is single-threaded, why long-running synchronous code "blocks" everything else, and what causes a "stack overflow" error.

## Syntax
```js
// Not a syntax construct — illustrated via function calls:
function greet() { sayHi(); }
function sayHi() { console.log("Hi"); }
greet();
```

## Types (frame states)
| Concept | Meaning |
|---|---|
| Push | A function call adds ("pushes") a new frame onto the stack |
| Pop | A function returning removes ("pops") its frame off the stack |
| Stack Overflow | Too many nested/unresolved calls (e.g. infinite recursion) exceed stack size |

## Examples
```js
function multiply(a, b) { return a * b; }
function square(n) { return multiply(n, n); }
console.log(square(5)); // stack: main → square → multiply → (returns) → ...
```

## Memory Diagram
```
Call Stack (LIFO — Last In, First Out):
┌───────────────┐
│ multiply(5,5) │ ← top (executing now)
├───────────────┤
│ square(5)     │
├───────────────┤
│ main / global │ ← bottom
└───────────────┘
```

## Flowchart
```
Function called
     │
Push new frame onto Call Stack
     │
Frame executes (may call more functions → more pushes)
     │
Function returns
     │
Pop frame off Call Stack
     │
Stack empty? ──► Event Loop can now process queued tasks
```

## Internal Working
Because JavaScript has **one** call stack, only one thing can execute at a time — long synchronous operations occupy the stack fully, blocking the event loop from processing any queued microtasks/macrotasks until the stack empties.

## Beginner Example
```js
function a() { b(); }
function b() { c(); }
function c() { console.log("Deepest"); }
a(); // Stack grows a → b → c, then unwinds
```

## Intermediate Example
```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // each call adds a stack frame
}
console.log(factorial(5));
```

## Advanced Example
```js
function recurse() { recurse(); } // no base case
recurse(); // Uncaught RangeError: Maximum call stack size exceeded
```

## Real World Example
```js
// Deeply nested callback chains or unbounded recursion (e.g. parsing
// deeply nested JSON recursively) can trigger real "stack overflow" crashes.
```

## Industry Example
```js
// Browser DevTools' "Call Stack" panel during a breakpoint shows exactly
// this structure — the chain of function calls that led to the current line.
```

## Interview Questions
See full list → [interview.md](./interview.md#call-stack)
1. What data structure is the call stack, and what does that imply about execution order?
2. What causes a "Maximum call stack size exceeded" error?
3. Why does a long synchronous loop "freeze" the browser UI?
4. How does the call stack relate to the event loop and task queues?
5. What would you see in browser DevTools' Call Stack panel during a paused breakpoint?

## MCQs
See full list → [mcq.md](./mcq.md#call-stack)
1. The call stack follows which ordering principle? (a) FIFO (b) **LIFO** (c) Random (d) Priority-based → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#call-stack)
1. **(Easy)** Write a 3-function chain and trace the call stack manually as comments.
2. **(Medium)** Write a recursive function without a base case and observe the resulting error.
3. **(Hard)** Rewrite a deep recursive function (e.g. factorial) as an iterative one to avoid stack growth.

## Assignments
- [ ] Explain why a `while(true) {}` loop freezes a web page's UI.
- [ ] Trace, step-by-step, the call stack for a function that calls itself 3 times.

## Mini Project
Build a small "Recursion Visualizer": logs each push/pop as a recursive function (like Fibonacci) executes, printing indentation to represent stack depth.

## Common Mistakes
- Writing recursive functions without a proper base case, causing stack overflow.
- Assuming synchronous, CPU-heavy code won't block the UI just because "JavaScript is async."
- Confusing the call stack with the task queues (they're separate structures).

## Best Practices
- Convert unbounded/deep recursion to iteration when input size is large or unpredictable.
- Break up CPU-intensive synchronous work into chunks (e.g., via `setTimeout` or Web Workers) to keep the stack — and the UI — responsive.

## Optimization Tips
- Use tail-call-friendly patterns where possible, though note V8 does not currently implement tail-call optimization in practice.

## Summary
The call stack is JavaScript's single-threaded execution tracker — a LIFO structure that must be empty before the event loop can run queued async callbacks, which is why deep recursion can overflow it and why heavy sync code blocks everything else.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#call-stack)

---
[← Event Loop](./event-loop.md) | [Section Home](./README.md) | [Microtask →](./microtask.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
