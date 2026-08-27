# Loops

> Section: Control Flow · Owner: **Shubham Narware**

## Definition
Loops repeat a block of code multiple times — JavaScript offers several forms (`for`, `while`, `do...while`, `for...of`, `for...in`), each suited to different iteration needs.

## History
`for`, `while`, `do...while`, and `for...in` existed since 1995; **`for...of`** was added in **ES2015** to cleanly iterate over iterable values (arrays, strings, Maps, Sets).

## Why Loops Matter
Repetition is fundamental — processing lists, retrying operations, generating sequences all rely on loop constructs.

## Syntax
```js
for (let i = 0; i < n; i++) { }
while (condition) { }
do { } while (condition);
for (const item of iterable) { }
for (const key in object) { }
```

## Types (overview — each has its own dedicated file)
| Loop | Best for |
|---|---|
| `for` | Known iteration count |
| `while` | Condition-driven, unknown iteration count |
| `do...while` | Must run at least once |
| `for...of` | Iterating VALUES of arrays/strings/iterables |
| `for...in` | Iterating KEYS of an object |

## Examples
```js
for (let i = 1; i <= 3; i++) console.log(i); // 1 2 3

let i = 0;
while (i < 3) { console.log(i); i++; } // 0 1 2

for (const val of [10, 20, 30]) console.log(val); // 10 20 30
```

## Memory Diagram
Not applicable — control flow topic.

## Flowchart
```
Choose a loop type
        │
Know exact iteration count? ──Yes──► for
        │No
Need to run body at least once regardless? ──Yes──► do...while
        │No
Condition-driven, unknown count? ──Yes──► while
        │No
Iterating array/string VALUES? ──Yes──► for...of
        │No
Iterating object KEYS? ──Yes──► for...in
```

## Internal Working
Each loop repeatedly re-checks its condition (or, for `for...of`/`for...in`, pulls the next item from an iterator/enumerator) before executing the body again — the loop terminates once the condition is false or the iterable is exhausted.

## Beginner Example
```js
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
```

## Intermediate Example
```js
// Choosing for...of for array values vs for...in for object keys
const arr = ["a", "b", "c"];
for (const val of arr) console.log(val); // "a" "b" "c"

const obj = { x: 1, y: 2 };
for (const key in obj) console.log(key, obj[key]); // "x 1", "y 2"
```

## Advanced Example
```js
// Loop control keywords: continue skips, break exits entirely
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // skip even numbers
  if (i > 7) break;           // stop entirely once i exceeds 7
  console.log(i); // 1 3 5 7
}
```

## Real World Example
```js
// Retrying a failed operation up to 3 times
let attempts = 0;
let success = false;
while (attempts < 3 && !success) {
  success = tryOperation();
  attempts++;
}
```

## Industry Example
```js
// Processing a large dataset in batches with for...of
for (const batch of chunkArray(largeDataset, 100)) {
  processBatch(batch);
}
```

## Interview Questions
See full list → [interview.md](./interview.md#loops)
1. When would you choose `for` over `while`, and vice versa?
2. What's the key difference between `for...of` and `for...in`?
3. What do `break` and `continue` do differently?
4. Why does `do...while` guarantee at least one execution?
5. Which loop type is best for iterating object properties, and why?

## MCQs
See full list → [mcq.md](./mcq.md#loops)
1. Which loop guarantees the body runs at least once? (a) `for` (b) `while` (c) **`do...while`** (d) `for...of` → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#loops)
1. **(Easy)** Write a loop printing numbers 1 to 10.
2. **(Medium)** Write a loop that sums all even numbers from 1 to 100.
3. **(Hard)** Implement retry logic (max 3 attempts) for a function that randomly succeeds/fails, using an appropriate loop type.

## Assignments
- [ ] Create a table comparing all 5 loop types with a use case for each.
- [ ] Rewrite a `for` loop as a `while` loop and explain the tradeoffs.

## Mini Project
Build a simple "Batch Processor" that splits an array into chunks of N and processes each chunk with a `for...of` loop, logging progress after each batch.

## Common Mistakes
- Using `for...in` on arrays (iterates indices as strings, and can include inherited/enumerable properties) instead of `for...of`.
- Off-by-one errors in `for` loop conditions (`<=` vs `<`).
- Forgetting to update the loop variable in `while`, causing an infinite loop.

## Best Practices
- Use `for...of` for array/iterable values, `for...in` (or better, `Object.keys/entries`) for object properties.
- Always ensure the loop's terminating condition will eventually become false.

## Optimization Tips
- Cache array length in `for` loops on very large arrays if it won't change during iteration (`for (let i=0, len=arr.length; i<len; i++)`), though modern engines often optimize this automatically.

## Summary
JavaScript's 5 loop forms each suit different use cases — `for` for known counts, `while`/`do...while` for condition-driven repetition, `for...of` for iterable values, and `for...in` for object keys. Choosing the right one improves both correctness and readability.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#loops)

---
[← Switch](./switch.md) | [Section Home](./README.md) | [For →](./for.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
