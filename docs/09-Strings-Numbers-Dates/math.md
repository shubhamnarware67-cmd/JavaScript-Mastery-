# Math

> Section: Strings, Numbers & Dates · Owner: **Shubham Narware**

## Definition
The built-in `Math` object provides properties and methods for mathematical constants and operations (rounding, power, trigonometry, random numbers) that aren't available as operators.

## History
Present since JavaScript's creation in 1995 as a built-in global object (not a constructor — you never write `new Math()`).

## Why Math Matters
Common numeric tasks (rounding, min/max, random values, powers/roots) rely on `Math`'s static methods rather than operators or prototype methods.

## Syntax
```js
Math.round(4.5);
Math.floor(4.9);
Math.ceil(4.1);
Math.random();
Math.max(1, 5, 3);
```

## Types (common methods)
| Method | Purpose |
|---|---|
| `Math.round()` | Round to nearest integer |
| `Math.floor()` | Round down |
| `Math.ceil()` | Round up |
| `Math.random()` | Random float between 0 (inclusive) and 1 (exclusive) |
| `Math.max()`/`Math.min()` | Largest/smallest of given values |
| `Math.pow()`/`Math.sqrt()` | Power/square root |
| `Math.abs()` | Absolute value |

## Examples
```js
console.log(Math.round(4.5)); // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.ceil(4.1));   // 5
console.log(Math.max(3, 7, 2)); // 7
```

## Memory Diagram
Not applicable — `Math` is a static utility object, no instance state involved.

## Flowchart
```
Need a random number in a range [min, max]?
        │
Math.random() gives [0, 1)
        │
Scale: Math.floor(Math.random() * (max - min + 1)) + min
```

## Internal Working
`Math` is a single global object (not instantiable) whose methods are pure functions operating purely on their arguments — `Math.random()` specifically uses an internal pseudo-random number generator, not suitable for cryptographic purposes.

## Beginner Example
```js
console.log(Math.abs(-5));   // 5
console.log(Math.sqrt(16));   // 4
```

## Intermediate Example
```js
// Generating a random integer within a range
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 6)); // simulates a dice roll (1-6)
```

## Advanced Example
```js
// Clamping a value between a min and max
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
console.log(clamp(150, 0, 100)); // 100
console.log(clamp(-10, 0, 100));  // 0
```

## Real World Example
```js
// Calculating percentage progress, rounded for display
function progressPercent(current, total) {
  return Math.round((current / total) * 100);
}
console.log(progressPercent(3, 7)); // 43
```

## Industry Example
```js
// Games and simulations rely heavily on Math.random() for
// procedural generation, damage rolls, and shuffling logic.
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5); // simple (imperfect) shuffle
}
```

## Interview Questions
See full list → [interview.md](./interview.md#math)
1. What's the difference between `Math.round()`, `Math.floor()`, and `Math.ceil()`?
2. What range of values does `Math.random()` produce?
3. How would you generate a random integer within a specific range?
4. Is `Math.random()` suitable for cryptographic/security purposes? Why or why not?
5. How would you clamp a value between a minimum and maximum using `Math`?

## MCQs
See full list → [mcq.md](./mcq.md#math)
1. `Math.random()` returns a value in the range: (a) [0, 1] inclusive (b) **[0, 1) — 0 inclusive, 1 exclusive** (c) [1, 10] (d) Any integer → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#math)
1. **(Easy)** Write a function that rounds a number to 2 decimal places using `Math`.
2. **(Medium)** Write a `randomInt(min, max)` function producing an inclusive random integer range.
3. **(Hard)** Write a `clamp(value, min, max)` function and use it to keep a game character's health between 0 and 100.

## Assignments
- [ ] Explain, with examples, the difference between `Math.round()`, `Math.floor()`, and `Math.ceil()` for both positive and negative numbers.
- [ ] Explain why `Math.random()` should never be used for generating security tokens.

## Mini Project
Build a simple "Dice Roller" simulator using `Math.random()` and `Math.floor()`, supporting configurable dice sides (6, 20, etc).

## Common Mistakes
- Assuming `Math.random()` can return exactly `1`.
- Off-by-one errors when scaling `Math.random()` into a custom integer range.
- Using `Math.random()` for security-sensitive random values (use the Web Crypto API's `crypto.getRandomValues()` instead).

## Best Practices
- Use `Math.floor(Math.random() * (max - min + 1)) + min` as the standard pattern for inclusive random integer ranges.
- Use `crypto.getRandomValues()` (not `Math.random()`) for anything security-related (tokens, passwords).

## Optimization Tips
- `Math` methods are highly optimized natively by JS engines — no need to hand-roll alternatives for basic rounding/min/max operations.

## Summary
The `Math` object provides essential numeric utilities (rounding, random number generation, min/max, powers/roots) used constantly across calculations, games, and UI logic — understanding `Math.random()`'s range and limitations avoids common off-by-one and security mistakes.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#math)

---
[← Numbers](./numbers.md) | [Section Home](./README.md) | [Date →](./date.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
