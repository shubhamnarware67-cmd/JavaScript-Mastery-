# Introduction to JavaScript — Coding Practice

> Owner: **Shubham Narware**

### History {#history}
- **Easy:** Rewrite this ES5 snippet using `const` and an arrow function: `var add = function(a,b){ return a+b; };`
- **Medium:** Given a code snippet using `let`, `Promise`, and `?.`, identify the earliest ECMAScript version required to run it.
- **Hard:** Write a `supportsModernJS()` utility that checks for at least 3 ES2020+ features without hardcoding a version number.

### JavaScript vs ECMAScript {#javascript-vs-ecmascript}
- **Easy:** List 5 ES2015 features you already use.
- **Medium:** Write a short (3-sentence) explanation of ECMAScript vs JavaScript suitable for a beginner.
- **Hard:** Pick one active TC39 Stage 3 proposal and summarize what problem it solves.

### Versions {#versions}
- **Easy:** Convert `arr.indexOf(x) !== -1` to use `.includes()`.
- **Medium:** Convert a `.then()` promise chain into `async/await`.
- **Hard:** Given a snippet using 5 different features, determine the minimum ES version required for all of them to work.

### Engine {#engine}
- **Easy:** In your own words, explain what happens when `console.log("hi")` runs.
- **Medium:** Write two functions — one monomorphic (consistent types), one polymorphic (mixed types) — and explain which is more JIT-friendly.
- **Hard:** Research V8 "hidden classes" and explain how object property order affects optimization.

### Runtime {#runtime}
- **Easy:** Write a snippet that logs `"browser"` or `"node"` based on the current environment.
- **Medium:** Classify 10 given API calls as Browser-only / Node-only / Universal.
- **Hard:** Write a small module that exports different logic depending on detected runtime (browser vs Node).

### Browser vs Node {#browser-vs-node}
- **Easy:** Write a snippet that safely checks for `window` before using it.
- **Medium:** Convert a browser-only DOM-updating snippet into a Node-compatible version without DOM access.
- **Hard:** Build a tiny "universal" logger module that behaves correctly in both browser and Node.

### Execution {#execution}
- **Easy:** Predict the output of a snippet mixing `var` hoisting with `console.log`.
- **Medium:** Trace the call stack states for a 3-level nested function call chain.
- **Hard:** Explain with a diagram why `setTimeout(fn, 0)` executes after synchronous code, referencing the call stack and task queue.

---
[← Section Home](./README.md)
