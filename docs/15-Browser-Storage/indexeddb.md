# IndexedDB

> Section: Browser Storage · Owner: **Shubham Narware**

## Definition
IndexedDB is a low-level, asynchronous, transactional browser database that lets JavaScript store significant amounts of structured data — including files and blobs — far beyond what `localStorage` can handle.

## History
Standardized by the W3C starting around **2010–2015** across major browsers, IndexedDB was designed to replace the deprecated Web SQL Database and give web apps a real, capable client-side database, especially for offline-first applications.

## Why IndexedDB Matters
`localStorage` is synchronous, string-only, and capped around 5-10MB — IndexedDB is asynchronous (won't block the UI), supports structured objects, indexes, and can store much larger amounts of data (hundreds of MB or more, browser-dependent).

## Syntax
```js
const request = indexedDB.open("MyDatabase", 1);
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore("users", { keyPath: "id" });
};
request.onsuccess = (event) => {
  const db = event.target.result;
  // use db.transaction(...) to read/write
};
```

## Types (core concepts)
| Concept | Meaning |
|---|---|
| Database | A named container of object stores, versioned |
| Object Store | Like a "table" — holds JS objects, keyed by a keyPath or key |
| Index | Lets you query an object store by a field other than its key |
| Transaction | A group of read/write operations that succeed or fail together |

## Examples
```js
const request = indexedDB.open("NotesDB", 1);
request.onupgradeneeded = (e) => {
  e.target.result.createObjectStore("notes", { keyPath: "id" });
};
```

## Memory Diagram
```
IndexedDB "NotesDB" (versioned)
  └── Object Store: "notes"
         ├── { id: 1, text: "Buy milk" }
         └── { id: 2, text: "Call mom" }
  (all operations wrapped in transactions)
```

## Flowchart
```
indexedDB.open(name, version)
        │
onupgradeneeded (only if new DB or version bump) ──► create object stores/indexes
        │
onsuccess ──► db reference obtained
        │
db.transaction([storeName], mode) ──► get objectStore
        │
store.add() / store.get() / store.put() / store.delete()
        │
Transaction completes ──► onsuccess / onerror fires
```

## Internal Working
Unlike `localStorage`, all IndexedDB operations are wrapped in **transactions** and are **asynchronous**, communicating results via events (`onsuccess`, `onerror`) rather than return values — this makes it non-blocking, but noticeably more verbose to use directly (which is why many developers use a wrapper library like `idb`).

## Beginner Example
```js
const request = indexedDB.open("MyDB", 1);
request.onupgradeneeded = (e) => {
  e.target.result.createObjectStore("items", { keyPath: "id" });
};
request.onsuccess = (e) => console.log("DB opened:", e.target.result);
```

## Intermediate Example
```js
function addItem(db, item) {
  const tx = db.transaction("items", "readwrite");
  tx.objectStore("items").add(item);
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
```

## Advanced Example
```js
function getAllItems(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("items", "readonly");
    const request = tx.objectStore("items").getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
```

## Real World Example
```js
// Offline-first apps (like note-taking or email clients) cache large
// datasets in IndexedDB so the app remains usable without a network connection.
```

## Industry Example
```js
// Progressive Web Apps (PWAs) commonly pair IndexedDB with Service
// Workers to enable full offline functionality, syncing data once
// connectivity returns.
```

## Interview Questions
See full list → [interview.md](./interview.md#indexeddb)
1. How does IndexedDB differ from `localStorage` in terms of size limits and data types supported?
2. Why is IndexedDB asynchronous, and why does that matter for performance?
3. What is a "transaction" in IndexedDB, and why are operations wrapped in one?
4. What triggers the `onupgradeneeded` event?
5. Why might a developer choose a wrapper library (like `idb`) instead of using raw IndexedDB?

## MCQs
See full list → [mcq.md](./mcq.md#indexeddb)
1. Compared to `localStorage`, IndexedDB is: (a) Synchronous and string-only (b) **Asynchronous and supports structured objects** (c) Only for cookies (d) Limited to 5KB → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#indexeddb)
1. **(Easy)** Open an IndexedDB database and create one object store.
2. **(Medium)** Write Promise-wrapped `addItem()` and `getAllItems()` functions.
3. **(Hard)** Add an index to an object store and query items by that index instead of the primary key.

## Assignments
- [ ] Explain why IndexedDB is better suited than `localStorage` for storing hundreds of records.
- [ ] Describe, step by step, what happens when you call `indexedDB.open()` for the first time vs. a version bump.

## Mini Project
Build a small offline "Todo List" that stores todos in IndexedDB, allowing add/remove/list operations that persist even after closing and reopening the browser.

## Common Mistakes
- Treating IndexedDB calls as synchronous and trying to use return values directly instead of handling `onsuccess`/`onerror` events.
- Forgetting to create needed object stores inside `onupgradeneeded`.
- Not handling transaction failures, silently losing data on errors.

## Best Practices
- Wrap raw IndexedDB calls in Promise-based helper functions (or use a lightweight wrapper library) for cleaner `async/await` code.
- Use indexes for fields you'll frequently query by, rather than scanning the entire object store.

## Optimization Tips
- Batch multiple writes into a single transaction rather than opening a new transaction per item, since transactions have overhead.

## Summary
IndexedDB is a full-featured, asynchronous, transactional client-side database — far more capable than `localStorage` for structured, large-scale, or offline-first data storage, at the cost of a more verbose, event-driven API.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#indexeddb)

---
[← Cookies](./cookies.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
