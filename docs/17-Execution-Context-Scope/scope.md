# Scope

> Section: Execution Context & Scope · Owner: **Shubham Narware**

## Definition
Scope defines the region of code where a particular variable or function is accessible — determining visibility and lifetime of identifiers within a program.

## History
Function scope existed from JavaScript's creation in **1995** via `var`; block scope was added in **ECMAScript 2015 (ES6)** with `let` and `const`, giving developers finer-grained control similar to other C-family languages.

## Why Scope Matters
It prevents naming collisions, controls what parts of code can read/modify a variable, and is foundational to understanding closures, module encapsulation, and predictable code behavior.

## Syntax
```js
function outer() {
  let x = 10; // function-scoped to outer()
  if (true) {
    let y = 20; // block-scoped to this if block
  }
  // y is not accessible here
}
```

## Types (kinds of scope)
| Scope type | Created by |
|---|---|
| Global scope | Code outside any function/block |
| Function scope | `function` bodies — applies to `var`, `let`, `const` |
| Block scope | `{ }` blocks (if, for, while) — applies only to `let`/`const` |
| Module scope | Each ES Module file has its own top-level scope |

## Examples
```js
if (true) {
  var a = 1;  // function/global scoped — leaks outside the block
  let b = 2;  // block scoped — NOT accessible outside
}
console.log(a); // 1
console.log(b); // ReferenceError
```

## Memory Diagram
```
Global Scope
  └── Function Scope (outer)
        └── Block Scope (if/for/while)
              let/const here are invisible outside this block
              var here leaks up to Function Scope
```

## Flowchart
```
Variable declared
        │
Is it var? ──Yes──► scoped to nearest enclosing function (or global)
        │
        No (let/const)
        ▼
Scoped to nearest enclosing block { }
        │
Accessible only within that scope and any nested scopes
```

## Internal Working
`var` is function-scoped (ignoring block boundaries entirely), while `let`/`const` are block-scoped — this is why a `var` inside an `if` block "leaks" outside it, but a `let` does not; each function call also creates a fresh scope, independent of other calls.

## Beginner Example
```js
function example() {
  var x = 5;
  console.log(x); // 5
}
console.log(typeof x); // "undefined" — x not accessible outside
```

## Intermediate Example
```js
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 — var leaks outside the loop's block

for (let j = 0; j < 3; j++) {}
console.log(typeof j); // "undefined" — j is block-scoped to the loop
```

## Advanced Example
```js
function counter() {
  let count = 0; // enclosed in this function's scope
  return function () {
    return ++count; // inner function has access via scope chain (closure)
  };
}
const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

## Real World Example
```js
// Module-scoped variables in a file (like a cache object) stay
// private to that module unless explicitly exported.
```

## Industry Example
```js
// Modern linters flag `var` usage in favor of `let`/`const` specifically
// because block scoping reduces a whole class of scope-leakage bugs.
```

## Interview Questions
See full list → [interview.md](./interview.md#scope)
1. What's the key difference between function scope and block scope?
2. Why does a `var` declared inside an `if` block remain accessible outside it, but a `let` does not?
3. How does scope relate to closures?
4. What is "module scope," and how does it differ from global scope?
5. Does each function call create a new scope, or is it shared across calls?

## MCQs
See full list → [mcq.md](./mcq.md#scope)
1. Which keyword is function-scoped rather than block-scoped? (a) `let` (b) `const` (c) **`var`** (d) None → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#scope)
1. **(Easy)** Show, with code, that a `var` inside a block leaks outside it while a `let` doesn't.
2. **(Medium)** Write a closure that uses scope to create a private counter variable.
3. **(Hard)** Explain and demonstrate the classic "var in a loop + setTimeout" bug, and fix it using `let`.

## Assignments
- [ ] Explain why using `let` instead of `var` in a `for` loop fixes the classic closure-in-loop bug.
- [ ] Write a small module-like IIFE that keeps an internal variable private using scope.

## Mini Project
Build a small "Private Counter" module using closures and scope: expose only `increment()`, `decrement()`, and `getValue()` functions, keeping the actual count variable inaccessible from outside.

## Common Mistakes
- Using `var` inside loops expecting each iteration to have its own independent value (it doesn't — `var` is function-scoped).
- Assuming block scope applies to `var` the same way it applies to `let`/`const`.
- Creating unintentional global variables by forgetting a declaration keyword (`x = 5` instead of `let x = 5`).

## Best Practices
- Default to `const`, use `let` only when reassignment is needed, and avoid `var` entirely in new code.
- Keep variables scoped as narrowly as possible to reduce the chance of naming collisions and accidental mutation.

## Optimization Tips
- Narrow scoping (block-scoped `let`/`const`) allows JS engines to garbage-collect variables sooner once their block exits, compared to function-scoped `var` which lives for the whole function's duration.

## Summary
Scope determines where a variable is visible and accessible — `var` is function-scoped (leaking out of blocks), while `let`/`const` are block-scoped, forming the foundation for closures, module encapsulation, and avoiding naming collisions.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#scope)

---
[← Hoisting](./hoisting.md) | [Section Home](./README.md) | [Scope Chain →](./scope-chain.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
