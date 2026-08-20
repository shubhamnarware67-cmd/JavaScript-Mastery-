# Strings, Numbers & Dates — Interview Questions

> Owner: **Shubham Narware**

### Strings {#strings}
1. **Mutable or immutable?** — Immutable; every "modifying" method returns a new string.
2. **`.slice()` vs `.substring()`?** — `.slice()` supports negative indices (from the end); `.substring()` treats negatives as 0.
3. **2 ways to check for a substring?** — `.includes()` or `.indexOf(x) !== -1`.
4. **What does `.split("")` do?** — Splits the string into an array of individual characters.
5. **Why doesn't `toUpperCase()` change the original?** — Strings are immutable; the method returns a brand-new string.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Template Literals {#template-literals}
1. **Problem they solve?** — Verbose, error-prone `+` concatenation, especially for multi-line or variable-heavy strings.
2. **Multi-line support?** — Literal newlines inside backticks work directly, no `\n` escapes needed.
3. **Function calls inside `${}`?** — Yes, any valid expression, including function calls, is allowed.
4. **What is a tagged template?** — A function that receives the literal's string parts and interpolated values separately, enabling custom processing.
5. **ES version introduced?** — ES2015.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Numbers {#numbers}
1. **Internal representation?** — 64-bit IEEE-754 floating point for all numbers.
2. **Why `0.1+0.2 !== 0.3`?** — Certain decimal fractions can't be represented exactly in binary floating point.
3. **`Number.MAX_SAFE_INTEGER` and beyond?** — 2^53-1; beyond this, integer precision can silently be lost.
4. **`parseInt()` vs `parseFloat()`?** — `parseInt()` parses to a whole number (with optional radix); `parseFloat()` parses including decimal points.
5. **Safely checking a parsed value?** — Use `Number.isNaN()` after conversion, or `Number.isInteger()`/similar checks as appropriate.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Math {#math}
1. **`round` vs `floor` vs `ceil`?** — Round to nearest, always round down, always round up respectively.
2. **`Math.random()` range?** — `[0, 1)` — 0 inclusive, 1 exclusive.
3. **Generating a random int in a range?** — `Math.floor(Math.random() * (max-min+1)) + min`.
4. **Suitable for security?** — No — use `crypto.getRandomValues()` for cryptographic randomness.
5. **Clamping a value?** — `Math.min(Math.max(value, min), max)`.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Date {#date}
1. **What does a Date store internally?** — A single millisecond timestamp since the Unix epoch (Jan 1 1970 UTC).
2. **Why is `getMonth()` 0-indexed?** — A long-standing (widely criticized) design choice from JS's original Date API.
3. **Computing days between two dates?** — Subtract their `.getTime()` values, divide by milliseconds-per-day.
4. **Getting the current Unix timestamp?** — `Date.now()` or `new Date().getTime()`.
5. **Why use a date library?** — `Date`'s API is awkward and error-prone, especially for timezones and formatting.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Intl {#intl}
1. **Problem `Intl` solves?** — Correct locale-aware formatting of numbers, currency, and dates without manual string building.
2. **Formatting currency for a locale?** — `new Intl.NumberFormat(locale, {style:"currency", currency:"USD"}).format(value)`.
3. **What does `Intl.RelativeTimeFormat` produce?** — Human-readable relative phrases like "yesterday" or "in 3 days".
4. **Why reuse a formatter instance?** — Creating one has real setup overhead; reusing via `.format()` avoids repeating that cost.
5. **`en-US` vs `en-GB` date output difference?** — Different date component ordering (month/day/year vs day/month/year).
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
