# Events — Coding Practice

> Owner: **Shubham Narware**

### Events {#events}
- **Easy:** Attach a click listener to a button that logs a message.
- **Medium:** Attach and later remove a listener using a named function reference.
- **Hard:** Prevent a form's default submission and validate/log its fields via JS.

### Event Bubbling {#event-bubbling}
- **Easy:** Attach click listeners to a parent and child, observe the bubbling order.
- **Medium:** Use `stopPropagation()` to prevent a child click from also triggering the parent.
- **Hard:** Build a modal where clicking the overlay closes it, but clicking content does not.

### Event Capturing {#event-capturing}
- **Easy:** Register a capture-phase listener on a parent, a normal listener on a child, observe order.
- **Medium:** Demonstrate all 3 phases firing in correct order with 4 listeners.
- **Hard:** Use a capture-phase listener to conditionally stop an event before it reaches a nested target.

### Event Delegation {#event-delegation}
- **Easy:** Attach one delegated click listener to a list, logging the clicked item's text.
- **Medium:** Use delegation to handle a delete button inside each list item.
- **Hard:** Build a delegated handler using `closest()` for clicks on nested icons inside buttons.

---
[← Section Home](./README.md)
