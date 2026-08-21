# Map

> Section: Arrays · Owner: **Shubham Narware**

## Definition
`Array.prototype.map()` creates a **new array** by calling a provided function on every element of the original array, transforming each value without mutating the original.

## History
Added in **ES5 (2009)** as part of the first wave of standardized functional array methods.

## Why Map Matters
It's the standard, declarative way to transform every item in a list — clearer and safer (no mutation) than manually looping and pushing to a new array.

## Syntax
```js
const newArray = array.map((element, index, array) => {
  return transformedValue;
});
```

## Types
Not applicable — a single method, though commonly chained with `.filter()`/`.reduce()`.

## Examples
```js
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(nums);    // [1, 2, 3, 4] — original unchanged
```

## Memory Diagram
```
Original:    [1, 2, 3, 4]
                │ map(n => n*2)
                ▼
New array:   [2, 4, 6, 8]   ← brand new array in memory, original untouched
```

## Flowchart
```
map(callback)
        │
For each element in the array (in order):
        │
Call callback(element, index, array)
        │
Push the RETURNED value into a new array
        │
Return the fully new array once all elements are processed
```

## Internal Working
`map()` always returns a new array with **the exact same length** as the original — even if the callback returns `undefined` for some elements, those slots will contain `undefined` (unlike `filter`, `map` never skips or removes elements).

## Beginner Example
```js
const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.08);
console.log(withTax); // [10.8, 21.6, 32.4]
```

## Intermediate Example
```js
// Mapping objects into a new shape
const users = [{ name: "Shubham", age: 22 }, { name: "Amit", age: 30 }];
const names = users.map(user => user.name);
console.log(names); // ["Shubham", "Amit"]
```

## Advanced Example
```js
// Using the index parameter
const items = ["a", "b", "c"];
const numbered = items.map((item, index) => `${index + 1}. ${item}`);
console.log(numbered); // ["1. a", "2. b", "3. c"]
```

## Real World Example
```js
// Transforming API data into a UI-friendly shape
const apiUsers = [{ id: 1, full_name: "Shubham Narware" }];
const displayUsers = apiUsers.map(u => ({ id: u.id, name: u.full_name }));
```

## Industry Example
```js
// React commonly uses .map() to render lists of components
// const listItems = items.map(item => <li key={item.id}>{item.name}</li>);
```

## Interview Questions
See full list → [interview.md](./interview.md#map)
1. What does `map()` return, and does it mutate the original array?
2. What happens if the callback doesn't explicitly return a value?
3. How does `map()` differ from `forEach()`?
4. What are the 3 parameters available to the map callback?
5. When would `map()` be the wrong tool, and `filter()` or `reduce()` more appropriate instead?

## MCQs
See full list → [mcq.md](./mcq.md#map)
1. `[1,2,3].map(n => n * 2)` returns: (a) `[1,2,3]` (b) **`[2,4,6]`** (c) `6` (d) `undefined` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#map)
1. **(Easy)** Use `map()` to convert an array of Celsius temperatures to Fahrenheit.
2. **(Medium)** Use `map()` to extract a single property from an array of objects.
3. **(Hard)** Chain `.filter()` and `.map()` to transform and filter a dataset in one readable pipeline.

## Assignments
- [ ] Explain, with an example, why `map()` always returns an array of the same length as the input.
- [ ] Compare `map()` and `forEach()` side-by-side, explaining when each is appropriate.

## Mini Project
Build a small "Currency Converter" that takes an array of USD prices and uses `.map()` to convert them to another currency using a given exchange rate.

## Common Mistakes
- Using `map()` purely for side effects (like `forEach()` should be used) and discarding the returned array.
- Forgetting to `return` inside the callback, resulting in an array of `undefined`s.
- Mutating the original array/elements inside the callback instead of returning new values.

## Best Practices
- Use `map()` specifically when you need a new, transformed array — use `forEach()` for pure side effects.
- Keep the callback function pure (no side effects, same input always produces same output).

## Optimization Tips
- Avoid chaining excessive `.map().map().map()` calls on very large arrays — combining logic into fewer passes can reduce overhead.

## Summary
`.map()` transforms every element of an array into a new array of the same length, without mutating the original — a core building block of JavaScript's functional array-processing style.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#map)

---
[← Arrays](./arrays.md) | [Section Home](./README.md) | [Filter →](./filter.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
