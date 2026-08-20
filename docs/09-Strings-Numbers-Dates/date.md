# Date

> Section: Strings, Numbers & Dates · Owner: **Shubham Narware**

## Definition
The built-in `Date` object represents a single moment in time, storing it internally as milliseconds since the Unix epoch (January 1, 1970 UTC), with methods to read/manipulate year, month, day, and time components.

## History
Present since JavaScript's creation in 1995, largely unchanged in its core API (widely criticized as awkward) — the newer, more ergonomic **Temporal** API has been in development for years as a potential eventual replacement.

## Why Date Matters
Nearly every application deals with dates and times (timestamps, scheduling, formatting) — despite its awkward API, `Date` remains the standard tool until `Temporal` becomes widely available.

## Syntax
```js
const now = new Date();
const specific = new Date(2026, 0, 15); // Jan 15, 2026 (month is 0-indexed!)
const fromString = new Date("2026-01-15");
```

## Types (creation forms)
| Form | Example |
|---|---|
| Current date/time | `new Date()` |
| Specific components | `new Date(year, month, day, hours, ...)` |
| From a string | `new Date("2026-01-15")` |
| From a timestamp | `new Date(1700000000000)` |

## Examples
```js
const date = new Date(2026, 6, 10); // July 10, 2026 (month 6 = July, 0-indexed!)
console.log(date.getFullYear()); // 2026
console.log(date.getMonth());     // 6
console.log(date.getDate());       // 10
```

## Memory Diagram
```
Internally, a Date object stores a SINGLE number:
milliseconds since Jan 1, 1970 UTC (the Unix epoch)
        │
All getter methods (getFullYear, getMonth, etc.) derive
their result from that one internal timestamp value.
```

## Flowchart
```
Need to work with a date?
        │
Create a Date object (now, from components, or from a string/timestamp)
        │
Need to read parts? ──► getFullYear()/getMonth()/getDate()/getHours()...
Need to compare? ──► Date objects can be compared via < > or by .getTime()
Need to format for display? ──► toLocaleDateString() or a library (Intl, date-fns)
```

## Internal Working
A `Date` instance is fundamentally just a wrapper around a single numeric millisecond timestamp — arithmetic and comparisons between dates ultimately reduce to comparing/operating on that underlying number, accessible directly via `.getTime()`.

## Beginner Example
```js
const today = new Date();
console.log(today.getFullYear(), today.getMonth() + 1, today.getDate());
// Add +1 to getMonth() since months are 0-indexed (0 = January)
```

## Intermediate Example
```js
// Comparing two dates
const date1 = new Date(2026, 0, 1);
const date2 = new Date(2026, 5, 1);
console.log(date1 < date2); // true
console.log(date2.getTime() - date1.getTime()); // difference in milliseconds
```

## Advanced Example
```js
// Calculating the difference in days between two dates
function daysBetween(d1, d2) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round(Math.abs(d2 - d1) / msPerDay);
}
console.log(daysBetween(new Date(2026, 0, 1), new Date(2026, 0, 15))); // 14
```

## Real World Example
```js
// Formatting a date for user-friendly display
const date = new Date();
console.log(date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }));
// "July 10, 2026"
```

## Industry Example
```js
// Production apps commonly use date libraries (date-fns, Day.js) to avoid
// Date's awkward API and timezone pitfalls for anything beyond simple cases.
```

## Interview Questions
See full list → [interview.md](./interview.md#date)
1. What does a `Date` object store internally?
2. Why is `getMonth()` 0-indexed, and why does this commonly trip people up?
3. How would you calculate the number of days between two dates?
4. How do you get the current Unix timestamp (milliseconds since epoch) in JavaScript?
5. Why do many production codebases use a date library instead of raw `Date`?

## MCQs
See full list → [mcq.md](./mcq.md#date)
1. `new Date(2026, 0, 1)` represents: (a) January 1, 2026 (b) **January 1, 2026** (c) December 1, 2026 (d) An invalid date → **Answer: (a)/(b) — month 0 = January.**

## Coding Questions
See full list → [practice.md](./practice.md#date)
1. **(Easy)** Create a `Date` for a specific day and log its year, month (human-readable), and day.
2. **(Medium)** Write a function computing the number of days between two given dates.
3. **(Hard)** Write a function that formats a date as "X days ago" / "in X days" relative to now.

## Assignments
- [ ] Explain, with an example, why `getMonth()` returning `0` for January is a common source of bugs.
- [ ] Compare two dates using both direct comparison operators and `.getTime()`.

## Mini Project
Build a small "Days Until Event" countdown calculator: given a target date, compute and display how many days remain until it (or how many have passed).

## Common Mistakes
- Forgetting `getMonth()` is 0-indexed (January = 0, December = 11).
- Comparing `Date` objects with `===` (compares references, not values) instead of `.getTime()` or `<`/`>`.
- Ignoring timezone differences when parsing date-only strings, leading to off-by-one-day bugs.

## Best Practices
- Add 1 to `getMonth()` when displaying a human-readable month number.
- Use `.getTime()` (or direct `<`/`>` comparisons) rather than `===` when comparing dates for equality/ordering.
- Consider a well-tested date library (date-fns, Day.js) for anything beyond simple date arithmetic, especially involving timezones.

## Optimization Tips
- Cache `new Date()` calls when you need the "current time" consistently within a single operation, rather than calling it repeatedly (each call captures a potentially different instant).

## Summary
`Date` represents a moment in time as milliseconds since the Unix epoch — powerful but notoriously awkward (0-indexed months, no built-in formatting), which is why many real-world codebases layer a dedicated date library on top of it.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#date)

---
[← Math](./math.md) | [Section Home](./README.md) | [Intl →](./intl.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
