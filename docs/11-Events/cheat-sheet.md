# Events — Cheat Sheet

> Owner: **Shubham Narware**

### Basics
```js
el.addEventListener("click", handler);
el.removeEventListener("click", handler); // needs SAME function reference
event.preventDefault();    // stop default browser action
event.stopPropagation();    // stop further bubbling/capturing
```

### 3 Propagation Phases (in order)
```
1. CAPTURE  — window → target (opt-in via `true`/{capture:true})
2. TARGET   — event fires on the actual element
3. BUBBLE   — target → window (default phase)
```

### Event Bubbling
- Default behavior — child's event handlers run, then parent's, then grandparent's, etc.
- Enables event delegation.

### Event Capturing
```js
el.addEventListener("click", handler, true); // capture phase
```
- Runs BEFORE bubbling; all events pass through capture regardless of listeners.

### Event Delegation
```js
parent.addEventListener("click", (e) => {
  if (e.target.matches(".item")) { /* handle */ }
  // or: e.target.closest(".item") for nested clickable content
});
```
- One listener instead of many; works automatically for elements added later.

---
[← Section Home](./README.md)
