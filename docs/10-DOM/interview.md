# DOM Manipulation — Interview Questions

> Owner: **Shubham Narware**

### Dom {#dom}
1. **What is the DOM?** — A tree-structured, in-memory representation of an HTML page that JS can read and modify.
2. **How is it built?** — The browser parses the HTML source into this live tree structure on load.
3. **Why is direct DOM manipulation "expensive"?** — Changes can trigger layout recalculation ("reflow") and repainting, which cost more than plain JS operations.
4. **DOM tree vs HTML source?** — The DOM is a live, mutable in-memory structure; the HTML source is the original static text.
5. **How does a DOM change appear on screen?** — The browser's rendering engine detects the change and updates the visible page automatically.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Selectors {#selectors}
1. **`querySelector` vs `querySelectorAll`?** — First returns only the first match; second returns all matches as a NodeList.
2. **Live vs static collection?** — Live collections (like from `getElementsByClassName`) auto-update as the DOM changes; static ones (`querySelectorAll`) are a fixed snapshot.
3. **Why prefer `querySelectorAll` today?** — It accepts any valid CSS selector, more flexible than older class/tag/id-specific methods.
4. **Complex selector example?** — `nav ul li:first-child` or `input[required]`.
5. **What if no element matches `querySelector`?** — Returns `null`.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Traversing {#traversing}
1. **`children` vs `childNodes`?** — `children` returns only element nodes; `childNodes` includes text and comment nodes too.
2. **Finding a clicked element's parent?** — `event.target.parentElement`.
3. **What does `.closest()` do?** — Walks up from an element (including itself) to find the nearest ancestor matching a given selector.
4. **Why prefer `nextElementSibling` over `nextSibling`?** — `nextSibling` can return whitespace/text nodes; the Element variant skips straight to actual elements.
5. **Real scenario favoring traversal?** — Removing a card via its own close button, traversing up with `.closest()`/`parentElement` instead of re-querying.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
