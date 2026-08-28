# WeakSet

> Section: Advanced Objects · Owner: **Shubham Narware**

## Definition
`WeakSet` is a collection of unique objects held with "weak" references — like `WeakMap`, entries are automatically garbage collected once an object has no other references, and only objects (not primitives) can be added.

## History
Introduced in **ECMAScript 2015 (ES6)** alongside `Set` and `WeakMap`, providing a memory-safe way to track a group of objects (e.g., "has this object been processed?") without preventing their garbage collection.

## Why WeakSet Matters
It lets you mark or track objects (like "this DOM node has already been initialized") without creating a memory leak by keeping those objects alive forever.

## Syntax
```js
const ws = new WeakSet();
ws.add(obj);
ws.has(obj);
ws.delete(obj);
```

## Types (comparison with Set)
| Feature | `Set` | `WeakSet` |
|---|---|---|
| Value types | Any value | Objects only |
| References | Strong (prevents GC) | Weak (allows GC) |
| Iterable | Yes | No — not iterable |
| Has `.size` | Yes | No |

## Examples
```js
const processed = new WeakSet();
function process(obj) {
  if (processed.has(obj)) return;
  processed.add(obj);
  // do work...
}
```

## Memory Diagram
```
WeakSet: { objRef1, objRef2 }
objRef1 goes out of scope elsewhere, no other references
        │
GC can now reclaim objRef1 AND remove it from the WeakSet automatically
```

## Flowchart
```
ws.add(obj)
        │
obj tracked in the WeakSet as long as it's referenced elsewhere
        │
obj becomes unreachable
        │
GC collects obj ──► WeakSet entry removed automatically too
```

## Internal Working
Like `WeakMap`, `WeakSet` cannot be iterated or checked for size, since its contents can shrink unpredictably as garbage collection runs — this is intentional to prevent relying on GC timing, which JavaScript doesn't guarantee or expose.

## Beginner Example
```js
const ws = new WeakSet();
const obj = {};
ws.add(obj);
console.log(ws.has(obj)); // true
```

## Intermediate Example
```js
const initialized = new WeakSet();
function setupComponent(el) {
  if (initialized.has(el)) return;
  initialized.add(el);
  // perform one-time setup on el
}
```

## Advanced Example
```js
const visitedNodes = new WeakSet();
function traverse(node) {
  if (visitedNodes.has(node)) return; // avoid infinite loops on cyclic structures
  visitedNodes.add(node);
  node.children?.forEach(traverse);
}
```

## Real World Example
```js
// Tracking which DOM elements have already had an event listener
// attached, preventing duplicate listeners without leaking memory
// when elements are removed.
```

## Industry Example
```js
// Some tree/graph traversal utilities use WeakSet to detect
// already-visited nodes and prevent infinite loops on cyclic data.
```

## Interview Questions
See full list → [interview.md](./interview.md#weakset)
1. What's the key difference between `Set` and `WeakSet`?
2. Why can't `WeakSet` be iterated?
3. Give a real use case where `WeakSet` prevents a memory leak that a regular `Set` would cause.
4. Can `WeakSet` hold primitive values like strings or numbers?
5. How would you use `WeakSet` to prevent infinite loops when traversing a cyclic object graph?

## MCQs
See full list → [mcq.md](./mcq.md#weakset)
1. Which of these can be added to a `WeakSet`? (a) A string (b) A number (c) **An object** (d) `null` → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#weakset)
1. **(Easy)** Create a `WeakSet`, add an object, and check membership with `.has()`.
2. **(Medium)** Use `WeakSet` to track which DOM elements have already been initialized.
3. **(Hard)** Use `WeakSet` to safely traverse a cyclic object graph without infinite looping.

## Assignments
- [ ] Explain why `WeakSet` is a better fit than `Set` for tracking "has this object been seen" in a large, dynamic dataset.
- [ ] Write a small function using `WeakSet` to detect and prevent processing the same object twice.

## Mini Project
Build a small "Duplicate Click Preventer": use `WeakSet` to track which buttons have already been clicked once, ignoring subsequent clicks, without leaking memory if buttons are removed from the DOM.

## Common Mistakes
- Trying to add a primitive value to a `WeakSet` (throws a `TypeError`).
- Expecting to iterate over or get the size of a `WeakSet`.
- Using `WeakSet` when a regular `Set` would actually be more appropriate (e.g., when you need iteration).

## Best Practices
- Use `WeakSet` specifically for tracking membership of objects that may be garbage collected, not for general-purpose collections.
- Prefer regular `Set` whenever you need to iterate, check size, or store non-object values.

## Optimization Tips
- Use `WeakSet` to safely mark visited nodes in tree/graph traversal algorithms, avoiding both memory leaks and manual cleanup.

## Summary
`WeakSet` tracks a collection of unique objects with weak references, automatically forgetting entries once they're garbage collected elsewhere — ideal for lightweight object tracking (like "already processed" flags) without risking memory leaks, at the cost of not being iterable.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#weakset)

---
[← WeakMap](./weakmap.md) | [Section Home](./README.md) | [Proxy →](./proxy.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
