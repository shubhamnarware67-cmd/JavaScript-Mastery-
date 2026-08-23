# Reduce

> Section: Arrays · Owner: **Shubham Narware**

## Definition
`Array.prototype.reduce()` collapses an array down into a **single value** (a sum, an object, another array, etc.) by repeatedly applying a callback that combines an accumulator with each element.

## History
Added in **ES5 (2009)**, alongside `map()` and `filter()`, as the most general-purpose of the three (map/filter can technically be implemented in terms of reduce).

## Why Reduce Matters
It's the most powerful and flexible array method — anything `map`/`filter`/`forEach` can do, `reduce` can also do, plus tasks like totals, grouping, and flattening that need to accumulate state across iterations.

## Syntax
```js
const result = array.reduce((accumulator, element, index, array) => {
  return updatedAccumulator;
}, initialValue);
```

## Types
Not applicable — a single method, but used for many different accumulation patterns (sum, grouping, flattening, counting).

## Examples
```js
const nums = [1, 2, 3, 4];
const total = nums.reduce((sum, n) => sum + n, 0);
console.log(total); // 10
```

## Memory Diagram
```
reduce((acc, n) => acc + n, 0) over [1,2,3,4]

acc=0, n=1 → acc=1
acc=1, n=2 → acc=3
acc=3, n=3 → acc=6
acc=6, n=4 → acc=10   ← final returned value
```

## Flowchart
```
reduce(callback, initialValue)
        │
acc = initialValue (or first element if omitted)
        │
For each remaining element:
        │
acc = callback(acc, element, index, array)
        │
After the last element, return the final acc
```

## Internal Working
`reduce()` carries a single running "accumulator" value through the entire array, updating it once per element via the callback's return value — omitting `initialValue` uses the array's first element as the starting accumulator and begins iterating from the second element instead.

## Beginner Example
```js
const prices = [10, 20, 30];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 60
```

## Intermediate Example
```js
// Using reduce to count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { apple: 3, banana: 2, orange: 1 }
```

## Advanced Example
```js
// Using reduce to group objects by a property (an object-building accumulator)
const people = [
  { name: "Shubham", dept: "Engineering" },
  { name: "Amit", dept: "Sales" },
  { name: "Riya", dept: "Engineering" }
];
const byDept = people.reduce((acc, person) => {
  (acc[person.dept] ??= []).push(person.name);
  return acc;
}, {});
console.log(byDept); // { Engineering: ["Shubham","Riya"], Sales: ["Amit"] }
```

## Real World Example
```js
// Calculating a shopping cart total, including quantity
const cart = [
  { name: "Book", price: 15, qty: 2 },
  { name: "Pen", price: 2, qty: 5 }
];
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(total); // 40
```

## Industry Example
```js
// Redux reducers are conceptually (and sometimes literally) built on the
// same accumulator pattern as Array.prototype.reduce() — combining actions
// over time into a single accumulated application state.
```

## Interview Questions
See full list → [interview.md](./interview.md#reduce)
1. What does `reduce()` return, in general terms?
2. What happens if you omit the `initialValue` argument?
3. How would you implement `map()` using only `reduce()`?
4. Give an example of using `reduce()` to group array items by a property.
5. Why is `reduce()` considered the most general-purpose of the array iteration methods?

## MCQs
See full list → [mcq.md](./mcq.md#reduce)
1. `[1,2,3].reduce((acc,n) => acc+n, 10)` returns: (a) 6 (b) **16** (c) 10 (d) undefined → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#reduce)
1. **(Easy)** Use `reduce()` to sum an array of numbers.
2. **(Medium)** Use `reduce()` to count how many times each value appears in an array.
3. **(Hard)** Use `reduce()` to group an array of objects by a property, producing an object of arrays.

## Assignments
- [ ] Reimplement `Array.prototype.map()` using only `.reduce()`.
- [ ] Explain, with an example, what happens differently when `initialValue` is omitted from `reduce()`.

## Mini Project
Build a small "Sales Report" generator: given an array of sale records (product, amount, region), use `reduce()` to compute total sales per region.

## Common Mistakes
- Forgetting to `return` the accumulator inside the callback, breaking the accumulation.
- Omitting `initialValue` on an empty array, which throws a `TypeError`.
- Overcomplicating simple sum/count tasks that `reduce()` handles cleanly, with manual loops instead.

## Best Practices
- Always provide an explicit `initialValue` unless you're certain the array is non-empty and using the first element as the seed is intentional.
- Keep the accumulator's shape consistent and the callback logic simple — split very complex reduce logic into a named helper function for readability.

## Optimization Tips
- `reduce()` processes the array in a single pass, which can be more efficient than chaining several separate `.map().filter()` passes when performance on very large arrays matters.

## Summary
`.reduce()` is the most flexible array method, collapsing an array into any single accumulated value (sums, counts, groupings, even entirely new arrays or objects) — understanding it well often reveals cleaner solutions to problems that seem to need manual loops.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#reduce)

---
[← Filter](./filter.md) | [Section Home](./README.md) | [Sort →](./sort.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
