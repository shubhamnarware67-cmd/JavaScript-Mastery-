# WeakMap

> Section: Advanced Objects · Owner: **Shubham Narware**

## Definition
`WeakMap` is a collection of key-value pairs where keys must be objects, held with a "weak" reference — meaning entries are automatically garbage collected once their key object has no other references.

## History
Introduced in **ECMAScript 2015 (ES6)** alongside `Map`, specifically to solve memory-leak-prone patterns where developers attached metadata to objects using regular objects or `Map`, which kept those objects alive indefinitely.

## Why WeakMap Matters
It lets you associate private data with an object without preventing that object from being garbage collected when it's no longer used elsewhere — ideal for caches, private fields, and metadata.

## Syntax
```js
const wm = new WeakMap();
wm.set(obj, "metadata");
wm.get(obj);
wm.has(obj);
wm.delete(obj);
```

## Types (comparison with Map)
| Feature | `Map` | `WeakMap` |
|---|---|---|
| Key types | Any value | Objects only |
| References | Strong (prevents GC) | Weak (allows GC) |
| Iterable | Yes (`.keys()`, `.entries()`) | No — not iterable |
| Has `.size` | Yes | No |

## Examples
```js
const cache = new WeakMap();
function process(obj) {
  if (cache.has(obj)) return cache.get(obj);
  const result = expensiveComputation(obj);
  cache.set(obj, result);
  return result;
}
```

## Memory Diagram
```
WeakMap: { objRef1 → "data1", objRef2 → "data2" }
objRef1 goes out of scope elsewhere, no other references
        │
GC can now reclaim objRef1 AND its WeakMap entry automatically
```

## Flowchart
```
wm.set(obj, value)
        │
Entry exists only as long as `obj` is referenced elsewhere
        │
obj becomes unreachable (no other references)
        │
GC collects obj ──► WeakMap entry is automatically removed too
```

## Internal Working
Because `WeakMap` doesn't prevent garbage collection of its keys, it cannot be iterated or have its size checked (doing so would require knowing which entries currently exist, which could change unpredictably as GC runs) — this is a deliberate design tradeoff for memory safety.

## Beginner Example
```js
const wm = new WeakMap();
const user = {};
wm.set(user, { role: "admin" });
console.log(wm.get(user)); // { role: "admin" }
```

## Intermediate Example
```js
const privateData = new WeakMap();
class Account {
  constructor(balance) {
    privateData.set(this, { balance });
  }
  getBalance() {
    return privateData.get(this).balance;
  }
}
```

## Advanced Example
```js
const domMetadata = new WeakMap();
function attachMetadata(element, data) {
  domMetadata.set(element, data);
  // If `element` is later removed from the DOM and has no other
  // references, both it AND its metadata entry are garbage collected.
}
```

## Real World Example
```js
// Frameworks use WeakMap to associate internal state with DOM nodes
// or component instances without leaking memory when those are removed.
```

## Industry Example
```js
// Some memoization libraries use WeakMap to cache function results
// keyed by object arguments, letting unused cache entries be GC'd.
```

## Interview Questions
See full list → [interview.md](./interview.md#weakmap)
1. Why must `WeakMap` keys be objects, unlike regular `Map` keys?
2. Why is `WeakMap` not iterable, unlike `Map`?
3. What real-world memory problem does `WeakMap` solve?
4. How would you use `WeakMap` to implement private class fields (before native private fields existed)?
5. What happens to a `WeakMap` entry when its key object is garbage collected?

## MCQs
See full list → [mcq.md](./mcq.md#weakmap)
1. `WeakMap` keys must be: (a) Strings only (b) **Objects only** (c) Any primitive (d) Numbers only → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#weakmap)
1. **(Easy)** Create a `WeakMap`, set an object key with a value, and retrieve it.
2. **(Medium)** Use `WeakMap` to store private data for instances of a class.
3. **(Hard)** Build a memoization cache using `WeakMap` that caches results keyed by object arguments.

## Assignments
- [ ] Explain why using a regular object as a cache (keyed by objects) can cause memory leaks, and how `WeakMap` avoids this.
- [ ] Write a small class that uses `WeakMap` to keep an internal property truly private.

## Mini Project
Build a small "DOM Metadata Tagger": attach extra data to DOM elements using `WeakMap` so it's automatically cleaned up when elements are removed.

## Common Mistakes
- Trying to use a primitive (string/number) as a `WeakMap` key (not allowed — throws a `TypeError`).
- Expecting to iterate over a `WeakMap`'s entries (not supported).
- Using `WeakMap` when you actually need iteration or a size count — use `Map` instead in that case.

## Best Practices
- Use `WeakMap` specifically when associating data with objects that may be garbage collected later, to avoid memory leaks.
- Use regular `Map` when you need iteration, size tracking, or non-object keys.

## Optimization Tips
- Prefer `WeakMap`-based caches over plain object/`Map`-based caches when caching by object reference, to avoid unbounded memory growth as objects come and go.

## Summary
`WeakMap` stores object-keyed data with weak references, allowing entries to be automatically garbage collected once their key is no longer referenced elsewhere — ideal for private data and metadata attached to objects without causing memory leaks, at the cost of not being iterable.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#weakmap)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [WeakSet →](./weakset.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
