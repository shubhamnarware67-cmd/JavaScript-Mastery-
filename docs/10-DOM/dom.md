# Dom

> Section: DOM Manipulation · Owner: **Shubham Narware**

## Definition
The Document Object Model (DOM) is a tree-structured, in-memory representation of an HTML page that JavaScript can read and modify to change what's displayed live in the browser.

## History
The DOM has existed since early browsers (mid-1990s), standardized progressively by the W3C/WHATWG — modern DOM APIs (`querySelector`, `classList`) were added mainly in the mid-2000s to 2010s to replace older, clunkier methods.

## Why DOM Matters
It's the bridge between JavaScript and what the user actually sees — nearly all interactive web behavior involves reading or modifying the DOM in some way.

## Syntax
```js
document.getElementById("id");
document.querySelector(".class");
element.textContent = "New text";
```

## Types (DOM node types, simplified)
| Node Type | Example |
|---|---|
| Document | `document` itself |
| Element | `<div>`, `<p>`, `<button>` |
| Text | The text content inside an element |
| Attribute | `id`, `class`, `href` on an element |

## Examples
```js
const title = document.querySelector("#title");
title.textContent = "Updated Heading";
title.style.color = "blue";
```

## Memory Diagram
```
              document
                  │
               <html>
                  │
        ┌────────┴─────────┐
      <head>              <body>
                             │
                          <h1 id="title">
                          "Original Heading"
```

## Flowchart
```
JavaScript wants to change the page
        │
Select the target element (querySelector, getElementById, etc.)
        │
Modify it: content (textContent/innerHTML), style, attributes, or classes
        │
Browser re-renders the affected part of the page automatically
```

## Internal Working
The browser parses HTML into the DOM tree once on load; JavaScript then interacts with this live in-memory tree — any change to it (adding a node, changing text, updating a style) triggers the browser's rendering engine to update the visible page accordingly.

## Beginner Example
```js
document.querySelector("h1").textContent = "Hello from JS!";
```

## Intermediate Example
```js
// Creating and appending a new element
const newItem = document.createElement("li");
newItem.textContent = "New list item";
document.querySelector("ul").appendChild(newItem);
```

## Advanced Example
```js
// Updating multiple elements at once with a batch DOM operation
document.querySelectorAll(".card").forEach(card => {
  card.classList.add("highlighted");
});
```

## Real World Example
```js
// Toggling a mobile navigation menu
const menuButton = document.querySelector("#menu-toggle");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => nav.classList.toggle("open"));
```

## Industry Example
```js
// Frameworks like React ultimately still update the REAL DOM under the hood,
// using a virtual DOM diffing strategy to minimize the number of actual
// DOM mutations needed per render — because direct DOM manipulation
// is comparatively expensive.
```

## Interview Questions
See full list → [interview.md](./interview.md#dom)
1. What is the DOM, in your own words?
2. How does the browser build the DOM from an HTML file?
3. Why is direct DOM manipulation considered relatively "expensive"?
4. What's the difference between the DOM tree and the original HTML source?
5. How does a change to the DOM end up visible on screen?

## MCQs
See full list → [mcq.md](./mcq.md#dom)
1. The DOM represents a web page as a: (a) Flat list (b) **Tree structure** (c) Table (d) Graph with cycles → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#dom)
1. **(Easy)** Select an element by id and change its text content.
2. **(Medium)** Create a new element, set its content, and append it to an existing list.
3. **(Hard)** Write a function that updates multiple elements matching a class in a single batch operation.

## Assignments
- [ ] Diagram the DOM tree for a simple HTML page with a header, a paragraph, and a list.
- [ ] Explain, with an example, why frameworks use a virtual DOM to reduce direct DOM operations.

## Mini Project
Build a small "Live Text Editor" page: typing into an input updates a `<div>`'s text content in real time via the DOM.

## Common Mistakes
- Assuming changes to a JS variable automatically reflect in the DOM without explicitly updating an element.
- Repeatedly querying the DOM for the same element inside a loop instead of caching the reference once.
- Confusing the DOM tree (live, in-memory) with the original static HTML source (view-source).

## Best Practices
- Cache DOM element references in variables when reused multiple times, rather than re-querying repeatedly.
- Batch multiple DOM changes together where possible to minimize layout recalculations ("reflows").

## Optimization Tips
- Minimize direct DOM manipulation in tight loops; build content as a string or document fragment, then insert once.

## Summary
The DOM is the live, tree-structured representation of a web page that JavaScript reads and modifies to create interactive behavior — understanding it is foundational to nearly all front-end JavaScript work.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#dom)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Selectors →](./selectors.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
