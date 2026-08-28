# Proxy

> Section: Advanced Objects · Owner: **Shubham Narware**

## Definition
`Proxy` is an object that wraps another object (the "target") and lets you intercept and customize fundamental operations on it — like property access, assignment, and deletion — via configurable "traps."

## History
Introduced in **ECMAScript 2015 (ES6)**, `Proxy` gave JavaScript true meta-programming capabilities, replacing older, more limited workarounds like `Object.defineProperty()` for intercepting property access.

## Why Proxy Matters
It enables powerful patterns like validation, logging, reactive data-binding (used by frameworks like Vue 3), and virtual objects — all by transparently intercepting operations without modifying the original object.

## Syntax
```js
const proxy = new Proxy(target, handler);
// handler = { get(target, prop) {...}, set(target, prop, value) {...}, ... }
```

## Types (common traps)
| Trap | Intercepts |
|---|---|
| `get` | Property access (`obj.prop`) |
| `set` | Property assignment (`obj.prop = value`) |
| `has` | The `in` operator |
| `deleteProperty` | `delete obj.prop` |
| `apply` | Function calls (if target is a function) |

## Examples
```js
const target = { name: "Alex" };
const handler = {
  get(obj, prop) {
    console.log(`Accessing ${prop}`);
    return obj[prop];
  },
};
const proxy = new Proxy(target, handler);
proxy.name; // logs "Accessing name", returns "Alex"
```

## Memory Diagram
```
Proxy(target, handler)
   │
Every operation (get, set, delete, etc.) on the proxy
   │
Passes through the corresponding trap in `handler`
   │
Trap decides what to actually do (often calling Reflect.* on target)
```

## Flowchart
```
Code accesses proxy.someProperty
        │
Does handler define a `get` trap? ──Yes──► trap function runs
        │ No                              (can return custom value)
        ▼
Default behavior: forwards directly to target
```

## Internal Working
Traps intercept operations at the language level — even things like `in`, `delete`, and function calls can be customized — and traps commonly use `Reflect` internally to perform the default operation while adding custom logic (like logging or validation) around it.

## Beginner Example
```js
const validator = {
  set(obj, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    obj[prop] = value;
    return true;
  },
};
const person = new Proxy({}, validator);
person.age = 25; // works
```

## Intermediate Example
```js
function createReadOnly(target) {
  return new Proxy(target, {
    set() {
      throw new Error("This object is read-only");
    },
  });
}
const config = createReadOnly({ apiUrl: "https://api.example.com" });
```

## Advanced Example
```js
function makeReactive(target, onChange) {
  return new Proxy(target, {
    set(obj, prop, value) {
      const oldValue = obj[prop];
      obj[prop] = value;
      if (oldValue !== value) onChange(prop, value);
      return true;
    },
  });
}
const state = makeReactive({ count: 0 }, (prop, val) =>
  console.log(`${prop} changed to ${val}`)
);
state.count = 1; // logs "count changed to 1"
```

## Real World Example
```js
// Vue 3's reactivity system is built almost entirely on Proxy,
// intercepting property gets/sets to automatically trigger UI updates.
```

## Industry Example
```js
// API client libraries sometimes use Proxy to create dynamic method
// chains (like a query builder) where property access itself
// generates behavior, without predefining every possible method.
```

## Interview Questions
See full list → [interview.md](./interview.md#proxy)
1. What is a "trap" in the context of `Proxy`?
2. How does `Proxy` enable Vue 3's reactivity system?
3. What's the relationship between `Proxy` and the `Reflect` object?
4. Can a `Proxy` intercept the `delete` operator? Which trap handles that?
5. What happens if a trap isn't defined for a particular operation — does it fail, or fall back to default behavior?

## MCQs
See full list → [mcq.md](./mcq.md#proxy)
1. Which trap intercepts property assignment (`obj.x = value`)? (a) `get` (b) **`set`** (c) `has` (d) `apply` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#proxy)
1. **(Easy)** Create a `Proxy` that logs every property access on an object.
2. **(Medium)** Build a validation `Proxy` that throws if an invalid value is assigned to a specific property.
3. **(Hard)** Implement a simple reactive state object using `Proxy` that calls a callback whenever any property changes.

## Assignments
- [ ] Explain, with an example, how `Proxy` differs from simply wrapping an object in getter/setter methods.
- [ ] Write a read-only `Proxy` wrapper and explain which trap prevents mutation.

## Mini Project
Build a small "Reactive State" mini-library using `Proxy`: any change to a tracked object automatically triggers a provided callback, simulating basic framework reactivity.

## Common Mistakes
- Forgetting that traps should typically return a value (e.g., `set` traps must return `true` on success) or behavior may silently fail in strict mode.
- Overusing `Proxy` for simple cases where a plain getter/setter would be clearer and faster.
- Not using `Reflect` inside traps, leading to subtly incorrect default behavior (like breaking inheritance chains).

## Best Practices
- Use `Reflect.get`/`Reflect.set` etc. inside traps to preserve correct default behavior while adding custom logic.
- Reserve `Proxy` for genuinely dynamic behavior (validation, reactivity, virtualization) rather than simple property access.

## Optimization Tips
- Be aware that `Proxy` adds a small performance overhead to every intercepted operation — avoid wrapping extremely hot-path objects unless the flexibility is truly needed.

## Summary
`Proxy` wraps a target object and lets you intercept fundamental operations (get, set, delete, and more) via traps, enabling powerful meta-programming patterns like validation, logging, and reactivity — the foundation of frameworks like Vue 3's reactivity system.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#proxy)

---
[← WeakSet](./weakset.md) | [Section Home](./README.md) | [Reflect →](./reflect.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
