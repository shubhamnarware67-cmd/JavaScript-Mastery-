# SessionStorage

> Section: Browser Storage · Owner: **Shubham Narware**

## Definition
`sessionStorage` is a browser API that stores key-value string data scoped to a **single tab's session** — it's cleared automatically when that tab or window is closed.

## History
Introduced alongside `localStorage` as part of the **Web Storage API in HTML5 (~2009)**, giving developers a per-tab storage option distinct from `localStorage`'s indefinite, cross-tab persistence.

## Why SessionStorage Matters
It's ideal for data that should only last as long as the current tab is open — like a multi-step form's temporary progress — without leaking into other tabs or persisting after the tab closes.

## Syntax
```js
sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
```

## Types (available methods)
| Method | Purpose |
|---|---|
| `setItem(key, value)` | Store a value (as a string) |
| `getItem(key)` | Retrieve a value |
| `removeItem(key)` | Delete one key |
| `clear()` | Delete all keys for this tab |
| `key(index)` | Get the key name at a given index |

## Examples
```js
sessionStorage.setItem("step", "2");
console.log(sessionStorage.getItem("step")); // "2"
```

## Memory Diagram
```
Tab A: sessionStorage { step: "2" }   ← isolated to this tab
Tab B: sessionStorage { }             ← empty, even on the same site
Closing Tab A ──► its sessionStorage is destroyed
```

## Flowchart
```
sessionStorage.setItem(key, value)
        │
Data scoped to THIS tab/window only (not shared with other tabs)
        │
Persists through page reloads/navigation within the same tab
        │
Tab closed ──► sessionStorage cleared automatically
```

## Internal Working
Unlike `localStorage`, `sessionStorage` is scoped per **browsing context** (tab/window) — even two tabs open to the exact same URL have completely separate `sessionStorage`, and duplicating a tab copies its `sessionStorage` at that moment but they diverge afterward.

## Beginner Example
```js
sessionStorage.setItem("visited", "true");
console.log(sessionStorage.getItem("visited"));
```

## Intermediate Example
```js
function saveFormProgress(step, data) {
  sessionStorage.setItem(`form-step-${step}`, JSON.stringify(data));
}
```

## Advanced Example
```js
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("lastScrollY", window.scrollY.toString());
});
window.addEventListener("load", () => {
  const y = sessionStorage.getItem("lastScrollY");
  if (y) window.scrollTo(0, parseInt(y, 10));
});
```

## Real World Example
```js
// Preserving a multi-step checkout form's data as the user
// navigates between steps within the same tab.
```

## Industry Example
```js
// Single-page e-commerce checkouts commonly use sessionStorage
// to hold in-progress cart/shipping data that shouldn't persist
// once the user closes the tab.
```

## Interview Questions
See full list → [interview.md](./interview.md#sessionstorage)
1. How does `sessionStorage` differ from `localStorage` in terms of scope and lifetime?
2. If a user duplicates a tab, does the new tab share the original's `sessionStorage`?
3. Does `sessionStorage` survive a page refresh within the same tab?
4. What happens to `sessionStorage` data when a tab is closed?
5. When would you choose `sessionStorage` over `localStorage`?

## MCQs
See full list → [mcq.md](./mcq.md#sessionstorage)
1. `sessionStorage` data is cleared when: (a) The page is refreshed (b) 24 hours pass (c) **The tab/window is closed** (d) Never → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#sessionstorage)
1. **(Easy)** Store and retrieve a value from `sessionStorage`.
2. **(Medium)** Save multi-step form progress to `sessionStorage` and restore it on page reload.
3. **(Hard)** Demonstrate, with a comment-based test plan, that two tabs of the same site have independent `sessionStorage`.

## Assignments
- [ ] Explain, with an example, a use case where `sessionStorage` is clearly better than `localStorage`.
- [ ] Write code that saves scroll position to `sessionStorage` and restores it on reload.

## Mini Project
Build a small "Multi-Step Form Wizard" that saves each step's inputs to `sessionStorage`, restoring progress if the page is refreshed mid-flow, but clearing once the tab closes.

## Common Mistakes
- Confusing `sessionStorage`'s per-tab scope with `localStorage`'s cross-tab, cross-session scope.
- Expecting data to survive across different tabs of the same site.
- Not accounting for the fact that closing and reopening the browser to the same URL creates a fresh, empty `sessionStorage`.

## Best Practices
- Use `sessionStorage` specifically for temporary, tab-scoped state that shouldn't outlive the current session.
- Combine with `beforeunload`/`load` events carefully to preserve transient UI state like scroll position.

## Optimization Tips
- Keep `sessionStorage` payloads small and JSON-serializable to avoid slow synchronous reads/writes during frequent updates (e.g., on every form keystroke, debounce the save).

## Summary
`sessionStorage` offers the same simple string-based API as `localStorage`, but scoped strictly to a single tab's session — automatically cleared when that tab closes, making it ideal for short-lived, per-tab state.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#sessionstorage)

---
[← LocalStorage](./localstorage.md) | [Section Home](./README.md) | [Cookies →](./cookies.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
