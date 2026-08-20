# Strings, Numbers & Dates — MCQs

> Owner: **Shubham Narware**

### Strings {#strings}
1. Strings in JS are: (a) Mutable (b) **Immutable** (c) Objects only (d) Arrays — *Correct: (b).*
2. `.slice(-3)` on a string returns: (a) The first 3 chars (b) **The last 3 chars** (c) An error (d) An empty string — *Correct: (b).*
3. `"hi".split("")` returns: (a) `["hi"]` (b) **`["h","i"]`** (c) `undefined` (d) An error — *Correct: (b).*

### Template Literals {#template-literals}
1. Template literals use: (a) Single quotes (b) Double quotes (c) **Backticks** (d) Brackets — *Correct: (c).*
2. `${}` can contain: (a) Only variable names (b) **Any valid expression** (c) Only numbers (d) Nothing dynamic — *Correct: (b).*
3. Template literals were introduced in: (a) ES5 (b) **ES2015** (c) ES2020 (d) ES3 — *Correct: (b).*

### Numbers {#numbers}
1. JS numbers use: (a) 32-bit integers (b) **64-bit floating point** (c) Arbitrary precision always (d) Strings — *Correct: (b).*
2. `0.1 + 0.2 === 0.3` evaluates to: (a) true (b) **false** (c) undefined (d) throws — *Correct: (b).*
3. `Number.isNaN(NaN)` returns: (a) false (b) **true** (c) undefined (d) throws — *Correct: (b).*

### Math {#math}
1. `Math.floor(4.9)` returns: (a) 5 (b) **4** (c) 4.9 (d) 0 — *Correct: (b).*
2. `Math.random()` can return exactly: (a) 1 (b) **A value approaching but never reaching 1** (c) Negative numbers (d) Only integers — *Correct: (b).*
3. `Math.max(3, 7, 2)` returns: (a) 3 (b) **7** (c) 2 (d) 12 — *Correct: (b).*

### Date {#date}
1. `new Date(2026, 0, 1)` represents month: (a) December (b) **January** (c) February (d) Invalid — *Correct: (b), months are 0-indexed.*
2. Dates are stored internally as: (a) Strings (b) **Milliseconds since epoch** (c) Objects with day/month/year fields only (d) Arrays — *Correct: (b).*
3. `Date.now()` returns: (a) A Date object (b) **The current timestamp in milliseconds** (c) A formatted string (d) undefined — *Correct: (b).*

### Intl {#intl}
1. `Intl.NumberFormat` is used for: (a) Dates (b) **Numbers/currency formatting** (c) String comparison (d) Arrays — *Correct: (b).*
2. `Intl.RelativeTimeFormat` produces output like: (a) "$5.00" (b) **"3 days ago"** (c) "07/10/2026" (d) "5" — *Correct: (b).*
3. Reusing an `Intl` formatter instance is recommended because: (a) It's required syntax (b) **Formatter creation has real setup overhead** (c) It changes the locale automatically (d) It's the only way it works — *Correct: (b).*

---
[← Section Home](./README.md)
