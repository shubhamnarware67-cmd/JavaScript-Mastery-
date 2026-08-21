# Export

> Section: Modules · Owner: **Shubham Narware**

## Definition
The `export` statement marks variables, functions, or classes in a module as available for other modules to `import`, defining the module's public interface.

## History
Introduced alongside `import` in **ECMAScript 2015 (ES6)** as part of the ES Modules standard, giving JavaScript a native, static way to expose functionality — replacing patterns like manually attaching properties to a global object or `module.exports` in CommonJS.

## Why Export Matters
It lets a module explicitly choose what's public and what stays private, so internal implementation details don't leak into the global scope or get accidentally overwritten by other files.

## Syntax
```js
export const value = 42;
export function myFunc() {}
export class MyClass {}
export default function () {}
export { value, myFunc as renamedFunc };
```

## Types (export forms)
| Form | Behavior |
|---|---|
| Named export | `export const x = 1;` — import with matching name |
| Default export | `export default value;` — one per module, import with any name |
| Renamed export | `export { x as y };` — export under an alias |
| Re-export | `export { x } from "./other.js";` — pass through another module's export |

## Examples
```js
// math.js
export const PI = 3.14159;
export function square(n) { return n * n; }
export default function cube(n) { return n * n * n; }
```

## Memory Diagram
```
math.js module scope:
  named exports: { PI, square }  ──► imported via  import { PI, square } from "./math.js"
  default export: cube            ──► imported via  import cube from "./math.js"
```

## Flowchart
```
Module file is defined
        │
Mark bindings with `export` (named) or `export default` (default)
        │
Only exported bindings are visible to importing modules
        │
Non-exported variables/functions stay private to the module
```

## Internal Working
Exports create **live bindings**, not copies — the exported reference always points to the current value in the exporting module, so if the exporting module later reassigns an exported `let` variable, every importer sees the updated value immediately.

## Beginner Example
```js
// greet.js
export function greet(name) { return `Hi, ${name}`; }
```

## Intermediate Example
```js
// constants.js
export const MAX_USERS = 100;
export const MIN_USERS = 1;

// config.js
const settings = { theme: "dark" };
export default settings;
```

## Advanced Example
```js
// index.js — re-exporting from multiple modules as a single entry point
export { add, subtract } from "./math.js";
export { default as Logger } from "./logger.js";
```

## Real World Example
```js
// A shared "utils" module exports multiple small helper functions
// so every part of an app imports from one consistent source.
export function formatDate(date) { /* ... */ }
export function slugify(text) { /* ... */ }
```

## Industry Example
```js
// Component libraries (e.g. a design system) commonly use an
// index.js that re-exports every component, giving consumers a
// single clean import path: import { Button, Modal } from "my-ui-lib";
```

## Interview Questions
See full list → [interview.md](./interview.md#export)
1. How many default exports can a single module have?
2. What's the difference between a named export and a default export in terms of how they're imported?
3. Why are exported bindings described as "live," not copies?
4. How would you re-export something from another module through an index file?
5. Can you rename an export using `as`? Show the syntax.

## MCQs
See full list → [mcq.md](./mcq.md#export)
1. How many `export default` statements can one module have? (a) 0 (b) **1** (c) Unlimited (d) Depends on the bundler → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#export)
1. **(Easy)** Write a module with two named exports and one default export.
2. **(Medium)** Create an `index.js` that re-exports functions from two separate modules.
3. **(Hard)** Demonstrate the "live binding" behavior of exports with a mutable exported counter variable.

## Assignments
- [ ] Explain, with an example, why exports are "live bindings" rather than snapshot copies.
- [ ] Refactor a file with several loose functions into a module with clear named + default exports.

## Mini Project
Build a small "Utils Library" module with several named exports (date formatting, string helpers) and one default export (a main config object), consumed by a separate `app.js`.

## Common Mistakes
- Trying to have more than one `export default` in a single module (not allowed).
- Forgetting the exact name must match when using named exports (unless aliased with `as`).
- Assuming exported values are copied at import time rather than being live references.

## Best Practices
- Use named exports for multiple related utilities, and reserve `export default` for a module's single primary value (like a component or class).
- Create an `index.js` barrel file to re-export multiple related modules under one clean import path.

## Optimization Tips
- Keep exports granular and named (rather than one big default object) so bundlers can tree-shake unused exports out of the final bundle.

## Summary
`export` defines a module's public interface — named exports for multiple values imported by exact name, and a single optional default export for a module's primary value — with all exported bindings staying live references to the original values.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#export)

---
[← Import](./import.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
