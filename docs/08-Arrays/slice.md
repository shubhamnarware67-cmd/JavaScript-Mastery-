# Slice

> Section: Arrays · Owner: **Shubham Narware**

## Definition
`Array.prototype.slice()` returns a **new array** containing a shallow copy of a portion of the original array, selected by start and end indices — without mutating the original.

## History
Present since JavaScript's creation in 1995; the equivalent `String.prototype.slice()` shares the same conceptual behavior for strings.

## Why Slice Matters
It's the standard, safe way to extract a sub-array or make a shallow copy without touching the original — critical in immutable/state-driven code (React, Redux).

## Syntax
```js
array.slice(startIndex, endIndex); // endIndex is EXCLUSIVE
array.slice();                       // full shallow copy
array.slice(-2);                      // last 2 elements
```

## Types
| Call | Result |
|---|---|
| `slice()` | Full shallow copy |
| `slice(2)` | From index 2 to the end |
| `slice(1, 3)` | Indices 1 and 2 (end exclusive) |
| `slice(-2)` | Last 2 elements |

## Examples
```js
const nums = [10, 20, 30, 40, 50];
console.log(nums.slice(1, 3)); // [20, 30]
console.log(nums.slice(-2));    // [40, 50]
console.log(nums);               // [10, 20, 30, 40, 50] — unchanged
```

## Memory Diagram
```
Original:  [10, 20, 30, 40, 50]
slice(1,3) extracts a NEW array, original untouched
New array: [20, 30]
```

## Flowchart
```
slice(start, end)
        │
Determine start/end indices (supporting negative = "from the end")
        │
Copy elements from start up to (but NOT including) end
        │
Return a brand-new array — original array is NEVER modified
```

## Internal Working
`slice()` performs a **shallow copy** — for arrays of primitives this is a fully independent copy, but for arrays of objects, the new array holds references to the SAME underlying objects as the original (mutating an object inside the sliced array would still affect the original array's object).

## Beginner Example
```js
const letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(1, 4)); // ["b", "c", "d"]
```

## Intermediate Example
```js
// Making a full shallow copy (common immutability pattern)
const original = [1, 2, 3];
const copy = original.slice();
copy.push(4);
console.log(original, copy); // [1,2,3]  [1,2,3,4] — original untouched
```

## Advanced Example
```js
// Shallow copy caveat with nested objects
const original = [{ count: 1 }];
const copy = original.slice();
copy[0].count = 99;
console.log(original[0].count); // 99 — the NESTED OBJECT is still shared!
```

## Real World Example
```js
// Pagination — extracting a "page" of results from a larger dataset
function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}
```

## Industry Example
```js
// React/Redux state updates commonly use slice() to create new arrays
// instead of mutating state directly
function removeItem(state, index) {
  return [...state.slice(0, index), ...state.slice(index + 1)];
}
```

## Interview Questions
See full list → [interview.md](./interview.md#slice)
1. Does `slice()` mutate the original array?
2. What does a negative index mean in `slice()`?
3. Is `slice()`'s copy shallow or deep? What's the practical implication?
4. What's the key difference between `slice()` and `splice()`?
5. How would you use `slice()` to implement simple pagination?

## MCQs
See full list → [mcq.md](./mcq.md#slice)
1. `[10,20,30,40].slice(1,3)` returns: (a) `[10,20,30]` (b) **`[20,30]`** (c) `[20,30,40]` (d) `[10,40]` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#slice)
1. **(Easy)** Use `slice()` to get the last 3 elements of an array.
2. **(Medium)** Write a `paginate(items, page, pageSize)` function using `slice()`.
3. **(Hard)** Demonstrate the shallow-copy pitfall with `slice()` on an array of objects, then show a deep-copy fix.

## Assignments
- [ ] Explain, with a code example, why `slice()` is preferred over `splice()` for creating a sub-array without side effects.
- [ ] Implement an "remove item immutably" function using `slice()` twice plus spread syntax.

## Mini Project
Build a small "Paginated List" utility: given an array and a page size, provide a function returning any requested page's items using `slice()`.

## Common Mistakes
- Confusing `slice()` (non-mutating, returns new array) with `splice()` (mutating, removes/inserts in place).
- Assuming `slice()` creates a full deep copy (it's shallow — nested objects are still shared).
- Miscounting the `end` index, forgetting it's exclusive.

## Best Practices
- Use `slice()` whenever you need a sub-array or shallow copy without side effects — the default safe choice over `splice()`.
- Combine with spread syntax (`[...arr.slice(0, i), newItem, ...arr.slice(i)]`) for immutable insert/update patterns.

## Optimization Tips
- `slice()` is efficient for typical use cases; for extremely large arrays and frequent slicing, benchmark before assuming it's a bottleneck — it's rarely the actual performance issue in practice.

## Summary
`.slice()` extracts a shallow-copied sub-array (or a full copy) without mutating the original — the safe, immutable counterpart to `splice()`'s in-place mutation, and a staple of state-management patterns in modern JS frameworks.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#slice)

---
[← Splice](./splice.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
