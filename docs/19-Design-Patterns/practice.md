# Design Patterns — Coding Practice

> Owner: **Shubham Narware** · Status: ✅ Complete

### Design Patterns {#design-patterns}
1. **(Easy)** Identify which design pattern is used in a given short code snippet.
2. **(Medium)** Implement a simple Factory function for creating different shape objects.
3. **(Hard)** Combine Singleton + Observer to build a simple global event bus.

### Singleton {#singleton}
1. **(Easy)** Implement a class-based Singleton and prove two instantiations return the same object.
2. **(Medium)** Implement the same Singleton behavior using a plain ES Module.
3. **(Hard)** Implement a Singleton `ConnectionPool` using a private static field.

### Factory {#factory}
1. **(Easy)** Write a factory function creating different shape objects based on a `type` argument.
2. **(Medium)** Write a factory function for notification objects with different defaults per type.
3. **(Hard)** Implement a `Dialog.create(type)` static factory method returning different dialog class instances.

### Observer {#observer}
1. **(Easy)** Implement a basic `EventEmitter` with `on()` and `emit()` methods.
2. **(Medium)** Add an `off()` (unsubscribe) method to the `EventEmitter`.
3. **(Hard)** Build a reactive `Store` class where components can subscribe/unsubscribe to state changes.

### MVC {#mvc}
1. **(Easy)** Build a minimal Model/View/Controller set for a simple counter.
2. **(Medium)** Extend the counter MVC example to support increment and decrement.
3. **(Hard)** Add change-notification so the View auto-renders without the Controller manually calling `render()`.

### MVVM {#mvvm}
1. **(Easy)** Explain MVC vs MVVM using a counter example.
2. **(Medium)** Implement a `reactive()` helper using `Proxy` that triggers a callback on property change.
3. **(Hard)** Build a two-property ViewModel with a computed `fullName` getter always reflecting latest values.

---
[← Section Home](./README.md)
