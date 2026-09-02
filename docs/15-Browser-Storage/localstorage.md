# LocalStorage

> Section: Browser Storage · Owner: **Shubham Narware**

## Definition
`localStorage` is a browser API that lets JavaScript store key-value string data on the user's device with **no expiration**, persisting even after the browser is closed and reopened.

## History
Introduced as part of the **Web Storage API in HTML5 (~2009)**, designed as a simpler, larger-capacity alternative to cookies for storing client-side data that doesn't need to be sent to the server.

## Why LocalStorage Matters
It provides an easy, synchronous way to persist small amounts of data (like user preferences or cached data) directly in the browser, without any server round-trip.

## Syntax
```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
```

## Types (available methods)
| Method | Purpose |
|---|---|
| `setItem(key, value)` | Store a value (as a string) |
| `getItem(key)` | Retrieve a value |
| `removeItem(key)` | Delete one key |
| `clear()` | Delete all keys |
| `key(index)` | Get the key name at a given index |

## Examples
```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"
```

## Memory Diagram
```
Origin: https://example.com
localStorage:
  { "theme": "dark", "lang": "en" }
      persists across tabs, browser restarts — until explicitly cleared
```

## Flowchart
```
localStorage.setItem(key, value)
        │
Data written to disk, scoped to the origin (protocol+domain+port)
        │
Available in any tab/window of the same origin
        │
Persists until removeItem(), clear(), or user clears browser data
```

## Internal Working
`localStorage` only stores **strings** — storing an object requires `JSON.stringify()` first, and reading it back requires `JSON.parse()`; it's also **synchronous**, meaning large read/writes can briefly block the main thread.

## Beginner Example
```js
localStorage.setItem("username", "shubham");
console.log(localStorage.getItem("username"));
```

## Intermediate Example
```js
const user = { name: "Shubham", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem("user"));
```

## Advanced Example
```js
function safeGetItem(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}
```

## Real World Example
```js
// Persisting a user's dark/light theme preference across visits
document.body.classList.toggle("dark", localStorage.getItem("theme") === "dark");
```

## Industry Example
```js
// Many apps cache non-sensitive data (like recently viewed items,
// draft form inputs) in localStorage to survive page refreshes.
```

## Interview Questions
See full list → [interview.md](./interview.md#localstorage)
1. What data type can `localStorage` store natively, and how do you store objects?
2. How does `localStorage` differ from `sessionStorage` in terms of persistence?
3. Is `localStorage` synchronous or asynchronous? Why does that matter?
4. What is the typical storage limit for `localStorage`?
5. Does `localStorage` get sent to the server with every HTTP request (like cookies)?

## MCQs
See full list → [mcq.md](./mcq.md#localstorage)
1. Data stored in `localStorage` persists: (a) Only for the current tab (b) Only until the browser closes (c) **Until explicitly cleared, even after restart** (d) For 24 hours only → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#localstorage)
1. **(Easy)** Store and retrieve a simple string value using `localStorage`.
2. **(Medium)** Write helper functions to safely store and retrieve JSON objects in `localStorage`.
3. **(Hard)** Build a `localStorage` wrapper with an expiration timestamp, so values auto-invalidate after a set duration.

## Assignments
- [ ] Explain why `JSON.stringify`/`JSON.parse` are needed when storing objects in `localStorage`.
- [ ] Compare `localStorage` and cookies: which is sent to the server automatically?

## Mini Project
Build a small "Notes App" that saves notes to `localStorage` so they persist across page reloads and browser restarts.

## Common Mistakes
- Forgetting `localStorage` only stores strings, then storing an object directly and getting `"[object Object]"`.
- Assuming `localStorage` is secure for sensitive data (it's plain text, readable via DevTools).
- Not wrapping `localStorage` calls in `try...catch` (can throw in private browsing mode or when quota is exceeded).

## Best Practices
- Never store sensitive data (tokens, passwords) in `localStorage` — it's accessible to any script on the page, including XSS attacks.
- Always `JSON.stringify`/`JSON.parse` when storing structured data.

## Optimization Tips
- Avoid storing large amounts of data synchronously in a tight loop; batch writes where possible since `localStorage` operations are synchronous and can block the main thread.

## Summary
`localStorage` provides simple, synchronous, string-based key-value storage that persists indefinitely per origin — ideal for small non-sensitive data like preferences, but unsuitable for large datasets or sensitive information.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#localstorage)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [SessionStorage →](./sessionstorage.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
