# Web API

> Section: Asynchronous JavaScript · Owner: **Shubham Narware**

## Definition
Web APIs are browser-provided (not part of the JavaScript language itself) interfaces — like `setTimeout`, `fetch`, the DOM, and `localStorage` — that JavaScript engines use to perform tasks the core language can't do alone.

## History
Web APIs have existed since the earliest browsers, growing continuously as the W3C/WHATWG standardized more capabilities (DOM in the late 1990s, `XMLHttpRequest` in 1999, `fetch`/`Promise`-based APIs from ~2015 onward).

## Why Web APIs Matter
JavaScript, as a language (ECMAScript), has no built-in concept of timers, DOM manipulation, or network requests — all of that is supplied by the **runtime environment** (browser or Node.js) via Web APIs / Node APIs, which is why the same JS code behaves differently in a browser vs Node.

## Syntax
```js
// Web APIs are called like normal functions/objects, but live outside the JS engine core:
setTimeout(() => {}, 1000);       // Timers API
fetch("/api/data");               // Fetch API
document.querySelector("body");   // DOM API
localStorage.setItem("key", "v"); // Web Storage API
```

## Types (common Web APIs)
| API | Purpose |
|---|---|
| DOM API | Manipulate HTML elements |
| Timers API | `setTimeout`, `setInterval` |
| Fetch API | Network requests |
| Web Storage API | `localStorage`, `sessionStorage` |
| Geolocation API | Access device location |
| Web Workers API | Run scripts on background threads |

## Examples
```js
// The engine hands off setTimeout to the browser's Timers API,
// which calls back into the JS engine's task queue once the timer fires.
console.log("Start");
setTimeout(() => console.log("From Web API"), 1000);
console.log("End");
```

## Memory Diagram
```
JS Engine (Call Stack, Heap)
        │
        │  hands off async work
        ▼
Browser Web APIs (Timers, DOM, Fetch, etc.)
        │
        │  when ready, pushes callback to...
        ▼
Task Queue (macrotask/microtask) ──► back into Call Stack via Event Loop
```

## Flowchart
```
JS calls a Web API function (e.g. setTimeout)
        │
Browser takes over the actual timer/network/DOM work
        │
JS Call Stack is now free to keep running other code
        │
Web API finishes its work
        │
Callback is queued (as macro/microtask depending on the API)
        │
Event loop moves it to the Call Stack when appropriate
```

## Internal Working
The JavaScript engine (like V8) implements only the ECMAScript language itself; features like `setTimeout`, `fetch`, and the DOM are implemented separately by the **host environment** (the browser or Node.js) and exposed to JS as global objects/functions — this separation is why the same JS engine can run in very different environments with different available APIs.

## Beginner Example
```js
console.log("1");
setTimeout(() => console.log("2 (via Web API timer)"), 0);
console.log("3");
```

## Intermediate Example
```js
// fetch() is a Web API: the actual network request happens outside
// the JS engine entirely, and JS is only notified via the returned Promise.
fetch("/api/data").then(res => res.json()).then(console.log);
```

## Advanced Example
```js
// Web Workers let you run JS on a completely separate thread,
// communicating with the main thread via message passing —
// still coordinated through the same Web API + event loop model.
const worker = new Worker("worker.js");
worker.postMessage({ task: "heavy computation" });
worker.onmessage = (e) => console.log("Result:", e.data);
```

## Real World Example
```js
// Every time you see a loading spinner while data loads via fetch(),
// you're seeing the JS engine stay idle/responsive while the
// browser's networking Web API does the actual work.
```

## Industry Example
```js
// Node.js provides its own set of APIs (fs, http, etc.) instead of
// browser Web APIs — same JS language, different host environment.
```

## Interview Questions
See full list → [interview.md](./interview.md#web-api)
1. Is `setTimeout` part of the JavaScript language (ECMAScript) or the browser?
2. Why does the same JavaScript code have access to different APIs in Node.js vs the browser?
3. What is the relationship between Web APIs and the event loop?
4. Give three examples of Web APIs and what problem each solves.
5. How do Web Workers relate to the concept of Web APIs and threading?

## MCQs
See full list → [mcq.md](./mcq.md#web-api)
1. `fetch()`, `setTimeout()`, and the DOM API are all: (a) Part of core ECMAScript (b) **Provided by the host environment (browser/Node), not the JS language itself** (c) Deprecated features (d) Only available in Node.js → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#web-api)
1. **(Easy)** List 3 Web APIs used in a typical webpage and what each does.
2. **(Medium)** Explain, with an example, why `fetch` behaves differently (or is unavailable) in a plain Node.js script without a polyfill.
3. **(Hard)** Set up a basic Web Worker that performs a calculation and sends the result back to the main thread.

## Assignments
- [ ] Explain, in your own words, why `document` is undefined in Node.js but available in a browser.
- [ ] List which of `setTimeout`, `fetch`, `localStorage`, and `console.log` are Web APIs vs core JavaScript.

## Mini Project
Build a small demo page that uses at least 3 different Web APIs together (e.g. Timers + Fetch + Web Storage) to load, cache, and periodically refresh some data.

## Common Mistakes
- Assuming `setTimeout`/`fetch`/DOM methods are part of the JavaScript language spec itself.
- Expecting browser-only APIs (like `document`) to exist in Node.js without a special environment/polyfill.
- Not realizing Web Workers don't share memory directly — communication is via message passing only.

## Best Practices
- Be explicit in documentation/code comments about which APIs are environment-specific vs language built-ins.
- Use Web Workers for genuinely CPU-heavy tasks to avoid blocking the main thread's call stack.

## Optimization Tips
- Offload expensive computations to a Web Worker so the main thread's call stack and event loop remain free to handle UI interactions.

## Summary
Web APIs are the browser's (or Node's) contribution to what feels like "JavaScript" — timers, network requests, DOM access, storage — none of which are part of the core language itself, but all of which integrate with the JS engine through the event loop and task queues.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#web-api)

---
[← Macrotask](./macrotask.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
