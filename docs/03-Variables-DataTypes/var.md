# Var

> Section: Variables & Data Types · Owner: **Shubham Narware**

## Definition
`var` is JavaScript's original variable declaration keyword — function-scoped (not block-scoped), hoisted and initialized to `undefined`.

## History
Present since JS's creation in 1995; its quirks (function scoping, hoisting to `undefined`) motivated the addition of `let`/`const` in ES2015.

## Why Var Still Matters
Countless legacy codebases use `var` — understanding its scoping/hoisting quirks is essential for reading, debugging, and safely migrating old code.

## Syntax
```js
var x = 10;
function demo() {
  var y = 20; // function-scoped, not block-scoped
}
```

## Types
Not applicable — `var` is a single declaration form (unlike `let`/`const` distinction).

## Examples
```js
if (true) {
  var leaked = "I escape the block!";
}
console.log(leaked); // "I escape the block!" — var ignores block scope

function scoped() {
  if (true) {
    var trapped = "only inside the function";
  }
  console.log(trapped); // works — still function-scoped
}
```

## Memory Diagram
```
Function Scope
┌─────────────────────────────┐
│ var y  (accessible anywhere    │
│         inside this function,  │
│         even before its line   │
│         of declaration — as     │
│         undefined until assigned)│
└─────────────────────────────┘
```

## Flowchart
```
var declared inside a block ({ })?
        │
       Yes
        │
Does it "leak" outside the block but stay inside the enclosing function?
        │
       Yes — this is the classic `var` scoping gotcha
```

## Internal Working
During the creation phase of execution, all `var` declarations in a function are hoisted to the top of that function and initialized to `undefined` — this is why you can reference a `var` variable before its declaration line without a `ReferenceError` (unlike `let`/`const`).

## Beginner Example
```js
console.log(a); // undefined (not an error!)
var a = 5;
console.log(a); // 5
```

## Intermediate Example
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Logs: 3, 3, 3 — because var is function/global-scoped,
// all callbacks share the SAME `i` after the loop finishes
```

## Advanced Example
```js
// Classic IIFE workaround (pre-ES6) to fix the above closure problem
for (var i = 0; i < 3; i++) {
  (function (captured) {
    setTimeout(() => console.log(captured), 0);
  })(i);
}
// Logs: 0, 1, 2 — each IIFE call captures its own `captured` value
```

## Real World Example
```js
// Legacy jQuery-era code commonly relies on var, e.g.:
var $modal = $("#modal");
function openModal() {
  $modal.show();
}
```

## Industry Example
```js
// Modern linters (ESLint's "no-var" rule) automatically flag every `var`
// in a codebase, guiding teams toward let/const during migrations.
```

## Interview Questions
See full list → [interview.md](./interview.md#var)
1. What scope does `var` use, and how does it differ from `let`/`const`?
2. Why does `console.log(a); var a = 5;` not throw an error?
3. Why did the classic `for (var i...) setTimeout(...)` loop log the same value for every iteration?
4. How did developers work around `var`'s closure problem before `let` existed?
5. Why does ESLint's "no-var" rule exist?

## MCQs
See full list → [mcq.md](./mcq.md#var)
1. `var` is scoped to the nearest: (a) Block (b) **Function** (c) Module (d) File → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#var)
1. **(Easy)** Demonstrate `var`'s hoisting by logging a variable before its declaration.
2. **(Medium)** Show the classic `var` + `setTimeout` loop bug and fix it using `let`.
3. **(Hard)** Fix the same bug using an IIFE (as if `let` didn't exist), explaining why it works.

## Assignments
- [ ] Rewrite 3 `var`-based snippets using `let`/`const`, explaining the scoping change each time.
- [ ] Explain, with a diagram, why `var` "leaks" out of `if`/`for` blocks but not out of functions.

## Mini Project
Take an old jQuery-style snippet full of `var`, refactor it entirely to `let`/`const`, and document each change and why it's safer.

## Common Mistakes
- Assuming `var` is block-scoped like `let`/`const`.
- Being surprised by `var` "loop variable" bugs in `setTimeout`/async callbacks.
- Redeclaring the same `var` name in the same function without realizing it's silently allowed.

## Best Practices
- Avoid `var` in all new code; use it only when reading/maintaining legacy files.
- When migrating old `var` code, replace with `let` first (safest, minimal behavior change), then `const` where applicable.

## Optimization Tips
- Not directly a performance topic, but replacing `var` with block-scoped `let`/`const` can help engines optimize variable lifetime and scoping more predictably.

## Summary
`var` is function-scoped and hoisted to `undefined`, causing several classic bugs (loop-variable capture, accidental scope leakage) that `let`/`const` fix. It survives today mainly in legacy code.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#var)

---
[← Variables](./variables.md) | [Section Home](./README.md) | [Let →](./let.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
