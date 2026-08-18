# Const

> Section: Variables & Data Types · Owner: **Shubham Narware**

## Definition
`const` declares a block-scoped variable whose **binding** cannot be reassigned after initialization — though objects/arrays it references can still be mutated internally.

## History
Introduced in **ES2015** alongside `let`, giving developers an explicit way to signal "this reference will never change."

## Why Const Matters
Defaulting to `const` communicates intent clearly (this value's binding won't be reassigned) and catches accidental reassignment bugs at parse/runtime time.

## Syntax
```js
const PI = 3.14159;
const user = { name: "Shubham" };
```

## Types
Not applicable — single declaration form.

## Examples
```js
const MAX_USERS = 100;
// MAX_USERS = 200; // ❌ TypeError: Assignment to constant variable.

const list = [1, 2, 3];
list.push(4); // ✅ OK — mutating contents, not reassigning `list` itself
console.log(list); // [1, 2, 3, 4]
```

## Memory Diagram
```
const user = { name: "Shubham" };

Stack                     Heap
┌───────────────┐      ┌─────────────────────┐
│ user → (ref) ────────►│ { name: "Shubham" }    │
└───────────────┘      └─────────────────────┘
   ↑ this reference        ↑ this object's CONTENTS
   is locked (const)          CAN still be changed
```

## Flowchart
```
Will this variable's binding ever be reassigned?
        │                              │
       No                             Yes
        │                              │
    use const                      use let
```

## Internal Working
`const` must be initialized at declaration (no `const x;` without a value) and, like `let`, sits in the Temporal Dead Zone until that line runs. The engine simply disallows any later `=` reassignment to that binding — it does not freeze the referenced value itself.

## Beginner Example
```js
const name = "Shubham";
console.log(name); // "Shubham"
```

## Intermediate Example
```js
const config = { debug: false };
config.debug = true; // allowed — object mutation, not reassignment
console.log(config); // { debug: true }
```

## Advanced Example
```js
// To make an object's VALUES immutable too, use Object.freeze (shallow freeze)
const settings = Object.freeze({ theme: "dark" });
settings.theme = "light"; // silently fails in non-strict mode, throws in strict mode
console.log(settings.theme); // "dark" — unchanged
```

## Real World Example
```js
// Constants for configuration/magic values
const TAX_RATE = 0.18;
const API_KEY = process.env.API_KEY;
```

## Industry Example
```js
// ESLint's "prefer-const" rule automatically suggests converting
// any `let` that's never reassigned into a `const`, enforcing
// const-by-default across a codebase.
```

## Interview Questions
See full list → [interview.md](./interview.md#const)
1. Why is `const user.name = "x"` valid even though `user` is a `const`?
2. What happens if you try to declare `const x;` without a value?
3. How would you make an object's properties truly unchangeable?
4. What's the difference between `const` immutability and `Object.freeze()`?
5. Why might a team enforce "const by default" via linting?

## MCQs
See full list → [mcq.md](./mcq.md#const)
1. Which of these is TRUE about `const`? (a) Values can never change (b) **Bindings can't be reassigned, but object contents can mutate** (c) It's function-scoped (d) It allows redeclaration — *Correct: (b).*

## Coding Questions
See full list → [practice.md](./practice.md#const)
1. **(Easy)** Declare a `const` array and push a new item onto it.
2. **(Medium)** Use `Object.freeze()` to prevent an object's properties from changing, and demonstrate the attempt failing.
3. **(Hard)** Write a deep-freeze utility function that recursively freezes a nested object.

## Assignments
- [ ] Explain, with an example, why `const` doesn't make objects immutable by default.
- [ ] Convert a codebase snippet's unnecessary `let`s into `const`s.

## Mini Project
Build a simple "app config" object declared with `const`, demonstrate mutating a property, then apply `Object.freeze()` and show the mutation being blocked.

## Common Mistakes
- Believing `const` makes the entire object/array immutable.
- Forgetting `const` requires immediate initialization.
- Trying to reassign a `const` and being confused by the `TypeError`.

## Best Practices
- Default to `const` for all variables unless reassignment is genuinely required.
- Use `Object.freeze()` (or a deep-freeze utility) when true immutability is needed.

## Optimization Tips
- Engines can sometimes make stronger optimization assumptions about `const` bindings since they're guaranteed not to be reassigned — a minor but real JIT-friendliness benefit.

## Summary
`const` locks a variable's *binding*, not its *value's contents* — objects and arrays declared with `const` can still be mutated. Use `const` by default and reach for `Object.freeze()` when true immutability is required.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#const)

---
[← Let](./let.md) | [Section Home](./README.md) | [Datatype →](./datatype.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
