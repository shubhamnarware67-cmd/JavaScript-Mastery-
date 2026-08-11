# Design Patterns — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### Design Patterns {#design-patterns}
1. **What's the difference between creational, structural, and behavioral patterns?** Creational patterns control object creation (Singleton, Factory); structural patterns compose objects/classes (Adapter); behavioral patterns manage communication between objects (Observer).
2. **Why might Singleton be considered an anti-pattern in some contexts?** It introduces global state, making unit testing harder and creating hidden coupling between unrelated parts of code.
3. **How does JavaScript's prototype-based nature change classic OOP pattern implementations?** First-class functions often replace what other languages need dedicated classes for (e.g., Factory as a simple function).
4. **What problem does the Observer pattern solve?** Decoupling a subject's state changes from the many observers that need to react to them.
5. **How do MVC and MVVM differ in connecting the view to state?** MVC requires a Controller to manually update the View; MVVM uses reactive data binding so the View updates automatically.

### Singleton {#singleton}
1. **Why might Singleton be considered an anti-pattern for testing?** Global shared state can leak between tests, making them order-dependent or unpredictable unless reset carefully.
2. **How does ES Module caching naturally provide singleton behavior?** A module's top-level code runs only once no matter how many times it's imported, so an exported object is inherently a singleton.
3. **What problem does Singleton solve for a database connection pool?** Prevents creating multiple redundant connection pools, ensuring one shared, efficient resource.
4. **How would you implement Singleton with a private static field?** Use `static #instance` and a `static getInstance()` method that lazily creates the instance once.
5. **What's a downside of overusing Singletons?** Increased global coupling and reduced testability, making code harder to reason about in isolation.

### Factory {#factory}
1. **What problem does Factory solve vs calling `new SomeClass()` everywhere?** Centralizes creation logic so callers don't need to know internal construction details, making changes easier later.
2. **What's the difference between "Simple Factory" and "Factory Method"?** Simple Factory is a single function; Factory Method is typically a method (often overridden by subclasses) controlling what gets created.
3. **How does JavaScript's first-class functions simplify Factory patterns?** A plain function can return differently-shaped objects without needing a dedicated Factory class.
4. **When would you choose Factory over a Constructor/class?** When creation involves conditional logic, defaults, or validation that shouldn't be duplicated at every call site.
5. **What is an Abstract Factory?** A factory that creates families of related factories/objects, useful when multiple related object types need consistent creation logic.

### Observer {#observer}
1. **How does `addEventListener` relate to the Observer pattern?** It's a large-scale, built-in implementation — the DOM element is the subject, and registered callbacks are observers.
2. **What's the difference between classic Observer and Pub/Sub?** Observer has the subject directly manage its observer list; Pub/Sub decouples further through a separate event channel/broker.
3. **Why should `subscribe()` return an "unsubscribe" function?** To let observers clean up and avoid memory leaks from listeners that outlive their relevance.
4. **What could go wrong if observers are never unsubscribed?** Memory leaks — the subject keeps referencing callbacks (and anything they close over) indefinitely.
5. **How does Observer support loose coupling?** The subject doesn't need to know what observers do with notifications, only that it must notify them.

### MVC {#mvc}
1. **What's each layer's responsibility, and what should it NOT do?** Model: data/logic, no UI knowledge. View: presentation, no business logic. Controller: input handling, coordinates Model/View.
2. **Why should the Model have no knowledge of the View?** So it can be tested and reused independently of any specific UI implementation.
3. **How does MVC help testability?** Business logic (Model) can be tested in isolation without needing to render or simulate UI.
4. **What's a common criticism of strict MVC in complex UIs?** Manual render calls become tedious and error-prone as interactivity grows, motivating reactive alternatives like MVVM.
5. **How does MVC relate to MVVM?** MVVM evolves MVC's Controller into a ViewModel that automatically syncs with the View via data binding, eliminating manual render calls.

### MVVM {#mvvm}
1. **What's the key difference between MVC's Controller and MVVM's ViewModel?** The Controller manually updates the View; the ViewModel exposes reactive properties the View binds to automatically.
2. **How does data binding eliminate manual `render()` calls?** A reactivity system tracks dependencies and re-renders only the affected View parts when bound data changes.
3. **What mechanism enables reactivity in frameworks like Vue?** `Proxy`-based property interception (Vue 3) or dirty-checking/change detection (Angular).
4. **What is a "computed property"?** A ViewModel property automatically derived from other properties, recalculated when its dependencies change.
5. **Why might MVVM fit highly interactive UIs better than MVC?** It removes the boilerplate of manually keeping the View in sync, which becomes unwieldy as interactivity grows.

---
[← Section Home](./README.md)
