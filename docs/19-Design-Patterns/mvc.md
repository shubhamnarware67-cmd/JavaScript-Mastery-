# MVC

> Section: Design Patterns · Owner: **Shubham Narware**

## Definition
MVC (Model-View-Controller) is an architectural pattern that separates an application into three interconnected parts: the **Model** (data/state), the **View** (UI/presentation), and the **Controller** (handles input and coordinates Model/View).

## History
Originating from **Smalltalk in the late 1970s**, MVC became foundational to web frameworks in the 2000s (Ruby on Rails, ASP.NET MVC) and heavily influenced early JavaScript frameworks like Backbone.js.

## Why MVC Matters
It separates concerns clearly: data logic, presentation, and user-input handling each live in their own layer, making large applications easier to reason about, test, and maintain.

## Syntax
```js
class Model { /* data + business logic */ }
class View { render(data) { /* update UI */ } }
class Controller {
  constructor(model, view) { this.model = model; this.view = view; }
  handleInput(input) { /* update model, then tell view to render */ }
}
```

## Types (component responsibilities)
| Component | Responsibility |
|---|---|
| Model | Holds data and business logic; notifies of changes |
| View | Renders the UI based on Model data; has no business logic |
| Controller | Receives user input, updates the Model, tells the View to update |

## Examples
```js
class TodoModel {
  todos = [];
  addTodo(text) { this.todos.push(text); }
}
class TodoView {
  render(todos) { console.log("Todos:", todos); }
}
class TodoController {
  constructor(model, view) { this.model = model; this.view = view; }
  addTodo(text) {
    this.model.addTodo(text);
    this.view.render(this.model.todos);
  }
}
```

## Memory Diagram
```
User Input ──► Controller ──► updates ──► Model
                                            │
                            Model change triggers
                                            ▼
                                          View (re-renders)
```

## Flowchart
```
User interacts with the UI (click, type, etc.)
        │
Controller receives the input event
        │
Controller updates the Model (data/state)
        │
Model change is reflected by telling the View to re-render
        │
View displays the updated state to the user
```

## Internal Working
The Controller is the only layer allowed to know about both the Model and the View — the Model should have no knowledge of the View (so it can be tested/reused independently), and the View should ideally have no business logic, only presentation logic.

## Beginner Example
```js
class CounterModel {
  count = 0;
  increment() { this.count++; }
}
const model = new CounterModel();
model.increment();
console.log(model.count); // 1
```

## Intermediate Example
```js
class CounterView {
  render(count) { document.getElementById("display").textContent = count; }
}
class CounterController {
  constructor(model, view) { this.model = model; this.view = view; }
  handleIncrementClick() {
    this.model.increment();
    this.view.render(this.model.count);
  }
}
```

## Advanced Example
```js
// A more complete MVC-lite with change notification
class Model {
  #listeners = [];
  onChange(cb) { this.#listeners.push(cb); }
  notify() { this.#listeners.forEach((cb) => cb()); }
}
```

## Real World Example
```js
// Ruby on Rails and Django both organize backend web apps strictly
// around MVC: routes map to Controllers, which use Models to fetch
// data, and render Views (templates) with that data.
```

## Industry Example
```js
// Early JavaScript frameworks like Backbone.js and Angular.js (1.x)
// explicitly implemented MVC (or MV* variants) as their core architecture.
```

## Interview Questions
See full list → [interview.md](./interview.md#mvc)
1. What is each layer (Model, View, Controller) responsible for, and what should it NOT do?
2. Why should the Model have no direct knowledge of the View?
3. How does MVC help with testability compared to a tangled, all-in-one approach?
4. What's a common criticism of strict MVC in complex, highly interactive UIs?
5. How does MVC relate to more modern patterns like MVVM?

## MCQs
See full list → [mcq.md](./mcq.md#mvc)
1. In MVC, which layer directly handles user input? (a) Model (b) View (c) **Controller** (d) None of them → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#mvc)
1. **(Easy)** Build a minimal `Model`/`View`/`Controller` set for a simple counter.
2. **(Medium)** Extend the counter MVC example to support both increment and decrement actions.
3. **(Hard)** Add a change-notification system so the View automatically re-renders whenever the Model's state changes, without the Controller manually calling `render()`.

## Assignments
- [ ] Explain why keeping business logic out of the View makes an application easier to test.
- [ ] Diagram (in text/comments) the flow of a button click through Controller → Model → View in an MVC app.

## Mini Project
Build a small "Todo List" app strictly following MVC: a `TodoModel` for data, `TodoView` for rendering, and `TodoController` handling add/remove actions.

## Common Mistakes
- Letting the View directly modify the Model, bypassing the Controller and breaking separation of concerns.
- Putting business logic inside the View (e.g., data validation in the render function).
- Tightly coupling the Model to a specific View implementation, making it hard to reuse or test independently.

## Best Practices
- Keep the Model completely UI-agnostic — it should work the same whether rendered to the DOM, console, or a test harness.
- Have the Controller be the single entry point for all user-triggered state changes.

## Optimization Tips
- For highly interactive UIs with frequent updates, consider a more reactive variant (like MVVM) where the View automatically syncs with Model changes instead of requiring manual `render()` calls after every update.

## Summary
MVC separates an application into Model (data), View (presentation), and Controller (input handling and coordination) — a foundational architectural pattern that improves testability and maintainability by keeping concerns cleanly separated.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#mvc)

---
[← Observer](./observer.md) | [Section Home](./README.md) | [MVVM →](./mvvm.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
