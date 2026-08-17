# Introduction to JavaScript — Interview Questions

> Owner: **Shubham Narware**

### History {#history}
1. **Who created JavaScript, and in how many days?** — Brendan Eich, at Netscape, in about 10 days in 1995.
2. **Why is it called "JavaScript" if unrelated to Java?** — A marketing decision by Netscape to ride Java's popularity at the time.
3. **What is ECMAScript and how does it relate to JavaScript?** — ECMAScript is the specification; JavaScript is its most popular implementation.
4. **What major problem did ES6 (2015) solve?** — Fixed scoping issues (`let/const`), added classes, promises, modules, arrow functions — modernized the language.
5. **Why do new ECMAScript versions release yearly now?** — TC39 moved to an annual cadence after ES6 so smaller feature sets ship more predictably.
6. **What was JavaScript's original name?** — Mocha, then LiveScript, then JavaScript.
7. **Which company created a competing implementation, and what was it called?** — Microsoft, called JScript.
8. **Why was JavaScript submitted to ECMA?** — To standardize the language and prevent browser fragmentation.
9. **What is TC39?** — The technical committee that manages the ECMAScript specification process.
10. **Name one feature that took years to become "safe" to use in production, and why.** — E.g. `let/const` — needed broad browser adoption before being safe without transpilation.
11. **Difficulty:** Q1–Q3 Easy, Q4–Q7 Medium, Q8–Q10 Hard.

### JavaScript vs ECMAScript {#javascript-vs-ecmascript}
1. **What's the core difference between JavaScript and ECMAScript?** — One is the spec (ECMAScript), the other the language implementation (JavaScript).
2. **Name another (mostly dead) ECMAScript implementation besides JavaScript.** — ActionScript (Flash) or JScript (old IE).
3. **What are TC39 proposal stages?** — Stage 0 (strawman) through Stage 4 (finished, included in the next edition).
4. **Why might two "JavaScript" engines behave differently?** — They may implement different subsets/versions of the ECMAScript spec.
5. **How do linters use "ecmaVersion"?** — To decide which syntax is valid to parse/allow in a project.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Versions {#versions}
1. **What are 3 features from ES2020?** — Optional chaining, nullish coalescing, `Promise.allSettled`.
2. **What's the difference between `??` and `||`?** — `??` only falls back on `null`/`undefined`; `||` falls back on any falsy value.
3. **Which version added class private fields?** — ES2022 (`#field` syntax).
4. **Why might a project still target ES5 today?** — To support very old browsers without transpilation guarantees, or legacy environment constraints.
5. **What's the practical difference between "ES6" and "ES2015"?** — None — same edition, different naming convention.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Engine {#engine}
1. **What is a JS engine? Name 3.** — A program that parses/executes JS; e.g. V8, SpiderMonkey, JavaScriptCore.
2. **What does JIT compilation mean?** — Compiling "hot" code paths to optimized machine code at runtime instead of purely interpreting.
3. **Difference between Ignition and TurboFan?** — Ignition interprets bytecode quickly; TurboFan optimizes hot functions into fast machine code.
4. **What is a "deopt"?** — When the engine reverts an optimized function back to the interpreter because a runtime assumption (like argument type) was violated.
5. **Why do consistent argument types help performance?** — They let the JIT keep a stable "hidden class"/optimization path instead of repeatedly re-optimizing.
6. Difficulty: Q1 Easy, Q2–Q3 Medium, Q4–Q5 Hard.

### Runtime {#runtime}
1. **Difference between engine and runtime?** — Engine executes ECMAScript; runtime wraps it with extra host APIs (DOM, fs, etc).
2. **Why doesn't `document` work in Node?** — Node's runtime doesn't include browser DOM APIs.
3. **Name 2 Node-only and 2 browser-only APIs.** — Node: `fs`, `process`. Browser: `document`, `localStorage`.
4. **What is isomorphic/universal JavaScript?** — Code designed to run correctly in both browser and server (Node) environments.
5. **How would you detect the current runtime?** — Check `typeof window !== "undefined"` vs `typeof process !== "undefined"`.
6. Difficulty: Q1–Q2 Easy, Q3 Medium, Q4–Q5 Hard.

### Browser vs Node {#browser-vs-node}
1. **Fundamental difference between browser and Node as JS environments?** — Browser adds UI/DOM APIs; Node adds server/file-system APIs; both share the same core language.
2. **Node's equivalent of `window`?** — `global` (or `globalThis` universally).
3. **Two Node-only, two browser-only APIs?** — Node: `require`, `process`. Browser: `document`, `fetch`(also in modern Node) — `window`.
4. **What does "isomorphic JavaScript" mean and why useful?** — Same codebase runs on server and client, useful for SSR frameworks like Next.js.
5. **Why avoid `window`/`global` in shared code?** — They aren't universal; use `globalThis` instead.
6. Difficulty: Q1 Easy, Q2–Q3 Medium, Q4–Q5 Hard.

### Execution {#execution}
1. **Two phases of an execution context?** — Creation phase (hoisting, scope setup) and execution phase (running code).
2. **What is the call stack?** — A structure tracking active function calls, growing/shrinking as functions are entered/exited.
3. **Why does `console.log(a); var a=5;` print `undefined` not throw?** — `var` declarations are hoisted and initialized to `undefined` during the creation phase.
4. **What causes "Maximum call stack size exceeded"?** — Unbounded/infinite recursion filling the call stack.
5. **Why doesn't `setTimeout(fn, 0)` run `fn` immediately?** — It waits in the task queue until the call stack is empty, even with a 0ms delay.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
