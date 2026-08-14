# Asynchronous JavaScript — MCQs

> Owner: **Shubham Narware** · Status: ✅ Complete

### Promise {#promise}
1. A Promise starts in which state? (a) fulfilled (b) **pending** (c) rejected (d) settled → **(b)** — every Promise begins pending until `resolve`/`reject` is called.
2. `Promise.all([p1, p2])` rejects when: (a) all reject (b) **any one rejects** (c) never (d) only p1 rejects → **(b)**
3. Which method waits for all promises regardless of outcome? (a) `race()` (b) `any()` (c) **`allSettled()`** (d) `all()` → **(c)**
4. `Promise.race()` settles based on: (a) the last promise (b) **whichever settles first** (c) the first promise in the array always (d) alphabetical order → **(b)**
5. What does `.finally()` receive as an argument? (a) The resolved value (b) The rejection reason (c) **Nothing — it runs regardless** (d) An error object always → **(c)**
6. Once a Promise is fulfilled, can it later become rejected? (a) Yes, if `reject()` is called later (b) **No, it's immutable once settled** (c) Only in strict mode (d) Only with `async/await` → **(b)**
7. `Promise.any()` rejects only when: (a) the first promise rejects (b) **all promises reject** (c) more than half reject (d) never → **(b)**
8. What is returned by a `.then()` callback that returns a plain value (not a Promise)? (a) The same value, unwrapped (b) **A new Promise that resolves with that value** (c) `undefined` (d) A rejected Promise → **(b)**

### Async Await {#async-await}
1. What does an `async` function always return? (a) The literal value (b) **A Promise** (c) `undefined` (d) A callback → **(b)**
2. `await` can be used: (a) Anywhere in any function (b) **Inside `async` functions (or top-level in ES modules)** (c) Only inside `.then()` (d) Only in Node.js → **(b)**
3. How do you catch an error from an `await`ed rejected Promise? (a) `.catch()` chained after (b) **`try...catch` around the `await`** (c) It can't be caught (d) `.error()` method → **(b)**
4. Awaiting two independent async calls sequentially instead of with `Promise.all()` causes: (a) A syntax error (b) **Unnecessary serial delay** (c) Faster execution (d) No difference → **(b)**
5. What happens if you forget `await` before calling an async function? (a) Throws immediately (b) **You get a Promise object, not the resolved value** (c) Returns `undefined` always (d) Runs synchronously anyway → **(b)**

### Fetch {#fetch}
1. `fetch()` rejects its Promise when: (a) Server returns 404 (b) Server returns 500 (c) **Network failure occurs** (d) Empty response body → **(c)**
2. Which method parses the JSON body of a `fetch()` response? (a) `.parse()` (b) **`.json()`** (c) `.body()` (d) `.data()` → **(b)**
3. To cancel a `fetch()` request, you use: (a) `.cancel()` (b) **`AbortController`** (c) `clearTimeout()` (d) `.stop()` → **(b)**
4. To send cookies with a cross-origin `fetch()`, you need: (a) Nothing extra (b) **`credentials: "include"` plus matching CORS headers** (c) A special header only (d) It's impossible → **(b)**

### Axios {#axios}
1. Unlike `fetch()`, Axios: (a) Cannot send POST requests (b) **Rejects the Promise on HTTP error status codes** (c) Only works in Node.js (d) Cannot set headers → **(b)**
2. What does `axios.create()` return? (a) A single request (b) **A reusable, pre-configured Axios instance** (c) A Promise (d) An error handler → **(b)**
3. Axios interceptors can modify: (a) Only requests (b) Only responses (c) **Both requests and responses** (d) Neither → **(c)**

### Ajax {#ajax}
1. Ajax is best described as: (a) A JavaScript API (b) **A technique for async client-server communication without reload** (c) A CSS framework (d) A database → **(b)**
2. Modern Ajax typically exchanges data in: (a) XML (b) **JSON** (c) YAML (d) Plain text only → **(b)**

### XMLHttpRequest {#xmlhttprequest}
1. `XMLHttpRequest`'s `readyState` of `4` means: (a) Request not sent (b) Headers received (c) **Request complete** (d) Error occurred → **(c)**
2. Which XHR feature does `fetch()` NOT provide as directly? (a) Setting headers (b) **Upload progress tracking** (c) Sending POST requests (d) Reading response text → **(b)**

### Event Loop {#event-loop}
1. Between a microtask and a macrotask ready simultaneously, which runs first? (a) Macrotask (b) **Microtask** (c) Whichever was scheduled first regardless of type (d) They run simultaneously → **(b)**
2. Is JavaScript's core execution model single or multi-threaded? (a) Multi-threaded (b) **Single-threaded** (c) Depends on the browser (d) Multi-threaded only in Node.js → **(b)**

### Call Stack {#call-stack}
1. The call stack follows which ordering principle? (a) FIFO (b) **LIFO** (c) Random (d) Priority-based → **(b)**
2. "Maximum call stack size exceeded" is typically caused by: (a) Too many variables (b) **Unbounded recursion** (c) Slow network (d) Large arrays → **(b)**

### Microtask {#microtask}
1. Which of these does NOT create a microtask? (a) `Promise.resolve().then()` (b) `queueMicrotask()` (c) **`setTimeout(fn, 0)`** (d) code after `await` → **(c)**
2. Microtasks are drained: (a) One per event loop cycle (b) **Completely, before the next macrotask** (c) Never (d) Only on page load → **(b)**

### Macrotask {#macrotask}
1. How many macrotasks are processed per event loop cycle? (a) All of them (b) **Exactly one** (c) Two (d) Depends on browser → **(b)**
2. Which of these is a macrotask? (a) `Promise.then()` (b) **`setTimeout()`** (c) `queueMicrotask()` (d) `await` continuation → **(b)**

### Web API {#web-api}
1. `fetch()`, `setTimeout()`, and the DOM API are all: (a) Part of core ECMAScript (b) **Provided by the host environment (browser/Node), not the JS language itself** (c) Deprecated features (d) Only available in Node.js → **(b)**
2. Web Workers communicate with the main thread via: (a) Shared memory directly (b) **Message passing** (c) Global variables (d) They can't communicate → **(b)**

---
[← Section Home](./README.md)
