# Optional Chaining

> Section: Operators · Owner: **Shubham Narware**

## Definition
The optional chaining operator `?.` safely accesses deeply nested object properties, returning `undefined` instead of throwing if any part of the chain is `null`/`undefined`.

## History
Introduced in **ES2020**, alongside nullish coalescing (`??`), replacing verbose manual `&&` guard chains.

## Why Optional Chaining Matters
Before `?.`, accessing a deeply nested property required verbose manual checks at every level to avoid a `TypeError`; `?.` makes this both shorter and less error-prone.

## Syntax
```js
obj?.prop
obj?.[expr]
obj?.method?.()
```

## Types
| Form | Use case |
|---|---|
| `obj?.prop` | Safe property access |
| `obj?.[key]` | Safe dynamic/bracket property access |
| `obj?.method?.()` | Safe method call (only calls if method exists) |

## Examples
```js
const user = { profile: null };
console.log(user.profile?.name); // undefined — no TypeError thrown
console.log(user?.profile?.address?.city); // undefined — chain stops safely at `profile`
```

## Memory Diagram
Not applicable — optional chaining evaluates to a value, no persistent memory structure.

## Flowchart
```
obj?.prop
    │
Is `obj` null or undefined?
    │                    │
   Yes                  No
    │                    │
Return undefined     Access `obj.prop` normally
(stop immediately,     (continues to next `?.` in the chain if present)
never throws)
```

## Internal Working
At each `?.` step, the engine checks whether the value to the left is `null`/`undefined`; if so, evaluation of the **entire remaining chain** short-circuits immediately to `undefined`, without attempting further property access or throwing.

## Beginner Example
```js
const car = { brand: "Toyota" };
console.log(car?.brand);   // "Toyota"
console.log(car?.engine);   // undefined — no error, engine doesn't exist
```

## Intermediate Example
```js
// Pre-ES2020 verbose guard chain
const city1 = user && user.address && user.address.city;

// Modern equivalent with optional chaining
const city2 = user?.address?.city;
```

## Advanced Example
```js
// Optional chaining with method calls — only calls if the method actually exists
const api = {
  fetchData() { return "data loaded"; }
};
console.log(api.fetchData?.()); // "data loaded"
console.log(api.missingMethod?.()); // undefined — safely skipped, no TypeError
```

## Real World Example
```js
// Safely reading a possibly-missing nested API response field
function getAuthorName(post) {
  return post?.author?.name ?? "Unknown Author";
}
console.log(getAuthorName({})); // "Unknown Author"
```

## Industry Example
```js
// Combining optional chaining with array access for API response parsing
const firstComment = response?.data?.comments?.[0]?.text ?? "No comments yet";
```

## Interview Questions
See full list → [interview.md](./interview.md#optional-chaining)
1. What problem does `?.` solve that plain dot notation doesn't?
2. How does `?.` behave differently from manually chaining `&&` checks?
3. Can `?.` be used for method calls? Give an example.
4. What does the entire chain evaluate to if any link is `null`/`undefined`?
5. Why is `?.` often paired with `??` in real code?

## MCQs
See full list → [mcq.md](./mcq.md#optional-chaining)
1. `const a = {}; console.log(a.b?.c);` logs: (a) throws TypeError (b) **undefined** (c) null (d) 0 → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#optional-chaining)
1. **(Easy)** Use `?.` to safely access a possibly-missing nested property, avoiding a `TypeError`.
2. **(Medium)** Rewrite a verbose `a && a.b && a.b.c` guard chain using `?.`.
3. **(Hard)** Combine `?.` with `??` and array bracket access to safely read a deeply nested API field with a fallback default.

## Assignments
- [ ] Rewrite 3 manual `&&` guard chains using `?.`.
- [ ] Explain, with an example, how `?.method?.()` avoids errors when a method might not exist.

## Mini Project
Build a small API-response parser that uses `?.` and `??` together to safely extract several nested fields (author name, comment count, first tag) with sensible fallback defaults.

## Common Mistakes
- Using `?.` on the LEFT side of an assignment (`obj?.prop = value` is invalid — optional chaining is read-only in that position).
- Forgetting `?.()` (with parentheses) is needed specifically for safely calling a possibly-missing method, not just `?.` alone.

## Best Practices
- Pair `?.` with `??` to both safely access nested data AND provide a meaningful fallback in one expression.
- Don't overuse `?.` everywhere defensively — it can silently mask genuine bugs (typos, wrong data shape) if applied too liberally.

## Optimization Tips
- `?.` short-circuits immediately upon hitting `null`/`undefined`, avoiding unnecessary further property lookups — a minor efficiency benefit alongside its main safety purpose.

## Summary
Optional chaining (`?.`) safely navigates potentially-missing nested properties or method calls, short-circuiting to `undefined` instead of throwing — commonly paired with `??` for full safe-access-with-default patterns.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#optional-chaining)

---
[← Nullish](./nullish.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
