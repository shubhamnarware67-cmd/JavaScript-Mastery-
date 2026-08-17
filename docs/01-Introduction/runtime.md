# Runtime

> Section: Introduction to JavaScript · Owner: **Shubham Narware**

## Definition
A **JavaScript runtime** is the full environment that runs your code — the engine (V8, etc.) *plus* extra APIs like the DOM, timers, and network access, which JavaScript itself does not define.

## History
- Early runtimes = just the browser (engine + DOM + `window`).
- **2009**: Node.js pairs V8 with a non-browser runtime (file system, networking, no DOM) — "JavaScript everywhere" begins.
- Today: Deno, Bun, and browser runtimes all wrap engines with different extra APIs.

## Why Runtime Matters
The *language* (ECMAScript) is the same everywhere, but the *runtime APIs* differ — `document` only exists in browsers, `fs` (filesystem) only in Node — mixing them up is a common beginner error.

## Syntax
```js
// Browser runtime API example
document.querySelector("h1");

// Node.js runtime API example
const fs = require("fs");
fs.readFileSync("file.txt", "utf8");
```

## Types
| Runtime | Extra APIs it provides | Missing |
|---|---|---|
| Browser | `document`, `window`, `fetch`, `localStorage` | `require`, `fs`, `process` |
| Node.js | `fs`, `process`, `require`/`import`, `Buffer` | `document`, `window` |
| Deno | Similar to Node, but secure-by-default, ES modules only | `document` |
| Bun | Node-compatible APIs, very fast startup | `document` |

## Examples
```js
// Runtime detection pattern
if (typeof window !== "undefined") {
  console.log("Running in a browser");
} else if (typeof process !== "undefined") {
  console.log("Running in Node.js");
}
```

## Memory Diagram
```
        JavaScript Engine (V8)
                │
   ┌────────────┴─────────────┐
Browser Runtime            Node.js Runtime
   │                            │
 DOM, window,               fs, process,
 fetch, setTimeout           require/import,
                              Buffer, setTimeout
```

## Flowchart
```
Your JS code
    │
Which runtime is executing it?
    │
   ┌┴─────────────┬─────────────┐
Browser          Node.js         Deno/Bun
    │                │               │
document/window   fs/process     Node-like APIs
available          available      + extra security
```

## Internal Working
The engine (e.g. V8) only implements the ECMAScript spec (variables, functions, objects, etc). Everything else — `setTimeout`, `fetch`, `document`, `fs` — is provided by the **host environment** (browser or Node), not by the language itself.

## Beginner Example
```js
console.log("This runs the same in both browser and Node"); // pure JS, no runtime API used
```

## Intermediate Example
```js
// This ONLY works in a browser (uses the DOM, a browser-runtime API)
document.body.style.background = "black";
```

## Advanced Example
```js
// This ONLY works in Node.js (uses the fs module, a Node-runtime API)
const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf-8");
console.log(JSON.parse(data));
```

## Real World Example
```js
// Isomorphic/universal code checks the runtime before using runtime-specific APIs
function getEnvName() {
  return typeof window !== "undefined" ? "browser" : "node";
}
```

## Industry Example
```js
// Frameworks like Next.js run the SAME JS codebase across two runtimes:
// server-side (Node) for rendering, and client-side (browser) for interactivity —
// requiring careful runtime-aware code (e.g. guarding `window` usage).
```

## Interview Questions
See full list → [interview.md](./interview.md#runtime)
1. What is the difference between a JavaScript engine and a JavaScript runtime?
2. Why doesn't `document` work in Node.js?
3. Name 3 APIs that exist in Node.js but not in browsers.
4. What does "isomorphic/universal JavaScript" mean?
5. How would you detect which runtime your code is executing in?

## MCQs
See full list → [mcq.md](./mcq.md#runtime)
1. Which of these is NOT part of the core JavaScript language but a runtime API? (a) `let` (b) `document` (c) `for loop` (d) `typeof` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#runtime)
1. **(Easy)** Write a runtime-detection function that logs "browser" or "node".
2. **(Medium)** List which of 10 given API calls are browser-only, Node-only, or universal.
3. **(Hard)** Write a small utility module that works correctly in both browser and Node by guarding runtime-specific calls.

## Assignments
- [ ] Create a table of 10 APIs split into Browser-only / Node-only / Universal.
- [ ] Explain why Next.js (or similar frameworks) need runtime-aware code.

## Mini Project
Build a tiny "Environment Detector" script that reports the runtime name and lists 3 APIs available in it.

## Common Mistakes
- Trying to use `document` inside a Node.js script (ReferenceError: document is not defined).
- Trying to use `require`/`fs` inside browser JS without a bundler polyfill.

## Best Practices
- Guard runtime-specific code with feature checks (`typeof window !== "undefined"`).
- Keep runtime-agnostic business logic separate from runtime-specific I/O code.

## Optimization Tips
- In universal (isomorphic) apps, lazy-load runtime-specific modules only when needed, to avoid shipping unused code to the wrong environment.

## Summary
The JS engine executes the language; the runtime (browser, Node, Deno, Bun) wraps it with extra APIs for I/O, DOM, and more. Confusing "language features" with "runtime APIs" is one of the most common beginner mix-ups.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#runtime)

---
[← Engine](./engine.md) | [Section Home](./README.md) | [Browser vs Node →](./browser-vs-node.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
