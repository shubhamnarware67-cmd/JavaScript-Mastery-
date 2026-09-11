# DOM Manipulation — Cheat Sheet

> Owner: **Shubham Narware**

### Selecting
```js
document.getElementById("id");
document.querySelector(".class");        // first match
document.querySelectorAll(".class");      // all matches (static NodeList)
document.getElementsByClassName("x");      // live HTMLCollection
```

### Modifying
```js
el.textContent = "text";     // safe plain text
el.innerHTML = "<b>html</b>"; // parses HTML — careful with untrusted input
el.style.color = "blue";
el.classList.add("active"); el.classList.remove("hidden"); el.classList.toggle("open");
```

### Creating / Removing
```js
const el = document.createElement("div");
parent.appendChild(el);
el.remove();
```

### Traversing
```js
el.parentElement;
el.children;
el.nextElementSibling; el.previousElementSibling;
el.closest(".ancestor-selector");
```

### Key Gotchas
- `querySelectorAll` = static snapshot; `getElementsByClassName` = live collection.
- `children` = elements only; `childNodes` = includes text/comment nodes.
- `innerHTML` re-parses HTML — slower and risky with untrusted input vs `textContent`.

---
[← Section Home](./README.md)
