# Nullish

> Section: Operators · Owner: **Shubham Narware**

## Definition
The nullish coalescing operator `??` returns its right-hand operand only when the left-hand operand is `null` or `undefined` — unlike `||`, it does not treat other falsy values (`0`, `""`, `false`, `NaN`) as "missing."

## History
Introduced in **ES2020**, directly addressing a long-standing pain point where `||` incorrectly overrode legitimate falsy values.

## Why Nullish Coalescing Matters
It provides precise "is this actually absent?" semantics, distinct from "is this falsy?" — critical for correct default-value handling with numbers and booleans.

## Syntax
```js
a ?? b
```

## Types
Not applicable — single operator (its companion assignment form `??=` is covered in Assignment).

## Examples
```js
console.log(0 ?? "default");     // 0        — 0 is NOT null/undefined
console.log(0 || "default");      // "default" — 0 IS falsy, || overrides it (the bug ?? fixes)

console.log(null ?? "default");   // "default"
console.log(undefined ?? "default"); // "default"
console.log("" ?? "default");      // ""       — "" is NOT null/undefined
```

## Memory Diagram
Not applicable — nullish coalescing evaluates to a value, no persistent memory structure.

## Flowchart
```
a ?? b
    │
Is `a` strictly null or undefined?
    │                    │
   Yes                  No
    │                    │
Return `b`           Return `a` (even if a is 0, "", or false)
```

## Internal Working
`??` checks specifically for `null`/`undefined` using an internal comparison equivalent to `a === null || a === undefined` — it does NOT run the general "truthy/falsy" check that `||` uses.

## Beginner Example
```js
let userAge = 0;
console.log(userAge ?? 18); // 0 — correctly preserves the real age of 0
```

## Intermediate Example
```js
function getVolume(userSetting) {
  return userSetting ?? 50; // only falls back to 50 if userSetting is null/undefined
}
console.log(getVolume(0));   // 0 (muted, a valid setting!)
console.log(getVolume());     // 50 (no setting provided)
```

## Advanced Example
```js
// Chaining ?? with optional chaining for safe nested defaults
const city = user?.address?.city ?? "Unknown City";
```

## Real World Example
```js
// API response handling where 0 or false are valid, meaningful values
function renderStock(product) {
  const stock = product.stockCount ?? "Unavailable";
  return `Stock: ${stock}`;
}
console.log(renderStock({ stockCount: 0 })); // "Stock: 0" — correctly shows zero stock
```

## Industry Example
```js
// Config initialization avoiding the classic ||-with-falsy-defaults bug
function initSettings(userSettings = {}) {
  return {
    volume: userSettings.volume ?? 50,
    notifications: userSettings.notifications ?? true,
  };
}
console.log(initSettings({ volume: 0, notifications: false }));
// { volume: 0, notifications: false } — both correctly preserved
```

## Interview Questions
See full list → [interview.md](./interview.md#nullish)
1. What's the core difference between `??` and `||`?
2. Why does `0 ?? "default"` return `0` but `0 || "default"` returns `"default"`?
3. Which ECMAScript version introduced `??`?
4. Give a real scenario where using `||` instead of `??` would introduce a bug.
5. Can `??` be combined directly with `&&`/`||` without parentheses? (No — mixing requires explicit parentheses, it's a SyntaxError otherwise.)

## MCQs
See full list → [mcq.md](./mcq.md#nullish)
1. `false ?? "default"` evaluates to: (a) "default" (b) **false** (c) true (d) undefined → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#nullish)
1. **(Easy)** Compare `0 ?? 10` vs `0 || 10` and explain the difference.
2. **(Medium)** Write a `getSetting(value, fallback)` function using `??` that correctly preserves `false`/`0` values.
3. **(Hard)** Refactor a config-initialization function that incorrectly used `||` for defaults, fixing the associated bug with `??`.

## Assignments
- [ ] List 3 real-world values (`0`, `false`, `""`) where `||` defaulting would cause bugs, and show `??` fixing each.
- [ ] Explain why mixing `??` directly with `&&`/`||` without parentheses is a syntax error.

## Mini Project
Build a small settings/config initializer that correctly uses `??`/`??=` throughout to preserve legitimate falsy user values (volume `0`, `notifications: false`, etc.).

## Common Mistakes
- Using `||` for defaults when the value could legitimately be `0`, `""`, or `false`.
- Assuming `??` behaves identically to `||` for all falsy values (it doesn't — only `null`/`undefined` trigger the fallback).

## Best Practices
- Default to `??` for fallback/default-value logic unless you specifically want *any* falsy value to trigger the fallback.
- Use parentheses when combining `??` with `&&`/`||` in the same expression, as required by the language.

## Optimization Tips
- No performance difference from `||` — the benefit is entirely about correctness for numeric/boolean default values.

## Summary
`??` fixes a long-standing default-value bug in JavaScript by falling back only on `null`/`undefined`, correctly preserving legitimate falsy values like `0`, `""`, and `false` that `||` would incorrectly override.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#nullish)

---
[← Ternary](./ternary.md) | [Section Home](./README.md) | [Optional Chaining →](./optional-chaining.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
