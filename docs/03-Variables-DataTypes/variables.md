# Variables

> Section: Variables & Data Types · Owner: **Shubham Narware**

## Definition
A variable is a named container that stores a value in memory, which can be read or (depending on declaration type) changed later in the program.

## History
- `var` existed since JS's creation in 1995.
- `let` and `const` were introduced in **ES2015** to fix `var`'s confusing function-scoping and hoisting behavior.

## Why Variables Matter
Variables let programs store and manipulate data — user input, calculations, state — instead of hardcoding every value.

## Syntax
```js
var oldWay = "avoid in modern code";
let mutable = "can change";
const immutable = "cannot be reassigned";
```

## Types (declaration keywords)
| Keyword | Scope | Reassignable | Hoisted |
|---|---|---|---|
| `var` | function | ✅ | ✅ (as `undefined`) |
| `let` | block | ✅ | ✅ (Temporal Dead Zone) |
| `const` | block | ❌ | ✅ (Temporal Dead Zone) |

## Examples
```js
let age = 25;
age = 26; // OK, let allows reassignment

const PI = 3.14159;
// PI = 3.14; // ❌ TypeError: Assignment to constant variable

var count = 0;
count = 1; // OK, but avoid var in modern code
```

## Memory Diagram
```
Stack (primitives)              Heap (objects/reference types)
┌────────────────┐            ┌───────────────────────┐
│ age    → 25       │            │ user → { name: "Sam" }  │
│ PI     → 3.14159  │            └───────────────────────┘
└────────────────┘
```

## Flowchart
```
Need a variable?
      │
Will its value ever change?
      │                    │
     No                   Yes
      │                    │
   use const          use let (avoid var)
```

## Internal Working
`let`/`const` declarations are hoisted but placed in a "Temporal Dead Zone" (TDZ) — they exist in scope but accessing them before the declaration line throws a `ReferenceError`, unlike `var` which silently returns `undefined`.

## Beginner Example
```js
let name = "Shubham";
console.log(name); // "Shubham"
```

## Intermediate Example
```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization (TDZ)
let x = 10;
```

## Advanced Example
```js
const user = { name: "Shubham" };
user.name = "Narware"; // ✅ allowed — const prevents REASSIGNING user, not mutating its contents
// user = {}; // ❌ TypeError
```

## Real World Example
```js
// Config values that should never change: use const
const API_BASE_URL = "https://api.example.com";
// Loop counters/values that change: use let
for (let i = 0; i < 5; i++) { /* ... */ }
```

## Industry Example
```js
// ESLint's "prefer-const" rule flags `let` variables that are never reassigned,
// enforcing const-by-default across production codebases.
```

## Interview Questions
See full list → [interview.md](./interview.md#variables)
1. What are the 3 ways to declare a variable in JS?
2. What is the Temporal Dead Zone?
3. Why is `const` not "truly immutable" for objects?
4. Why should `var` generally be avoided in modern code?
5. What's the difference between declaring, initializing, and assigning a variable?

## MCQs
See full list → [mcq.md](./mcq.md#variables)
1. Which keyword allows reassignment but not redeclaration in the same scope? (a) var (b) **let** (c) const (d) none → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#variables)
1. **(Easy)** Declare a `const` object and mutate one of its properties.
2. **(Medium)** Demonstrate the Temporal Dead Zone with a code snippet and explain the error.
3. **(Hard)** Refactor a `var`-heavy legacy snippet to use `let`/`const` correctly, explaining each choice.

## Assignments
- [ ] Write 5 variable declarations, choosing `let` vs `const` correctly for each use case.
- [ ] Explain in your own words why const objects can still be mutated.

## Mini Project
Build a small settings object using `const`, and a counter using `let`, wiring both into a tiny console-based app that logs both values changing appropriately.

## Common Mistakes
- Trying to reassign a `const` primitive value.
- Assuming `const` makes objects/arrays fully immutable.
- Using `var` out of habit, causing accidental scope leaks.

## Best Practices
- Default to `const`; use `let` only when reassignment is genuinely needed.
- Avoid `var` entirely in new code.

## Optimization Tips
- Declaring variables with the narrowest necessary scope (block-scoped `let`/`const`) helps garbage collection reclaim memory sooner once the block ends.

## Summary
Modern JavaScript uses `let` and `const` for block-scoped, predictable variable declarations — prefer `const` by default, `let` when reassignment is needed, and avoid `var`'s function-scoping quirks.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#variables)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Var →](./var.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
