# Asynchronous JavaScript — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### Promise {#promise}
1. **What is a Promise, and what are its three states?** A Promise is an object representing the eventual result of an async operation. States: pending (initial), fulfilled (resolved successfully), rejected (failed). Once settled, a Promise cannot change state again.
2. **What's the difference between `.then()` and `async/await`?** Both handle Promise resolution; `.then()` uses callback chaining, `async/await` uses syntax that reads like synchronous code but is still Promise-based underneath.
3. **How does `Promise.all()` differ from `Promise.allSettled()`?** `Promise.all()` rejects immediately if any promise rejects; `Promise.allSettled()` always waits for all promises and returns their individual outcomes, never short-circuiting.
4. **What does `Promise.race()` do?** Resolves or rejects as soon as the first promise in the array settles (whichever happens first).
5. **What is `Promise.any()` used for?** Resolves as soon as any promise fulfills; only rejects if ALL promises reject (with an `AggregateError`).
6. **Can a Promise's state change after it settles?** No — once fulfilled or rejected, further calls to `resolve`/`reject` inside the executor are ignored.
7. **What happens if you throw an error inside a `.then()` callback?** It's caught by the next `.catch()` in the chain, converting the throw into a rejected Promise.
8. **Why is `.finally()` useful?** It runs regardless of resolution/rejection — ideal for cleanup logic like hiding a loading spinner.
9. **What is Promise chaining, and why does returning a value matter?** Each `.then()` returns a new Promise; returning a value passes it to the next `.then()` — forgetting to return breaks the chain.
10. **How would you convert a callback-based function into a Promise-based one?** Wrap it in `new Promise((resolve, reject) => { oldFn(args, (err, result) => err ? reject(err) : resolve(result)) })` — "promisification."
11. **What's an unhandled Promise rejection?** A rejected Promise with no `.catch()` handler — can crash Node processes or log console warnings in browsers.
12. **Is a Promise executor function synchronous or asynchronous?** The executor runs synchronously and immediately; only `.then()`/`.catch()` callbacks are deferred as microtasks.

### Async Await {#async-await}
1. **What does the `async` keyword do to a function?** Makes it always return a Promise, and enables `await` inside it.
2. **What does `await` actually do?** Pauses execution until the awaited Promise settles, then resumes with the resolved value (or throws if rejected).
3. **How do you handle errors in `async/await` code?** Wrap the `await` call in `try...catch`, since a rejected awaited Promise throws inside the function.
4. **Can you use `await` outside an `async` function?** Only at the top level of an ES Module (top-level await, ES2022); otherwise a syntax error.
5. **What happens if you forget `await` before a Promise-returning call?** You get the Promise object itself instead of its resolved value.
6. **How would you run multiple async operations in parallel?** Use `Promise.all([task1(), task2()])` rather than awaiting each sequentially.
7. **Does an `async` function block the main thread while awaiting?** No — `await` yields control back to the event loop.
8. **What is the return value of an `async` function with no explicit return?** A Promise resolving to `undefined`.
9. **How do async functions interact with the microtask queue?** Code after `await` is scheduled as a microtask.
10. **Can you use `await` inside `.forEach()` effectively?** No — use `for...of` for sequential awaits or `Promise.all()` + `.map()` for parallel execution.

### Fetch {#fetch}
1. **Does `fetch()` reject on a 404 or 500?** No — only on network failure; check `response.ok` manually.
2. **How do you send a POST request with `fetch()`?** Pass `{ method: "POST", headers: {...}, body: JSON.stringify(data) }`.
3. **What does `response.json()` return?** A Promise resolving to the parsed JSON body.
4. **How would you cancel an in-flight `fetch()`?** Use `AbortController`, pass its `signal`, then call `controller.abort()`.
5. **What's the difference between `fetch()` and `XMLHttpRequest`?** `fetch()` is Promise-based; XHR is event-based but supports upload progress.
6. **How do you set custom headers?** Pass a `headers` object in the options.
7. **What happens on complete network failure?** The Promise rejects with a `TypeError`.
8. **How would you implement a request timeout?** Combine `AbortController` with `setTimeout()` calling `abort()`.
9. **Can `fetch()` send cookies cross-origin?** Only with `credentials: "include"` and matching server CORS headers.

