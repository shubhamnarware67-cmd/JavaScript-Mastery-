# DOM Manipulation — MCQs

> Owner: **Shubham Narware**

### Dom {#dom}
1. The DOM represents a page as a: (a) Flat list (b) **Tree structure** (c) Table (d) Graph with cycles — *Correct: (b).*
2. Changing `element.textContent` updates: (a) Only the JS variable (b) **The visible page** (c) Nothing until reload (d) The HTML source file — *Correct: (b).*
3. `document.createElement()` creates: (a) An attached element (b) **A new, detached element** (c) A text node only (d) Nothing — *Correct: (b), it must be appended to appear on the page.*

### Selectors {#selectors}
1. `querySelectorAll` returns: (a) Live HTMLCollection (b) **Static NodeList** (c) A single element (d) A string — *Correct: (b).*
2. `document.querySelector(".x")` returns: (a) All matches (b) **The first match, or null** (c) A count (d) An array — *Correct: (b).*
3. `getElementsByClassName` returns a: (a) Static NodeList (b) **Live HTMLCollection** (c) Single element (d) String — *Correct: (b).*

### Traversing {#traversing}
1. `element.children` includes: (a) Text nodes (b) **Only element nodes** (c) Comments (d) Attributes — *Correct: (b).*
2. `.closest(selector)` searches: (a) Only children (b) **Up the ancestor chain, including itself** (c) Siblings only (d) The whole document randomly — *Correct: (b).*
3. `nextElementSibling` skips: (a) Elements (b) **Whitespace/text nodes** (c) Nothing (d) Attributes — *Correct: (b).*

---
[← Section Home](./README.md)
