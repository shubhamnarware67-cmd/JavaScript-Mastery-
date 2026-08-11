# Singleton

> Section: Design Patterns · Owner: **Shubham Narware**

## Definition
The Singleton pattern ensures a class or module has only **one instance** throughout the application, providing a single global point of access to it.

## History
One of the original creational patterns from the **1994 Gang of Four book**, widely used across OOP languages for managing shared resources like database connections or configuration objects.

## Why Singleton Matters
It prevents accidentally creating multiple instances of something that should logically be unique — like a single app-wide configuration object or a single database connection pool.

## Syntax
```js
class Singleton {
  static instance;
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}
```

## Types (common implementations in JS)
| Approach | Notes |
|---|---|
| Class with static instance check | Classic OOP-style implementation |
| Module pattern (ES Module) | A module's top-level state is naturally singleton — imported once, shared everywhere |
| Object literal | Simplest form — just export a single object |

## Examples
```js
const AppConfig = {
  apiUrl: "https://api.example.com",
  theme: "dark",
};
export default AppConfig; // naturally a singleton via module caching
```

## Memory Diagram
```
First import of module.js ──► instance created, cached
Second import of module.js ──► SAME cached instance returned (not re-created)
```

## Flowchart
```
Code requests the Singleton instance
        │
Does an instance already exist? ──Yes──► return the existing instance
        │ No
        ▼
Create the instance, store it, then return it
```

## Internal Working
Because ES Modules only execute their top-level code **once** no matter how many times they're imported, a plain exported object or class instance from a module file naturally behaves as a singleton — this is often simpler and more idiomatic in JavaScript than the class-based approach borrowed from Java/C++.

## Beginner Example
```js
class Logger {
  static instance;
  constructor() {
    if (Logger.instance) return Logger.instance;
    this.logs = [];
    Logger.instance = this;
  }
  log(msg) { this.logs.push(msg); }
}
const logger1 = new Logger();
const logger2 = new Logger();
console.log(logger1 === logger2); // true
```

## Intermediate Example
```js
// counter.js — module-based singleton
let count = 0;
export function increment() { return ++count; }
export function getCount() { return count; }
```

## Advanced Example
```js
class ConnectionPool {
  static #instance;
  #connections = [];
  static getInstance() {
    if (!ConnectionPool.#instance) {
      ConnectionPool.#instance = new ConnectionPool();
    }
    return ConnectionPool.#instance;
  }
}
```

## Real World Example
```js
// A single Redux/global state store in a frontend app is a
// real-world Singleton — there's only ever one instance managing
// the entire application's state.
```

## Industry Example
```js
// Database connection managers in backend services are commonly
// implemented as Singletons to avoid the overhead of creating a
// new connection pool for every request.
```

## Interview Questions
See full list → [interview.md](./interview.md#singleton)
1. Why might the Singleton pattern be considered an anti-pattern in some testing scenarios?
2. How does JavaScript's ES Module caching naturally provide singleton-like behavior?
3. What problem does Singleton solve for something like a database connection pool?
4. How would you implement a Singleton using a private static field?
5. What's a downside of overusing Singletons throughout a codebase?

## MCQs
See full list → [mcq.md](./mcq.md#singleton)
1. A key characteristic of the Singleton pattern is: (a) Multiple instances allowed (b) **Exactly one instance exists** (c) No instances ever created (d) Instances are recreated on every call → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#singleton)
1. **(Easy)** Implement a class-based Singleton and prove two instantiations return the same object.
2. **(Medium)** Implement the same Singleton behavior using a plain ES Module instead of a class.
3. **(Hard)** Implement a Singleton `ConnectionPool` class using a private static field (`#instance`).

## Assignments
- [ ] Explain why Singletons can make unit testing harder, and how dependency injection can help.
- [ ] Rewrite a class-based Singleton as a module-based one, and compare the two approaches.

## Mini Project
Build a small "App Config Singleton": a single shared configuration object accessible from multiple files, demonstrating that all imports reference the exact same instance.

## Common Mistakes
- Overusing Singletons for things that don't actually need to be globally unique, creating hidden global state and tight coupling.
- Forgetting that global mutable state in a Singleton can make tests unpredictable if not reset between test runs.
- Reimplementing class-based Singletons in JavaScript when a simple ES Module would achieve the same result more idiomatically.

## Best Practices
- Prefer module-based singletons in JavaScript/ES Modules — they're simpler and more idiomatic than manually checking a static instance property.
- Reserve Singleton for genuinely global, shared resources (like a single config or connection pool), not as a default pattern for every class.

## Optimization Tips
- Lazily initialize the singleton instance only when first requested (as shown in the examples) rather than eagerly at module load time, if construction is expensive.

## Summary
The Singleton pattern guarantees only one instance of something exists app-wide — in JavaScript, this is often achieved more naturally through ES Module caching than through explicit class-based instance checks, though both approaches solve the same underlying problem.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#singleton)

---
[← Design Patterns](./design-patterns.md) | [Section Home](./README.md) | [Factory →](./factory.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
