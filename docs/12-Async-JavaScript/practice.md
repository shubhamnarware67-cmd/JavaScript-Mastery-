# Asynchronous JavaScript — Coding Practice

> Owner: **Shubham Narware** · Status: ✅ Complete

### Promise {#promise}
1. **(Easy)** Create a Promise that resolves with `"done"` after 1 second using `setTimeout`.
2. **(Easy)** Write a function `delay(ms)` that returns a Promise resolving after `ms` milliseconds.
3. **(Medium)** Use `Promise.all()` to fetch three different mock async values in parallel and log them together.
4. **(Medium)** Rewrite a chain of three sequential `.then()` calls to use `async/await` instead.
5. **(Hard)** Implement a `promiseAllSettledPolyfill(promises)` function replicating `Promise.allSettled()` behavior manually.
6. **(Hard)** Build a retry helper `retryPromise(fn, retries)` that retries a rejecting async function up to `retries` times before finally rejecting.

### Async Await {#async-await}
1. **(Easy)** Convert a `.then()`-based fetch chain into an `async` function using `await`.
2. **(Medium)** Write an `async` function that fetches two independent resources in parallel using `Promise.all()` and `await`.
3. **(Medium)** Add proper `try...catch` error handling to an `async` function that calls a failing API.
4. **(Hard)** Write a sequential-vs-parallel benchmark: time how long 3 awaited 1-second delays take sequentially vs via `Promise.all()`.

### Fetch {#fetch}
1. **(Easy)** Fetch data from a public API and log the parsed JSON.
2. **(Medium)** Write a function that throws an error if `response.ok` is false.
3. **(Hard)** Implement a `fetchWithTimeout(url, ms)` function using `AbortController`.

### Axios {#axios}
1. **(Easy)** Make a GET request with Axios and log `response.data`.
2. **(Medium)** Create an Axios instance with a `baseURL` and a default timeout.
3. **(Hard)** Add a request interceptor that attaches an auth token to every outgoing request.

### Ajax {#ajax}
1. **(Easy)** Use `XMLHttpRequest` to fetch and log data from a public API.
2. **(Medium)** Wrap `XMLHttpRequest` in a Promise-returning function.
3. **(Hard)** Build a small "infinite scroll" feature that Ajax-loads more items as the user scrolls.

### XMLHttpRequest {#xmlhttprequest}
1. **(Easy)** Make a GET request with `XMLHttpRequest` and log the response.
2. **(Medium)** Wrap `XMLHttpRequest` in a Promise-based helper function.
3. **(Hard)** Build a file upload feature with a live progress bar using `xhr.upload.onprogress`.

### Event Loop {#event-loop}
1. **(Easy)** Predict the console output order of a mix of `console.log`, `setTimeout`, and `Promise.then()` calls.
2. **(Medium)** Write code demonstrating microtask starvation of a macrotask.
3. **(Hard)** Explain and demonstrate how `async/await` interacts with the microtask queue using `await`.

### Call Stack {#call-stack}
1. **(Easy)** Write a 3-function chain and trace the call stack manually as comments.
2. **(Medium)** Write a recursive function without a base case and observe the resulting error.
3. **(Hard)** Rewrite a deep recursive function (like factorial) as an iterative one to avoid stack growth.

### Microtask {#microtask}
1. **(Easy)** Predict console output order for a mix of `console.log` and `.then()` calls.
2. **(Medium)** Use `queueMicrotask()` directly and explain when it runs relative to `setTimeout`.
3. **(Hard)** Demonstrate microtask starvation with a recursive `Promise.resolve().then()` chain.

### Macrotask {#macrotask}
1. **(Easy)** Predict output order for two `setTimeout(fn, 0)` calls plus a `console.log`.
2. **(Medium)** Show that microtasks queued inside a macrotask still run before the next macrotask.
3. **(Hard)** Simulate (in comments) how Node.js's multi-phase event loop differs from the browser's single macrotask queue.

### Web API {#web-api}
1. **(Easy)** List 3 Web APIs used in a typical webpage and what each does.
2. **(Medium)** Explain why `fetch` behaves differently in plain Node.js without a polyfill.
3. **(Hard)** Set up a basic Web Worker that performs a calculation and sends the result back to the main thread.

---
[← Section Home](./README.md)
