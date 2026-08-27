# For Of

> Section: Control Flow · Owner: **Shubham Narware**

## Definition
`for...of` iterates over the **values** of any iterable object — arrays, strings, Maps, Sets, and more — introduced in ES2015 as a clean alternative to index-based loops.

## History
Introduced in **ES2015**, alongside the broader "iterable protocol" that also powers spread syntax and destructuring.

## Why For Of Matters
It gives direct access to each value without manual indexing, and works uniformly across many different iterable types.

## Syntax
```js
for (const item of iterable) {
  // use item
}
```

## Types (iterables it works with)
| Iterable | Example |
|---|---|
| Array | `[1,2,3]` |
| String | `"hello"` (iterates characters) |
| Map | `new Map([["a",1]])` (iterates `[key,value]` pairs) |
| Set | `new Set([1,2,3])` |
| NodeList (DOM) | `document.querySelectorAll("div")` |

## Examples
```js
for (const num of [10, 20, 30]) {
  console.log(num); // 10 20 30
}

for (const char of "abc") {
  console.log(char); // "a" "b" "c"
}
```

## Memory Diagram
Not applicable — control flow topic.

## Flowchart
```
for (const item of iterable)
        │
Call the iterable's built-in iterator
        │
Get next value ──► assign to `item` ──► run body
        │
Iterator exhausted? ──Yes──► exit loop
        │No
Repeat
```

## Internal Working
`for...of` calls the object's `[Symbol.iterator]` method to get an iterator, then repeatedly calls `.next()` on it, assigning each returned value to the loop variable until `{ done: true }` is returned — this is why only genuinely *iterable* objects work with `for...of` (plain objects don't, by default).

## Beginner Example
```js
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
```

## Intermediate Example
```js
// Destructuring inside for...of when iterating a Map
const scores = new Map([["Alice", 90], ["Bob", 85]]);
for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}
```

## Advanced Example
```js
// for...of with entries() to get index + value together (like a manual enumerate)
const fruits = ["apple", "banana"];
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit); // 0 "apple", 1 "banana"
}
```

## Real World Example
```js
// Iterating over DOM nodes returned by querySelectorAll
for (const el of document.querySelectorAll(".card")) {
  el.classList.add("visible");
}
```

## Industry Example
```js
// Async iteration (for await...of) for streaming API responses
async function processStream(stream) {
  for await (const chunk of stream) {
    console.log("Received chunk:", chunk);
  }
}
```

## Interview Questions
See full list → [interview.md](./interview.md#forof)
1. What does `for...of` iterate over — keys, values, or entries?
2. What must an object have to be usable with `for...of`?
3. Why doesn't `for...of` work directly on plain objects?
4. How would you get both index and value while using `for...of` on an array?
5. What is `for await...of`, and when would you use it?

## MCQs
See full list → [mcq.md](./mcq.md#forof)
1. `for...of` iterates: (a) Object keys (b) **Iterable values** (c) Only array indices (d) Only strings → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#forof)
1. **(Easy)** Use `for...of` to log each character of a string.
2. **(Medium)** Use `for...of` with `.entries()` to log index and value pairs from an array.
3. **(Hard)** Write a custom iterable object (implementing `[Symbol.iterator]`) and iterate it using `for...of`.

## Assignments
- [ ] Convert an index-based `for` loop over an array into a `for...of` loop.
- [ ] Explain, with a code example, why `for...of` fails on a plain (non-iterable) object.

## Mini Project
Build a small "Inventory Iterator": create a Map of item→quantity, then use `for...of` to log a formatted inventory report.

## Common Mistakes
- Trying to use `for...of` directly on a plain object (throws a `TypeError: is not iterable`).
- Confusing `for...of` (values) with `for...in` (keys) and getting unexpected results.

## Best Practices
- Use `for...of` whenever you need array/iterable VALUES directly, rather than manually indexing.
- Use `Object.entries(obj)` combined with `for...of` when you need to iterate a plain object's key-value pairs.

## Optimization Tips
- `for...of` has slightly more overhead than a raw indexed `for` loop due to the iterator protocol — for extremely hot, performance-critical loops over arrays, a plain indexed loop may still be marginally faster.

## Summary
`for...of` cleanly iterates the values of any iterable (arrays, strings, Maps, Sets, and custom iterables), relying on the iterable protocol — the modern default choice for value-based iteration in JavaScript.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#forof)

---
[← Do While](./dowhile.md) | [Section Home](./README.md) | [For In →](./forin.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
