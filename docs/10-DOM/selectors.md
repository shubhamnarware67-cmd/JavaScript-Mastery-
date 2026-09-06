# Selectors

> Section: DOM Manipulation · Owner: **Shubham Narware**

## Definition
DOM selectors are methods used to find and retrieve one or more elements from the page so they can be read or modified — ranging from older ID/class-specific methods to the modern, flexible `querySelector`/`querySelectorAll`.

## History
`getElementById`/`getElementsByClassName`/`getElementsByTagName` existed from the earliest DOM APIs; `querySelector`/`querySelectorAll` (accepting full CSS selectors) were added in the DOM Selectors API, widely supported since around 2009-2011.

## Why Selectors Matter
Selecting the right element(s) is the first step of virtually every DOM manipulation task — the flexibility and correctness of your selector directly impacts code reliability.

## Syntax
```js
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("tag");
document.querySelector(".class");
document.querySelectorAll(".class");
```

## Types
| Method | Returns | Live or Static? |
|---|---|---|
| `getElementById` | Single element or `null` | N/A |
| `getElementsByClassName` | HTMLCollection | Live |
| `getElementsByTagName` | HTMLCollection | Live |
| `querySelector` | First matching element or `null` | N/A |
| `querySelectorAll` | NodeList | Static (snapshot) |

## Examples
```js
const byId = document.getElementById("title");
const byClass = document.querySelectorAll(".item");
const firstMatch = document.querySelector(".item"); // just the FIRST match
```

## Memory Diagram
Not applicable — selectors query the existing DOM tree, they don't create new memory structures themselves.

## Flowchart
```
Need to select element(s)?
        │
Need any valid CSS selector (class, attribute, nested, pseudo-class)?
        │
       Yes ──► use querySelector()/querySelectorAll()
        │
        No, just a simple id/class/tag lookup?
        │
       Either works — querySelector is generally preferred for consistency
```

## Internal Working
`querySelectorAll()` returns a **static** NodeList — a snapshot taken at call time that won't reflect later DOM changes — while `getElementsByClassName`/`getElementsByTagName` return **live** HTMLCollections that automatically update as the DOM changes.

## Beginner Example
```js
const heading = document.querySelector("h1");
console.log(heading.textContent);
```

## Intermediate Example
```js
// Selecting all matching elements and looping over them
const items = document.querySelectorAll(".todo-item");
items.forEach(item => item.classList.add("visible"));
```

## Advanced Example
```js
// Demonstrating live vs static collections
const liveCollection = document.getElementsByClassName("box");
const staticList = document.querySelectorAll(".box");
document.body.appendChild(document.createElement("div")); // add a new .box... hypothetically with that class
console.log(liveCollection.length); // updates automatically if new matching elements are added
console.log(staticList.length);      // stays fixed at the time querySelectorAll was called
```

## Real World Example
```js
// Selecting elements with complex CSS selectors, something older methods can't do directly
const firstListItemInNav = document.querySelector("nav ul li:first-child");
const requiredInputs = document.querySelectorAll("input[required]");
```

## Industry Example
```js
// Testing libraries and automation tools rely heavily on precise
// CSS/attribute selectors (data-testid attributes are a common convention)
// const submitBtn = document.querySelector('[data-testid="submit-button"]');
```

## Interview Questions
See full list → [interview.md](./interview.md#selectors)
1. What's the difference between `querySelector` and `querySelectorAll`?
2. What's the difference between a "live" and a "static" collection?
3. Why might `querySelectorAll` be preferred over `getElementsByClassName` in modern code?
4. Can `querySelector` accept any valid CSS selector? Give an example of a complex one.
5. What does `querySelector` return if no element matches?

## MCQs
See full list → [mcq.md](./mcq.md#selectors)
1. `querySelectorAll` returns a: (a) Live HTMLCollection (b) **Static NodeList** (c) Single element (d) String → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#selectors)
1. **(Easy)** Select an element by class and log its text content.
2. **(Medium)** Select all elements with a `data-active` attribute and add a class to each.
3. **(Hard)** Demonstrate the difference between a live `HTMLCollection` and a static `NodeList` by adding a new matching element after the initial selection.

## Assignments
- [ ] List all 5 major selector methods and explain when to use each.
- [ ] Write 3 different `querySelector` calls using complex CSS selectors (attribute, pseudo-class, descendant combinator).

## Mini Project
Build a small "Element Highlighter" tool: given a CSS selector input, highlight all matching elements on a sample page using `querySelectorAll`.

## Common Mistakes
- Forgetting `querySelector` only returns the FIRST match, not all matches (use `querySelectorAll` for that).
- Assuming `querySelectorAll`'s NodeList updates automatically like a live HTMLCollection (it doesn't).
- Using overly broad selectors that unintentionally match unrelated elements.

## Best Practices
- Prefer `querySelector`/`querySelectorAll` for their flexibility and consistency with CSS selector syntax.
- Use specific, purpose-built attributes (like `data-testid`) for selectors used in automated testing, decoupled from styling classes.

## Optimization Tips
- Cache selector results in a variable when reused multiple times, rather than re-querying the DOM repeatedly for the same elements.

## Summary
DOM selectors locate elements for reading or modification — modern code generally prefers `querySelector`/`querySelectorAll` for their full CSS selector support, while understanding the live-vs-static distinction from older methods remains useful for reading legacy code.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#selectors)

---
[← Dom](./dom.md) | [Section Home](./README.md) | [Traversing →](./traversing.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
