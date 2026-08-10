# MVVM

> Section: Design Patterns · Owner: **Shubham Narware**

## Definition
MVVM (Model-View-ViewModel) is an architectural pattern where the **ViewModel** exposes data and commands from the **Model** in a form the **View** can bind to directly, automatically syncing UI and state through data binding.

## History
Introduced by Microsoft in **2005** for WPF applications, MVVM later became the conceptual backbone of modern reactive frontend frameworks like Vue and Angular, which use two-way or reactive data binding instead of MVC's manual render calls.

## Why MVVM Matters
It eliminates the manual "update the View whenever the Model changes" boilerplate required in MVC — the ViewModel's reactive properties automatically keep the View in sync through data binding.

## Syntax
```js
// Conceptual, framework-agnostic example
class ViewModel {
  #state = { count: 0 };
  #subscribers = [];
  get count() { return this.#state.count; }
  increment() {
    this.#state.count++;
    this.#subscribers.forEach((cb) => cb(this.#state));
  }
  subscribe(cb) { this.#subscribers.push(cb); }
}
```

## Types (component responsibilities)
| Component | Responsibility |
|---|---|
| Model | Raw data and business logic (same as in MVC) |
| View | Declarative UI, bound directly to ViewModel properties |
| ViewModel | Exposes Model data/commands in View-friendly form, handles binding/reactivity |

## Examples
```js
// Vue-style reactive ViewModel (conceptual)
const vm = {
  count: 0,
  increment() { this.count++; }, // View automatically re-renders on change
};
```

## Memory Diagram
```
Model (raw data) ──► ViewModel (formats/exposes data + commands)
                              │
                    Two-way binding / reactivity
                              │
                            View (auto-updates on ViewModel changes)
```

## Flowchart
```
User interacts with the View (e.g. types in an input)
        │
Data binding automatically updates the ViewModel's property
        │
ViewModel (optionally) updates the underlying Model
        │
Any other View elements bound to that property re-render automatically
        │
No manual "render()" call needed — the binding system handles it
```

## Internal Working
Unlike MVC, where the Controller must manually tell the View to re-render, MVVM relies on a **reactivity system** (like Vue's Proxy-based reactivity or Angular's change detection) that automatically tracks which View elements depend on which ViewModel properties, and updates only those elements when the data changes.

## Beginner Example
```js
// Simplified reactive counter (conceptual, framework-agnostic)
function reactive(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      onChange();
      return true;
    },
  });
}
```

## Intermediate Example
```js
const viewModel = reactive({ count: 0 }, () => {
  document.getElementById("display").textContent = viewModel.count;
});
viewModel.count++; // View updates automatically
```

## Advanced Example
```js
// Vue-like computed property pattern in a ViewModel
const vm = {
  firstName: "Ada",
  lastName: "Lovelace",
  get fullName() { return `${this.firstName} ${this.lastName}`; },
};
```

## Real World Example
```js
// In Vue, `data()` properties act as the ViewModel — template
// expressions like {{ count }} automatically re-render whenever
// `count` changes, with no manual DOM manipulation required.
```

## Industry Example
```js
// Angular's two-way data binding ([(ngModel)]) is a direct, explicit
// implementation of the MVVM pattern's core idea: View and ViewModel
// stay perfectly in sync automatically.
```

## Interview Questions
See full list → [interview.md](./interview.md#mvvm)
1. What is the key difference between MVC's Controller and MVVM's ViewModel?
2. How does data binding eliminate the need for manual `render()` calls?
3. What underlying mechanism (e.g., Proxy, dirty-checking) enables reactivity in frameworks like Vue or Angular?
4. What is a "computed property" in the context of a ViewModel?
5. Why might MVVM be considered a better fit than MVC for highly interactive, real-time UIs?

## MCQs
See full list → [mcq.md](./mcq.md#mvvm)
1. In MVVM, what automatically keeps the View updated when data changes? (a) Manual `render()` calls (b) **Data binding / reactivity system** (c) Page refresh (d) `setTimeout` polling → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#mvvm)
1. **(Easy)** Explain, in your own words, the difference between MVC and MVVM using a counter example.
2. **(Medium)** Implement a simple `reactive()` helper using `Proxy` that triggers a callback whenever a property changes.
3. **(Hard)** Build a minimal two-property ViewModel (like `firstName`/`lastName`) with a computed `fullName` getter that always reflects the latest values.

## Assignments
- [ ] Compare MVC and MVVM: which layer is responsible for keeping the View updated in each?
- [ ] Explain, with an example, what a "computed property" is and why it's useful in a ViewModel.

## Mini Project
Build a small "Reactive Form": a ViewModel-style object using `Proxy` where multiple View elements (like a live character counter and a preview) automatically update as the user types, without manual render calls.

## Common Mistakes
- Confusing MVVM's automatic reactivity with MVC's manual render-on-change approach.
- Putting too much logic directly in the View instead of exposing it as ViewModel computed properties/commands.
- Creating overly complex two-way bindings that make data flow hard to trace ("where did this value actually come from?").

## Best Practices
- Keep the ViewModel free of direct DOM manipulation — it should expose data/commands, not manipulate the UI itself.
- Use computed properties for any derived state, rather than manually recalculating and syncing it in multiple places.

## Optimization Tips
- Modern reactivity systems (like Vue 3's `Proxy`-based reactivity) only re-render the specific DOM parts that depend on changed data — leverage this by keeping ViewModel properties granular rather than one giant object.

## Summary
MVVM introduces a ViewModel layer that exposes Model data through data binding, letting the View stay automatically in sync via a reactivity system — eliminating the manual re-render boilerplate MVC requires, and forming the conceptual basis of modern frameworks like Vue and Angular.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#mvvm)

---
[← MVC](./mvc.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
