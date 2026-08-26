# Events — Interview Questions

> Owner: **Shubham Narware**

### Events {#events}
1. **`addEventListener` vs `onclick` property?** — `addEventListener` allows multiple listeners on the same event; setting `.onclick` directly overwrites any previous handler.
2. **Multiple listeners on the same event/element?** — Yes, all registered listeners run, in registration order.
3. **Why does removing a listener need the same function reference?** — `removeEventListener` matches by reference; anonymous functions can't be matched/removed later.
4. **`event.preventDefault()` use case?** — Stopping a form's default page-reload submission to handle it via JS instead.
5. **What's in the Event object?** — Info like `target`, `type`, coordinates (for mouse events), key info (for keyboard events), and methods like `preventDefault()`/`stopPropagation()`.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Event Bubbling {#event-bubbling}
1. **Event bubbling definition?** — An event propagating upward from its target through all ancestor elements after firing.
2. **Order of nested listener firing?** — Innermost (target) first, then progressively outward to each ancestor.
3. **What does `stopPropagation()` do?** — Prevents the event from continuing to bubble (or capture) further.
4. **Why is bubbling the default?** — Historically standardized as the default propagation direction for `addEventListener`.
5. **Real UI pattern relying on bubbling?** — Event delegation — one listener on a parent handling all child clicks.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Event Capturing {#event-capturing}
1. **Capture phase order relative to bubbling?** — Capturing happens FIRST (top-down), before the event reaches its target and then bubbles back up.
2. **Registering a capture-phase listener?** — Pass `true` (or `{capture:true}`) as the third argument to `addEventListener`.
3. **Why use capture despite bubbling being default?** — To intercept/inspect or stop an event before it reaches the target or bubbles.
4. **Do all events go through capturing?** — Yes, regardless of whether any capture-phase listeners exist.
5. **Correct 3-phase order?** — Capture → Target → Bubble.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Event Delegation {#event-delegation}
1. **What does delegation rely on?** — Event bubbling.
2. **Why more efficient than per-child listeners?** — One listener total instead of potentially thousands, saving memory and setup cost.
3. **Why does it work automatically for later-added elements?** — The listener is on the stable parent; new children's clicks still bubble up to it.
4. **Determining which child was clicked?** — Inspect `event.target` (or `event.target.closest(selector)`) inside the handler.
5. **`matches()` vs `closest()` in delegation?** — `matches()` checks the exact clicked element; `closest()` also matches ancestors, useful when the click lands on a nested child like an icon.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
