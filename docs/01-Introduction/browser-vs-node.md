# Browser vs Node

> Section: Introduction to JavaScript · Owner: **Shubham Narware**

## Definition
"Browser vs Node" compares JavaScript running inside a web browser (with DOM/UI access) against JavaScript running via Node.js (a server-side runtime with file system/network access, no DOM).

## History
- 1995–2008: JavaScript only ran in browsers.
- 2009: Ryan Dahl releases **Node.js**, pairing V8 with server-side APIs — JavaScript becomes a full-stack language.

## Why This Comparison Matters
Many bugs and confusion come from assuming an API available in one environment works in the other. Knowing the boundary helps you write portable, correct code.

## Syntax
```js
// Browser-only
window.alert("Hi");
document.getElementById("app");

// Node-only
process.env.NODE_ENV;
require("fs").readFileSync("file.txt");
```

## Types (side-by-side comparison)
| Feature | Browser | Node.js |
|---|---|---|
| Global object | `window` | `global` (or `globalThis` in both) |
| UI/DOM | ✅ `document`, `window` | ❌ none |
| File system | ❌ (sandboxed) | ✅ `fs` module |
| Modules | ES Modules (`<script type="module">`) | CommonJS (`require`) or ES Modules |
| Networking | `fetch`, `XMLHttpRequest` | `http`, `fetch` (modern Node), 3rd-party libs |
| Multi-threading | Web Workers | Worker Threads / Cluster |

## Examples
```js
// Universal (works in both)
console.log("Hello");
[1,2,3].map(n => n * 2);

// Browser only
document.title = "New Title";

// Node only
console.log(process.platform); // "win32", "linux", "darwin"
```

## Memory Diagram
```
                 ECMAScript core (same everywhere)
                            │
        ┌───────────────────┴────────────────────┐
     Browser                                    Node.js
  window, document,                       process, fs, require,
  fetch, localStorage,                    Buffer, os, path,
  Web Workers, DOM events                 Worker Threads
```

## Flowchart
```
Is this API part of the ECMAScript spec (Array, Object, let/const, etc.)?
        │
       Yes ──► Works identically in Browser AND Node
        │
       No
        │
Is it a Browser Web API (document, window, fetch UI-related)?
        │
       Yes ──► Browser only
        │
       No ──► Likely a Node API (fs, process, require) ──► Node only
```

## Internal Working
Both environments embed the **same V8 engine** (Chrome & Node), but wrap it with completely different sets of host APIs — the engine itself has no concept of "browser" or "server."

## Beginner Example
```js
// Works in both
function greet(name) { return `Hello, ${name}`; }
console.log(greet("Shubham"));
```

## Intermediate Example
```js
// Browser: reading a value from an input field
const input = document.querySelector("#name");
console.log(input.value);

// Node: reading a command-line argument
console.log(process.argv[2]);
```

## Advanced Example
```js
// Universal ("isomorphic") HTTP fetch code
async function getData(url) {
  const res = await fetch(url); // fetch is now available natively in modern Node too
  return res.json();
}
```

## Real World Example
```js
// A React app's code runs in the browser;
// a Next.js server component with the same language runs in Node —
// developers must know which runtime a given file executes in.
```

## Industry Example
```js
// package.json distinguishing browser vs node builds (bundler-aware)
// "browser": "dist/browser.js",
// "main": "dist/node.js"
```

## Interview Questions
See full list → [interview.md](./interview.md#browser-vs-node)
1. What is the fundamental difference between the browser and Node.js as JavaScript environments?
2. Why doesn't Node.js have access to the DOM?
3. What is the Node.js equivalent of the browser's `window` object?
4. Name two APIs unique to Node and two unique to the browser.
5. What does "isomorphic JavaScript" mean, and why is it useful?

## MCQs
See full list → [mcq.md](./mcq.md#browser-vs-node)
1. Which global object exists in Node.js instead of `window`? (a) `global` (b) `root` (c) `self` (d) `top` → **Answer: (a)**

## Coding Questions
See full list → [practice.md](./practice.md#browser-vs-node)
1. **(Easy)** Write a snippet that logs "browser" or "node" depending on environment.
2. **(Medium)** Convert a browser-only `fetch` + DOM-update snippet into a Node-compatible version (without DOM).
3. **(Hard)** Build a tiny module that exports different implementations depending on the runtime it's loaded in.

## Assignments
- [ ] Create a comparison table of 8 APIs, marking Browser/Node/Both.
- [ ] Write a short paragraph explaining why `localStorage` doesn't exist in Node.

## Mini Project
Build a small CLI tool in Node (using `process.argv` and `fs`) that mirrors a simple browser form's validation logic, demonstrating the same core logic running in both environments.

## Common Mistakes
- Using `document`/`window` inside Node scripts.
- Using `require()` inside browser code without a bundler (Webpack/Vite) to polyfill it.
- Assuming `global` and `window` are interchangeable — use `globalThis` for universal code.

## Best Practices
- Use `globalThis` instead of `window`/`global` when writing environment-agnostic code.
- Clearly separate UI logic (browser) from I/O/server logic (Node) in shared codebases.

## Optimization Tips
- Bundle only browser-needed code for the client, and keep Node-only modules (fs, heavy libs) out of client bundles to reduce size.

## Summary
Browser and Node.js both run JavaScript via the same core engine (commonly V8), but expose entirely different host APIs — DOM/UI in the browser, filesystem/process/networking in Node. Writing portable code means knowing exactly which environment a given API belongs to.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#browser-vs-node)

---
[← Runtime](./runtime.md) | [Section Home](./README.md) | [Execution →](./execution.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
