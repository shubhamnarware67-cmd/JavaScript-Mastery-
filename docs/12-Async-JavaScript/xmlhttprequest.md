# XMLHttpRequest

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
`XMLHttpRequest` (XHR) is the original browser API for making HTTP requests from JavaScript asynchronously (or synchronously) without reloading the page.

## History
Introduced by Microsoft in **Internet Explorer 5 (1999)**, later standardized across all browsers, and the original engine powering the "Ajax" technique before `fetch()` existed.

## Why XMLHttpRequest Matters
It's the low-level foundation that Ajax, jQuery's `$.ajax()`, and even some polyfills are built on — understanding it helps when maintaining legacy code or needing fine-grained control (like upload progress events) that `fetch()` doesn't expose as easily.

## Syntax
```js
const xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.onload = function () { /* handle response */ };
xhr.onerror = function () { /* handle error */ };
xhr.send(body);
```

## Types (readyState values)
| Value | Meaning |
|---|---|
| 0 | `UNSENT` |
| 1 | `OPENED` |
| 2 | `HEADERS_RECEIVED` |
| 3 | `LOADING` |
| 4 | `DONE` |

## Examples
```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = () => {
  if (xhr.status === 200) console.log(JSON.parse(xhr.responseText));
};
xhr.send();
```

## Memory Diagram
```
XMLHttpRequest object
  ├── readyState (0→4)
  ├── status (e.g. 200, 404)
  ├── responseText
  └── event handlers: onload, onerror, onprogress
```

## Flowchart
```
new XMLHttpRequest()
        │
xhr.open(method, url)
        │
xhr.send(body)
        │
readyState changes 1 → 2 → 3 → 4
        │
onreadystatechange / onload fires
        │
Check xhr.status ──► process xhr.responseText
```

## Internal Working
Unlike `fetch()`, `XMLHttpRequest` uses an **event-based** model (`onload`, `onerror`, `onprogress`, `onreadystatechange`) rather than Promises, which is why it requires more boilerplate and is commonly wrapped in a Promise for use with `async/await`.

## Beginner Example
```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/data");
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
```

## Intermediate Example
```js
function xhrGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => xhr.status === 200
      ? resolve(JSON.parse(xhr.responseText))
      : reject(new Error(`Status ${xhr.status}`));
    xhr.onerror = () => reject(new Error("Network error"));
    xhr.send();
  });
}
```

## Advanced Example
```js
function uploadWithProgress(url, file, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress(event.loaded / event.total);
    };
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(new Error("Upload failed"));
    xhr.send(file);
  });
}
```

## Real World Example
```js
// File upload progress bars (e.g. attaching a file to an email or form)
// are a classic case where XHR's upload.onprogress is still preferred over fetch().
```

## Industry Example
```js
// Some legacy enterprise codebases and older jQuery-based apps
// still rely directly on XMLHttpRequest under the hood.
```

## Interview Questions
See full list → [interview.md](./interview.md#xmlhttprequest)
1. What are the 5 possible `readyState` values of an `XMLHttpRequest`?
2. How does `XMLHttpRequest` differ from `fetch()` in terms of the programming model (events vs Promises)?
3. Why might you still choose `XMLHttpRequest` over `fetch()` today?
4. How do you track upload progress with `XMLHttpRequest`?
5. How would you wrap `XMLHttpRequest` in a Promise?

## MCQs
See full list → [mcq.md](./mcq.md#xmlhttprequest)
1. `XMLHttpRequest`'s `readyState` of `4` means: (a) Request not sent (b) Headers received (c) **Request complete** (d) Error occurred → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#xmlhttprequest)
1. **(Easy)** Make a GET request with `XMLHttpRequest` and log the response.
2. **(Medium)** Wrap `XMLHttpRequest` in a Promise-based helper function.
3. **(Hard)** Build a file upload feature that shows real-time progress using `xhr.upload.onprogress`.

## Assignments
- [ ] Write a Promise-wrapped `xhrGet()` function and use it with `async/await`.
- [ ] Explain one capability `XMLHttpRequest` has that plain `fetch()` doesn't provide natively.

## Mini Project
Build a small "File Uploader" with a live progress bar using `XMLHttpRequest`'s `upload.onprogress` event.

## Common Mistakes
- Forgetting to check `xhr.status` inside `onload` (it fires even for 404/500 responses).
- Not handling `onerror` for network-level failures.
- Mixing up `responseText` (string) with the need to `JSON.parse()` it.

## Best Practices
- Prefer `fetch()` for new code; use `XMLHttpRequest` only when you need upload progress events or must support very old environments.
- Always wrap raw `XMLHttpRequest` calls in a Promise for cleaner async code.

## Optimization Tips
- Reuse a single upload-progress handler pattern across the app rather than duplicating XHR boilerplate everywhere.

## Summary
`XMLHttpRequest` is the original, event-driven API for async HTTP requests in the browser — more verbose than `fetch()`, but still valuable for features like upload progress tracking that newer APIs don't cover as simply.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#xmlhttprequest)

---
[← Ajax](./ajax.md) | [Section Home](./README.md) | [Event Loop →](./event-loop.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
