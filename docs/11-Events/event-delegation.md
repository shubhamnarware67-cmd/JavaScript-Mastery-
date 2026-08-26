# Event Delegation

> Section: Events · Owner: **Shubham Narware**

## Definition
Event delegation is a pattern where, instead of attaching a listener to every individual child element, you attach ONE listener to a shared parent and use event bubbling plus `event.target` to determine which child was actually interacted with.

## History
An informal pattern that emerged as developers understood bubbling well (early-to-mid 2000s) — not a distinct API itself, just a deliberate application of the standard event propagation model.

## Why Event Delegation Matters
It's dramatically more efficient for long or dynamically-changing lists (fewer listeners to create/manage), and automatically works for elements added to the DOM later, without needing to re-attach listeners.

## Syntax
```js
parent.addEventListener("click", (e) => {
  if (e.target.matches(".child-selector")) {
    // handle the click, knowing exactly which child was clicked
  }
});
```

## Types
Not applicable — a single pattern, though implementations vary (checking `e.target.matches()`, `e.target.closest()`, or `e.target.dataset`).

## Examples
```js
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});
```

## Memory Diagram
```
Without delegation:  <li> <li> <li> <li>   ← EACH has its own listener (N listeners)
                       │    │    │    │
With delegation:     <ul>──────────────    ← ONE listener catches all clicks via bubbling
```

## Flowchart
```
Click occurs on ANY <li> inside the <ul>
        │
Event bubbles up to the <ul> (which has the ONE listener)
        │
Listener checks: was e.target actually an <li> (or matching selector)?
        │
       Yes ──► handle it, using e.target for the specific clicked item's data
        │
        No (clicked padding/whitespace inside ul, etc.) ──► ignore
```

## Internal Working
Delegation works entirely because of event bubbling — a click on any descendant naturally bubbles up to the ancestor with the listener, where `event.target` (the actual originating element) can be inspected to determine exactly what was interacted with, regardless of how deeply nested it is.

## Beginner Example
```js
document.querySelector("#todo-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove();
  }
});
```

## Intermediate Example
```js
// Delegation automatically works for elements added LATER — no re-binding needed
const list = document.querySelector("#items");
list.addEventListener("click", (e) => {
  if (e.target.matches(".item")) console.log("Clicked:", e.target.textContent);
});
// Adding a new .item later still works with the SAME listener:
const newItem = document.createElement("li");
newItem.className = "item";
newItem.textContent = "New Item";
list.appendChild(newItem);
```

## Advanced Example
```js
// Using event.target.closest() to handle clicks on NESTED elements inside each list item
document.querySelector("#todo-list").addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn"); // handles clicks on an icon INSIDE the button too
  if (deleteBtn) {
    deleteBtn.closest("li").remove();
  }
});
```

## Real World Example
```js
// A dynamically-rendered comments section with reply/like/delete buttons
// per comment, all handled by ONE delegated listener on the container
commentsContainer.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  const commentId = e.target.closest("[data-comment-id]")?.dataset.commentId;
  if (action === "like") likeComment(commentId);
  if (action === "delete") deleteComment(commentId);
});
```

## Industry Example
```js
// Large-scale UI frameworks and vanilla-JS component libraries commonly
// use exactly this delegation pattern internally to avoid attaching
// thousands of individual listeners in large, dynamic lists (e.g. data tables).
```

## Interview Questions
See full list → [interview.md](./interview.md#event-delegation)
1. What is event delegation, and what browser behavior does it rely on?
2. Why is delegation more efficient than attaching a listener to every child?
3. Why does delegation automatically work for elements added to the DOM later?
4. How would you determine exactly which child element was clicked inside a delegated handler?
5. What's the difference between using `e.target.matches()` vs `e.target.closest()` in a delegated handler?

## MCQs
See full list → [mcq.md](./mcq.md#event-delegation)
1. Event delegation fundamentally relies on: (a) Capturing only (b) **Event bubbling** (c) Web Workers (d) Promises → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#event-delegation)
1. **(Easy)** Attach one delegated click listener to a list, logging the clicked item's text.
2. **(Medium)** Use delegation to handle a "delete" button inside each list item, removing that item.
3. **(Hard)** Build a delegated handler using `closest()` that correctly handles clicks on nested icons inside action buttons.

## Assignments
- [ ] Explain, with a code example, why delegation avoids the need to re-attach listeners to dynamically added elements.
- [ ] Compare (conceptually) the memory usage of 1000 individual listeners vs 1 delegated listener for a list of 1000 items.

## Mini Project
Build a small "Dynamic Todo List": items can be added and removed (via a delegated delete button), all handled by exactly ONE click listener on the list container.

## Common Mistakes
- Attaching individual listeners to every list item instead of using delegation, especially for large or dynamic lists.
- Checking `e.target.tagName` when the actual click landed on a nested child (like an icon inside a button) — using `.closest()` instead avoids this.
- Forgetting delegation requires checking `e.target` inside the handler — without that check, ANY click within the container triggers the logic.

## Best Practices
- Use event delegation by default for lists, tables, or any repeated/dynamic set of similar elements.
- Prefer `e.target.closest(selector)` over `e.target.matches(selector)` when the clickable content might have nested child elements (icons, spans).

## Optimization Tips
- Delegation significantly reduces memory usage and setup time for very large lists — a single listener versus potentially thousands.

## Summary
Event delegation attaches one listener to a shared ancestor, relying on bubbling and `event.target` to identify which specific descendant was interacted with — more efficient than per-item listeners and automatically compatible with dynamically added elements.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#event-delegation)

---
[← Event Capturing](./event-capturing.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
