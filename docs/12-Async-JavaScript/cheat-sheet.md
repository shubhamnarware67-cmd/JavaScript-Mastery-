# Asynchronous JavaScript — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### Promise {#promise}
```js
new Promise((resolve, reject) => { ... })
.then(onFulfilled).catch(onRejected).finally(onDone)
Promise.all([p1, p2])        // rejects if any rejects
Promise.allSettled([p1, p2]) // always waits for all
Promise.race([p1, p2])       // first to settle wins
Promise.any([p1, p2])        // first to fulfill wins
```
States: `pending → fulfilled` or `pending → rejected` (one-way, immutable once settled).

### Async Await {#async-await}
```js
async function fn() {
  try {
    const result = await somePromise;
  } catch (err) { /* handle */ }
}
// Parallel: await Promise.all([a(), b()])
// Sequential: await a(); await b();
```
`async` fn always returns a Promise. `await` pauses only within that function.

### Fetch {#fetch}
```js
fetch(url, { method, headers, body, signal })
  .then(res => { if (!res.ok) throw new Error(res.status); return res.json(); })
```
Rejects only on network failure — always check `res.ok`. Cancel via `AbortController`.

### Axios {#axios}
```js
axios.get(url) / axios.post(url, data)
axios.create({ baseURL, timeout, headers })
axios.interceptors.request.use(config => {...})
```
Rejects automatically on non-2xx status (unlike `fetch()`).

### Ajax {#ajax}
Pattern, not an API. Implementations: `XMLHttpRequest` (legacy), `fetch()`, Axios. Modern payloads: JSON, not XML.

### XMLHttpRequest {#xmlhttprequest}
```js
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = () => { if (xhr.status === 200) console.log(xhr.responseText); };
xhr.send();
```
`readyState`: 0 UNSENT → 1 OPENED → 2 HEADERS_RECEIVED → 3 LOADING → 4 DONE.

### Event Loop {#event-loop}
```
sync code → drain ALL microtasks → one macrotask → repeat
```
Microtasks (Promises) always beat macrotasks (`setTimeout`), even at 0ms delay.

### Call Stack {#call-stack}
LIFO structure. Deep/infinite recursion → `RangeError: Maximum call stack size exceeded`.

### Microtask {#microtask}
Sources: `.then()`/`.catch()`/`.finally()`, `queueMicrotask()`, code after `await`. Fully drained before next macrotask.

### Macrotask {#macrotask}
Sources: `setTimeout`, `setInterval`, UI events, I/O. Exactly one processed per event loop cycle.

### Web API {#web-api}
Provided by host environment (browser/Node), NOT core JS: `setTimeout`, `fetch`, DOM, `localStorage`, Web Workers.

---
[← Section Home](./README.md)
