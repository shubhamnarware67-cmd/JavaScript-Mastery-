# Numbers

> Section: Strings, Numbers & Dates · Owner: **Shubham Narware**

## Definition
JavaScript has a single `Number` type for all numeric values (both integers and floats), represented internally as IEEE-754 double-precision floating-point numbers.

## History
Present since 1995 as the sole numeric primitive type until **BigInt** was added in **ES2020** for arbitrary-precision integers.

## Why Numbers Matter
Nearly every calculation, index, or measurement in a program involves numbers — understanding their precision limits and conversion methods avoids many subtle bugs.

## Syntax
```js
let integer = 42;
let float = 3.14;
let scientific = 5e3; // 5000
```

## Types (related Number utilities)
| Method/Property | Purpose |
|---|---|
| `Number.isInteger()` | Checks for whole numbers |
| `Number.isNaN()` | Safely checks for NaN |
| `Number.parseFloat()`/`parseInt()` | Parse strings into numbers |
| `.toFixed(n)` | Format to n decimal places |
| `Number.MAX_SAFE_INTEGER` | Largest safely representable integer |

## Examples
```js
console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5.5));   // false
console.log((3.14159).toFixed(2));    // "3.14"
console.log(Number("42"));             // 42
```

## Memory Diagram
```
All JS numbers use the SAME 64-bit floating point format —
there's no separate "integer" type internally, unlike many other languages.
```

## Flowchart
```
Need to convert a string to a number?
        │
Expecting an integer? ──► Number.parseInt(str) or Number(str)
Expecting a float? ──► Number.parseFloat(str) or Number(str)
Need to check validity? ──► Number.isNaN(result)
```

## Internal Working
Because all numbers use IEEE-754 double-precision floats, values beyond `Number.MAX_SAFE_INTEGER` (2^53 - 1) can lose precision, and certain decimal fractions (like 0.1) cannot be represented exactly — leading to results like `0.1 + 0.2 !== 0.3`.

## Beginner Example
```js
console.log(10 / 3); // 3.3333333333333335
console.log(Number.isInteger(10 / 2)); // true
```

## Intermediate Example
```js
// Parsing user input safely
function parseAge(input) {
  const age = Number(input);
  return Number.isNaN(age) ? null : age;
}
console.log(parseAge("25")); // 25
console.log(parseAge("abc")); // null
```

## Advanced Example
```js
// Precision limits with very large integers
console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);    // 9007199254740992 (still "correct")
console.log(Number.MAX_SAFE_INTEGER + 2);    // 9007199254740992 (WRONG — precision lost!)
```

## Real World Example
```js
// Formatting a price for display
function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}
console.log(formatPrice(19.9)); // "$19.90"
```

## Industry Example
```js
// Financial applications often avoid floating-point math entirely for money,
// storing amounts as integer cents (or using BigInt/decimal libraries) to
// avoid precision errors like 0.1 + 0.2 !== 0.3.
```

## Interview Questions
See full list → [interview.md](./interview.md#numbers)
1. What numeric representation does JavaScript use internally for all numbers?
2. Why does `0.1 + 0.2 !== 0.3` in JavaScript?
3. What is `Number.MAX_SAFE_INTEGER`, and what happens beyond it?
4. What's the difference between `Number.parseInt()` and `Number.parseFloat()`?
5. How would you safely check if a parsed value is a valid number?

## MCQs
See full list → [mcq.md](./mcq.md#numbers)
1. JavaScript numbers are stored using: (a) 32-bit integers (b) **64-bit floating point (IEEE-754)** (c) Arbitrary precision by default (d) Strings internally → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#numbers)
1. **(Easy)** Write a function that formats a number to 2 decimal places.
2. **(Medium)** Write a function safely parsing a string to a number, returning `null` on failure.
3. **(Hard)** Demonstrate precision loss beyond `Number.MAX_SAFE_INTEGER` and explain when `BigInt` should be used instead.

## Assignments
- [ ] Explain, with an example, why `0.1 + 0.2 !== 0.3` in JavaScript.
- [ ] List 3 real scenarios where floating-point precision issues could cause real-world bugs (e.g. financial calculations).

## Mini Project
Build a small "Price Calculator" that correctly formats totals to 2 decimal places and safely handles invalid numeric input from a form field.

## Common Mistakes
- Comparing floating-point results directly with `===` and being surprised by precision errors.
- Using `parseInt()` without a radix argument on ambiguous strings (though modern engines default to base 10 reliably now).
- Using `value === NaN` instead of `Number.isNaN(value)` to check for `NaN`.

## Best Practices
- Use `Number.isInteger()`/`Number.isNaN()` (the safer, type-checking `Number.*` variants) over the older global `isNaN()`/`parseInt()` where precision matters.
- For financial calculations, consider integer-cent representations or a dedicated decimal library instead of raw floating-point math.

## Optimization Tips
- Avoid unnecessary repeated string-to-number conversions in hot loops — convert once and reuse the numeric value.

## Summary
JavaScript represents all numbers using 64-bit floating point, which is convenient but introduces real precision limits — understanding `Number.MAX_SAFE_INTEGER`, safe parsing, and NaN checks helps avoid subtle numeric bugs.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#numbers)

---
[← Template Literals](./template-literals.md) | [Section Home](./README.md) | [Math →](./math.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
