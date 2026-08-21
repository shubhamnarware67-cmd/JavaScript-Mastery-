# Operators — Coding Practice

> Owner: **Shubham Narware**

### Operators {#operators}
- **Easy:** Write one example expression for each of the 7 operator categories.
- **Medium:** Predict the output of a chained expression mixing arithmetic and comparison operators without parentheses.
- **Hard:** Rewrite a deeply nested ternary as clearer if/else logic, preserving identical behavior.

### Arithmetic {#arithmetic}
- **Easy:** Write a function returning the remainder of two numbers using `%`.
- **Medium:** Write a function checking if a number is even using modulo.
- **Hard:** Write a `roughlyEqual(a, b, epsilon)` function safely comparing floats.

### Comparison {#comparison}
- **Easy:** Write 3 `===` comparisons and predict results before running them.
- **Medium:** Write `isNaNSafe(value)` correctly detecting NaN.
- **Hard:** Build truth tables for `==` between `0`, `"0"`, `""`, `false`, `null`, `undefined`.

### Logical {#logical}
- **Easy:** Predict results of 4 mixed truthy/falsy `&&`/`||` expressions.
- **Medium:** Rewrite a `user && user.address && user.address.city` chain using optional chaining.
- **Hard:** Demonstrate a bug caused by `||` defaults that `??` fixes, with a concrete example.

### Bitwise {#bitwise}
- **Easy:** Compute `6 & 3`, `6 | 3`, `6 ^ 3` and verify manually with binary.
- **Medium:** Implement a permissions system using bitwise flags (read/write/execute).
- **Hard:** Extract RGB channels from a packed hex color integer using shifting and masking.

### Assignment {#assignment}
- **Easy:** Use `+=`, `-=`, `*=` across 3 steps, logging each result.
- **Medium:** Use `??=` to apply config defaults without overwriting valid falsy values.
- **Hard:** Demonstrate why `||=` incorrectly overrides a legitimately falsy config value where `??=` doesn't.

### Ternary {#ternary}
- **Easy:** Write a ternary returning "Even"/"Odd" for a number.
- **Medium:** Write a nested ternary mapping a score to a letter grade (A/B/C/F).
- **Hard:** Refactor a 3-level nested ternary into equivalent if/else if/else logic.

### Nullish {#nullish}
- **Easy:** Compare `0 ?? 10` vs `0 || 10`, explaining the difference.
- **Medium:** Write `getSetting(value, fallback)` using `??` preserving `false`/`0`.
- **Hard:** Fix a config-initialization bug caused by `||` defaults using `??`.

### Optional Chaining {#optional-chaining}
- **Easy:** Use `?.` to safely access a possibly-missing nested property.
- **Medium:** Rewrite a verbose `a && a.b && a.b.c` chain using `?.`.
- **Hard:** Combine `?.`, `??`, and array bracket access to safely extract a nested API field with a fallback.

---
[← Section Home](./README.md)
