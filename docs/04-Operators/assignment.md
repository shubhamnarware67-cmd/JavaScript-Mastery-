# Assignment

> Section: Operators · Owner: **Shubham Narware**

## Definition
Assignment operators assign a value to a variable, optionally combining the assignment with an arithmetic, logical, or nullish operation (compound assignment).

## History
`=`, `+=`, `-=`, `*=`, `/=` existed since 1995; logical assignment shorthands `&&=`, `||=`, `??=` were added in **ES2021**.

## Why Assignment Operators Matter
Compound assignment operators (`+=`, `||=`, etc.) make common update patterns shorter and clearer than writing them out in full.

## Syntax
```js
a = b
a += b   // a = a + b
a -= b   // a = a - b
a *= b   // a = a * b
a /= b   // a = a / b
a %= b   // a = a % b
a **= b  // a = a ** b
a &&= b  // a = a && b
a ||= b  // a = a || b
a ??= b  // a = a ?? b
```

## Types
| Category | Examples |
|---|---|
| Basic | `=` |
| Arithmetic compound | `+= -= *= /= %= **=` |
| Logical compound (ES2021) | `&&= \|\|= ??=` |

## Examples
```js
let x = 5;
x += 3; // 8
x -= 2; // 6
x *= 2; // 12
x /= 4; // 3
```

## Memory Diagram
```
let count = 0;
count += 5;

Stack
┌───────────────┐
│ count → 0 → 5    │  (same binding, value updated in place)
└───────────────┘
```

## Flowchart
```
a OP= b
    │
Equivalent to: a = a OP b
    │
Evaluate `a OP b` first, then assign the result back to `a`
```

## Internal Working
Compound assignment operators are pure syntax sugar — `a += b` is parsed and executed exactly as `a = a + b`, with no different runtime behavior beyond conciseness (and, for the logical variants, short-circuit-aware conditional assignment).

## Beginner Example
```js
let score = 10;
score += 5;
console.log(score); // 15
```

## Intermediate Example
```js
// Logical assignment shorthand (ES2021)
let settings = { theme: null };
settings.theme ??= "dark"; // only assigns if theme is null/undefined
console.log(settings.theme); // "dark"
```

## Advanced Example
```js
// &&= only assigns if the left side is currently truthy
let user = { isActive: true, name: "Shubham" };
user.name &&= user.name.toUpperCase();
console.log(user.name); // "SHUBHAM"

let inactiveUser = { isActive: false, name: "Guest" };
inactiveUser.name &&= inactiveUser.name.toUpperCase();
// name is falsy-checked via isActive being unrelated; example illustrates &&= behavior directly on name
```

## Real World Example
```js
// Accumulating a running total in a loop
let total = 0;
const prices = [10, 20, 30];
for (const price of prices) {
  total += price;
}
console.log(total); // 60
```

## Industry Example
```js
// Config objects commonly use ??= to apply defaults without overwriting explicit falsy values
function initConfig(config = {}) {
  config.retries ??= 3;
  config.timeout ??= 5000;
  return config;
}
console.log(initConfig({ retries: 0 })); // { retries: 0, timeout: 5000 } — retries: 0 preserved!
```

## Interview Questions
See full list → [interview.md](./interview.md#assignment)
1. What does `a += b` expand to internally?
2. What's the difference between `||=` and `??=`?
3. Why would `config.retries ??= 3` preserve `retries: 0` but `config.retries ||= 3` would not?
4. When were logical assignment operators introduced?
5. Are compound assignment operators faster than writing the expanded form? Why or why not?

## MCQs
See full list → [mcq.md](./mcq.md#assignment)
1. `x = 5; x **= 2;` results in `x` being: (a) 7 (b) 10 (c) **25** (d) 32 → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#assignment)
1. **(Easy)** Use `+=`, `-=`, and `*=` to modify a variable across 3 steps and log each result.
2. **(Medium)** Use `??=` to apply default values to a config object without overwriting valid falsy values.
3. **(Hard)** Explain and demonstrate why `||=` would incorrectly override a legitimately falsy config value where `??=` would not.

## Assignments
- [ ] Rewrite 3 `a = a OP b` statements using their compound assignment shorthand.
- [ ] Demonstrate the `retries: 0` preservation difference between `||=` and `??=`.

## Mini Project
Build a small `initConfig()` utility function that applies sensible defaults to a settings object using `??=`, correctly preserving intentional falsy values like `0` or `false`.

## Common Mistakes
- Using `||=` for defaults when `0`/`false`/`""` might be legitimate configured values.
- Forgetting compound assignment still requires the variable to already exist and be assignable (not `const`).

## Best Practices
- Prefer `??=` over `||=` specifically for default-value assignment patterns involving numbers or booleans.
- Use compound assignment for conciseness, but keep complex right-hand expressions readable.

## Optimization Tips
- Compound assignment offers no runtime performance benefit over the expanded form — its value is purely readability and conciseness.

## Summary
Assignment operators update a variable's value, with compound forms (`+=`, `??=`, etc.) offering concise shorthand for "update based on current value." The ES2021 logical assignment operators (`&&=`, `||=`, `??=`) are especially useful for safe default-value patterns.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#assignment)

---
[← Bitwise](./bitwise.md) | [Section Home](./README.md) | [Ternary →](./ternary.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
