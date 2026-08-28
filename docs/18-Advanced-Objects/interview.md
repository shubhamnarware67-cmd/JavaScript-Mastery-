# Advanced Objects — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### WeakMap {#weakmap}
1. **Why must `WeakMap` keys be objects?** Because weak references only make sense for garbage-collectable objects — primitives are never garbage collected the same way.
2. **Why is `WeakMap` not iterable?** Its contents can shrink unpredictably as garbage collection runs, so exposing iteration would be unreliable.
3. **What real-world memory problem does `WeakMap` solve?** Attaching metadata to objects without preventing those objects from being garbage collected.
4. **How would you use `WeakMap` for private class fields?** Store per-instance private data keyed by `this` in a module-scoped `WeakMap`, before native `#private` fields existed.
5. **What happens to a `WeakMap` entry when its key is garbage collected?** The entry is automatically removed too.

### WeakSet {#weakset}
1. **What's the key difference between `Set` and `WeakSet`?** `WeakSet` only holds objects (not primitives), holds them weakly, and isn't iterable.
2. **Why can't `WeakSet` be iterated?** Same reason as `WeakMap` — contents can change unpredictably due to garbage collection.
3. **Give a real use case where `WeakSet` prevents a memory leak a `Set` would cause.** Tracking "already processed" DOM elements without keeping them alive after removal from the DOM.
4. **Can `WeakSet` hold primitive values?** No — only objects.
5. **How would you use `WeakSet` to prevent infinite loops in cyclic graph traversal?** Track visited nodes in a `WeakSet`, skipping any node already present.

### Proxy {#proxy}
1. **What is a "trap" in `Proxy`?** A handler function (like `get`, `set`, `has`) that intercepts a fundamental operation on the target object.
2. **How does `Proxy` enable Vue 3's reactivity?** By intercepting property `get`/`set` operations to automatically track dependencies and trigger UI updates.
3. **What's the relationship between `Proxy` and `Reflect`?** `Reflect` provides the matching default-behavior functions that traps commonly call to preserve correct semantics.
4. **Can `Proxy` intercept `delete`?** Yes, via the `deleteProperty` trap.
5. **What happens if a trap isn't defined for an operation?** It falls back to the default behavior on the target object.

### Reflect {#reflect}
1. **Why does `Reflect` exist alongside operators like `delete` and `in`?** To give equivalent functional-call versions of these operations, especially useful inside `Proxy` traps.
2. **Why use `Reflect.get`/`Reflect.set` inside `Proxy` traps instead of direct property access?** It correctly respects the receiver and prototype chain, avoiding subtle bugs.
3. **What does `Reflect.set()` return?** A boolean indicating success/failure.
4. **How does `Reflect.ownKeys()` differ from `Object.keys()`?** It includes both string and symbol keys, and non-enumerable ones too, unlike `Object.keys()`.
5. **Is `Reflect` typically used standalone or with `Proxy`?** Almost always alongside `Proxy`, as the recommended way to invoke default behavior inside traps.

---
[← Section Home](./README.md)
