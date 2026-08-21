# Logical

> Section: Operators · Owner: **Shubham Narware**

## Definition
Logical operators combine or invert boolean expressions: AND (`&&`), OR (`||`), and NOT (`!`) — with `&&`/`||` also returning actual operand values via short-circuiting, not just `true`/`false`.

## History
Present since 1995; logical assignment shorthands (`&&=`, `||=`, `??=`) were added in **ES2021**.

## Why Logical Operators Matter
They're used constantly for conditionals, default values, and guarding against `null`/`undefined` access.

## Syntax
```js
a && b
a || b
!a
a &&= b
a ||= b
```

## Types
| Operator | Meaning | Returns |
|---|---|---|
| `&&` | AND | First falsy operand, or the last operand if all truthy |
| `\|\|` | OR | First truthy operand, or the last operand if all falsy |
| `!` | NOT | Boolean negation |

## Examples
```js
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);          // false

console.log(0 && "hello");   // 0 (short-circuits, returns first falsy)
console.log("" || "default"); // "default" (short-circuits, returns first truthy)
```

## Memory Diagram
Not applicable — logical operators evaluate expressions, no persistent memory structure.

## Flowchart
```
a && b
    │
Is `a` falsy?
    │                  │
   Yes                No
    │                  │
Return `a`         Evaluate and return `b`
(never evaluates b)
```

## Internal Working
`&&` and `||` use **short-circuit evaluation**: `&&` stops and returns immediately if the left operand is falsy (never evaluating the right); `||` stops and returns immediately if the left operand is truthy.

## Beginner Example
```js
let isLoggedIn = true;
let hasAccess = true;
console.log(isLoggedIn && hasAccess); // true
```

## Intermediate Example
```js
// Default value pattern (pre-ES2020, still common)
function greet(name) {
  name = name || "Guest";
  return `Hello, ${name}`;
}
greet("");     // "Hello, Guest" — "" is falsy, so default kicks in (can be a gotcha!)
```

## Advanced Example
```js
// Short-circuiting to guard against undefined access (pre-optional-chaining pattern)
const city = user && user.address && user.address.city;

// Logical assignment (ES2021) shorthand
let config = {};
config.debug ??= false; // only assigns if config.debug is null/undefined
console.log(config.debug); // false
```

## Real World Example
```js
// Conditionally rendering a component only if data has loaded
const showContent = isLoaded && !hasError && data.length > 0;
```

## Industry Example
```js
// Feature flag pattern combining logical AND/OR
const shouldShowFeature = (featureFlags.newUI || user.isBetaTester) && !user.hasOptedOut;
```

## Interview Questions
See full list → [interview.md](./interview.md#logical)
1. What does `&&` return if the left operand is falsy?
2. What does `||` return if the left operand is truthy?
3. Why is `name || "Guest"` risky if `name` could legitimately be `""` or `0`?
4. What do `&&=`, `||=`, and `??=` do?
5. How does short-circuit evaluation affect function calls used as operands?

## MCQs
See full list → [mcq.md](./mcq.md#logical)
1. `0 && "hello"` evaluates to: (a) "hello" (b) **0** (c) true (d) false → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#logical)
1. **(Easy)** Predict the results of 4 `&&`/`||` expressions with mixed truthy/falsy values.
2. **(Medium)** Rewrite a `user && user.address && user.address.city` chain using optional chaining instead.
3. **(Hard)** Explain a case where `||` for defaults causes a bug that `??` would fix, with a concrete example.

## Assignments
- [ ] Write 3 examples where `&&`/`||` short-circuiting avoids unnecessary function calls.
- [ ] Explain the difference between `||=` and `??=` with a code example.

## Mini Project
Build a small feature-flag checker function combining `&&`, `||`, and `??=` to decide whether to show a UI banner based on multiple conditions.

## Common Mistakes
- Using `||` for defaults when `0`, `""`, or `false` are valid intended values (silently overridden).
- Assuming `&&`/`||` always return `true`/`false` instead of the actual operand values.
- Forgetting short-circuiting means the right-hand side might never execute (relevant if it has side effects).

## Best Practices
- Use `??`/`??=` instead of `||`/`||=` specifically when `0`, `""`, or `false` should be considered valid values.
- Leverage short-circuiting intentionally for guard clauses, but keep expressions readable.

## Optimization Tips
- Put cheaper/more-likely-to-fail conditions first in `&&` chains, and cheaper/more-likely-to-succeed conditions first in `||` chains, to maximize short-circuit savings.

## Summary
`&&`, `||`, and `!` combine and invert boolean logic, with `&&`/`||` short-circuiting and returning actual operand values rather than pure booleans — a subtlety that both enables useful patterns and causes classic bugs when `0`/`""`/`false` are valid data.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#logical)

---
[← Comparison](./comparison.md) | [Section Home](./README.md) | [Bitwise →](./bitwise.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
