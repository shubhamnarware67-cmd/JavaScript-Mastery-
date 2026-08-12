# Observer

> Section: Design Patterns · Owner: **Shubham Narware**

## Definition
The Observer pattern defines a one-to-many relationship where a "subject" maintains a list of "observers" (subscribers) and notifies them automatically whenever its state changes.

## History
One of the original **1994 Gang of Four** behavioral patterns, the Observer pattern is deeply embedded in JavaScript's very foundation — the browser's DOM event system (`addEventListener`) is itself a large-scale implementation of this pattern.

## Why Observer Matters
It decouples the object whose state changes (the subject) from the objects that need to react to those changes (the observers), so they don't need direct references to each other — essential for scalable event-driven architectures.

## Syntax
```js
class EventEmitter {
  listeners = {};
  on(event, callback) {
    (this.listeners[event] ??= []).push(callback);
  }
  emit(event, data) {
    this.listeners[event]?.forEach((cb) => cb(data));
  }
}
```

## Types (related patterns)
| Related concept | Difference |
|---|---|
| Observer | Subject directly manages and notifies its list of observers |
| Pub/Sub | Publishers and subscribers communicate through a separate event channel/broker, fully decoupled |
| DOM Events | Browser's built-in Observer-like system (`addEventListener`) |

## Examples
```js
const emitter = new EventEmitter();
emitter.on("userLoggedIn", (user) => console.log(`${user.name} logged in`));
emitter.emit("userLoggedIn", { name: "Alex" });
```

## Memory Diagram
```
Subject (EventEmitter)
  listeners: {
    "userLoggedIn": [callback1, callback2, ...]
  }
        │
emit("userLoggedIn", data) ──► calls every registered callback with data
```

## Flowchart
```
Observer registers interest: subject.on(event, callback)
        │
Subject stores callback in its listeners list for that event
        │
Some state change happens ──► subject.emit(event, data)
        │
Subject loops through all registered callbacks for that event, calling each
```

## Internal Working
The subject holds no knowledge of *what* its observers do with the notification — it simply calls each registered callback, achieving loose coupling; this is exactly how the DOM's `element.addEventListener("click", handler)` works under the hood.

## Beginner Example
```js
const emitter = new EventEmitter();
emitter.on("greet", (name) => console.log(`Hello, ${name}`));
emitter.emit("greet", "Shubham");
```

## Intermediate Example
```js
class Stock {
  #price;
  #observers = [];
  subscribe(cb) { this.#observers.push(cb); }
  setPrice(newPrice) {
    this.#price = newPrice;
    this.#observers.forEach((cb) => cb(newPrice));
  }
}
```

## Advanced Example
```js
class Store {
  #state = {};
  #listeners = new Set();
  subscribe(listener) {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener); // unsubscribe function
  }
  setState(update) {
    this.#state = { ...this.#state, ...update };
    this.#listeners.forEach((l) => l(this.#state));
  }
}
```

## Real World Example
```js
// Every DOM event listener you've ever written is an Observer pattern:
button.addEventListener("click", () => console.log("Clicked!"));
```

## Industry Example
```js
// State management libraries like Redux are built entirely around
// the Observer pattern: components "subscribe" to the store and
// re-render whenever the store's state changes.
```

## Interview Questions
See full list → [interview.md](./interview.md#observer)
1. How does the DOM's `addEventListener` relate to the Observer pattern?
2. What's the difference between the classic Observer pattern and Pub/Sub?
3. Why is it important for a `subscribe()` method to return an "unsubscribe" function?
4. What could go wrong if observers are never unsubscribed?
5. How does the Observer pattern support loose coupling between components?

## MCQs
See full list → [mcq.md](./mcq.md#observer)
1. The Observer pattern primarily solves: (a) Object creation (b) **One-to-many state change notification** (c) Memory management (d) Data serialization → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#observer)
1. **(Easy)** Implement a basic `EventEmitter` with `on()` and `emit()` methods.
2. **(Medium)** Add an `off()` (unsubscribe) method to the `EventEmitter`.
3. **(Hard)** Build a simple reactive `Store` class where multiple components can subscribe to state changes and unsubscribe cleanly.

## Assignments
- [ ] Explain, with an example, why forgetting to unsubscribe an observer can cause a memory leak.
- [ ] Compare the Observer pattern to simply calling functions directly — what's gained by decoupling them?

## Mini Project
Build a small "Live Stock Ticker": a `Stock` subject that notifies multiple subscribed "display" observers whenever its price changes, each rendering the price differently.

## Common Mistakes
- Forgetting to provide (or call) an unsubscribe mechanism, causing memory leaks from listeners that outlive their relevance.
- Letting observers directly mutate the subject's internal state instead of only reacting to notifications.
- Notifying observers with too little or ambiguous data, forcing them to re-fetch state themselves.

## Best Practices
- Always provide a way to unsubscribe/remove an observer to avoid memory leaks and stale callbacks.
- Keep the data passed to observers self-contained and clear, avoiding the need for observers to query the subject further.

## Optimization Tips
- For very frequent state changes (e.g., mouse movement), consider debouncing or throttling notifications to observers to avoid excessive re-renders or callback invocations.

## Summary
The Observer pattern lets a subject notify many independent observers whenever its state changes, decoupling the two — the foundational idea behind DOM events, Node's `EventEmitter`, and state management libraries like Redux.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#observer)

---
[← Factory](./factory.md) | [Section Home](./README.md) | [MVC →](./mvc.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
