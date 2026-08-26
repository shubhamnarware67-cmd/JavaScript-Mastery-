# Event Capturing

> Section: Events · Owner: **Shubham Narware**

## Definition
Event capturing (the "capture phase") is the first phase of event propagation, where an event travels **downward** from `window`/`document` toward the actual target element, before the bubbling phase begins.

## History
Standardized alongside bubbling in DOM Level 2 Events (early 2000s) — capturing was actually part of Netscape's original event model, while bubbling came from Internet Explorer's; the W3C standard unified both into a single three-phase model.

## Why Event Capturing Matters
It lets you intercept an event on an ancestor **before** it ever reaches the actual target or bubbles back up — useful for certain guard/logging patterns, though used far less often than bubbling in everyday code.

## Syntax
```js
element.addEventListener("click", handler, true); // true = capture phase
element.addEventListener("click", handler, { capture: true }); // equivalent, modern syntax
```

## Types
Not applicable — capturing is one of the two propagation phases (the other being bubbling, which is the default).

## Examples
```js
document.querySelector("#outer").addEventListener("click", () => console.log("Outer (capture)"), true);
document.querySelector("#inner").addEventListener("click", () => console.log("Inner (bubble, default)"));
// Clicking #inner logs: "Outer (capture)" FIRST, then "Inner (bubble, default)"
```

## Memory Diagram
```
        window
          │  ▼ capturing goes DOWN (window → target)
       document
          │  ▼
        <body>
          │  ▼
       <div id="outer">
          │  ▼
     <button id="inner"> ◄── target reached, then bubbling begins going back UP
```

## Flowchart
```
Event occurs (e.g. click)
        │
CAPTURE PHASE: starts at window, moves DOWN through ancestors toward the target
   (only listeners registered with capture:true run here)
        │
Reaches the actual target element — target phase listeners run
        │
BUBBLE PHASE: moves back UP from target through ancestors to window
   (default-phase listeners run here)
```

## Internal Working
Every event propagates through all 3 phases (capture → target → bubble) regardless of whether any listeners are actually registered for the capture phase — `addEventListener`'s third argument simply decides WHICH phase a particular listener responds to, not whether capturing happens at all.

## Beginner Example
```js
document.body.addEventListener("click", () => console.log("Body capture"), true);
document.querySelector("button").addEventListener("click", () => console.log("Button (bubble)"));
// Clicking the button logs "Body capture" first, then "Button (bubble)"
```

## Intermediate Example
```js
// Using capture to intercept and potentially stop an event before it reaches its target
document.querySelector("#form").addEventListener("submit", (e) => {
  if (!isReady) {
    e.stopPropagation(); // stops it here, in the capture phase, before reaching the target's own listener
    console.log("Submission blocked early via capture phase");
  }
}, true);
```

## Advanced Example
```js
// Demonstrating the full 3-phase order explicitly
outer.addEventListener("click", () => console.log("1: outer capture"), true);
inner.addEventListener("click", () => console.log("2: inner capture"), true);
inner.addEventListener("click", () => console.log("3: inner bubble (target)"));
outer.addEventListener("click", () => console.log("4: outer bubble"));
// Clicking inner logs, in order: 1, 2, 3, 4
```

## Real World Example
```js
// Global "escape key closes any open modal" handlers are sometimes
// registered in the capture phase on `document` to reliably intercept
// the key event early, before it reaches deeply nested focused elements.
```

## Industry Example
```js
// Some analytics/monitoring libraries attach capture-phase listeners
// at the document level to guarantee they observe EVERY event,
// even ones that later call stopPropagation() during the bubble phase.
```

## Interview Questions
See full list → [interview.md](./interview.md#event-capturing)
1. What is the capture phase, and in what order does it run relative to bubbling?
2. How do you register a listener for the capture phase specifically?
3. Why might a capture-phase listener be useful even though bubbling is the default?
4. Do ALL events go through the capture phase, even if no capture listeners exist?
5. What is the correct order of all 3 propagation phases?

## MCQs
See full list → [mcq.md](./mcq.md#event-capturing)
1. To register a capture-phase listener, you pass: (a) `false` as the 3rd argument (b) **`true` as the 3rd argument** (c) Nothing extra (d) A special event name → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#event-capturing)
1. **(Easy)** Register a capture-phase listener on a parent and a normal (bubble-phase) listener on a child, observing the order.
2. **(Medium)** Demonstrate all 3 phases (capture, target, bubble) firing in the correct order with 4 listeners.
3. **(Hard)** Use a capture-phase listener to intercept and conditionally stop an event before it reaches a deeply nested target.

## Assignments
- [ ] Diagram the full 3-phase propagation path (capture → target → bubble) for a nested element structure.
- [ ] Explain, with a code example, a scenario where capture-phase interception is genuinely useful.

## Mini Project
Build a small demo page with 3 nested `<div>`s, each logging both a capture-phase and bubble-phase message on click, to visually confirm the full propagation order.

## Common Mistakes
- Forgetting the third argument entirely (defaults to bubble-phase, `false`), then being confused about listener execution order.
- Assuming capturing is rare/special and never happens unless explicitly used — in reality, ALL events pass through the capture phase regardless.

## Best Practices
- Reserve capture-phase listeners for genuinely specific needs (early interception, guaranteed observation); default to bubble-phase (the normal `addEventListener` behavior) otherwise.
- Document clearly when a capture-phase listener is used, since it's less common and can surprise other developers reading the code.

## Optimization Tips
- No general performance benefit to capturing over bubbling — the choice is purely about WHEN in the propagation sequence you need to intercept the event.

## Summary
Event capturing is the first phase of event propagation, moving from `window` down to the target before bubbling begins — registered via `addEventListener`'s capture option, and useful for early interception, though far less commonly used than the default bubbling phase.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#event-capturing)

---
[← Event Bubbling](./event-bubbling.md) | [Section Home](./README.md) | [Event Delegation →](./event-delegation.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
