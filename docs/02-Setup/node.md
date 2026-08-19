# Node

> Section: Environment Setup · Owner: **Shubham Narware**

## Definition
**Node.js** is a JavaScript runtime built on Google's V8 engine that lets you run JavaScript outside the browser — on servers, in CLIs, and in build tools.

## History
- Created by **Ryan Dahl** in **2009**, aiming to make non-blocking, event-driven I/O easy in JS.
- Originally used **CommonJS** modules (`require`); ES Modules (`import`) support added later (stable from Node 12+).
- Now maintained by the **OpenJS Foundation**, with a predictable LTS (Long Term Support) release schedule.

## Why Node Matters
Node lets teams use one language (JavaScript) across frontend and backend, and its non-blocking I/O model makes it well-suited for I/O-heavy apps (APIs, real-time servers).

## Syntax
```js
// CommonJS (traditional Node module system)
const fs = require("fs");
module.exports = { hello: () => "hi" };

// ES Modules (modern, in .mjs files or "type": "module" in package.json)
import fs from "fs";
export const hello = () => "hi";
```

## Types (core built-in modules)
| Module | Purpose |
|---|---|
| `fs` | File system read/write |
| `http`/`https` | Build servers, make requests |
| `path` | Cross-platform file path handling |
| `process` | Environment variables, args, exit codes |
| `events` | EventEmitter pattern |
| `os` | Operating system info |

## Examples
```js
// A minimal Node HTTP server
const http = require("http");
http.createServer((req, res) => {
  res.end("Hello from Node!");
}).listen(3000);
console.log("Server running at http://localhost:3000");
```

## Memory Diagram
```
        Your JS Code
              │
        Node.js Runtime
   ┌──────────┴───────────┐
 V8 Engine            libuv (async I/O)
 (executes JS)        (event loop, thread pool for fs/network)
```

## Flowchart
```
node app.js
    │
V8 parses & executes your script
    │
Async operation requested (fs.readFile, http request)?
    │                              │
   Yes                            No
    │                              │
libuv handles it in the       Runs synchronously,
background (thread pool/OS)   continues immediately
    │
Callback/Promise resolves → pushed to the event loop's queue
    │
Event loop runs it once the call stack is empty
```

## Internal Working
Node pairs the **V8 engine** (executes JS) with **libuv** (a C library providing the event loop and a thread pool for async file/network operations) — this combination is what makes Node non-blocking despite JavaScript being single-threaded.

## Beginner Example
```js
console.log("Hello, Node!");
console.log(process.version); // prints installed Node version
```

## Intermediate Example
```js
const fs = require("fs");
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("This logs BEFORE the file content, because readFile is async!");
```

## Advanced Example
```js
// Using Node's built-in fetch (stable since Node 18+)
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}
getData();
```

## Real World Example
```js
// A real Express.js route handler — Node powers countless production APIs
app.get("/users/:id", async (req, res) => {
  const user = await db.users.findById(req.params.id);
  res.json(user);
});
```

## Industry Example
```js
// Companies run Node in Docker containers with pinned versions for consistency
// Dockerfile
// FROM node:20-alpine
// WORKDIR /app
// COPY package*.json ./
// RUN npm ci --production
```

## Interview Questions
See full list → [interview.md](./interview.md#node)
1. Who created Node.js and what problem was it designed to solve?
2. What is libuv, and what role does it play in Node?
3. What's the difference between CommonJS and ES Modules in Node?
4. Why is Node well-suited for I/O-heavy applications?
5. Name 3 built-in Node modules and their purposes.

## MCQs
See full list → [mcq.md](./mcq.md#node)
1. Node.js pairs the V8 engine with which library for async I/O? (a) **libuv** (b) libevent (c) asyncio (d) Netty → **Answer: (a)**

## Coding Questions
See full list → [practice.md](./practice.md#node)
1. **(Easy)** Write a Node script that logs `process.version` and `process.platform`.
2. **(Medium)** Build a minimal HTTP server that responds with `"OK"` on any request.
3. **(Hard)** Write a script using `fs.promises` to read a JSON file, modify a field, and write it back.

## Assignments
- [ ] Write and run a CommonJS module and an ES Module version of the same utility function.
- [ ] Build a Node script that reads command-line arguments via `process.argv`.

## Mini Project
Build a simple Node CLI tool that reads a text file, counts word frequency, and prints the top 5 words — practicing `fs`, `process.argv`, and basic data processing.

## Common Mistakes
- Mixing `require` and `import` in the same file without proper module type configuration.
- Assuming file operations are synchronous by default (they're often async, requiring callbacks/Promises).
- Not handling errors in async file/network operations.

## Best Practices
- Prefer `fs.promises` or `fs/promises` with `async/await` over older callback-style `fs` calls for readability.
- Use `"type": "module"` in `package.json` to standardize on ES Modules for new projects.

## Optimization Tips
- Use streaming (`fs.createReadStream`) instead of reading entire large files into memory at once.
- Use clustering or worker threads for CPU-bound tasks, since Node's main thread is single-threaded for JS execution.

## Summary
Node.js runs JavaScript outside the browser by pairing the V8 engine with libuv's event loop and thread pool, enabling non-blocking I/O. It's the backbone of modern JS tooling, servers, and CLIs.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#node)

---
[← VS Code](./vscode.md) | [Section Home](./README.md) | [NPM →](./npm.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
