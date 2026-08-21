# Filter

> Section: Arrays · Owner: **Shubham Narware**

## Definition
`Array.prototype.filter()` creates a **new array** containing only the elements for which the provided callback returns a truthy value — effectively selecting a subset.

## History
Added in **ES5 (2009)**, alongside `map()`, `forEach()`, and `reduce()`.

## Why Filter Matters
It's the standard declarative way to select matching items from a list, replacing manual loop-and-push patterns.

## Syntax
```js
const newArray = array.filter((element, index, array) => {
  return condition; // truthy to KEEP the element
});
```

## Types
Not applicable — a single method, commonly chained with `.map()`/`.reduce()`.

## Examples
```js
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]
```

## Memory Diagram
```
Original:  [1, 2, 3, 4, 5, 6]
              │ filter(n => n%2===0)
              ▼
New array: [2, 4, 6]   ← possibly SHORTER, only matching elements kept
```

## Flowchart
```
filter(callback)
        │
For each element:
        │
Call callback(element, index, array)
        │
Result truthy? ──Yes──► include element in new array
        │No
      Skip element
        │
Return new array once all elements are processed
```

## Internal Working
Unlike `map()`, `filter()`'s resulting array length is **not guaranteed** to match the original — it only contains elements where the callback returned truthy, so the new array can be shorter (or, if all pass, the same length).

## Beginner Example
```js
const ages = [15, 22, 17, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [22, 30]
```

## Intermediate Example
```js
// Filtering objects by a property condition
const products = [
  { name: "Book", inStock: true },
  { name: "Pen", inStock: false }
];
const available = products.filter(p => p.inStock);
console.log(available); // [{ name: "Book", inStock: true }]
```

## Advanced Example
```js
// Combining filter with other array methods in a pipeline
const orders = [
  { amount: 100, status: "completed" },
  { amount: 50, status: "pending" },
  { amount: 200, status: "completed" }
];
const totalCompleted = orders
  .filter(o => o.status === "completed")
  .reduce((sum, o) => sum + o.amount, 0);
console.log(totalCompleted); // 300
```

## Real World Example
```js
// Search/filter functionality in a UI
function searchUsers(users, query) {
  return users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
}
```

## Industry Example
```js
// Filtering active/eligible records before further processing in a backend service
const eligibleUsers = allUsers.filter(u => u.isActive && u.age >= 18);
```

## Interview Questions
See full list → [interview.md](./interview.md#filter)
1. What does `filter()` return, and how does its length relate to the original array?
2. What determines whether an element is "kept" by `filter()`?
3. How does `filter()` differ from `find()`?
4. Can you chain `.filter()` with `.map()`? Give an example.
5. Does `filter()` mutate the original array?

## MCQs
See full list → [mcq.md](./mcq.md#filter)
1. `[1,2,3,4].filter(n => n > 2)` returns: (a) `[1,2]` (b) **`[3,4]`** (c) `2` (d) `[1,2,3,4]` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#filter)
1. **(Easy)** Filter an array of numbers to keep only values greater than 10.
2. **(Medium)** Filter an array of user objects to keep only those with `isActive: true`.
3. **(Hard)** Chain `.filter()`, `.map()`, and `.reduce()` to compute the total value of only in-stock products with price above a threshold.

## Assignments
- [ ] Explain, with an example, the difference between `filter()` (returns matching elements) and `find()` (returns the first match only).
- [ ] Write a search feature using `filter()` and `.includes()` for case-insensitive matching.

## Mini Project
Build a small "Product Search" feature: given an array of products, filter by name substring and by a minimum price, combining both conditions.

## Common Mistakes
- Confusing `filter()` (returns an array of all matches) with `find()` (returns just the first match, or `undefined`).
- Forgetting the callback must explicitly return a boolean-like value (truthy/falsy), not perform a side effect.
- Assuming `filter()` mutates the original array (it doesn't — it returns a new one).

## Best Practices
- Use `filter()` specifically to select a subset; use `find()` when you only need the first match.
- Chain `filter()` before `map()`/`reduce()` to reduce the dataset early in a processing pipeline.

## Optimization Tips
- For very large arrays where you only need the first match, use `find()` instead of `filter()[0]` — `find()` stops early, `filter()` always processes every element.

## Summary
`.filter()` selects a subset of an array's elements based on a callback's truthy/falsy result, returning a new (possibly shorter) array without mutating the original — a core tool for narrowing down datasets declaratively.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#filter)

---
[← Map](./map.md) | [Section Home](./README.md) | [Reduce →](./reduce.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
