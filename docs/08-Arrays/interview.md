# Arrays — Interview Questions

> Owner: **Shubham Narware**

### Arrays {#arrays}
1. **`Array.of(7)` vs `new Array(7)`?** — `Array.of(7)` makes `[7]`; `new Array(7)` makes an empty array with length 7.
2. **How does rest destructuring work?** — `const [a, ...rest] = arr` collects remaining elements into a new array called `rest`.
3. **What does `flat(depth)` do?** — Flattens nested arrays up to the given depth (default depth is 1 if omitted).
4. **Primitives or reference types?** — Arrays are reference types (objects), stored on the heap.
5. **Converting array-likes to real arrays?** — `Array.from(arrayLike)` or spread syntax `[...arrayLike]` (if iterable).
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Map {#map}
1. **Does `map()` mutate the original?** — No, it returns a new array.
2. **What if the callback doesn't return anything?** — The corresponding slot becomes `undefined` in the new array.
3. **`map()` vs `forEach()`?** — `map()` returns a new transformed array; `forEach()` returns `undefined` and is used for side effects.
4. **3 callback parameters?** — element, index, and the original array.
5. **When is `map()` the wrong tool?** — When you need to select a subset (`filter`) or accumulate a single value (`reduce`) instead of transforming each element 1:1.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Filter {#filter}
1. **What does `filter()` return?** — A new array containing only elements where the callback returned truthy.
2. **What determines inclusion?** — The callback's truthy/falsy return value for each element.
3. **`filter()` vs `find()`?** — `filter()` returns ALL matches as an array; `find()` returns just the FIRST match (or `undefined`).
4. **Chaining with `map()`?** — Yes, e.g. `arr.filter(cond).map(transform)`.
5. **Does it mutate the original?** — No.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Reduce {#reduce}
1. **What does `reduce()` return generally?** — A single accumulated value (of any type — number, object, array, etc).
2. **Omitting `initialValue`?** — The first element becomes the initial accumulator, and iteration starts from the second element.
3. **Implementing `map()` via `reduce()`?** — `arr.reduce((acc, el) => [...acc, transform(el)], [])`.
4. **Grouping example?** — Building an object where keys are group values and values are arrays of matching items.
5. **Why is `reduce()` the most general method?** — Because `map`, `filter`, and `forEach` can all be implemented in terms of it.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Sort {#sort}
1. **Default `sort()` behavior and risk?** — Converts elements to strings and compares lexicographically — risky/wrong for numbers.
2. **Does `sort()` mutate?** — Yes, in place.
3. **Compare function return for "a before b"?** — A negative number.
4. **What does "stable sort" mean?** — Elements that compare equal retain their original relative order; guaranteed by spec since ES2019.
5. **Sorting without mutating?** — Use `[...arr].sort()` or the newer `.toSorted()` (ES2023).
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Splice {#splice}
1. **Does `splice()` mutate?** — Yes.
2. **What does it return?** — An array of the removed elements.
3. **Insert without removing?** — Pass `0` as the `deleteCount` argument.
4. **`splice()` vs `slice()`?** — `splice()` mutates and removes/inserts; `slice()` is non-mutating and only extracts.
5. **Time complexity implication?** — O(n) relative to array size, since elements after the splice point must shift.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Slice {#slice}
1. **Does `slice()` mutate?** — No.
2. **Meaning of a negative index?** — Counts from the end of the array.
3. **Shallow or deep copy?** — Shallow — nested objects are still shared references.
4. **Key difference from `splice()`?** — `slice()` extracts without modifying; `splice()` modifies in place.
5. **Pagination use case?** — `items.slice(start, start + pageSize)` to extract a page's worth of items.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
