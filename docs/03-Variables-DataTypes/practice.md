# Variables & Data Types — Coding Practice

> Owner: **Shubham Narware**

### Variables {#variables}
- **Easy:** Declare a `const` object and mutate one of its properties.
- **Medium:** Demonstrate the Temporal Dead Zone with a code snippet and explain the resulting error.
- **Hard:** Refactor a `var`-heavy legacy snippet to `let`/`const`, explaining each choice.

### Var {#var}
- **Easy:** Demonstrate `var` hoisting by logging a variable before its declaration line.
- **Medium:** Show the classic `var` + `setTimeout` loop bug, then fix it using `let`.
- **Hard:** Fix the same bug using an IIFE (as if `let` didn't exist) and explain why it works.

### Let {#let}
- **Easy:** Declare a `let` variable, reassign it twice, logging each value.
- **Medium:** Demonstrate the TDZ by referencing a `let` variable before its declaration.
- **Hard:** Explain with a diagram why the `let`-based loop+setTimeout logs distinct per-iteration values.

### Const {#const}
- **Easy:** Declare a `const` array and push a new item onto it.
- **Medium:** Use `Object.freeze()` and demonstrate a blocked mutation attempt.
- **Hard:** Write a deep-freeze utility function that recursively freezes a nested object.

### Datatype {#datatype}
- **Easy:** Use `typeof` on 6 different values and log the results.
- **Medium:** Write a function that correctly checks for `null` (avoiding the `typeof` quirk).
- **Hard:** Write a type-checking utility distinguishing Array, plain Object, null, and other object types.

### Primitive {#primitive}
- **Easy:** Show reassigning a copied primitive doesn't affect the original.
- **Medium:** Demonstrate that string methods return new strings instead of mutating in place.
- **Hard:** Demonstrate precision loss beyond `Number.MAX_SAFE_INTEGER`, then show `BigInt` avoiding it.

### Reference {#reference}
- **Easy:** Show two variables assigned to the same object sharing mutations.
- **Medium:** Demonstrate the shallow-copy pitfall with a nested object using spread syntax.
- **Hard:** Write a simple recursive `deepClone(obj)` function without using `structuredClone`.

---
[← Section Home](./README.md)
