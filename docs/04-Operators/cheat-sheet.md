# Operators — Cheat Sheet

> Owner: **Shubham Narware**

### Categories
| Category | Operators |
|---|---|
| Arithmetic | `+ - * / % **` |
| Comparison | `== === != !== > < >= <=` |
| Logical | `&& \|\| !` |
| Bitwise | `& \| ^ ~ << >> >>>` |
| Assignment | `= += -= *= /= %= **= &&= \|\|= ??=` |
| Ternary | `condition ? a : b` |
| Nullish/Optional | `?? ?.` |

### Key Rules
- Always prefer `===`/`!==` over `==`/`!=`.
- `+` triggers string concatenation if either operand is a string; other arithmetic ops coerce to numbers.
- `&&` returns first falsy (or last value); `||` returns first truthy (or last value).
- `??` falls back only on `null`/`undefined` — use instead of `||` when `0`/`""`/`false` are valid values.
- `?.` safely short-circuits an entire property/method chain to `undefined` on nullish values.
- `0.1 + 0.2 !== 0.3` exactly, due to IEEE-754 floating point — round or use epsilon comparisons.
- `NaN === NaN` is `false` — use `Number.isNaN()`.

### Quick Reference
```js
a ?? b       // b only if a is null/undefined
a || b       // b if a is ANY falsy value
a?.b         // safe property access
a?.b?.()     // safe method call
a ??= b      // a = a ?? b
a ||= b      // a = a || b
a &&= b      // a = a && b
```

---
[← Section Home](./README.md)
