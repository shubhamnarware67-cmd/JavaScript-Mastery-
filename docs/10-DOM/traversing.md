# Traversing

> Section: DOM Manipulation · Owner: **Shubham Narware**

## Definition
DOM traversal is navigating between related elements in the DOM tree — moving to parents, children, or siblings of a given element — without needing a fresh selector query each time.

## History
Traversal properties (`parentNode`, `childNodes`, `nextSibling`) existed since the earliest DOM specs; element-specific variants (`parentElement`, `children`, `nextElementSibling`) were added later to avoid accidentally including text/comment nodes.

## Why Traversing Matters
Real UIs often need to act relative to a clicked element (e.g. "find this button's parent card and remove it") — traversal lets you navigate the tree structurally instead of re-querying from scratch.

## Syntax
```js
element.parentElement;
element.children;
element.nextElementSibling;
element.previousElementSibling;
```

## Types
| Property | Direction |
|---|---|
| `parentElement` | Up |
| `children` | Down (all direct child elements) |
| `firstElementChild`/`lastElementChild` | Down (specific child) |
| `nextElementSibling`/`previousElementSibling` | Sideways |

## Examples
```js
const item = document.querySelector(".item");
console.log(item.parentElement);       // the containing element
console.log(item.children);              // its direct child elements
console.log(item.nextElementSibling);     // the next sibling element
```

## Memory Diagram
```
        parentElement
              ▲
   ┌─────────┴─────────┐
 prev ──── element ──── next   (siblings, via nextElementSibling/previousElementSibling)
              │
         children ▼
     (firstElementChild ... lastElementChild)
```

## Flowchart
```
Have a reference to one element
        │
Need to act on something RELATED to it?
        │
Its container? ──► parentElement
Its contents? ──► children / firstElementChild / lastElementChild
Something next to it? ──► nextElementSibling / previousElementSibling
```

## Internal Working
Traversal properties read the DOM tree's existing structural links directly (each node internally references its parent, children, and siblings) — this is generally faster than re-running a fresh `querySelector` search from the document root.

## Beginner Example
```js
const listItem = document.querySelector("li");
console.log(listItem.parentElement.tagName); // "UL" (or "OL")
```

## Intermediate Example
```js
// Removing a card when its own "close" button is clicked
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove(); // remove the containing card
  });
});
```

## Advanced Example
```js
// Walking up multiple levels to find a specific ancestor (manual version of .closest())
function findAncestorWithClass(el, className) {
  let current = el;
  while (current && !current.classList.contains(className)) {
    current = current.parentElement;
  }
  return current;
}
```

## Real World Example
```js
// Using the built-in .closest() method (simpler than manual traversal above)
document.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) console.log("Clicked inside card:", card);
});
```

## Industry Example
```js
// Table row actions commonly traverse from a clicked icon up to its row,
// then across to sibling cells, to read related data without extra selectors:
button.closest("tr").querySelector(".username").textContent;
```

## Interview Questions
See full list → [interview.md](./interview.md#traversing)
1. What's the difference between `children` and `childNodes`?
2. How would you find the parent of a clicked element?
3. What does `.closest()` do, and how does it relate to manual traversal?
4. Why prefer `nextElementSibling` over `nextSibling` in most cases?
5. Give a real UI scenario where traversal is more convenient than re-querying with `querySelector`.

## MCQs
See full list → [mcq.md](./mcq.md#traversing)
1. `element.parentElement` returns: (a) Its children (b) **Its containing element** (c) A sibling (d) null always → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#traversing)
1. **(Easy)** Select an element and log its parent's tag name.
2. **(Medium)** Remove a card element when its internal "close" button is clicked, using `parentElement`.
3. **(Hard)** Write a manual `findAncestorWithClass(el, className)` function without using `.closest()`.

## Assignments
- [ ] Explain, with an example, why `children` (elements only) differs from `childNodes` (includes text/comment nodes).
- [ ] Rewrite a manual ancestor-search loop using the built-in `.closest()` method instead.

## Mini Project
Build a small "Dismissible Card List": each card has a close button; clicking it should traverse to and remove just that card, using DOM traversal (`.closest()`/`parentElement`).

## Common Mistakes
- Using `childNodes` when only element children were intended, unexpectedly including whitespace text nodes.
- Manually writing ancestor-search loops when the built-in `.closest()` method already solves that exact problem.
- Assuming `nextSibling`/`previousSibling` skip whitespace text nodes (they don't — use the `*ElementSibling` variants).

## Best Practices
- Use the `*Element*` variants (`children`, `nextElementSibling`, etc.) to avoid accidentally including non-element nodes.
- Use `.closest()` instead of manual parent-walking loops for finding an ancestor matching a selector.

## Optimization Tips
- Traversal from a known element reference is generally faster than a fresh `querySelector` search from the document root — prefer it when you already have a relevant starting element (e.g. inside an event handler).

## Summary
DOM traversal navigates between related elements (parent, children, siblings) using the tree's existing structural links — essential for acting on elements relative to a known reference, such as within event handlers, without needing fresh selector queries.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#traversing)

---
[← Selectors](./selectors.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
