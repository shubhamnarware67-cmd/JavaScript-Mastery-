# Design Patterns

> Section: Design Patterns · Owner: **Shubham Narware**

## Definition
Design patterns are reusable, general solutions to common software design problems — proven templates for structuring code that make it more maintainable, scalable, and understandable to other developers.

## History
Popularized by the "Gang of Four" book *Design Patterns: Elements of Reusable Object-Oriented Software* (**1994**), originally rooted in object-oriented languages like C++ and Java, later widely adapted into JavaScript despite its more flexible, prototype-based nature.

## Why Design Patterns Matter
They give developers a shared vocabulary ("just use a singleton here") and battle-tested solutions to recurring problems, instead of everyone reinventing ad-hoc structures for the same challenges.

## Syntax
```js
// Design patterns aren't language syntax — they're structural conventions,
// illustrated through the specific pattern topics in this section.
```

## Types (broad categories)
| Category | Purpose | Examples |
|---|---|---|
| Creational | Control object creation | Singleton, Factory |
| Structural | Compose objects/classes | Adapter, Decorator |
| Behavioral | Manage communication between objects | Observer, Strategy |
| Architectural | Structure entire applications | MVC, MVVM |

## Examples
```js
// A Singleton ensures only one instance exists
class Database {
  static instance;
  static getInstance() {
    if (!Database.instance) Database.instance = new Database();
    return Database.instance;
  }
}
```

## Memory Diagram
```
Design Pattern = a named, reusable STRUCTURE for solving a problem
                 not a specific block of code, but a blueprint
                 applied differently depending on context
```

## Flowchart
```
Identify a recurring design problem
        │
Is there a known pattern for this? ──Yes──► Apply/adapt that pattern
        │ No
        ▼
Design a custom solution (may become a new pattern if reused often)
```

## Internal Working
Patterns aren't copy-pasteable code — they're conceptual templates adapted to each language's idioms; JavaScript's prototype-based, first-class-function nature means some classic OOP patterns (like Factory) look quite different here than in Java or C++.

## Beginner Example
```js
// Factory pattern: a function that creates objects without `new`
function createUser(name, role) {
  return { name, role, createdAt: new Date() };
}
```

## Intermediate Example
```js
// Observer pattern: objects subscribe to and react to events
class EventEmitter {
  listeners = {};
  on(event, cb) { (this.listeners[event] ??= []).push(cb); }
  emit(event, data) { this.listeners[event]?.forEach(cb => cb(data)); }
}
```

## Advanced Example
```js
// MVC-style separation: Model (data), View (UI), Controller (logic)
class TodoModel { constructor() { this.todos = []; } }
class TodoView { render(todos) { /* update DOM */ } }
class TodoController {
  constructor(model, view) { this.model = model; this.view = view; }
  addTodo(text) {
    this.model.todos.push(text);
    this.view.render(this.model.todos);
  }
}
```

## Real World Example
```js
// React's component architecture borrows heavily from MVC/MVVM
// ideas, separating state (model-like), rendering (view), and
// event handlers (controller-like logic).
```

## Industry Example
```js
// Most large-scale frontend and backend codebases document which
// design patterns they use in their architecture docs, so new
// engineers can quickly understand the codebase's structure.
```

## Interview Questions
See full list → [interview.md](./interview.md#design-patterns)
1. What is the difference between creational, structural, and behavioral design patterns?
2. Why might a Singleton pattern be considered an anti-pattern in some contexts?
3. How does JavaScript's prototype-based nature change how classic OOP patterns are implemented?
4. What problem does the Observer pattern solve?
5. How do MVC and MVVM differ in how they connect the view to application state?

## MCQs
See full list → [mcq.md](./mcq.md#design-patterns)
1. Which category does the Singleton pattern belong to? (a) Structural (b) Behavioral (c) **Creational** (d) Architectural → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#design-patterns)
1. **(Easy)** Identify which design pattern is used in a given short code snippet.
2. **(Medium)** Implement a simple Factory function for creating different shape objects.
3. **(Hard)** Combine two patterns (e.g., Singleton + Observer) to build a simple global event bus.

## Assignments
- [ ] Explain, with an example, why overusing design patterns can sometimes make code harder to understand rather than easier.
- [ ] Pick a small feature you've built and identify which design pattern (if any) it resembles.

## Mini Project
Build a small "Pattern Playground": implement Singleton, Factory, and Observer patterns each in a minimal working example, with comments explaining what problem each solves.

## Common Mistakes
- Forcing a design pattern onto a problem that doesn't need that level of structure ("pattern overuse").
- Confusing similar patterns (e.g., Factory vs. Constructor function) due to surface-level code similarity.
- Applying classic OOP pattern implementations rigidly without adapting them to JavaScript's idioms.

## Best Practices
- Choose a pattern because it solves a real, recurring problem in your codebase — not just because it's "best practice" in the abstract.
- Document which patterns are used in a codebase's architecture so new contributors understand the structure quickly.

## Optimization Tips
- Favor simpler, pattern-free solutions for small/simple features; reserve formal patterns for genuinely complex, recurring structural problems.

## Summary
Design patterns are reusable, proven solutions to common software design problems, spanning creational, structural, behavioral, and architectural categories — valuable for communication and maintainability, but only when applied to problems that genuinely warrant that structure.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#design-patterns)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Singleton →](./singleton.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
