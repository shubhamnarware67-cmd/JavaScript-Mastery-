# Sort

> Section: Arrays · Owner: **Shubham Narware**

## Definition
`Array.prototype.sort()` orders an array's elements **in place** (mutating the original array), using a default lexicographic (string) comparison unless a custom compare function is provided.

## History
Present since JavaScript's creation in 1995; historically an unstable sort in some engines, but modern engines (per ES2019) guarantee a **stable** sort.

## Why Sort Matters
Ordering data (alphabetically, numerically, by date) is an extremely common requirement — but `sort()`'s default string-based behavior is a classic source of bugs with numbers.

## Syntax
```js
array.sort();                       // default: lexicographic (string) sort
array.sort((a, b) => a - b);         // ascending numeric sort
array.sort((a, b) => b - a);         // descending numeric sort
```

## Types
| Compare function result | Meaning |
|---|---|
| Negative | `a` comes before `b` |
| Positive | `a` comes after `b` |
| Zero | Order unchanged (stable) |

## Examples
```js
const nums = [40, 1, 5, 200];
console.log(nums.sort());                 // [1, 200, 40, 5] — WRONG! sorted as strings
console.log(nums.sort((a, b) => a - b));    // [1, 5, 40, 200] — correct numeric sort
```

## Memory Diagram
```
sort() MUTATES the original array — no new array is created;
the same array reference is reordered and also returned.
```

## Flowchart
```
Call array.sort(compareFn?)
        │
compareFn provided?
        │                    │
       Yes                  No
        │                    │
Use it to order elements   Convert elements to STRINGS,
                            sort lexicographically (often wrong for numbers)
        │
Array is reordered IN PLACE, and also returned
```

## Internal Working
Without a compare function, `sort()` converts every element to a string and compares them character-by-character (Unicode code point order) — this is precisely why `[40, 5, 200].sort()` gives the "wrong" numeric order: `"200"` sorts before `"40"` lexicographically.

## Beginner Example
```js
const fruits = ["banana", "apple", "cherry"];
console.log(fruits.sort()); // ["apple", "banana", "cherry"] — string sort works fine here
```

## Intermediate Example
```js
// Sorting objects by a property
const people = [{ name: "Amit", age: 30 }, { name: "Riya", age: 22 }];
people.sort((a, b) => a.age - b.age);
console.log(people); // Riya (22) first, then Amit (30)
```

## Advanced Example
```js
// Sorting without mutating the original (using toSorted, ES2023, or spread + sort)
const original = [3, 1, 2];
const sortedCopy = [...original].sort((a, b) => a - b);
console.log(original, sortedCopy); // [3,1,2]  [1,2,3] — original untouched

const modernCopy = original.toSorted((a, b) => a - b); // ES2023, non-mutating
```

## Real World Example
```js
// Sorting a product list by price, ascending
const products = [{ name: "Pen", price: 5 }, { name: "Book", price: 15 }];
products.sort((a, b) => a.price - b.price);
```

## Industry Example
```js
// Sorting log entries chronologically by timestamp before display
logs.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
```

## Interview Questions
See full list → [interview.md](./interview.md#sort)
1. What does `sort()` do without a compare function, and why is that risky for numbers?
2. Does `sort()` mutate the original array?
3. What should a compare function return to indicate `a` comes before `b`?
4. What does "stable sort" mean, and does JavaScript guarantee it?
5. How would you sort an array without mutating the original?

## MCQs
See full list → [mcq.md](./mcq.md#sort)
1. `[40, 5, 200].sort()` (no compare fn) returns: (a) `[5, 40, 200]` (b) **`[200, 40, 5]`** (c) An error (d) `[5, 200, 40]` → **Answer: (b), due to lexicographic string comparison.**

## Coding Questions
See full list → [practice.md](./practice.md#sort)
1. **(Easy)** Sort an array of numbers in ascending order correctly.
2. **(Medium)** Sort an array of objects by a date property, oldest first.
3. **(Hard)** Sort an array of strings case-insensitively without mutating the original array.

## Assignments
- [ ] Demonstrate the default `sort()` bug with numbers, then fix it with a compare function.
- [ ] Sort an array of objects by 2 criteria (e.g. department, then name) using a combined compare function.

## Mini Project
Build a small "Leaderboard" that sorts an array of player score objects descending by score, with ties broken alphabetically by name.

## Common Mistakes
- Calling `.sort()` on numbers without a compare function, getting incorrect lexicographic order.
- Assuming `sort()` returns a new array (it mutates and returns the SAME array).
- Writing a compare function that doesn't handle equal values (returning 0) correctly for stable ordering with secondary sort keys.

## Best Practices
- Always provide an explicit compare function when sorting numbers.
- Use `[...array].sort()` or the newer `.toSorted()` (ES2023) when you need a sorted copy without mutating the original.

## Optimization Tips
- For very large datasets sorted repeatedly by the same key, consider pre-computing sort keys once rather than recalculating them inside the compare function on every comparison.

## Summary
`.sort()` reorders an array in place, defaulting to string-based comparison unless a custom compare function is supplied — always pass one explicitly when sorting numbers to avoid the classic lexicographic-ordering bug.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#sort)

---
[← Reduce](./reduce.md) | [Section Home](./README.md) | [Splice →](./splice.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
