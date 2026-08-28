# Execution Context

> Section: Execution Context & Scope · Owner: **Shubham Narware**

## Definition
An execution context is the environment in which JavaScript code is evaluated and executed — it holds information about variables, function arguments, the value of `this`, and the surrounding scope.

## History
Execution contexts have been part of JavaScript's design since **ECMAScript 1 (1997)**, formalized further in later spec revisions (like ES2015) to precisely define behaviors around `let`/`const` and block scoping.

## Why Execution Context Matters
Understanding it explains *why* variables are or aren't accessible at certain points, how `this` gets its value, and why hoisting behaves the way it does.

## Syntax
```js
// Not a syntax construct — illustrated conceptually:
console.log(x); // undefined (due to hoisting within this context)
var x = 5;
```

## Types (kinds of execution context)
| Type | Created when |
|---|---|
| Global Execution Context | Once, when the script first runs |
| Function Execution Context | Every time a function is called |
| Eval Execution Context | Code run inside `eval()` (rarely used) |

## Examples
```js
function greet() {
  console.log("Hello"); // runs inside a Function Execution Context
}
greet();
```

## Memory Diagram
```
Execution Context = {
  Variable Environment: { var declarations, function declarations }
  Lexical Environment: { let/const declarations, scope chain }
  this binding: depends on how the function was called
}
```

## Flowchart
```
Script starts ──► Global Execution Context created & pushed onto Call Stack
        │
Function called ──► new Function Execution Context created & pushed
        │
Creation Phase: hoist vars/functions, set up `this`, scope chain
        │
Execution Phase: code runs line by line
        │
Function returns ──► its execution context popped off the Call Stack
```

## Internal Working
Every execution context goes through two phases: a **creation phase** (where `var` declarations are hoisted as `undefined`, function declarations are hoisted fully, and `this`/scope chain are set up) followed by an **execution phase** where the code actually runs line by line.

## Beginner Example
```js
console.log(a); // undefined (hoisted in creation phase)
var a = 10;
```

## Intermediate Example
```js
function outer() {
  function inner() {
    console.log("Inside inner's own execution context");
  }
  inner();
}
outer();
```

## Advanced Example
```js
function regularFn() { console.log(this); } // `this` depends on call-site
const arrowFn = () => console.log(this);     // `this` is lexically inherited

regularFn(); // this = global object (non-strict) or undefined (strict)
arrowFn();   // this = whatever `this` was in the enclosing scope
```

## Real World Example
```js
// Debugging a stack trace in DevTools shows a list of execution
// contexts (as "call stack" frames), one per active function call.
```

## Industry Example
```js
// Understanding execution context is essential for correctly reasoning
// about `this` in event handlers, class methods, and callback functions
// in real-world frontend frameworks.
```

## Interview Questions
See full list → [interview.md](./interview.md#execution-context)
1. What are the two phases of an execution context's lifecycle?
2. What's the difference between the Global Execution Context and a Function Execution Context?
3. How does `this` get determined differently in a regular function vs an arrow function?
4. What happens to an execution context after its function finishes executing?
5. How does the "creation phase" explain `var` hoisting behavior?

## MCQs
See full list → [mcq.md](./mcq.md#execution-context)
1. How many Global Execution Contexts exist per running script? (a) One per function (b) **Exactly one** (c) Unlimited (d) Zero → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#execution-context)
1. **(Easy)** Predict the output of a `console.log` before a `var` declaration.
2. **(Medium)** Demonstrate how `this` differs between a regular function and an arrow function called the same way.
3. **(Hard)** Trace, in comments, the creation and execution phases of a nested function call.

## Assignments
- [ ] Explain, step by step, what happens during the "creation phase" of a function execution context.
- [ ] Write an example showing how the call stack relates to multiple nested execution contexts.

## Mini Project
Build a small "Execution Context Tracer": log messages at the start/end of several nested function calls to visualize how execution contexts are created and popped.

## Common Mistakes
- Assuming `let`/`const` are hoisted the same way as `var` (they're hoisted but land in a "temporal dead zone").
- Confusing execution context with scope — they're related but distinct concepts.
- Misunderstanding how `this` is determined inside regular vs arrow functions.

## Best Practices
- Prefer `let`/`const` over `var` to avoid confusing hoisting-related bugs tied to execution context creation phases.
- Use arrow functions deliberately when you want `this` to be inherited lexically from the enclosing context.

## Optimization Tips
- Avoid deeply nested function calls when unnecessary, since each adds a new execution context to the call stack, increasing memory and complexity.

## Summary
An execution context is JavaScript's environment for running code — created in two phases (creation, then execution) — that determines variable hoisting, scope chain access, and the value of `this`, with a new one created for every function call and pushed onto the call stack.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#execution-context)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Hoisting →](./hoisting.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
