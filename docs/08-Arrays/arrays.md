# Arrays

> Section: Arrays · Owner: **Shubham Narware**

## Definition
An array is an ordered, zero-indexed collection that can hold values of any type, with a dynamically adjustable length.

## History
Arrays have existed since JavaScript's creation in 1995; many modern methods (`find`, `includes`, `flat`, `flatMap`, `at`) were added incrementally from ES2015 through ES2023.

## Why Arrays Matter
Lists of data (users, products, results) are everywhere in real applications — arrays and their methods are among the most-used tools in everyday JavaScript.

## Syntax
```js
const fruits = ["apple", "mango", "banana"];
fruits[0];       // "apple"
fruits.length;    // 3
```

## Types (creation methods)
| Method | Example |
|---|---|
| Array literal | `[1, 2, 3]` |
| `new Array()` | `new Array(1,2,3)` |
| `Array.of()` | `Array.of(7)` → `[7]` (unlike `new Array(7)`, which makes an empty length-7 array) |
| `Array.from()` | `Array.from("abc")` → `["a","b","c"]` |

## Examples
```js
const nums = [1, 2, 3];
nums.push(4);      // add to end → [1,2,3,4]
nums.pop();          // remove from end → [1,2,3]
nums.unshift(0);     // add to start → [0,1,2,3]
nums.shift();        // remove from start → [1,2,3]
```

## Memory Diagram
```
index:   0        1        2
       ┌───────┬───────┬────────┐
value: │ apple │ mango │ banana │
       └───────┴───────┴────────┘
Arrays are objects (reference type) — assigning shares the same underlying array
```

## Flowchart
```
Need an ordered list of similar items?
        │
       Yes ──► Use an array
        │
Need transformation/filtering/aggregation?
        │
       Yes ──► Use map()/filter()/reduce() (see dedicated files)
```

## Internal Working
Arrays in JS are actually specialized objects with numeric-string keys ("0", "1", "2"...) and a special auto-updating `length` property; engines like V8 optimize arrays internally when they're "dense" (no holes) and hold consistent types.

## Beginner Example
```js
const colors = ["red", "green", "blue"];
console.log(colors[1]); // "green"
console.log(colors.length); // 3
```

## Intermediate Example
```js
// Array destructuring
const [first, second, ...rest] = [10, 20, 30, 40];
console.log(first, second, rest); // 10 20 [30, 40]
```

## Advanced Example
```js
// Array.from with a mapping function, and flat/flatMap for nested arrays
const doubled = Array.from({ length: 5 }, (_, i) => i * 2);
console.log(doubled); // [0, 2, 4, 6, 8]

const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]
```

## Real World Example
```js
// Representing a shopping cart's items
const cart = [
  { name: "Book", price: 15 },
  { name: "Pen", price: 2 }
];
const total = cart.reduce((sum, item) => sum + item.price, 0);
```

## Industry Example
```js
// API responses are commonly arrays of objects, processed with array methods
fetch("/api/users")
  .then(res => res.json())
  .then(users => users.filter(u => u.active).map(u => u.name));
```

## Interview Questions
See full list → [interview.md](./interview.md#arrays)
1. What's the difference between `Array.of(7)` and `new Array(7)`?
2. How does array destructuring with rest (`...rest`) work?
3. What does `flat(depth)` do, and what's the default depth if omitted?
4. Are arrays primitives or reference types in JavaScript?
5. How would you convert an array-like object (e.g. `arguments`) into a real array?

## MCQs
See full list → [mcq.md](./mcq.md#arrays)
1. `new Array(3)` creates: (a) `[3]` (b) **An empty array with length 3** (c) An error (d) `[0,0,0]` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#arrays)
1. **(Easy)** Create an array of 5 numbers and log its length and first/last elements.
2. **(Medium)** Use destructuring to extract the first 2 items and the rest into a separate array.
3. **(Hard)** Write a function that flattens an arbitrarily nested array without using `.flat()`.

## Assignments
- [ ] Explain, with examples, the difference between `Array.of()`, `Array.from()`, and array literals.
- [ ] Demonstrate that arrays are reference types by showing shared mutation between two variables.

## Mini Project
Build a simple "Shopping Cart" using an array of item objects, with functions to add items, remove items, and calculate the total price.

## Common Mistakes
- Confusing `new Array(7)` (empty array, length 7) with `Array.of(7)` (array containing the single value 7).
- Forgetting arrays are reference types, leading to unexpected shared-mutation bugs.
- Using `for...in` on arrays instead of `for...of` or indexed `for`.

## Best Practices
- Prefer array literals (`[]`) over `new Array()` for clarity.
- Use `Array.isArray()` to reliably check if a value is an array (since `typeof` returns `"object"` for both).

## Optimization Tips
- Keep arrays "dense" (no holes) and type-consistent where possible, to help JS engines optimize internal array representations.

## Summary
Arrays are JavaScript's core ordered-list data structure — reference types with a rich, well-established set of built-in methods (covered individually in map, filter, reduce, sort, splice, and slice) for adding, removing, transforming, and querying data.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#arrays)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Map →](./map.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
