# Events

> Section: Events · Owner: **Shubham Narware**

## Definition
An event is an action the browser detects — a click, key press, form submission, page load, etc. — that JavaScript can "listen" for and respond to via event handlers.

## History
The event system has existed since early browsers; `addEventListener` (allowing multiple handlers per event, and capture/bubble control) was standardized in the early 2000s, replacing older inline/`onclick`-property-only approaches.

## Why Events Matter
Nearly all interactivity on a web page — button clicks, form submissions, keyboard shortcuts — is built on the event system.

## Syntax
```js
element.addEventListener("click", function (event) {
  // handle the event
});
```

## Types (common event categories)
| Category | Examples |
|---|---|
| Mouse | `click`, `dblclick`, `mouseenter`, `mousemove` |
| Keyboard | `keydown`, `keyup`, `keypress` |
| Form | `submit`, `change`, `input`, `focus`, `blur` |
| Window/Document | `load`, `resize`, `scroll`, `DOMContentLoaded` |

## Examples
```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

## Memory Diagram
Not applicable — events are runtime occurrences, not persistent memory structures (though listener callbacks are functions kept in memory until removed).

## Flowchart
```
User interacts with the page (click, type, etc.)
        │
Browser detects the corresponding event
        │
Any registered listeners for that event on the target element?
        │
       Yes ──► Call each listener function with an Event object
        │
        No ──► Nothing happens
```

## Internal Working
`addEventListener` registers a callback the browser will invoke whenever the specified event occurs on that element; multiple listeners can be attached to the same event on the same element, and all will run (in registration order) when it fires.

## Beginner Example
```js
document.querySelector("#btn").addEventListener("click", () => {
  alert("You clicked the button!");
});
```

## Intermediate Example
```js
// Reading form input changes live
const input = document.querySelector("#name");
input.addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});
```

## Advanced Example
```js
// Removing a listener requires a NAMED function reference
function handleClick() {
  console.log("Clicked");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick); // only works with the SAME function reference
```

## Real World Example
```js
// Preventing default form submission to handle it via JS instead
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted via JS, page did not reload");
});
```

## Industry Example
```js
// Analytics tracking commonly attaches listeners to key UI interactions
document.querySelectorAll(".track-click").forEach(el => {
  el.addEventListener("click", () => sendAnalyticsEvent(el.dataset.eventName));
});
```

## Interview Questions
See full list → [interview.md](./interview.md#events)
1. What is the difference between `addEventListener` and setting an `onclick` property directly?
2. Can multiple listeners be attached to the same event on the same element? What happens?
3. Why does removing a listener require the exact same function reference?
4. What does `event.preventDefault()` do, and give a real use case?
5. What information does the `Event` object passed to a handler contain?

## MCQs
See full list → [mcq.md](./mcq.md#events)
1. Which method attaches multiple listeners cleanly to one event? (a) `onclick =` (b) **`addEventListener`** (c) `setAttribute` (d) `dispatchEvent` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#events)
1. **(Easy)** Attach a click listener to a button that logs a message.
2. **(Medium)** Attach and later remove a listener using a named function reference.
3. **(Hard)** Prevent a form's default submission and instead validate and log its field values via JS.

## Assignments
- [ ] List 5 different event types across mouse, keyboard, and form categories.
- [ ] Explain, with an example, why `onclick = fn1; onclick = fn2;` overwrites rather than adds a second listener, unlike `addEventListener`.

## Mini Project
Build a small "Live Character Counter": an input field where typing updates a counter showing remaining characters out of a max limit, using the `input` event.

## Common Mistakes
- Using inline `onclick="..."` HTML attributes instead of `addEventListener` in modern code.
- Forgetting `removeEventListener` requires the exact same function reference used in `addEventListener` (anonymous functions can't be removed this way).
- Forgetting `event.preventDefault()` when JS should fully control form submission behavior.

## Best Practices
- Prefer `addEventListener`/`removeEventListener` over inline HTML event attributes or overwriting `.onclick`.
- Keep named function references for listeners you'll need to remove later.

## Optimization Tips
- For many similar elements (e.g. list items), consider event delegation (see event-delegation.md) instead of attaching a separate listener to each one.

## Summary
Events let JavaScript respond to user and browser actions via `addEventListener`, forming the foundation of nearly all interactive web behavior — understanding listener registration, removal, and the `Event` object is essential groundwork before tackling bubbling, capturing, and delegation.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#events)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Event Bubbling →](./event-bubbling.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
