# Fetch

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
The `fetch()` API is a modern, Promise-based browser interface for making HTTP requests to servers, replacing the older `XMLHttpRequest` API.

## History
Introduced around **2015** alongside the Fetch Living Standard (WHATWG), designed from the start to work naturally with Promises and later `async/await`, unlike the callback-heavy `XMLHttpRequest`.

## Why Fetch Matters
It gives a clean, Promise-based way to request and send data over the network, avoiding the verbose, event-based setup that `XMLHttpRequest` required.

## Syntax
```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Types (request configurations)
| Option | Purpose |
|---|---|
| `method` | `GET`, `POST`, `PUT`, `DELETE`, etc. |
| `headers` | Request headers, e.g. `Content-Type` |
| `body` | Payload for `POST`/`PUT` requests |
| `mode` | `cors`, `no-cors`, `same-origin` |
| `credentials` | Whether to send cookies (`omit`, `same-origin`, `include`) |

## Examples
```js
fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(users => console.log(users));
```

## Memory Diagram
```
fetch(url) ──► returns Promise<Response>
                     │
              response.json() ──► returns another Promise<data>
```

## Flowchart
```
fetch(url, options)
       │
Request sent to server
       │
Server responds
       │
Promise resolves with Response object
       │
response.ok? ──No──► handle error / bad status
       │
      Yes
       │
response.json() / .text() ──► parsed data
```

## Internal Working
`fetch()` returns a Promise that resolves as soon as the server sends response **headers** — it does **not** reject on HTTP error statuses like 404 or 500 (only on network failure), so checking `response.ok` manually is required.

## Beginner Example
```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));
```

## Intermediate Example
```js
async function getUser(id) {
  const response = await fetch(`https://api.example.com/users/${id}`);
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  return response.json();
}
```

## Advanced Example
```js
async function postData(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}
```

## Real World Example
```js
async function searchProducts(query) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000); // cancel after 5s
  const res = await fetch(`/api/search?q=${query}`, { signal: controller.signal });
  return res.json();
}
```

## Industry Example
```js
// Most modern frontend frameworks (React, Vue, Svelte) use fetch()
// internally or via wrapper libraries for all API communication.
```

## Interview Questions
See full list → [interview.md](./interview.md#fetch)
1. Does `fetch()` reject the Promise on a 404 or 500 response? Why or why not?
2. How do you set custom headers with `fetch()`?
3. How would you cancel a `fetch()` request?
4. What's the difference between `response.json()` and `response.text()`?
5. How do you send a POST request with a JSON body using `fetch()`?

## MCQs
See full list → [mcq.md](./mcq.md#fetch)
1. `fetch()` rejects its Promise when: (a) Server returns 404 (b) Server returns 500 (c) **Network failure occurs** (d) Response body is empty → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#fetch)
1. **(Easy)** Fetch data from a public API and log the parsed JSON.
2. **(Medium)** Write a function that throws an error if `response.ok` is false.
3. **(Hard)** Implement a `fetchWithTimeout()` function using `AbortController`.

## Assignments
- [ ] Write a `fetch()` call that posts JSON data and handles both success and error cases.
- [ ] Explain why checking `response.ok` is necessary even though the Promise resolved.

## Mini Project
Build a small "GitHub User Lookup" tool: an input field that calls `fetch()` against the GitHub public API and displays the user's avatar and bio.

## Common Mistakes
- Forgetting that `fetch()` does not reject on HTTP error statuses.
- Not calling `.json()` (or the right parser) and trying to use the raw `Response` object as data.
- Missing `Content-Type` header when sending a JSON body.

## Best Practices
- Always check `response.ok` before assuming success.
- Use `AbortController` for requests that need a timeout or cancellation.

## Optimization Tips
- Reuse `AbortController` instances for cancelling groups of related requests when a component unmounts or a new request supersedes an old one.

## Summary
`fetch()` is the modern, Promise-based way to make HTTP requests in JavaScript — cleaner than `XMLHttpRequest`, but requiring manual status checks since it only rejects on network failure, not HTTP error codes.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#fetch)

---
[← Async Await](./async-await.md) | [Section Home](./README.md) | [Axios →](./axios.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
