# Operators

> Section: Operators · Owner: **Shubham Narware**

## Definition
An operator is a symbol that performs an operation on one or more values (operands) — producing a new value, such as a sum, a boolean comparison, or an assignment.

## History
Core operators (`+ - * / = == < >`) existed since 1995. `**` (exponent) arrived in ES2016, `??`/`?.` in ES2020, and logical assignment (`&&= ||= ??=`) in ES2021.

## Why Operators Matter
Operators are the basic building blocks of every expression — understanding their categories and precedence prevents subtle logic bugs.

## Syntax
```js
a + b     // arithmetic
a === b   // comparison
a && b    // logical
a = b     // assignment
```

## Types (categories)
| Category | Examples |
|---|---|
| Arithmetic | `+ - * / % **` |
| Assignment | `= += -= *= /=` |
| Comparison | `== === != !== > < >= <=` |
| Logical | `&& \|\| !` |
| Bitwise | `& \| ^ ~ << >>` |
| Ternary | `condition ? a : b` |
| Nullish/Optional | `?? ?.` |

## Examples
```js
console.log(5 + 3);       // 8 (arithmetic)
console.log(5 === "5");    // false (strict comparison)
console.log(true && false); // false (logical)
console.log(5 > 3 ? "yes" : "no"); // "yes" (ternary)
```

## Memory Diagram
Not applicable — operators act on values already in memory, they don't have their own memory model.

## Flowchart
```
Expression with an operator
        │
Evaluate left operand ──► Evaluate right operand ──► Apply operator ──► Result
```

## Internal Working
The JS engine parses expressions into an Abstract Syntax Tree (AST), where each operator becomes a node; evaluation walks this tree, applying operator precedence and associativity rules to compute the final value.

## Beginner Example
```js
let total = 10 + 5; // 15
```

## Intermediate Example
```js
let isEligible = age >= 18 && hasID === true;
```

## Advanced Example
```js
// Combining multiple operator categories in one expression
let discount = (isMember && totalSpent > 1000) ? 0.2 : (totalSpent > 500 ? 0.1 : 0);
```

## Real World Example
```js
// Form validation combining comparison + logical operators
const isValid = username.length >= 3 && password.length >= 8 && email.includes("@");
```

## Industry Example
```js
// Feature-flag checks commonly combine nullish coalescing + logical operators
const showBanner = (config.bannerEnabled ?? true) && !user.hasDismissedBanner;
```

## Interview Questions
See full list → [interview.md](./interview.md#operators)
1. What are the main categories of JavaScript operators?
2. What determines the order operators are applied in a complex expression?
3. What's the difference between operators and expressions?
4. Give an example combining 3 different operator categories.
5. Why does operator precedence matter for avoiding bugs?

## MCQs
See full list → [mcq.md](./mcq.md#operators)
1. Which category does `??` belong to? (a) Arithmetic (b) **Nullish/Optional** (c) Bitwise (d) Assignment → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#operators)
1. **(Easy)** Write one example expression for each of the 7 operator categories.
2. **(Medium)** Predict the output of a chained expression mixing arithmetic and comparison operators without parentheses.
3. **(Hard)** Rewrite a deeply nested ternary expression as clearer `if/else` logic, preserving identical behavior.

## Assignments
- [ ] Create a reference table of all operator categories with one example each.
- [ ] Explain, with an example, why parentheses can prevent precedence-related bugs.

## Mini Project
Build a simple calculator script that supports `+ - * / % **` and demonstrates correct operator precedence handling.

## Common Mistakes
- Assuming all operators evaluate strictly left-to-right without considering precedence.
- Overusing chained ternaries, making code hard to read.
- Confusing assignment (`=`) with comparison (`==`/`===`) inside conditions.

## Best Practices
- Use parentheses to make precedence explicit, even when not strictly required.
- Prefer `===`/`!==` over `==`/`!=` to avoid type-coercion bugs.

## Optimization Tips
- Short-circuit logical operators (`&&`, `||`) to skip unnecessary expensive computations.

## Summary
Operators are categorized into arithmetic, comparison, logical, bitwise, assignment, ternary, and nullish/optional groups — understanding precedence and each category's behavior is foundational to writing correct expressions.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#operators)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Arithmetic →](./arithmetic.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
