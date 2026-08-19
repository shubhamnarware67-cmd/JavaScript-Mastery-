# Reference

> Section: Variables & Data Types · Owner: **Shubham Narware**

## Definition
Reference types (Objects, Arrays, Functions) are stored on the heap; a variable holding one actually holds a **reference (pointer)** to that memory location, not the data itself — copying the variable copies the reference, so both point to the same underlying data.

## History
Object/reference semantics have existed since JS's creation in 1995, as objects and arrays were always distinct from primitives.

## Why Reference Types Matter
Misunderstanding reference semantics causes one of the most common JS bugs: mutating what you think is a "copy" but is actually the same shared object.

## Syntax
```js
let obj1 = { count: 0 };
let obj2 = obj1; // obj2 references the SAME object as obj1
```

## Types (reference type categories)
| Type | Example |
|---|---|
| Object | `{ key: "value" }` |
| Array | `[1, 2, 3]` |
| Function | `function () {}` |
| Date | `new Date()` |
| Map/Set | `new Map()`, `new Set()` |

## Examples
```js
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] — arr1 changed too! Same underlying array.

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // spread creates a SHALLOW COPY — new array
arr4.push(4);
console.log(arr3); // [1, 2, 3] — unaffected this time
```

## Memory Diagram
```
let obj1 = { count: 0 };
let obj2 = obj1;

Stack                    Heap
┌───────────────┐      ┌─────────────────┐
│ obj1 → (ref A) ───────►│ { count: 0 }      │
│ obj2 → (ref A) ───────►│  (SAME object)     │
└───────────────┘      └─────────────────┘
```

## Flowchart
```
Assign object/array variable to another variable
        │
Only the REFERENCE is copied, not the underlying data
        │
Mutating via EITHER variable affects the SAME object
        │
Need an independent copy? ──► use spread {...obj}/[...arr] (shallow)
                              or structuredClone(obj) (deep)
```

## Internal Working
The variable itself stores a small pointer to a location on the heap; assignment (`obj2 = obj1`) copies that pointer value, not the object's contents — so both variables end up pointing at the exact same heap memory.

## Beginner Example
```js
let a = { name: "Shubham" };
let b = a;
b.name = "Narware";
console.log(a.name); // "Narware" — a and b share the same object
```

## Intermediate Example
```js
// Shallow copy with spread — top-level properties are copied,
// but NESTED objects are still shared references
let original = { user: { name: "Shubham" } };
let shallow = { ...original };
shallow.user.name = "Changed";
console.log(original.user.name); // "Changed" — nested object still shared!
```

## Advanced Example
```js
// Deep copy using structuredClone (modern, built-in)
let original = { user: { name: "Shubham" }, tags: ["a", "b"] };
let deep = structuredClone(original);
deep.user.name = "Changed";
console.log(original.user.name); // "Shubham" — fully independent copy
```

## Real World Example
```js
// React (and similar libraries) rely on reference equality to detect changes —
// mutating state directly (same reference) often fails to trigger a re-render;
// you must create a NEW object/array reference to signal "this changed."
setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
```

## Industry Example
```js
// Redux's core rule: never mutate state directly — always return a new
// object/array reference — precisely because of reference-equality semantics.
```

## Interview Questions
See full list → [interview.md](./interview.md#reference)
1. What's the difference between value semantics (primitives) and reference semantics (objects)?
2. Why does mutating a variable that "copied" an object affect the original?
3. What's the difference between a shallow copy and a deep copy?
4. Why do React/Redux insist on creating new object/array references instead of mutating in place?
5. Name two ways to create a deep copy of an object in modern JavaScript.

## MCQs
See full list → [mcq.md](./mcq.md#reference)
1. Assigning one object variable to another copies: (a) The full object contents (b) **Only the reference/pointer** (c) Nothing (d) A deep clone — *Correct: (b).*

## Coding Questions
See full list → [practice.md](./practice.md#reference)
1. **(Easy)** Show that two variables assigned to the same object share mutations.
2. **(Medium)** Demonstrate the shallow-copy pitfall with a nested object using spread syntax.
3. **(Hard)** Write a simple recursive `deepClone(obj)` function without using `structuredClone`.

## Assignments
- [ ] Explain, with a diagram, the difference between value and reference semantics.
- [ ] Demonstrate `structuredClone` fixing a shallow-copy nested-object bug.

## Mini Project
Build a small "Immutable Update" utility function that takes a nested state object and a path/value to update, returning a new object without mutating the original (a simplified Redux-style reducer helper).

## Common Mistakes
- Assuming `{ ...obj }` or `[...arr]` creates a full deep copy (it's shallow — nested objects are still shared).
- Mutating state directly in React and wondering why the UI doesn't update.
- Comparing two structurally-identical objects with `===` and expecting `true` (reference equality, not deep equality).

## Best Practices
- Use `structuredClone()` (or a deep-clone utility/library) when you need a fully independent nested copy.
- In state-management code (React, Redux), always create new references instead of mutating in place.

## Optimization Tips
- Prefer shallow copies when only top-level changes matter — deep cloning large objects is comparatively expensive and often unnecessary.

## Summary
Objects, arrays, and functions are reference types — variables store pointers to shared heap memory, so copying a variable doesn't copy the underlying data. Understanding shallow vs deep copying is essential for avoiding subtle shared-mutation bugs, especially in state-driven UI frameworks.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#reference)

---
[← Primitive](./primitive.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
