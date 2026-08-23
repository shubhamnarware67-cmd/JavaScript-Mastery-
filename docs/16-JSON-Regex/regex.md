# Regex

> Section: JSON & Regex · Owner: **Shubham Narware**

## Definition
Regular expressions (regex) are patterns used to match, search, and manipulate text — in JavaScript, represented by the `RegExp` object or the `/pattern/flags` literal syntax.

## History
Regular expressions as a concept originate from **1950s formal language theory** (Stephen Kleene); JavaScript has supported them natively since **ECMAScript 3 (1999)**, with major feature additions (like named capture groups) arriving in ES2018.

## Why Regex Matters
It provides a compact, powerful way to validate input (like emails or phone numbers), search/replace text patterns, and extract structured data from strings — tasks that would otherwise require verbose manual string parsing.

## Syntax
```js
const pattern = /hello/i;      // literal syntax, case-insensitive
const pattern2 = new RegExp("hello", "i"); // constructor syntax
pattern.test("Hello World");   // true
```

## Types (common flags & elements)
| Element | Meaning |
|---|---|
| `i` flag | Case-insensitive matching |
| `g` flag | Global — find all matches, not just the first |
| `m` flag | Multiline — `^`/`$` match line boundaries |
| `\d`, `\w`, `\s` | Digit, word character, whitespace |
| `()` | Capture group |
| `(?<name>...)` | Named capture group |

## Examples
```js
const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailPattern.test("user@example.com")); // true
```

## Memory Diagram
```
/pattern/flags
    │
Compiled into an internal matching engine (NFA-based in most implementations)
    │
.test(str) ──► boolean
.exec(str) / str.match(pattern) ──► match details / array
```

## Flowchart
```
Define pattern: /regex/flags
        │
Call .test(), .exec(), or String methods (match, replace, split)
        │
Engine scans string character by character, attempting to match
        │
Match found? ──Yes──► return match info (or true for .test)
        │
        No
        ▼
Return null / false
```

## Internal Working
JavaScript regex engines are typically backtracking-based (NFA), meaning certain patterns — especially ones with nested quantifiers on overlapping input — can suffer from **catastrophic backtracking**, causing exponential time complexity on certain malicious or malformed inputs (a real security concern known as ReDoS).

## Beginner Example
```js
const hasDigit = /\d/;
console.log(hasDigit.test("abc123")); // true
```

## Intermediate Example
```js
const str = "Contact: john@example.com or jane@test.com";
const emails = str.match(/[\w.-]+@[\w.-]+\.\w+/g);
console.log(emails); // ["john@example.com", "jane@test.com"]
```

## Advanced Example
```js
const datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = "2026-07-23".match(datePattern);
console.log(match.groups.year); // "2026"
```

## Real World Example
```js
// Form validation: checking password strength requirements
const strongPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,}$/;
console.log(strongPassword.test("Passw0rd!")); // true
```

## Industry Example
```js
// Linters, code formatters, and build tools use regex extensively
// for tokenizing and pattern-matching source code during processing.
```

## Interview Questions
See full list → [interview.md](./interview.md#regex)
1. What is the difference between `.test()`, `.exec()`, and `String.prototype.match()`?
2. What does the `g` flag do differently when used with `.exec()` in a loop vs `.match()`?
3. What is a "capture group," and how do named capture groups improve readability?
4. What is "catastrophic backtracking," and why can it be a security risk (ReDoS)?
5. How would you escape special regex characters in a dynamically-built pattern?

## MCQs
See full list → [mcq.md](./mcq.md#regex)
1. Which method returns a boolean indicating whether a pattern matches? (a) `.exec()` (b) **`.test()`** (c) `.match()` (d) `.replace()` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#regex)
1. **(Easy)** Write a regex to check if a string contains only digits.
2. **(Medium)** Write a regex to extract all hashtags (`#word`) from a string of text.
3. **(Hard)** Write a regex-based password validator requiring at least one uppercase letter, one number, one special character, and a minimum length of 8.

## Assignments
- [ ] Explain, with an example, the difference between greedy (`.*`) and lazy (`.*?`) quantifiers.
- [ ] Write a regex that validates a simple email format and explain each part of the pattern.

## Mini Project
Build a small "Form Validator" that uses regex to validate email, phone number, and password strength fields, showing inline error messages for each.

## Common Mistakes
- Using `.exec()` in a loop with the `g` flag but forgetting it maintains internal state (`lastIndex`), causing infinite loops or skipped matches if misused.
- Writing overly complex regex without comments, making it unreadable and hard to maintain.
- Not escaping special characters (like `.`, `*`, `$`) when building a pattern dynamically from user input.

## Best Practices
- Add comments explaining non-obvious regex patterns, since they're notoriously hard to read later.
- Avoid deeply nested quantifiers on patterns processing untrusted input, to reduce ReDoS risk.

## Optimization Tips
- Prefer simpler, more specific patterns over broad catch-all ones — this reduces backtracking and improves performance on large strings.

## Summary
Regex provides a compact, powerful pattern-matching language built into JavaScript for validating, searching, and extracting text — extremely useful, but requiring care around readability and potential performance pitfalls like catastrophic backtracking.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#regex)

---
[← JSON](./json.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
