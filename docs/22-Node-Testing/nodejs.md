# Node.js

> Section: Node & Testing · Owner: **Shubham Narware**

## Definition
Node.js is a JavaScript runtime built on Chrome's V8 engine that lets JavaScript run outside the browser — on servers, command-line tools, and desktop applications — with access to file systems, networking, and other OS-level APIs.

## History
Created by Ryan Dahl in **2009**, Node.js was groundbreaking for using an **event-driven, non-blocking I/O model**, letting a single thread handle many concurrent connections efficiently — a stark contrast to the thread-per-connection model common at the time.

## Why Node.js Matters
It let developers use one language (JavaScript) across both frontend and backend, and its non-blocking I/O model makes it especially efficient for I/O-heavy workloads like APIs, real-time apps, and microservices.

## Syntax
```js
// A minimal Node.js HTTP server
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js!");
});
server.listen(3000);
```

## Types (core built-in modules)
| Module | Purpose |
|---|---|
| `fs` | File system access (read/write files) |
| `http`/`https` | Building web servers and making requests |
| `path` | Working with file/directory paths cross-platform |
| `events` | The `EventEmitter` class, powering much of Node's API |
| `process` | Access to the current process (env vars, args, exit) |

## Examples
```js
const fs = require("fs");
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

## Memory Diagram
```
Node.js Runtime = V8 Engine + libuv (event loop, async I/O) + Node APIs
        │
Single-threaded JS execution, but I/O is offloaded and non-blocking
        │
Callbacks/Promises resume execution once I/O completes
```

## Flowchart
```
Node.js process starts
        │
Executes script's synchronous top-level code
        │
Async operations (file read, network request) delegated to libuv
        │
Node's event loop processes completed I/O callbacks as they finish
        │
Process stays alive as long as there's pending work in the event loop
```

## Internal Working
Node.js pairs the V8 JavaScript engine with **libuv**, a C library providing the event loop and a thread pool for operations that can't be done asynchronously at the OS level (like some file system calls) — this combination is what gives Node its non-blocking I/O model despite JavaScript itself being single-threaded.

## Beginner Example
```js
console.log("Hello from Node.js");
console.log(process.version); // prints the Node.js version
```

## Intermediate Example
```js
const fs = require("fs/promises");
async function readConfig() {
  const data = await fs.readFile("config.json", "utf8");
  return JSON.parse(data);
}
```

## Advanced Example
```js
const { EventEmitter } = require("events");
class OrderProcessor extends EventEmitter {
  process(order) {
    // ... processing logic
    this.emit("processed", order);
  }
}
const processor = new OrderProcessor();
processor.on("processed", (order) => console.log("Order done:", order.id));
```

## Real World Example
```js
// Real-time chat applications commonly run on Node.js because its
// event-driven model handles thousands of simultaneous socket
// connections efficiently on a single process.
```

## Industry Example
```js
// Companies like Netflix, PayPal, and LinkedIn use Node.js in
// production for parts of their backend, citing its performance
// for I/O-heavy, high-concurrency workloads.
```

## Interview Questions
See full list → [interview.md](./interview.md#nodejs)
1. What makes Node.js's I/O model "non-blocking," and why does that matter for concurrency?
2. What is `libuv`, and what role does it play in Node.js?
3. Is Node.js single-threaded? If so, how does it handle many concurrent connections?
4. What's the difference between the `fs` module's callback-based and Promise-based (`fs/promises`) APIs?
5. Why might Node.js be a good or bad fit for CPU-intensive tasks?

## MCQs
See full list → [mcq.md](./mcq.md#nodejs)
1. Node.js's non-blocking I/O model is enabled primarily by: (a) Multiple V8 instances (b) **libuv's event loop and thread pool** (c) Web Workers (d) The DOM → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#nodejs)
1. **(Easy)** Write a minimal Node.js script that reads a text file and logs its contents.
2. **(Medium)** Build a simple HTTP server using the built-in `http` module that responds differently based on the URL path.
3. **(Hard)** Build a custom `EventEmitter`-based class that emits events at different stages of a simulated order-processing pipeline.

## Assignments
- [ ] Explain, in your own words, why Node.js is well-suited for I/O-heavy applications but less ideal for CPU-heavy ones.
- [ ] Compare the callback-based and Promise-based versions of a `fs` file read operation.

## Mini Project
Build a small "File-Based To-Do CLI": a Node.js script that reads/writes todos to a local JSON file using the `fs` module, supporting add/list/remove via command-line arguments.

## Common Mistakes
- Running CPU-intensive synchronous code that blocks Node's single thread, stalling all other requests.
- Mixing callback-based and Promise-based APIs inconsistently within the same codebase.
- Forgetting that `require()` (CommonJS) and `import` (ES Modules) require different Node.js configuration to use together correctly.

## Best Practices
- Prefer `fs/promises` and `async/await` over callback-based APIs for cleaner, more maintainable async code.
- Offload genuinely CPU-heavy work to worker threads or separate processes rather than blocking Node's main thread.

## Optimization Tips
- Use Node's built-in `cluster` module or a process manager (like PM2) to run multiple Node processes across CPU cores, since a single Node process only uses one core for JS execution.

## Summary
Node.js lets JavaScript run outside the browser using the V8 engine paired with libuv's event loop, providing an efficient, non-blocking I/O model that's especially well-suited for I/O-heavy applications like APIs and real-time services, though less ideal for CPU-intensive workloads without additional threading strategies.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#nodejs)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Express →](./express.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
