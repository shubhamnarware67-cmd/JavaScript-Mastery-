# Splice

> Section: Arrays · Owner: **Shubham Narware**

## Definition
`Array.prototype.splice()` **mutates** an array by removing, replacing, and/or inserting elements at a specified position, returning an array of any removed elements.

## History
Present since JavaScript's creation in 1995, one of the original array-manipulation methods.

## Why Splice Matters
It's the primary tool for modifying an array's *contents* in place (not just adding/removing from the ends like `push`/`pop`), useful for editing lists at arbitrary positions.

## Syntax
```js
array.splice(startIndex, deleteCount, item1, item2, ...);
```

## Types (usage patterns)
| Goal | Call |
|---|---|
| Remove elements | `arr.splice(2, 1)` — remove 1 element at index 2 |
| Insert elements | `arr.splice(2, 0, "new")` — insert without removing |
| Replace elements | `arr.splice(2, 1, "replacement")` — remove 1, insert 1 |

## Examples
```js
const arr = ["a", "b", "c", "d"];
const removed = arr.splice(1, 2); // remove 2 elements starting at index 1
console.log(arr);     // ["a", "d"]
console.log(removed); // ["b", "c"]
```

## Memory Diagram
```
Before: ["a", "b", "c", "d"]
splice(1, 2) removes indices 1-2 ("b","c")
After:  ["a", "d"]        ← original array MUTATED in place
Returned: ["b", "c"]      ← the removed elements
```

## Flowchart
```
splice(start, deleteCount, ...itemsToInsert)
        │
Remove `deleteCount` elements starting at `start`
        │
Insert any provided `itemsToInsert` at that same position
        │
Original array is MUTATED
        │
Return an array of the REMOVED elements (empty array if none removed)
```

## Internal Working
`splice()` shifts all elements after the affected region to their new positions internally (closing the gap left by removals, or making room for insertions) — this makes it an O(n) operation relative to the array's size, since positions after the splice point must be shifted.

## Beginner Example
```js
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1); // remove "banana"
console.log(fruits); // ["apple", "cherry"]
```

## Intermediate Example
```js
// Inserting without removing (deleteCount = 0)
const nums = [1, 2, 5];
nums.splice(2, 0, 3, 4); // insert 3 and 4 at index 2
console.log(nums); // [1, 2, 3, 4, 5]
```

## Advanced Example
```js
// Replacing an element in place
const todos = ["Buy milk", "Walk dog", "Clean house"];
todos.splice(1, 1, "Walk dog and cat"); // replace index 1
console.log(todos); // ["Buy milk", "Walk dog and cat", "Clean house"]
```

## Real World Example
```js
// Removing a specific item from a todo list by its id
function removeTodo(todos, id) {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) todos.splice(index, 1);
  return todos;
}
```

## Industry Example
```js
// Undo functionality often relies on splice to reinsert a previously
// removed item back at its original index during an "undo delete" action.
```

## Interview Questions
See full list → [interview.md](./interview.md#splice)
1. Does `splice()` mutate the original array?
2. What does `splice()` return?
3. How would you use `splice()` to insert elements WITHOUT removing any?
4. What's the difference between `splice()` and `slice()` (beyond the name)?
5. What's the time complexity implication of using `splice()` on a very large array?

## MCQs
See full list → [mcq.md](./mcq.md#splice)
1. `["a","b","c"].splice(1,1)` returns: (a) `["a","c"]` (b) **`["b"]`** (c) `undefined` (d) `1` → **Answer: (b), and mutates the original to `["a","c"]`.**

## Coding Questions
See full list → [practice.md](./practice.md#splice)
1. **(Easy)** Use `splice()` to remove the 3rd element of an array.
2. **(Medium)** Use `splice()` to insert 2 new elements into the middle of an array.
3. **(Hard)** Write a `removeById(array, id)` function using `findIndex()` + `splice()` to remove an object by its id property.

## Assignments
- [ ] Demonstrate all 3 use cases of `splice()`: removing, inserting, and replacing.
- [ ] Explain, with a code example, why `splice()` mutates while `slice()` (a related but different method) does not.

## Mini Project
Build a simple "Todo List Editor" with functions to insert a new todo at a specific position, remove a todo by index, and replace a todo's text — all using `splice()`.

## Common Mistakes
- Confusing `splice()` (mutates, removes/inserts) with `slice()` (non-mutating, extracts a sub-array) due to their similar names.
- Forgetting `splice()` returns the REMOVED elements, not the modified array.
- Using `splice()` in a loop without adjusting indices, causing skipped elements as the array shrinks.

## Best Practices
- Double-check whether you actually want mutation (`splice`) or a new array (`slice`, `filter`) before choosing between them.
- When removing multiple items by condition, prefer `filter()` over repeated `splice()` calls in a loop for clarity and correctness.

## Optimization Tips
- For very large arrays with frequent middle-insertions/removals, consider whether a different data structure (like a linked list, if truly performance-critical) might suit the access pattern better than repeated O(n) splices.

## Summary
`.splice()` mutates an array in place to remove, insert, or replace elements at any position, returning the removed elements — powerful but easy to confuse with the similarly-named, non-mutating `.slice()`.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#splice)

---
[← Sort](./sort.md) | [Section Home](./README.md) | [Slice →](./slice.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
