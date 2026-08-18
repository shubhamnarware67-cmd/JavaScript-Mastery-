# Let

> Section: Variables & Data Types · Owner: **Shubham Narware**

## Definition
`let` declares a block-scoped, reassignable variable, introduced in ES2015 to fix `var`'s scoping problems.

## History
Introduced in **ES2015 (ES6)** alongside `const`, specifically to give developers predictable block scoping.

## Why Let Matters
`let` confines a variable to the `{ }` block it's declared in (loops, `if` statements, etc.), preventing the accidental leaks and closure bugs common with `var`.

## Syntax
```js
let count = 0;
count = count + 1; // reassignment allowed
```

## Types
Not applicable — single declaration form.

## Examples
```js
if (true) {
  let blockScoped = "only visible here";
}
// console.log(blockScoped); // ❌ ReferenceError — outside the block

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Logs: 0, 1, 2 — each iteration gets its OWN `i` binding
```

## Memory Diagram
```
Block Scope { }
┌─────────────────────┐
│ let i   (new binding    │  ← each loop iteration
│         each iteration) │     creates a fresh `i`
└─────────────────────┘
```

## Flowchart
```
Declare with let inside a { } block
        │
Variable exists ONLY within that block
        │
Accessed outside the block? ──► ReferenceError
```

## Internal Working
Like `const`, `let` is hoisted to the top of its block but remains in the **Temporal Dead Zone (TDZ)** until its declaration line executes — accessing it earlier throws a `ReferenceError` rather than returning `undefined`.

## Beginner Example
```js
let score = 0;
score = score + 10;
console.log(score); // 10
```

## Intermediate Example
```js
console.log(typeof y); // ReferenceError due to TDZ — NOT "undefined"
let y = 5;
```

## Advanced Example
```js
// let fixes the classic var+loop+setTimeout bug automatically
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("value:", i), 100);
}
// Logs value: 0, value: 1, value: 2 — each closure captures its own iteration's `i`
```

## Real World Example
```js
// Using let for a mutable loop/accumulator variable
let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}
console.log(total); // 55
```

## Industry Example
```js
// ESLint's "no-var" + "prefer-const" rules together push teams toward:
// - const by default
// - let only when reassignment is truly needed
```

## Interview Questions
See full list → [interview.md](./interview.md#let)
1. How does `let`'s scoping differ from `var`'s?
2. What is the Temporal Dead Zone, and how does it affect `let`?
3. Why does the `for (let i...) setTimeout(...)` loop log 0,1,2 instead of 3,3,3?
4. Can you redeclare a `let` variable in the same scope? What happens if you try?
5. When would you choose `let` over `const`?

## MCQs
See full list → [mcq.md](./mcq.md#let)
1. `let` is scoped to the nearest: (a) Function (b) **Block** (c) Module (d) Global — *Correct: (b).*

## Coding Questions
See full list → [practice.md](./practice.md#let)
1. **(Easy)** Declare a `let` variable, reassign it twice, and log each value.
2. **(Medium)** Demonstrate the TDZ by referencing a `let` variable before its declaration.
3. **(Hard)** Explain, with a diagram, why the `let`-based loop+setTimeout example logs distinct values per iteration.

## Assignments
- [ ] Convert 3 `var` declarations to `let` and explain the scoping improvement each time.
- [ ] Write a short explanation of the TDZ suitable for a beginner.

## Mini Project
Build a simple counter app (increment/decrement buttons, conceptually or in a script) using `let` for the mutable count value.

## Common Mistakes
- Trying to redeclare the same `let` variable in the same block (`SyntaxError`).
- Forgetting that `let` still respects block scope inside nested `if`/`for` statements — accessing it outside throws.

## Best Practices
- Use `let` specifically when a variable's value must change; otherwise use `const`.
- Declare `let` variables as close as possible to their first use, in the smallest reasonable scope.

## Optimization Tips
- Block-scoped `let` in loops allows engines to create a fresh binding per iteration efficiently when closures are involved — an intentional, correctness-first design over raw performance micro-optimization.

## Summary
`let` gives JavaScript proper block scoping and Temporal-Dead-Zone-protected declarations, fixing the classic scoping/closure bugs `var` was prone to — use it whenever a variable's value needs to change.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#let)

---
[← Var](./var.md) | [Section Home](./README.md) | [Const →](./const.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
