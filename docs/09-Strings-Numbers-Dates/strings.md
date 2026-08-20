# Strings

> Section: Strings, Numbers & Dates · Owner: **Shubham Narware**

## Definition
A string is an immutable sequence of characters used to represent text — one of JavaScript's core primitive types.

## History
Present since 1995; template literals (ES2015) and methods like `padStart`, `includes`, `replaceAll` were added incrementally through later ECMAScript versions.

## Why Strings Matter
Text processing (validation, formatting, parsing, display) appears in virtually every application — strings and their methods are used constantly.

## Syntax
```js
const single = 'hello';
const double = "hello";
const template = `hello, ${name}`;
```

## Types (common methods overview)
| Method | Purpose |
|---|---|
| `.length` | Character count |
| `.toUpperCase()`/`.toLowerCase()` | Case conversion |
| `.slice()`/`.substring()` | Extract a portion |
| `.includes()`/`.indexOf()` | Search |
| `.split()` | Convert to an array |
| `.trim()` | Remove whitespace |
| `.replace()`/`.replaceAll()` | Substitute text |

## Examples
```js
const name = "Shubham";
console.log(name.length);           // 7
console.log(name.toUpperCase());     // "SHUBHAM"
console.log(name.includes("bham"));   // true
console.log(name.slice(0, 3));        // "Shu"
```

## Memory Diagram
```
Strings are PRIMITIVES — copied by value, immutable.
let a = "hi";
let b = a;  // b is a full independent COPY of the value "hi"
```

## Flowchart
```
Need to check/transform text?
        │
Search? ──► includes()/indexOf()/startsWith()/endsWith()
Extract? ──► slice()/substring()
Transform case? ──► toUpperCase()/toLowerCase()
Split into parts? ──► split()
Combine values? ──► template literals or concat()/+
```

## Internal Working
Strings are immutable — every "modifying" method (`.toUpperCase()`, `.replace()`, etc.) returns a brand-new string rather than changing the original in place; the original string value remains completely unchanged in memory.

## Beginner Example
```js
const greeting = "Hello, World!";
console.log(greeting.length); // 13
```

## Intermediate Example
```js
// Common validation checks
const email = "user@example.com";
console.log(email.includes("@"));       // true
console.log(email.startsWith("user"));   // true
console.log(email.endsWith(".com"));     // true
```

## Advanced Example
```js
// Chaining string methods for cleanup/formatting
const raw = "  ShUbHaM NaRwArE  ";
const clean = raw.trim().toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
console.log(clean); // "Shubham Narware"
```

## Real World Example
```js
// Slugifying a title for a URL
function slugify(title) {
  return title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
}
console.log(slugify("Hello World! 2026")); // "hello-world-2026"
```

## Industry Example
```js
// Masking sensitive data for display (e.g. credit card numbers)
function maskCard(number) {
  return number.slice(0, -4).replace(/./g, "*") + number.slice(-4);
}
console.log(maskCard("1234567812345678")); // "************5678"
```

## Interview Questions
See full list → [interview.md](./interview.md#strings)
1. Are strings mutable or immutable in JavaScript?
2. What's the difference between `.slice()` and `.substring()`?
3. How would you check if a string contains a substring, and in 2 different ways?
4. What does `.split("")` do to a string?
5. Why does `str.toUpperCase()` not change the original variable?

## MCQs
See full list → [mcq.md](./mcq.md#strings)
1. Strings in JavaScript are: (a) Mutable (b) **Immutable** (c) Objects only (d) Arrays of characters → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#strings)
1. **(Easy)** Write a function that reverses a string.
2. **(Medium)** Write a function that checks if a string is a palindrome.
3. **(Hard)** Write a `slugify(title)` function that converts a title into a URL-friendly slug.

## Assignments
- [ ] List 5 string methods and give an example use for each.
- [ ] Explain, with a code example, why strings are immutable in JavaScript.

## Mini Project
Build a small "Text Formatter" utility with functions for title-casing, slugifying, and truncating (with ellipsis) a block of text.

## Common Mistakes
- Assuming string methods mutate the original string.
- Confusing `.slice()` (supports negative indices) with `.substring()` (does not, treats negatives as 0).
- Forgetting `.split()` requires a separator argument to actually split (an empty string `""` splits into individual characters).

## Best Practices
- Use template literals for building strings with embedded values instead of `+` concatenation.
- Prefer `.includes()` over `.indexOf() !== -1` for simple substring existence checks — more readable intent.

## Optimization Tips
- For building large strings in a loop, prefer array `.join()` over repeated `+=` concatenation, which can be less efficient for many iterations.

## Summary
Strings are immutable primitive sequences of characters with a rich set of built-in methods for searching, transforming, and extracting text — every "modifying" method returns a new string rather than mutating the original.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#strings)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Template Literals →](./template-literals.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
