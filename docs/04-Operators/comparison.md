# Comparison

> Section: Operators · Owner: **Shubham Narware**

## Definition
Comparison operators compare two values and return a boolean — including loose equality (`==`, with type coercion) and strict equality (`===`, no coercion).

## History
`== != > < >= <=` existed since 1995; `===`/`!==` were added early on specifically to give developers a coercion-free comparison option.

## Why Comparison Matters
Choosing `==` vs `===` is one of the most consequential everyday decisions in JS — loose equality's coercion rules cause many classic bugs.

## Syntax
```js
a == b
a === b
a != b
a !== b
a > b
a < b
a >= b
a <= b
```

## Types
| Operator | Meaning | Coerces types? |
|---|---|---|
| `==` | Loose equality | ✅ Yes |
| `===` | Strict equality | ❌ No |
| `!=` | Loose inequality | ✅ Yes |
| `!==` | Strict inequality | ❌ No |
| `> < >= <=` | Relational | Coerces to number/string comparison as needed |

## Examples
```js
console.log(5 == "5");   // true  — coerces string to number
console.log(5 === "5");  // false — different types
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

## Memory Diagram
Not applicable — comparisons produce a boolean, no persistent memory structure involved.

## Flowchart
```
Comparing two values
        │
Using === or !== ?
        │                    │
       Yes                  No (using == or !=)
        │                    │
No type conversion       JS applies coercion rules
(compare type AND value)  (numbers ↔ strings, booleans ↔ numbers, etc.)
```

## Internal Working
`===` first checks if the operand types match; if not, it immediately returns `false`. `==` instead runs the **Abstract Equality Comparison Algorithm**, converting operands (e.g. string→number, boolean→number) before comparing — this is the source of its "weird" results.

## Beginner Example
```js
console.log(10 > 5);   // true
console.log(10 === 10); // true
```

## Intermediate Example
```js
console.log([] == false);   // true  — [] → "" → 0, false → 0
console.log([] === false);  // false — different types
```

## Advanced Example
```js
// Classic "gotchas" often asked in interviews
console.log(NaN === NaN);       // false! NaN is never equal to itself
console.log(Object.is(NaN, NaN)); // true — Object.is handles this edge case correctly
console.log(0 == "0");           // true
console.log(0 == "");            // true
console.log("" == "0");          // false
```

## Real World Example
```js
// Correctly checking for "no value provided" using strict comparison
function greet(name) {
  if (name === undefined || name === null) {
    name = "Guest";
  }
  return `Hello, ${name}`;
}
```

## Industry Example
```js
// Linters (ESLint's "eqeqeq" rule) enforce === / !== everywhere in production codebases,
// specifically to eliminate loose-equality coercion bugs.
```

## Interview Questions
See full list → [interview.md](./interview.md#comparison)
1. What's the core difference between `==` and `===`?
2. Why does `null == undefined` return `true` but `null === undefined` return `false`?
3. Why is `NaN === NaN` false, and how do you correctly check for `NaN`?
4. What does ESLint's `eqeqeq` rule enforce, and why?
5. Give 3 "surprising" `==` results and explain each.

## MCQs
See full list → [mcq.md](./mcq.md#comparison)
1. `"5" == 5` evaluates to: (a) false (b) **true** (c) undefined (d) throws an error → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#comparison)
1. **(Easy)** Write 3 `===` comparisons and predict their results before running them.
2. **(Medium)** Write a function `isNaNSafe(value)` that correctly detects `NaN` (unlike a naive `value === NaN`).
3. **(Hard)** Write out truth tables for `== ` between `0`, `"0"`, `""`, `false`, `null`, `undefined`, explaining each result.

## Assignments
- [ ] List 5 loose-equality (`==`) results that surprised you and explain the coercion behind each.
- [ ] Explain why professional codebases almost universally ban `==` via linting.

## Mini Project
Build a small "Equality Explainer" script: given two values, it logs both `==` and `===` results along with a plain-English explanation of any coercion that occurred.

## Common Mistakes
- Using `==` out of habit, unintentionally triggering type coercion bugs.
- Comparing with `value === NaN`, which is always `false` — use `Number.isNaN(value)` instead.
- Assuming `null == undefined` behavior extends to other loose comparisons.

## Best Practices
- Always prefer `===`/`!==` over `==`/`!=`.
- Use `Number.isNaN()` or `Object.is()` for NaN-safe comparisons.

## Optimization Tips
- Strict equality (`===`) is marginally faster than loose equality since it skips the coercion algorithm entirely — a minor benefit on top of its correctness advantage.

## Summary
Comparison operators check equality/relational order; `===`/`!==` avoid the surprising type-coercion behavior of `==`/`!=` and should be the default choice in virtually all JavaScript code.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#comparison)

---
[← Arithmetic](./arithmetic.md) | [Section Home](./README.md) | [Logical →](./logical.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
