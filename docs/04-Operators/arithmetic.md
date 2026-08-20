# Arithmetic

> Section: Operators · Owner: **Shubham Narware**

## Definition
Arithmetic operators perform mathematical calculations: addition, subtraction, multiplication, division, remainder (modulo), and exponentiation.

## History
`+ - * /` and `%` existed since 1995; the exponent operator `**` was added in **ES2016** as shorthand for `Math.pow()`.

## Why Arithmetic Matters
Nearly every program does some math — totals, indexes, percentages — and JS has some unique quirks (like `+` also being string concatenation) worth understanding precisely.

## Syntax
```js
a + b
a - b
a * b
a / b
a % b
a ** b
```

## Types
| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition (or string concat) | `2 + 3` → `5` |
| `-` | Subtraction | `5 - 2` → `3` |
| `*` | Multiplication | `4 * 3` → `12` |
| `/` | Division | `10 / 4` → `2.5` |
| `%` | Remainder (modulo) | `10 % 3` → `1` |
| `**` | Exponentiation | `2 ** 3` → `8` |

## Examples
```js
console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 3);  // 1
console.log(2 ** 10); // 1024
```

## Memory Diagram
Not applicable — arithmetic operates on existing primitive values.

## Flowchart
```
Are BOTH operands numbers?
        │                    │
       Yes                  No (one is a string)
        │                    │
  Standard math          `+` triggers STRING CONCATENATION instead
                          (other ops like -, * still coerce to numbers)
```

## Internal Working
`+` is special: if either operand is a string, JS converts both to strings and concatenates; all other arithmetic operators (`- * / % **`) coerce operands to numbers first.

## Beginner Example
```js
let total = 5 + 10;
console.log(total); // 15
```

## Intermediate Example
```js
console.log("5" + 3);   // "53"  → string concatenation
console.log("5" - 3);   // 2     → coerced to number
console.log("5" * "2"); // 10    → both coerced to numbers
```

## Advanced Example
```js
// Floating point precision quirk (IEEE-754), common interview trap
console.log(0.1 + 0.2); // 0.30000000000000004, NOT exactly 0.3
console.log((0.1 + 0.2).toFixed(2)); // "0.30" — rounded for display
```

## Real World Example
```js
// Calculating a shopping cart total with tax
const subtotal = 49.99 + 19.99;
const taxRate = 0.08;
const total = subtotal * (1 + taxRate);
console.log(total.toFixed(2)); // "75.58"
```

## Industry Example
```js
// Pagination logic frequently uses modulo and division together
const itemsPerPage = 10;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const isLastItemOnPage = (index + 1) % itemsPerPage === 0;
```

## Interview Questions
See full list → [interview.md](./interview.md#arithmetic)
1. Why does `"5" + 3` return `"53"` but `"5" - 3` return `2`?
2. What causes `0.1 + 0.2` to not equal exactly `0.3`?
3. What does the modulo (`%`) operator actually compute?
4. What's the shorthand `**` equivalent to?
5. How would you safely compare floating-point numbers for "equality"?

## MCQs
See full list → [mcq.md](./mcq.md#arithmetic)
1. `2 ** 3` evaluates to: (a) 6 (b) **8** (c) 9 (d) 5 → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#arithmetic)
1. **(Easy)** Write a function that returns the remainder of two numbers using `%`.
2. **(Medium)** Write a function that checks if a number is even using modulo.
3. **(Hard)** Write a `roughlyEqual(a, b, epsilon)` function that safely compares floats accounting for precision errors.

## Assignments
- [ ] Demonstrate `+` behaving as concatenation vs addition with 3 different input types.
- [ ] Explain why `0.1 + 0.2 !== 0.3` using IEEE-754 floating point in your own words.

## Mini Project
Build a small "Tax Calculator" that takes a subtotal and tax rate, computes the total using arithmetic operators, and correctly rounds the display value.

## Common Mistakes
- Expecting `+` to always add numbers, forgetting it concatenates when either side is a string.
- Comparing floating-point results with `===` and being surprised by precision errors.
- Confusing `%` (remainder) with true mathematical modulo for negative numbers (`-1 % 3` is `-1` in JS, not `2`).

## Best Practices
- Explicitly convert types (`Number(x)`) before arithmetic when input sources (like form fields) are uncertain.
- Use `.toFixed()` or a small epsilon comparison for float-sensitive logic (money, measurements).

## Optimization Tips
- Prefer `**` over `Math.pow()` for simple exponentiation — equivalent result, more concise syntax.

## Summary
Arithmetic operators handle numeric computation, with `+` uniquely also serving as string concatenation. Floating-point precision and type coercion are the two biggest sources of arithmetic-related bugs to watch for.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#arithmetic)

---
[← Operators](./operators.md) | [Section Home](./README.md) | [Comparison →](./comparison.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
