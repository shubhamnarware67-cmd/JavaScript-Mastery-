# Ajax

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
Ajax (Asynchronous JavaScript and XML) is a technique — not a specific API — for making asynchronous requests to a server and updating parts of a web page without a full reload.

## History
The term was coined in **2005**, popularized by Gmail and Google Maps, built originally on the `XMLHttpRequest` object introduced by Microsoft in Internet Explorer 5 (1999).

## Why Ajax Matters
It enabled the shift from full-page reloads to dynamic, app-like web pages, forming the foundation of the modern single-page application (SPA).

## Syntax
```js
// Ajax is a *pattern*; historically implemented via XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
```

## Types (implementations)
| Implementation | Era |
|---|---|
| `XMLHttpRequest` | Original (1999–present, legacy code) |
| `fetch()` | Modern Promise-based replacement |
| Axios / jQuery `$.ajax()` | Popular library wrappers |

## Examples
```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/data");
xhr.onload = function () {
  if (xhr.status === 200) console.log(JSON.parse(xhr.responseText));
};
xhr.send();
```

## Memory Diagram
```
Ajax = the *pattern* of:
  Browser ──async request──► Server
     ▲                           │
     └────response (no reload)──┘
```

## Flowchart
```
User action triggers request
        │
JS sends async request (XHR / fetch / axios)
        │
Page remains interactive (no reload)
        │
Server responds
        │
JS updates only the relevant part of the DOM
```

## Internal Working
Despite the "X" in Ajax standing for XML, most modern Ajax requests exchange **JSON**, not XML — the term has stuck around as a general label for "async browser-server communication without a page reload."

## Beginner Example
```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
```

## Intermediate Example
```js
function ajaxGet(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => callback(null, JSON.parse(xhr.responseText));
  xhr.onerror = () => callback(new Error("Request failed"));
  xhr.send();
}
```

## Advanced Example
```js
// Modern "Ajax" almost always means fetch() or Axios today:
async function loadComments(postId) {
  const res = await fetch(`/api/posts/${postId}/comments`);
  return res.json();
}
```

## Real World Example
```js
// A "like" button that updates a count without reloading the page
// is a classic Ajax use case, whether implemented with XHR, fetch, or Axios.
```

## Industry Example
```js
// Gmail (2004) and Google Maps (2005) were the products that made
// the Ajax pattern mainstream, inspiring the term itself.
```

## Interview Questions
See full list → [interview.md](./interview.md#ajax)
1. What does "Ajax" stand for, and is XML actually required today?
2. What problem did Ajax solve compared to traditional full-page-reload web apps?
3. Name three ways to implement the Ajax pattern in modern JavaScript.
4. Is Ajax a specific API, or a general technique/pattern?
5. How does Ajax relate to the concept of a Single Page Application (SPA)?

## MCQs
See full list → [mcq.md](./mcq.md#ajax)
1. Ajax is best described as: (a) A JavaScript API (b) **A technique for async client-server communication without reload** (c) A CSS framework (d) A database → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#ajax)
1. **(Easy)** Use `XMLHttpRequest` to fetch and log data from a public API.
2. **(Medium)** Wrap `XMLHttpRequest` in a Promise-returning function.
3. **(Hard)** Build a small "infinite scroll" feature that Ajax-loads more items as the user scrolls.

## Assignments
- [ ] Explain, in your own words, why "Ajax" no longer strictly requires XML.
- [ ] Rewrite a `fetch()`-based request as a raw `XMLHttpRequest`-based one, and compare the code.

## Mini Project
Build a small "Live Search" box: as the user types, Ajax-fetch matching results from a mock JSON endpoint and render them without reloading the page.

## Common Mistakes
- Assuming Ajax requires XML data format (most modern Ajax uses JSON).
- Confusing "Ajax" (the pattern) with `XMLHttpRequest` (one specific implementation).
- Not handling the `onerror` case when using raw `XMLHttpRequest`.

## Best Practices
- Prefer `fetch()` or Axios over raw `XMLHttpRequest` in new code — reserve XHR knowledge for maintaining legacy systems.
- Always handle both success and failure paths in any Ajax call.

## Optimization Tips
- Debounce Ajax calls triggered by frequent events (like keystrokes in a search box) to avoid excessive requests.

## Summary
Ajax is the foundational technique — not a single API — for making asynchronous requests from the browser without reloading the page; it began with `XMLHttpRequest` and today is most commonly implemented via `fetch()` or Axios.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#ajax)

---
[← Axios](./axios.md) | [Section Home](./README.md) | [XMLHttpRequest →](./xmlhttprequest.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
