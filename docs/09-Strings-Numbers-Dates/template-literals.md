# Template Literals

> Section: Strings, Numbers & Dates · Owner: **Shubham Narware**

## Definition
Template literals (backtick-delimited strings) allow embedded expressions (`${...}`) and multi-line strings without escape characters, introduced as a cleaner alternative to string concatenation.

## History
Introduced in **ES2015**, directly addressing the verbosity and error-proneness of `+`-based string concatenation.

## Why Template Literals Matter
They make building dynamic strings dramatically more readable, and natively support multi-line text without special escape sequences.

## Syntax
```js
const name = "Shubham";
const message = `Hello, ${name}!`;
```

## Types
| Feature | Example |
|---|---|
| Basic interpolation | `` `Hi, ${name}` `` |
| Expression evaluation | `` `Total: ${price * qty}` `` |
| Multi-line strings | `` `Line 1\nLine 2` `` written literally across lines |
| Tagged templates | `` tag`Hello ${name}` `` (custom processing function) |

## Examples
```js
const name = "Shubham";
const age = 22;
console.log(`${name} is ${age} years old.`); // "Shubham is 22 years old."
```

## Memory Diagram
Not applicable — template literals produce a regular string value once evaluated.

## Flowchart
```
Parse template literal
        │
For each ${expression} found:
        │
Evaluate the expression
        │
Convert result to a string (via implicit toString/coercion)
        │
Splice all pieces together into the final string
```

## Internal Working
Everything inside `${...}` is evaluated as a full JavaScript expression, then converted to a string and inserted at that position — this means you can embed function calls, ternaries, or arithmetic directly, not just simple variables.

## Beginner Example
```js
const item = "Book";
const price = 15;
console.log(`The ${item} costs $${price}.`);
```

## Intermediate Example
```js
// Multi-line strings without \n escapes
const message = `Dear Customer,

Thank you for your order.
Regards,
Support Team`;
console.log(message);
```

## Advanced Example
```js
// Embedding expressions, including function calls and ternaries
function formatPrice(p) { return `$${p.toFixed(2)}`; }
const qty = 3, price = 9.999;
console.log(`Total: ${formatPrice(price * qty)} (${qty > 1 ? "items" : "item"})`);
// "Total: $30.00 (items)"
```

## Real World Example
```js
// Building a dynamic SQL-like or HTML string (careful with real SQL - use parameterized queries!)
const html = `<div class="card"><h2>${title}</h2><p>${description}</p></div>`;
```

## Industry Example
```js
// Tagged templates power libraries like styled-components (CSS-in-JS)
// const Button = styled.button`
//   background: ${props => props.primary ? "blue" : "gray"};
// `;
```

## Interview Questions
See full list → [interview.md](./interview.md#template-literals)
1. What problem do template literals solve compared to `+` concatenation?
2. How do multi-line strings work with template literals?
3. Can you call a function inside a `${}` expression? Give an example.
4. What is a "tagged template," and what's it used for?
5. Which ECMAScript version introduced template literals?

## MCQs
See full list → [mcq.md](./mcq.md#template-literals)
1. Template literals are delimited by: (a) Single quotes (b) Double quotes (c) **Backticks** (d) Curly braces → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#template-literals)
1. **(Easy)** Rewrite a `+`-concatenated string as a template literal.
2. **(Medium)** Build a multi-line email template string using a template literal.
3. **(Hard)** Write a simple tagged template function that highlights interpolated values (e.g. wraps them in `**`).

## Assignments
- [ ] Convert 3 string-concatenation examples into template literals.
- [ ] Explain, with an example, how expressions (not just variables) can be embedded in `${}`.

## Mini Project
Build a small "Invoice Generator" that uses a multi-line template literal to format an itemized invoice with computed totals.

## Common Mistakes
- Using regular quotes (`'`/`"`) and forgetting `${}` interpolation only works inside backticks.
- Forgetting that `${}` content is a full expression — overly complex logic embedded inline can hurt readability.

## Best Practices
- Prefer template literals over `+` concatenation for any string involving embedded variables.
- Keep `${}` expressions simple; extract complex logic into a named variable or function beforehand.

## Optimization Tips
- No meaningful performance difference from concatenation for typical use — the benefit is entirely readability and correctness (fewer escaping mistakes).

## Summary
Template literals (backtick strings) allow clean variable/expression interpolation and native multi-line strings, replacing much of the awkwardness of traditional `+` string concatenation.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#template-literals)

---
[← Strings](./strings.md) | [Section Home](./README.md) | [Numbers →](./numbers.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
