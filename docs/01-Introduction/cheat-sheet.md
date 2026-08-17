# Introduction to JavaScript — Cheat Sheet

> Owner: **Shubham Narware**

### History {#history}
- Created by Brendan Eich, Netscape, 1995, ~10 days.
- Names: Mocha → LiveScript → JavaScript.
- Standardized as ECMAScript via ECMA International (1997).
- ES6/ES2015 = biggest update; yearly releases since.

### JavaScript vs ECMAScript {#javascript-vs-ecmascript}
- ECMAScript = spec. JavaScript = implementation.
- TC39 = committee managing the spec; proposals go Stage 0 → 4.

### Versions {#versions}
| Version | Year | Key Feature |
|---|---|---|
| ES5 | 2009 | strict mode, JSON |
| ES2015 | 2015 | let/const, classes, promises |
| ES2017 | 2017 | async/await |
| ES2020 | 2020 | `?.`, `??` |
| ES2022 | 2022 | private class fields `#` |

### Engine {#engine}
- Engine = parses + executes JS (V8, SpiderMonkey, JavaScriptCore).
- Pipeline: Parser → AST → Ignition (interpret) → TurboFan (optimize hot code) → deopt if assumptions break.

### Runtime {#runtime}
- Runtime = engine + host APIs.
- Browser runtime: `document`, `window`, `fetch`, `localStorage`.
- Node runtime: `fs`, `process`, `require`, `Buffer`.

### Browser vs Node {#browser-vs-node}
| | Browser | Node |
|---|---|---|
| Global | `window` | `global` |
| DOM | ✅ | ❌ |
| File system | ❌ | ✅ `fs` |
| Universal | `globalThis`, core JS (Array/Object methods) |

### Execution {#execution}
- Execution context: Creation phase (hoisting) → Execution phase (run code).
- Call stack: LIFO, one frame per active function call.
- `setTimeout(fn, 0)` still waits for the call stack to empty first.

---
[← Section Home](./README.md)
