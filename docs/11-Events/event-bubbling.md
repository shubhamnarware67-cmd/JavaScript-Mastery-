# Event Bubbling

> Section: Events · Owner: **Shubham Narware**

## Definition
Event bubbling is the default phase of event propagation where an event, after firing on its target element, "bubbles up" through each ancestor element in turn, up to `document`.

## History
Part of the DOM event model standardized in the early 2000s (DOM Level 2 Events), alongside the capturing phase.

## Why Event Bubbling Matters
It's what makes event delegation possible (see event-delegation.md), and explains why a click "on a child" is also visible to listeners on its parents unless stopped.

## Syntax
```js
parent.addEventListener("click", () => console.log("parent"));
child.addEventListener("click", () => console.log("child"));
// Clicking child logs: "child" then "parent" (bubbles upward)
```

## Types
Not applicable — bubbling is one of the two propagation phases (the other being capturing).

## Examples
```js
document.querySelector("#outer").addEventListener("click", () => console.log("Outer clicked"));
document.querySelector("#inner").addEventListener("click", () => console.log("Inner clicked"));
// Clicking #inner logs: "Inner clicked" then "Outer clicked"
```

## Memory Diagram
```
        window
          │  ▲ bubbling goes UP (target → window)
       document
          │  ▲
        <body>
          │  ▲
       <div id="outer">
          │  ▲
     <button id="inner"> ◄── event originates here (the actual target)
```

## Flowchart
```
Event fires on the actual target element (e.g. the clicked button)
        │
Runs listeners registered on the target itself
        │
Bubbles up to its parent — runs any listeners there too
        │
Continues bubbling up through EVERY ancestor, all the way to `document`/`window`
        │
Unless `event.stopPropagation()` was called somewhere along the way
```

## Internal Working
By default, `addEventListener`'s third argument (`capture`) is `false`, meaning the listener runs during the **bubbling** phase — after the event has already reached its actual target and started moving back up through ancestors.

## Beginner Example
```js
document.body.addEventListener("click", () => console.log("Body sees the click"));
document.querySelector("button").addEventListener("click", () => console.log("Button clicked"));
// Clicking the button logs "Button clicked" then "Body sees the click"
```

## Intermediate Example
```js
// Stopping bubbling with stopPropagation()
document.querySelector("#outer").addEventListener("click", () => console.log("Outer"));
document.querySelector("#inner").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Inner (bubbling stopped here)");
});
// Clicking #inner logs ONLY "Inner (bubbling stopped here)"
```

## Advanced Example
```js
// Bubbling enables detecting clicks anywhere within a region via one listener
document.querySelector("#toolbar").addEventListener("click", (e) => {
  console.log("Something inside the toolbar was clicked:", e.target);
});
// Works for ANY current or future child button inside #toolbar
```

## Real World Example
```js
// Closing a modal by clicking anywhere on its dark overlay background,
// while clicks INSIDE the modal content don't close it (using stopPropagation)
overlay.addEventListener("click", () => closeModal());
modalContent.addEventListener("click", (e) => e.stopPropagation());
```

## Industry Example
```js
// Analytics/tracking scripts often attach ONE listener at a high-level
// container and rely on bubbling (plus checking event.target) to catch
// clicks anywhere within that section, rather than instrumenting every element.
```

## Interview Questions
See full list → [interview.md](./interview.md#event-bubbling)
1. What is event bubbling, in your own words?
2. In what order do listeners on nested elements fire during bubbling?
3. What does `event.stopPropagation()` do?
4. Why is bubbling the default phase for `addEventListener`?
5. Give a real UI pattern that relies specifically on bubbling behavior.

## MCQs
See full list → [mcq.md](./mcq.md#event-bubbling)
1. During bubbling, an event moves: (a) From window down to target (b) **From target up to window** (c) Sideways only (d) Nowhere → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#event-bubbling)
1. **(Easy)** Attach click listeners to a parent and child, observing the bubbling order in the console.
2. **(Medium)** Use `stopPropagation()` to prevent a child's click from also triggering the parent's listener.
3. **(Hard)** Build a modal component where clicking the overlay closes it, but clicking modal content does not (using bubbling + `stopPropagation`).

## Assignments
- [ ] Diagram the bubbling path for a 4-level nested element structure.
- [ ] Explain, with a code example, a real bug that could occur if `stopPropagation()` is used carelessly.

## Mini Project
Build a "Dismissible Overlay Modal": clicking the dark background overlay closes the modal, while clicking inside the modal's content box does not, using bubbling and `stopPropagation()`.

## Common Mistakes
- Forgetting that a click on a child ALSO triggers listeners on all its ancestors (via bubbling), causing unintended double-handling.
- Overusing `stopPropagation()` defensively, which can silently break other legitimate listeners relying on bubbling elsewhere in the app.

## Best Practices
- Rely on bubbling deliberately for patterns like event delegation, rather than fighting against it constantly with `stopPropagation()`.
- Use `stopPropagation()` sparingly and only when there's a clear, specific reason to prevent further propagation.

## Optimization Tips
- Bubbling-based event delegation (one listener on a container) is more memory-efficient than attaching identical listeners to many individual child elements.

## Summary
Event bubbling propagates an event from its actual target upward through every ancestor element — the default behavior for `addEventListener`, and the mechanism that makes event delegation possible.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#event-bubbling)

---
[← Events](./events.md) | [Section Home](./README.md) | [Event Capturing →](./event-capturing.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
