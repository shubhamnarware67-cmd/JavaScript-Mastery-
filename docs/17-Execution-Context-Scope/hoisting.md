# Hoisting

> Section: Execution Context & Scope · Owner: **Shubham Narware**

## Definition
Hoisting is JavaScript's behavior of processing variable and function declarations during the creation phase of an execution context, before any code actually executes — making them "available" earlier than where they're written.

## History
Hoisting has existed since JavaScript's creation in **1995** as a side effect of how `var` and function declarations are processed, though the term itself became common in developer discussions later as the behavior needed explaining.

## Why Hoisting Matters
It explains seemingly strange behavior — like being able to call a function before its declaration in the code, or getting `undefined` instead of a `ReferenceError` when accessing a `var` before its line.

## Syntax
```js
console.log(x); // undefined, not an error
var x = 5;

sayHi(); // works! function declarations are fully hoisted
function sayHi() { console.log("Hi"); }
```

## Types (hoisting behavior by declaration)
| Declaration | Hoisted? | Initial value before assignment |
|---|---|---|
| `var` | Yes | `undefined` |
| `let` / `const` | Yes (but in "Temporal Dead Zone") | Accessing throws `ReferenceError` |
| Function declaration | Yes, fully (with body) | Callable immediately |
| Function expression / arrow function | Only the variable, not the function body | `undefined` (if `var`) or TDZ error (if `let`/`const`) |

## Examples
```js
console.log(typeof greet); // "function" (fully hoisted)
function greet() {}

console.log(typeof sayBye); // "undefined" (var hoisted, not assignment)
var sayBye = function () {};
```

## Memory Diagram
```
Creation Phase:
  var x           ──► x: undefined
  function greet() ──► greet: [Function: greet] (fully hoisted)
  let y            ──► y: <in Temporal Dead Zone, not accessible yet>
```

## Flowchart
```
Creation phase begins
        │
Scan code for var/function/let/const declarations
        │
var declarations ──► hoisted, initialized to undefined
function declarations ──► hoisted with full body
let/const declarations ──► hoisted, but left in Temporal Dead Zone
        │
Execution phase begins ──► actual assignments happen here
```

## Internal Working
`let` and `const` ARE technically hoisted (their existence is known to the engine), but they remain in the **Temporal Dead Zone (TDZ)** — a region where accessing them throws a `ReferenceError` — until the actual declaration line executes, which is why they feel "not hoisted" even though they are.

## Beginner Example
```js
console.log(a); // undefined
var a = 1;
```

## Intermediate Example
```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;
```

## Advanced Example
```js
function example() {
  console.log(hoistedVar); // undefined
  console.log(typeof notYetDeclared); // "undefined" (safe even if never declared)
  var hoistedVar = "value";
}
example();
```

## Real World Example
```js
// A common bug: calling a helper function defined further down the
// file works fine for function declarations, but fails for
// const helperFn = () => {} if called before that line.
```

## Industry Example
```js
// Linters (like ESLint's no-use-before-define rule) exist specifically
// to catch code that relies on hoisting in confusing ways.
```

## Interview Questions
See full list → [interview.md](./interview.md#hoisting)
1. Why does accessing a `var` before its declaration return `undefined` instead of throwing an error?
2. Why does accessing a `let`/`const` before its declaration throw a `ReferenceError`?
3. Are function declarations and function expressions hoisted the same way?
4. What is the "Temporal Dead Zone"?
5. Why can you call a function declared with `function` before its line in the code, but not one assigned via `const fn = () => {}`?

## MCQs
See full list → [mcq.md](./mcq.md#hoisting)
1. What is logged by `console.log(x); var x = 5;`? (a) `5` (b) **`undefined`** (c) `ReferenceError` (d) `null` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#hoisting)
1. **(Easy)** Predict the output of accessing a `var` variable before its declaration line.
2. **(Medium)** Demonstrate the Temporal Dead Zone by accessing a `let` variable before its declaration.
3. **(Hard)** Explain, with code, why a function declaration can be called before it appears in the file, but a function expression assigned to a `const` cannot.

## Assignments
- [ ] Explain, in your own words, why the Temporal Dead Zone exists for `let`/`const`.
- [ ] Rewrite a `var`-based snippet that relies on hoisting into `let`/`const`, and explain what breaks.

## Mini Project
Build a small "Hoisting Quiz" widget that shows a code snippet and asks the user to predict the output before revealing the answer and explanation.

## Common Mistakes
- Relying on `var` hoisting to use a variable before its declaration, leading to confusing `undefined` bugs.
- Assuming `let`/`const` are "not hoisted at all" (they are hoisted, just left inaccessible in the TDZ).
- Assuming function expressions/arrow functions are hoisted the same way as function declarations.

## Best Practices
- Always declare variables at the top of their scope, regardless of hoisting, for clarity.
- Prefer function declarations for functions you need to call before their definition point in the file (rare, but valid use case), and `const` arrow functions otherwise for predictable behavior.

## Optimization Tips
- Hoisting itself has no runtime performance cost — the main "optimization" is writing code that doesn't rely on it, reducing bugs and improving readability rather than raw speed.

## Summary
Hoisting means variable/function declarations are processed during the creation phase before code execution — `var` is hoisted and initialized to `undefined`, function declarations are hoisted fully, and `let`/`const` are hoisted but remain inaccessible in the Temporal Dead Zone until their declaration line runs.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#hoisting)

---
[← Execution Context](./execution-context.md) | [Section Home](./README.md) | [Scope →](./scope.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
