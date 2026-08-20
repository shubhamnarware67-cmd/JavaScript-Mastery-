# Strings, Numbers & Dates — Cheat Sheet

> Owner: **Shubham Narware**

### Strings
```js
str.length; str.toUpperCase(); str.toLowerCase();
str.slice(a,b); str.includes(x); str.split(sep);
str.trim(); str.replace(a,b); str.replaceAll(a,b);
```
- Strings are immutable — methods always return NEW strings.

### Template Literals
```js
`Hello, ${name}! Total: ${price * qty}`
```
- Backticks required; supports multi-line and any expression inside `${}`.

### Numbers
- All numbers use 64-bit floating point (IEEE-754) — no separate int type.
- `0.1 + 0.2 !== 0.3` — use `.toFixed()` or epsilon comparison.
- `Number.isNaN()`, `Number.isInteger()` — safer than global `isNaN()`.
- `Number.MAX_SAFE_INTEGER` = 2^53 - 1.

### Math
```js
Math.round(x); Math.floor(x); Math.ceil(x);
Math.random();  // [0, 1)
Math.max(...); Math.min(...);
Math.floor(Math.random() * (max-min+1)) + min; // random int in [min,max]
```

### Date
```js
new Date();                 // now
new Date(2026, 0, 1);         // Jan 1 2026 (month 0-indexed!)
date.getFullYear(); date.getMonth(); date.getDate();
date.getTime();               // ms since epoch
```

### Intl
```js
new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(99.5); // "$99.50"
new Intl.DateTimeFormat("en-GB").format(date);
new Intl.RelativeTimeFormat("en").format(-1, "day"); // "yesterday"
```

---
[← Section Home](./README.md)