### Axios {#axios}
1. **Does Axios reject on HTTP error status codes?** Yes, unlike `fetch()`.
2. **What is an Axios interceptor?** A function running before request send or after response receipt, for global modification (e.g., auth tokens).
3. **How do you create a reusable Axios instance?** `axios.create({ baseURL, timeout, headers })`.
4. **How would you cancel an Axios request?** Pass an `AbortController` signal in the config.
5. **What does `error.response` contain?** The server's actual response if received; `undefined` for network failures.
6. **Why choose Axios over `fetch()`?** Automatic JSON parsing, error rejection on bad status, interceptors.

### Ajax {#ajax}
1. **What does "Ajax" stand for, and is it still accurate?** Asynchronous JavaScript and XML — though modern Ajax mostly uses JSON.
2. **Is Ajax a specific browser API?** No — a general pattern implementable via XHR, `fetch()`, or Axios.
3. **What problem did Ajax solve historically?** Dynamic page updates without full reloads, enabling SPAs.
4. **How does Ajax relate to SPAs?** SPAs rely fundamentally on Ajax-style requests to update data without navigation.

### XMLHttpRequest {#xmlhttprequest}
1. **What are the 5 `readyState` values?** 0 UNSENT, 1 OPENED, 2 HEADERS_RECEIVED, 3 LOADING, 4 DONE.
2. **How does XHR's model differ from `fetch()`?** Event-based (`onload`, `onerror`) vs Promise-based.
3. **Why still use XHR today?** Upload progress tracking via `xhr.upload.onprogress`.
4. **How would you wrap XHR in a Promise?** `new Promise((resolve, reject) => { xhr.onload = ...; xhr.onerror = ...; xhr.send(); })`.

### Event Loop {#event-loop}
1. **Why does `.then()` run before `setTimeout(fn, 0)`?** Microtasks fully drain before the next macrotask.
2. **What happens to the call stack during `fetch()`?** It's empty — the network operation happens outside the JS engine.
3. **Can microtasks starve macrotasks?** Yes, if microtasks keep scheduling more microtasks.
4. **Is JS single-threaded? How is async achieved?** Yes — async comes from delegating to Web APIs, coordinated by the event loop.

### Call Stack {#call-stack}
1. **What data structure is the call stack?** LIFO (Last In, First Out).
2. **What causes "Maximum call stack size exceeded"?** Unbounded/infinite recursion without a base case.
3. **Why does a long sync loop freeze the UI?** The call stack stays occupied, blocking the event loop from other work including rendering.

### Microtask {#microtask}
1. **Name three sources of microtasks.** Promise callbacks, `queueMicrotask()`, code after `await`.
2. **What is `queueMicrotask()` for?** Directly scheduling a callback as a microtask without a Promise.
3. **Can microtasks delay rendering?** Yes — since they're drained before the browser paints.

### Macrotask {#macrotask}
1. **Name three examples of macrotasks.** `setTimeout`, `setInterval`, UI events like click/scroll.
2. **How many macrotasks run per event loop iteration?** Exactly one.
3. **Why might `setTimeout(fn, 0)` not run at exactly 0ms?** Minimum delay enforcement plus waiting for the call stack/microtask queue to clear.

### Web API {#web-api}
1. **Is `setTimeout` part of core JavaScript?** No — it's a host environment (browser/Node) API.
2. **Why does the same JS behave differently in Node vs browser?** Different host APIs (`document`/`fetch` vs `fs`/`http`) alongside shared ECMAScript.
3. **How do Web Workers relate?** They run JS on a separate thread, coordinated via message passing, not shared memory.

---
[← Section Home](./README.md)
