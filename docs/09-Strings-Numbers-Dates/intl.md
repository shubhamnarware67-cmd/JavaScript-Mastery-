# Intl

> Section: Strings, Numbers & Dates · Owner: **Shubham Narware**

## Definition
The `Intl` object provides built-in internationalization tools for locale-aware formatting of numbers, currencies, dates, and text comparisons — without needing external libraries for basic cases.

## History
Introduced in **ES5.1/ECMA-402** (a companion spec to ECMAScript), with steadily expanded capabilities (`Intl.RelativeTimeFormat`, `Intl.ListFormat`, etc.) added through later years.

## Why Intl Matters
Formatting numbers, currency, and dates correctly varies enormously by locale (decimal separators, currency symbols, date order) — `Intl` handles this correctly without manual string manipulation.

## Syntax
```js
new Intl.NumberFormat(locale, options).format(value);
new Intl.DateTimeFormat(locale, options).format(date);
```

## Types (common Intl constructors)
| Constructor | Purpose |
|---|---|
| `Intl.NumberFormat` | Format numbers/currencies/percentages |
| `Intl.DateTimeFormat` | Format dates/times per locale |
| `Intl.RelativeTimeFormat` | "3 days ago", "in 2 hours" style formatting |
| `Intl.Collator` | Locale-aware string comparison/sorting |

## Examples
```js
const price = 1234.5;
console.log(new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price));
// "$1,234.50"
console.log(new Intl.NumberFormat("en-IN").format(1234567));
// "12,34,567" — Indian digit grouping
```

## Memory Diagram
Not applicable — `Intl` formatters are stateless utility objects operating on the values passed to `.format()`.

## Flowchart
```
Need locale-aware formatting?
        │
Numbers/currency/percent? ──► Intl.NumberFormat
Dates/times? ──► Intl.DateTimeFormat
"X time ago" phrasing? ──► Intl.RelativeTimeFormat
Sorting strings correctly per locale? ──► Intl.Collator
```

## Internal Working
`Intl` formatters are created once with a locale and options, then reused via `.format(value)` — this two-step (create once, format many times) design is intentional for performance, since locale/formatting rule setup has real overhead.

## Beginner Example
```js
const num = 1000000;
console.log(new Intl.NumberFormat("en-US").format(num)); // "1,000,000"
```

## Intermediate Example
```js
// Currency formatting for different locales
const amount = 99.5;
console.log(new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)); // "$99.50"
console.log(new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(amount)); // "99,50 €"
```

## Advanced Example
```js
// Relative time formatting
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-1, "day"));  // "yesterday"
console.log(rtf.format(3, "day"));    // "in 3 days"
```

## Real World Example
```js
// Formatting a date consistently for a user's locale
const date = new Date(2026, 6, 10);
console.log(new Intl.DateTimeFormat("en-GB").format(date)); // "10/07/2026"
console.log(new Intl.DateTimeFormat("en-US").format(date)); // "7/10/2026"
```

## Industry Example
```js
// E-commerce sites use Intl.NumberFormat to correctly display prices
// and Intl.DateTimeFormat for order dates across international user bases,
// without needing separate manual formatting logic per country.
```

## Interview Questions
See full list → [interview.md](./interview.md#intl)
1. What problem does `Intl` solve that manual string formatting doesn't handle well?
2. How would you format a number as currency for a specific locale?
3. What does `Intl.RelativeTimeFormat` produce, and give an example?
4. Why is it recommended to create an `Intl` formatter once and reuse it via `.format()`?
5. How does `Intl.DateTimeFormat` output differ between `"en-US"` and `"en-GB"` locales?

## MCQs
See full list → [mcq.md](./mcq.md#intl)
1. Which `Intl` constructor formats currency values? (a) `Intl.Collator` (b) **`Intl.NumberFormat`** (c) `Intl.DateTimeFormat` (d) `Intl.ListFormat` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#intl)
1. **(Easy)** Format a number as USD currency using `Intl.NumberFormat`.
2. **(Medium)** Format the current date for both `"en-US"` and `"en-GB"` locales, noting the difference.
3. **(Hard)** Use `Intl.RelativeTimeFormat` to build a "time ago" utility function for a list of timestamped comments.

## Assignments
- [ ] Format the same number as currency for 3 different locales and compare the outputs.
- [ ] Explain, with an example, why locale-aware date formatting matters for international users.

## Mini Project
Build a small "Locale Price Display" component (conceptually) that formats a given price correctly for a selectable list of locales/currencies using `Intl.NumberFormat`.

## Common Mistakes
- Manually building currency/date strings instead of using `Intl`, missing correct locale conventions.
- Creating a new `Intl` formatter instance inside a hot loop instead of creating it once and reusing it.
- Assuming all locales format dates in the same order (day/month/year varies significantly).

## Best Practices
- Create `Intl` formatter instances once (e.g. at module load) and reuse them via `.format()` across many calls.
- Always specify an explicit locale rather than relying on defaults, for consistent behavior across environments.

## Optimization Tips
- Reusing formatter instances (rather than recreating them per call) avoids repeated locale-data setup overhead, meaningfully faster in formatting-heavy code (e.g. rendering large tables).

## Summary
The built-in `Intl` object provides robust, locale-aware formatting for numbers, currencies, dates, and relative times — avoiding the correctness pitfalls of manual string formatting across different international conventions.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#intl)

---
[← Date](./date.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
