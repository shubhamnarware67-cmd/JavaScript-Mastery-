# Garbage Collection

> Section: Execution Context & Scope · Owner: **Shubham Narware**

## Definition
Garbage collection is the automatic process by which JavaScript's engine reclaims memory occupied by objects and variables that are no longer reachable from any active scope, freeing developers from manual memory management.

## History
Automatic garbage collection has been a core part of JavaScript engines since **1995**, using strategies that evolved over time — most modern engines (like V8) use a **generational, mark-and-sweep** collector, refined significantly through the 2010s for performance.

## Why Garbage Collection Matters
Without it, developers would need to manually free memory (as in C/C++), a common source of bugs like memory leaks or dangling pointers — automatic GC removes that burden, though it doesn't eliminate the possibility of memory leaks entirely.

## Syntax
```js
// Not directly controllable via syntax — it's automatic.
let obj = { data: "large payload" };
obj = null; // removes the only reference, making it eligible for GC
```

## Types (common algorithms)
| Algorithm | Idea |
|---|---|
| Reference Counting (legacy) | Track how many references point to an object; free when count hits 0 |
| Mark-and-Sweep (modern) | Starting from "roots" (global object, active call stack), mark all reachable objects; sweep away the rest |
| Generational GC | Split objects into "young" and "old" generations, collecting young objects more frequently (most die young) |

## Examples
```js
function createUser() {
  const user = { name: "Alex" }; // allocated in memory
  return user;
}
let u = createUser();
u = null; // no more references to the user object — eligible for GC
```

## Memory Diagram
```
Roots: Global Object, active Call Stack frames
        │
Reachable objects (kept alive): anything referenced, directly or
                                  indirectly, from a root
        │
Unreachable objects: NOT referenced from any root ──► garbage collected
```

## Flowchart
```
GC cycle triggered (engine-determined timing)
        │
Mark phase: starting from roots, traverse and mark all reachable objects
        │
Sweep phase: any UNMARKED object is considered garbage
        │
Memory occupied by unmarked (unreachable) objects is freed
```

## Internal Working
Modern engines like V8 use a **generational** approach: most objects are short-lived ("die young"), so a fast, frequent "minor GC" cleans the young generation, while a slower, less frequent "major GC" handles the old generation — objects that survive several young-generation collections get "promoted" to the old generation.

## Beginner Example
```js
let data = { value: 42 };
data = null; // the original object is now unreachable, eligible for GC
```

## Intermediate Example
```js
function attachHandler() {
  const largeData = new Array(1000000).fill("x");
  document.getElementById("btn").addEventListener("click", () => {
    console.log(largeData.length); // keeps largeData alive via closure
  });
}
```

## Advanced Example
```js
// A common memory leak: forgetting to remove event listeners on
// elements that get removed from the DOM, keeping their closures
// (and anything they reference) alive indefinitely.
function setup() {
  const heavyObject = { /* large data */ };
  function handler() { console.log(heavyObject); }
  window.addEventListener("resize", handler);
  // If never removed via removeEventListener, heavyObject leaks.
}
```

## Real World Example
```js
// Single-page applications must clean up subscriptions, timers,
// and event listeners when a component unmounts, or the associated
// closures (and their referenced data) will never be garbage collected.
```

## Industry Example
```js
// Browser DevTools' "Memory" panel lets developers take heap
// snapshots to detect memory leaks caused by unintentionally
// retained references in real production applications.
```

## Interview Questions
See full list → [interview.md](./interview.md#garbage-collection)
1. What does it mean for an object to be "reachable," and why does that matter for garbage collection?
2. How does mark-and-sweep differ from reference counting, and why did engines move away from pure reference counting?
3. What is a "memory leak" in JavaScript, given that GC is automatic?
4. How can closures unintentionally cause memory leaks?
5. What is "generational garbage collection," and why is it more efficient than treating all objects equally?

## MCQs
See full list → [mcq.md](./mcq.md#garbage-collection)
1. An object becomes eligible for garbage collection when it is: (a) Declared with `var` (b) Passed to a function (c) **No longer reachable from any root** (d) Older than 1 second → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#garbage-collection)
1. **(Easy)** Show how setting a variable to `null` can make an object eligible for garbage collection.
2. **(Medium)** Write an example of a closure that unintentionally keeps a large object alive, then fix it.
3. **(Hard)** Demonstrate a common DOM-related memory leak (forgotten event listener) and show the corrected version with proper cleanup.

## Assignments
- [ ] Explain, in your own words, why reference counting alone fails for circular references, and how mark-and-sweep solves it.
- [ ] Describe a real scenario where forgetting to call `removeEventListener` could cause a memory leak.

## Mini Project
Build a small demo comparing two versions of a component: one that properly removes its event listener on cleanup, and one that doesn't — with comments explaining the memory implications of each.

## Common Mistakes
- Assuming garbage collection means memory leaks are impossible in JavaScript (they're still possible via lingering references).
- Forgetting to remove event listeners or clear intervals/timeouts, keeping their closures — and anything they reference — alive.
- Holding references in long-lived arrays/caches without ever clearing entries that are no longer needed.

## Best Practices
- Always clean up event listeners, timers, and subscriptions when a component or feature is torn down.
- Be mindful of closures capturing large objects longer than necessary; only capture what's truly needed.

## Optimization Tips
- Use `WeakMap`/`WeakSet` for caches keyed by objects, so entries can be garbage collected automatically once the key object is no longer referenced elsewhere.

## Summary
Garbage collection automatically reclaims memory from objects no longer reachable from any root (global object or active call stack), using modern generational mark-and-sweep algorithms — but developers must still avoid patterns like forgotten event listeners or long-lived closures that unintentionally keep memory alive.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#garbage-collection)

---
[← Scope Chain](./scope-chain.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
