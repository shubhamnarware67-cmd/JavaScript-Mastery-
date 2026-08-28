# Scope Chain

> Section: Execution Context & Scope · Owner: **Shubham Narware**

## Definition
The scope chain is the ordered list of scopes JavaScript searches through — from innermost to outermost — when resolving a variable reference, stopping at the first scope where that variable is found.

## History
The scope chain has existed since JavaScript's creation in **1995**, rooted in the language's use of **lexical (static) scoping** — meaning the chain is determined by where code is *written*, not where it's *called from*.

## Why Scope Chain Matters
It explains how nested functions can access variables from their enclosing functions (closures), and why a variable lookup fails with a `ReferenceError` only after checking every level of the chain.

## Syntax
```js
const outer = "I'm outer";
function middle() {
  const inner = "I'm inner";
  function innermost() {
    console.log(outer); // found by walking UP the scope chain
    console.log(inner);  // found in the immediately enclosing scope
  }
  innermost();
}
```

## Types (chain resolution order)
| Level | Searched |
|---|---|
| 1 | Current (innermost) function/block scope |
| 2 | Enclosing function scope(s), one level at a time |
| 3 | Module or global scope |
| Not found anywhere | `ReferenceError: x is not defined` |

## Examples
```js
const a = "global";
function outer() {
  const b = "outer";
  function inner() {
    console.log(a, b); // "global outer" — found by walking the chain
  }
  inner();
}
outer();
```

## Memory Diagram
```
innermost() scope     ──► { }
      │ (not found here, look up)
middle() scope         ──► { inner: "I'm inner" }
      │ (not found here, look up)
Global scope            ──► { outer: "I'm outer" }
```

## Flowchart
```
Variable referenced inside a function
        │
Is it declared in the CURRENT scope? ──Yes──► use it
        │ No
        ▼
Move up to the immediately enclosing (lexical) scope
        │
Repeat until found, or reach global scope
        │
Still not found? ──► ReferenceError
```

## Internal Working
The scope chain is fixed at the time a function is **defined**, not when it's called — this is what "lexical scoping" means, and it's why a function always has access to the variables visible in the scope where it was written, regardless of where it's later invoked.

## Beginner Example
```js
function outer() {
  const message = "Hello";
  function inner() {
    console.log(message); // accessed via the scope chain
  }
  inner();
}
outer();
```

## Intermediate Example
```js
function makeMultiplier(factor) {
  return function (n) {
    return n * factor; // `factor` found via scope chain — this is a closure
  };
}
const double = makeMultiplier(2);
console.log(double(5)); // 10
```

## Advanced Example
```js
function createLogger(prefix) {
  return {
    log(message) {
      console.log(`[${prefix}] ${message}`); // prefix from scope chain
    },
  };
}
const appLogger = createLogger("APP");
appLogger.log("Started"); // [APP] Started
```

## Real World Example
```js
// Event handlers commonly rely on the scope chain to access
// variables from the surrounding function where they were defined,
// even though they run later, asynchronously.
```

## Industry Example
```js
// Module patterns and factory functions in real codebases rely
// heavily on scope chains to create private, encapsulated state
// without needing classes.
```

## Interview Questions
See full list → [interview.md](./interview.md#scope-chain)
1. What does "lexical scoping" mean, and how does it relate to the scope chain?
2. Is the scope chain determined by where a function is called, or where it's defined?
3. What happens if a variable isn't found anywhere in the scope chain?
4. How does the scope chain enable closures?
5. Does the scope chain change if you call the same function from different places in the code?

## MCQs
See full list → [mcq.md](./mcq.md#scope-chain)
1. The scope chain is determined by: (a) Where a function is called (b) **Where a function is defined (lexically)** (c) The order functions run in (d) Random assignment → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#scope-chain)
1. **(Easy)** Write nested functions and show how an inner function accesses an outer variable via the scope chain.
2. **(Medium)** Create a closure-based counter and explain how the scope chain keeps the count variable alive.
3. **(Hard)** Demonstrate that the scope chain is lexical (fixed at definition time) by calling a function from a different scope than where it was defined.

## Assignments
- [ ] Explain, with a diagram or comments, how a 3-level nested function resolves a variable from the outermost scope.
- [ ] Write an example proving that JavaScript uses lexical (not dynamic) scoping.

## Mini Project
Build a small "Nested Scope Visualizer": a function with 3 levels of nesting, each logging which scope a variable was found in, to make the scope chain concrete.

## Common Mistakes
- Assuming scope is determined by the call site (dynamic scoping) rather than the definition site (lexical scoping) — JavaScript uses the latter.
- Shadowing an outer variable with an inner one of the same name and being surprised which value is used.
- Not realizing closures work precisely because of the scope chain persisting after the outer function returns.

## Best Practices
- Use distinct variable names across nested scopes to avoid confusing shadowing bugs.
- Leverage the scope chain intentionally for closures (like private counters or memoized functions) rather than accidentally.

## Optimization Tips
- Keep scope chains shallow where possible — deeply nested functions with long chains can make variable lookups (and code readability) slower to reason about, though the runtime performance impact is usually negligible.

## Summary
The scope chain is the lexical, definition-time-determined path JavaScript follows to resolve variable references — searching the current scope first, then each enclosing scope outward — forming the mechanism behind closures and predictable variable resolution.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#scope-chain)

---
[← Scope](./scope.md) | [Section Home](./README.md) | [Garbage Collection →](./garbage-collection.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
