# For

> Section: Control Flow · Owner: **Shubham Narware**

## Definition
The `for` loop repeats a block a specific number of times, defined by an initializer, a condition, and an increment/decrement expression, all in one line.

## History
Present since JavaScript's creation in 1995, inherited from C-like `for` loop syntax.

## Why For Matters
It's the most explicit loop form for "repeat N times" tasks, keeping the counter's setup, condition, and update all visible together.

## Syntax
```js
for (initializer; condition; update) {
  // body
}
```

## Types
| Variant | Example |
|---|---|
| Standard ascending | `for (let i=0; i<n; i++)` |
| Descending | `for (let i=n; i>0; i--)` |
| Custom step | `for (let i=0; i<n; i+=2)` |
| Multiple variables | `for (let i=0, j=n; i<j; i++, j--)` |

## Examples
```js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
```

## Memory Diagram
```
Each iteration with `let i` creates a FRESH binding of i
in that iteration's block scope (important for closures in callbacks)
```

## Flowchart
```
Run initializer once (let i = 0)
        │
Check condition (i < n)? ──false──► exit loop
        │true
Run loop body
        │
Run update (i++)
        │
Back to condition check
```

## Internal Working
The initializer runs exactly once before the loop starts; the condition is checked before every iteration (including the first); the update expression runs after every body execution, right before the next condition check.

## Beginner Example
```js
for (let i = 1; i <= 5; i++) {
  console.log(`Line ${i}`);
}
```

## Intermediate Example
```js
// Iterating an array by index
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
```

## Advanced Example
```js
// Nested for loops — building a multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

## Real World Example
```js
// Pagination: looping through pages of results
for (let page = 1; page <= totalPages; page++) {
  fetchPage(page);
}
```

## Industry Example
```js
// Rendering a fixed-size grid (e.g. a chessboard or game board)
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    renderSquare(row, col);
  }
}
```

## Interview Questions
See full list → [interview.md](./interview.md#for)
1. What are the 3 parts of a `for` loop's header, and when does each run?
2. Why does using `let` (not `var`) in a `for` loop matter for closures/callbacks?
3. How would you loop backward through an array using `for`?
4. What's a common off-by-one mistake with `for` loop conditions?
5. When would nested `for` loops be appropriate, and what's their time complexity implication?

## MCQs
See full list → [mcq.md](./mcq.md#for)
1. In `for (let i=0; i<5; i++)`, how many times does the body run? (a) 4 (b) **5** (c) 6 (d) Infinite → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#for)
1. **(Easy)** Write a `for` loop printing even numbers from 2 to 20.
2. **(Medium)** Write nested `for` loops printing a 5x5 multiplication table.
3. **(Hard)** Write a `for` loop that reverses an array in place without using `.reverse()`.

## Assignments
- [ ] Write a `for` loop counting down from 10 to 1.
- [ ] Explain, with an example, why `let` (not `var`) is important in `for` loops used with `setTimeout`/closures.

## Mini Project
Build a simple "Multiplication Table Generator" using nested `for` loops that prints a table for a user-specified number.

## Common Mistakes
- Off-by-one errors (`<=` vs `<`) causing one extra or missing iteration.
- Using `var` instead of `let`, causing all closures to share the final loop value.
- Forgetting to update the loop variable, causing an infinite loop.

## Best Practices
- Use `let` for loop variables (not `var`) to get correct per-iteration scoping.
- Keep loop bodies focused; extract complex logic into a named function for readability.

## Optimization Tips
- For very large arrays, a simple indexed `for` loop is often the fastest iteration method in JS engines, faster than `forEach`/`map` for pure performance-critical code.

## Summary
The `for` loop's three-part header (initializer, condition, update) makes it ideal for counted iteration — using `let` ensures correct per-iteration scoping, which matters heavily when loops interact with closures or async callbacks.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#for)

---
[← Loops](./loops.md) | [Section Home](./README.md) | [While →](./while.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
