# Datatype

> Section: Variables & Data Types · Owner: **Shubham Narware**

## Definition
A data type classifies the kind of value a variable holds — JavaScript has 7 primitive types plus 1 non-primitive (Object), and is dynamically typed (types are determined at runtime).

## History
The original data types (Number, String, Boolean, Undefined, Null, Object) existed since 1995; **Symbol** was added in ES2015, **BigInt** in ES2020.

## Why Data Types Matter
Knowing a value's type determines what operations are valid, how equality comparisons behave, and how memory is managed (value vs reference semantics).

## Syntax
```js
typeof 42;          // "number"
typeof "hi";          // "string"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object" (a famous long-standing bug, kept for compatibility)
typeof Symbol();      // "symbol"
typeof 10n;            // "bigint"
typeof {};             // "object"
```

## Types (the full list)
| Type | Category | Example |
|---|---|---|
| Number | Primitive | `42`, `3.14` |
| String | Primitive | `"hello"` |
| Boolean | Primitive | `true`, `false` |
| Undefined | Primitive | `let x;` |
| Null | Primitive | `let x = null;` |
| Symbol | Primitive | `Symbol("id")` |
| BigInt | Primitive | `123456789012345678901234567890n` |
| Object | Non-primitive | `{}`, `[]`, functions, dates |

## Examples
```js
let age = 25;               // Number
let name = "Shubham";        // String
let isAdmin = false;         // Boolean
let notSet;                   // Undefined
let empty = null;             // Null (intentional absence of value)
let id = Symbol("uid");       // Symbol (guaranteed unique)
let big = 900719925474099199n; // BigInt (arbitrary-precision integers)
let user = { name: "Shubham" }; // Object
```

## Memory Diagram
```
Primitives (Stack)                Objects (Heap)
┌──────────────────┐            ┌────────────────────┐
│ age  → 25            │            │ user → { name: "..." }│
│ name → "Shubham"      │            └────────────────────┘
└──────────────────┘
```

## Flowchart
```
typeof value
    │
"number"/"string"/"boolean"/"undefined"/"symbol"/"bigint" → PRIMITIVE (copied by value)
    │
"object" (or "function") → NON-PRIMITIVE (copied/shared by reference)
```

## Internal Working
Primitives are stored directly (conceptually on the "stack") and compared/copied by value; objects live on the heap, and variables referencing them store only a pointer/reference — copying the variable copies the reference, not the underlying object.

## Beginner Example
```js
let a = 5;
let b = a; // b gets a COPY of the value
b = 10;
console.log(a, b); // 5 10 — a is unaffected
```

## Intermediate Example
```js
let obj1 = { count: 1 };
let obj2 = obj1; // obj2 gets a COPY of the REFERENCE, same underlying object
obj2.count = 99;
console.log(obj1.count); // 99 — both variables point to the same object!
```

## Advanced Example
```js
// typeof null === "object" is a historical bug kept for backward compatibility.
// Correctly checking for null:
function isNull(value) {
  return value === null;
}
```

## Real World Example
```js
// Form validation relying on correct type checks
function validateAge(input) {
  const age = Number(input);
  return typeof age === "number" && !Number.isNaN(age) && age > 0;
}
```

## Industry Example
```js
// TypeScript exists largely to catch data-type mistakes at compile time
// that plain JavaScript would only reveal at runtime.
```

## Interview Questions
See full list → [interview.md](./interview.md#datatype)
1. List all 8 JavaScript data types.
2. Why does `typeof null` return `"object"`?
3. What's the difference between primitive and non-primitive types in terms of memory?
4. What is Symbol used for?
5. When would you need BigInt instead of Number?

## MCQs
See full list → [mcq.md](./mcq.md#datatype)
1. How many primitive types does JavaScript have? (a) 5 (b) 6 (c) **7** (d) 8 — *Correct: (c) — Number, String, Boolean, Undefined, Null, Symbol, BigInt.*

## Coding Questions
See full list → [practice.md](./practice.md#datatype)
1. **(Easy)** Use `typeof` to log the type of 6 different values.
2. **(Medium)** Write a function that correctly checks whether a value is `null` (avoiding the `typeof` bug).
3. **(Hard)** Write a type-checking utility that distinguishes Array, plain Object, null, and other object types (since `typeof` treats them all as `"object"`).

## Assignments
- [ ] Create a table listing all 8 data types with an example value for each.
- [ ] Explain, with a code example, the practical difference between value and reference semantics.

## Mini Project
Build a small "Type Inspector" script: given an array of mixed values, log each value along with its precise type (correctly distinguishing arrays, null, and plain objects).

## Common Mistakes
- Relying on `typeof` to detect `null` (`"object"`) or arrays (`"object"`) — use `=== null` and `Array.isArray()` instead.
- Confusing value vs reference semantics, leading to unexpected shared-mutation bugs.

## Best Practices
- Use `Array.isArray()` for arrays, `value === null` for null checks, and `typeof` for everything else.
- Understand which types are primitives (value semantics) vs objects (reference semantics) before designing data flow.

## Optimization Tips
- Prefer primitives over object wrappers (`new Number(5)` vs `5`) — wrapper objects add overhead and unexpected `typeof`/equality behavior.

## Summary
JavaScript has 7 primitive types (value semantics) plus Object (reference semantics), determined dynamically at runtime. Correctly distinguishing them — especially around the `typeof null` quirk and array detection — avoids many subtle bugs.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#datatype)

---
[← Const](./const.md) | [Section Home](./README.md) | [Primitive →](./primitive.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
