# Browser Storage — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### LocalStorage {#localstorage}
1. **What data type can `localStorage` store natively?** Only strings — objects must be `JSON.stringify()`'d first, and `JSON.parse()`'d when read back.
2. **How does `localStorage` differ from `sessionStorage`?** `localStorage` persists indefinitely (until cleared); `sessionStorage` is cleared when the tab closes.
3. **Is `localStorage` synchronous or asynchronous?** Synchronous — large reads/writes can briefly block the main thread.
4. **What's the typical storage limit for `localStorage`?** Around 5-10MB per origin, browser-dependent.
5. **Does `localStorage` get sent to the server automatically?** No — unlike cookies, it stays entirely client-side.

### SessionStorage {#sessionstorage}
1. **How does `sessionStorage` differ from `localStorage` in scope?** It's scoped to a single tab/window's session, not shared across tabs, and cleared when that tab closes.
2. **If a user duplicates a tab, does the new tab share the original's `sessionStorage`?** It starts with a copy at that moment, but the two then diverge independently.
3. **Does `sessionStorage` survive a page refresh?** Yes, within the same tab.
4. **When would you choose `sessionStorage` over `localStorage`?** For temporary, tab-scoped state like multi-step form progress that shouldn't persist after the tab closes.

### Cookies {#cookies}
1. **Why are cookies automatically sent with every HTTP request?** Because that was their original design purpose — giving stateless HTTP a sense of session/memory.
2. **What does the `HttpOnly` flag do?** Prevents JavaScript from reading the cookie via `document.cookie`, protecting it from XSS-based theft.
3. **What's the approximate size limit of a cookie?** About 4KB.
4. **What does `SameSite` control?** Whether a cookie is sent with cross-site requests — `Strict`, `Lax`, or `None`.
5. **How would you delete a cookie via JavaScript?** Set its `expires` attribute to a date in the past.

### IndexedDB {#indexeddb}
1. **How does IndexedDB differ from `localStorage`?** It's asynchronous, transactional, supports structured objects/files, and can store far more data.
2. **Why is IndexedDB asynchronous?** So large read/write operations don't block the main thread, unlike `localStorage`.
3. **What is a "transaction" in IndexedDB?** A group of read/write operations on one or more object stores that succeed or fail together.
4. **What triggers `onupgradeneeded`?** Opening a database for the first time, or requesting a higher version number than currently stored.
5. **Why use a wrapper library like `idb` instead of raw IndexedDB?** The raw API is verbose and event-based; wrappers provide a cleaner Promise-based interface.

---
[← Section Home](./README.md)
