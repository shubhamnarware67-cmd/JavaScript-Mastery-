# Primitive

> Section: Variables & Data Types · Owner: **Shubham Narware**

## Definition
Primitive types are immutable values with **value semantics** — Number, String, Boolean, Undefined, Null, Symbol, and BigInt. Copying a primitive copies its actual value, not a reference.

## History
The first 5 primitives (Number, String, Boolean, Undefined, Null) existed since 1995; **Symbol** (ES2015) and **BigInt** (ES2020) were added later for unique identifiers and arbitrary-precision integers respectively.

## Why Primitives Matter
Understanding that primitives are copied by value (unlike objects, copied by reference) explains why changing one variable never affects another that was assigned from it.

## Syntax
```js
let a = 10;
let b = "text";
let c = true;
let d;
let e = null;
let f = Symbol("id");
let g = 10n;
```

## Types (the 7 primitives)
| Type | Immutable? | Example |
|---|---|---|
| Number | ✅ | `42`, `NaN`, `Infinity` |
| String | ✅ | `"hello"` |
| Boolean | ✅ | `true`/`false` |
| Undefined | ✅ | declared but unassigned |
| Null | ✅ | intentional empty value |
| Symbol | ✅ | guaranteed-unique identifier |
| BigInt | ✅ | arbitrary-precision integers with `n` suffix |

## Examples
```js
let str = "hello";
str.toUpperCase(); // "HELLO" — but str itself is unchanged!
console.log(str);   // "hello" — strings are immutable

let x = 5;
let y = x; // y is a COPY
y = 10;
console.log(x, y); // 5 10
```

## Memory Diagram
```
Stack
┌──────────────┐
│ x → 5           │
│ y → 10  (own copy, unrelated to x after assignment)│
└──────────────┘
```

## Flowchart
```
Assign one primitive variable to another
        │
A full VALUE COPY is made
        │
Changing one variable NEVER affects the other
```

## Internal Working
Primitives are stored as immutable values; any operation that appears to "change" a string or number actually creates and returns a brand-new primitive value rather than mutating the original in place.

## Beginner Example
```js
let count = 1;
let countCopy = count;
countCopy = 2;
console.log(count); // 1 — unaffected
```

## Intermediate Example
```js
// String methods never mutate the original string
let name = "shubham";
let upper = name.toUpperCase();
console.log(name, upper); // "shubham" "SHUBHAM"
```

## Advanced Example
```js
// Symbols are always unique, even with the same description
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false — every Symbol() call creates a unique value
```

## Real World Example
```js
// BigInt for precise large-number math beyond Number.MAX_SAFE_INTEGER
const big1 = 9007199254740993n;
console.log(big1 + 1n); // 9007199254740994n — exact, no precision loss
```

## Industry Example
```js
// Symbols are used internally by libraries to create "hidden" unique object keys
// that won't collide with user-defined properties, e.g. Symbol.iterator
const arr = [1, 2, 3];
console.log(typeof arr[Symbol.iterator]); // "function"
```

## Interview Questions
See full list → [interview.md](./interview.md#primitive)
1. What does "value semantics" mean for primitives?
2. Why does `str.toUpperCase()` not change the original string?
3. Why are two `Symbol("id")` calls never equal to each other?
4. When would you need `BigInt` instead of `Number`?
5. List all 7 primitive types.

## MCQs
See full list → [mcq.md](./mcq.md#primitive)
1. Which of these is NOT a primitive type? (a) String (b) Boolean (c) **Object** (d) Symbol — *Correct: (c).*

## Coding Questions
See full list → [practice.md](./practice.md#primitive)
1. **(Easy)** Show that reassigning a copied primitive doesn't affect the original.
2. **(Medium)** Demonstrate that string methods return new strings rather than mutating in place.
3. **(Hard)** Write a snippet demonstrating precision loss with regular numbers beyond `Number.MAX_SAFE_INTEGER`, then show `BigInt` avoiding it.

## Assignments
- [ ] List all 7 primitives with one example value each.
- [ ] Explain, with a code snippet, why primitives are said to have "value semantics."

## Mini Project
Build a small script comparing `Number` vs `BigInt` precision for very large integers, printing the point where regular numbers start losing accuracy.

## Common Mistakes
- Believing string/number methods mutate the original value.
- Assuming two `Symbol()` calls with the same description are equal.
- Mixing `BigInt` and `Number` directly in arithmetic (`10n + 5` throws a `TypeError`).

## Best Practices
- Remember primitives are always copied by value — no shared-mutation surprises.
- Convert explicitly between `BigInt` and `Number` when needed (`Number(bigIntValue)`, `BigInt(numberValue)`).

## Optimization Tips
- Prefer primitive `string`/`number` literals over their object-wrapper equivalents (`new String()`, `new Number()`) for both performance and predictable `typeof`/equality behavior.

## Summary
Primitives (Number, String, Boolean, Undefined, Null, Symbol, BigInt) are immutable and copied by value — a foundational distinction from objects, which are copied by reference.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#primitive)

---
[← Datatype](./datatype.md) | [Section Home](./README.md) | [Reference →](./reference.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
