# Factory

> Section: Design Patterns · Owner: **Shubham Narware**

## Definition
The Factory pattern uses a function (or method) to create and return objects, encapsulating the object-creation logic instead of requiring the caller to use `new` directly with a specific class.

## History
Also from the original **1994 Gang of Four** catalog, the Factory pattern adapts naturally to JavaScript thanks to first-class functions — a simple function returning an object often replaces what other languages need a dedicated "Factory class" for.

## Why Factory Matters
It centralizes and hides object-creation logic (like choosing which subtype to instantiate, or applying default values), making the calling code simpler and easier to change later without touching every call site.

## Syntax
```js
function createShape(type) {
  if (type === "circle") return { type, area: (r) => Math.PI * r * r };
  if (type === "square") return { type, area: (s) => s * s };
}
```

## Types (common variations)
| Variation | Description |
|---|---|
| Simple Factory | A single function that returns different object shapes based on input |
| Factory Method | A method (often on a class) subclasses override to control what gets created |
| Abstract Factory | A factory of factories — creates families of related objects |

## Examples
```js
function createUser(type, name) {
  const base = { name, createdAt: new Date() };
  if (type === "admin") return { ...base, role: "admin", permissions: ["all"] };
  return { ...base, role: "user", permissions: ["read"] };
}
```

## Memory Diagram
```
createShape("circle")  ──► { type: "circle", area: fn }
createShape("square")  ──► { type: "square", area: fn }
   (caller doesn't need to know the internal construction logic)
```

## Flowchart
```
Caller requests an object: factoryFn(type, ...args)
        │
Factory function decides internally which shape/class to build
        │
Constructs and configures the object (defaults, validation, etc.)
        │
Returns the finished object to the caller
```

## Internal Working
The core value of a Factory is **indirection** — callers depend only on the factory function's interface, not on the concrete class or object shape being created internally, so the internal implementation can change freely without breaking callers.

## Beginner Example
```js
function createCar(model) {
  return { model, wheels: 4, start() { console.log(`${model} started`); } };
}
const car = createCar("Tesla");
```

## Intermediate Example
```js
function createNotification(type, message) {
  const base = { message, timestamp: Date.now() };
  switch (type) {
    case "error": return { ...base, icon: "❌", priority: "high" };
    case "success": return { ...base, icon: "✅", priority: "normal" };
    default: return { ...base, icon: "ℹ️", priority: "low" };
  }
}
```

## Advanced Example
```js
class Dialog {
  static create(type) {
    switch (type) {
      case "confirm": return new ConfirmDialog();
      case "alert": return new AlertDialog();
      default: throw new Error(`Unknown dialog type: ${type}`);
    }
  }
}
```

## Real World Example
```js
// UI libraries often provide factory functions to create configured
// component instances (e.g. createIcon("home"), createButton({...}))
// instead of exposing raw constructors directly.
```

## Industry Example
```js
// ORMs (like Sequelize or Mongoose) use factory-style methods to
// construct model instances with the correct validation and defaults
// applied automatically.
```

## Interview Questions
See full list → [interview.md](./interview.md#factory)
1. What problem does the Factory pattern solve compared to calling `new SomeClass()` directly everywhere?
2. What's the difference between a "Simple Factory" and a "Factory Method"?
3. How does JavaScript's first-class function support make Factory patterns simpler than in class-heavy languages?
4. When would you choose a Factory over a Constructor function or class?
5. What is an "Abstract Factory," and when might you need one?

## MCQs
See full list → [mcq.md](./mcq.md#factory)
1. The main benefit of a Factory function is: (a) Faster performance (b) **Encapsulating and centralizing object creation logic** (c) Making objects immutable (d) Removing the need for objects entirely → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#factory)
1. **(Easy)** Write a factory function that creates different shape objects based on a `type` argument.
2. **(Medium)** Write a factory function for creating notification objects with different default properties per type.
3. **(Hard)** Implement a `Dialog.create(type)` static factory method that returns different dialog class instances.

## Assignments
- [ ] Explain why a Factory function can make future refactors easier, using an example of adding a new object "type."
- [ ] Rewrite a set of `if/else` object-creation logic as a clean factory function with a `switch` statement.

## Mini Project
Build a small "Notification Factory": a function that creates differently-styled notification objects (success, error, warning, info) with consistent shape but different defaults.

## Common Mistakes
- Overcomplicating a simple object literal into an unnecessary factory function when there's no real variability to encapsulate.
- Duplicating default-value logic across multiple call sites instead of centralizing it in one factory function.
- Confusing a Factory function with a Constructor function — a factory doesn't require `new` and can return any object shape.

## Best Practices
- Use factory functions when object creation involves conditional logic, defaults, or validation that shouldn't be duplicated at every call site.
- Keep factory functions focused — one clear responsibility (creating one kind of "thing") per factory.

## Optimization Tips
- If object creation is expensive and repeated with the same inputs, consider combining a Factory with caching/memoization to avoid redundant work.

## Summary
The Factory pattern centralizes object-creation logic behind a function or method, hiding internal construction details from callers — a pattern that fits especially naturally into JavaScript thanks to first-class functions and flexible object literals.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#factory)

---
[← Singleton](./singleton.md) | [Section Home](./README.md) | [Observer →](./observer.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
