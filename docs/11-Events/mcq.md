# Events — MCQs

> Owner: **Shubham Narware**

### Events {#events}
1. Multiple `addEventListener` calls for the same event on one element: (a) Only the last one runs (b) **All of them run** (c) Throws an error (d) None run — *Correct: (b).*
2. `event.preventDefault()` is commonly used to: (a) Stop bubbling (b) **Stop the browser's default action (e.g. form submit)** (c) Remove the listener (d) Add a new listener — *Correct: (b).*
3. Removing a listener requires: (a) Nothing special (b) **The same function reference used to add it** (c) A new anonymous function (d) `event.remove()` — *Correct: (b).*

### Event Bubbling {#event-bubbling}
1. Bubbling moves an event: (a) Downward (b) **Upward, from target to ancestors** (c) Sideways (d) Nowhere — *Correct: (b).*
2. `stopPropagation()` prevents: (a) The default action (b) **Further propagation (bubbling/capturing)** (c) The listener from running at all (d) Nothing — *Correct: (b).*
3. Bubbling is: (a) Opt-in only (b) **The default phase for addEventListener** (c) Deprecated (d) Only for clicks — *Correct: (b).*

### Event Capturing {#event-capturing}
1. Capturing happens: (a) After bubbling (b) **Before bubbling, top-down** (c) Never by default (d) Only for keyboard events — *Correct: (b).*
2. To listen during capture phase, pass: (a) `false` (b) **`true`** as 3rd arg (c) Nothing (d) A callback — *Correct: (b).*
3. All events go through the capture phase: (a) Only if requested (b) **True, always** (c) Never (d) Only in old browsers — *Correct: (b).*

### Event Delegation {#event-delegation}
1. Delegation relies on: (a) Capturing only (b) **Bubbling** (c) Web Workers (d) Local Storage — *Correct: (b).*
2. Delegation is especially useful for: (a) Single static buttons (b) **Long or dynamically changing lists** (c) CSS styling (d) Data fetching — *Correct: (b).*
3. Identifying which child was clicked uses: (a) `event.type` (b) **`event.target`** (c) `event.bubbles` (d) `event.phase` — *Correct: (b).*

---
[← Section Home](./README.md)
