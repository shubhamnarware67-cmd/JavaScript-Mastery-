# Browser Storage — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### LocalStorage {#localstorage}
```js
localStorage.setItem(k, v); localStorage.getItem(k);
localStorage.removeItem(k); localStorage.clear();
```
Strings only. Persists forever. Synchronous.

### SessionStorage {#sessionstorage}
```js
sessionStorage.setItem(k, v); sessionStorage.getItem(k);
```
Per-tab. Cleared on tab close.

### Cookies {#cookies}
```js
document.cookie = "key=value; expires=...; path=/; Secure; HttpOnly; SameSite=Lax";
```
~4KB limit. Auto-sent with matching requests. `HttpOnly` blocks JS access.

### IndexedDB {#indexeddb}
```js
const req = indexedDB.open("DB", 1);
req.onupgradeneeded = e => e.target.result.createObjectStore("store", { keyPath: "id" });
```
Async, transactional, large capacity, structured data.

---
[← Section Home](./README.md)
