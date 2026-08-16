# Engine

> Section: Introduction to JavaScript · Owner: **Shubham Narware**

## Definition
A **JavaScript engine** is a program that parses, compiles, and executes JavaScript code. Examples: **V8** (Chrome, Node, Edge), **SpiderMonkey** (Firefox), **JavaScriptCore** (Safari).

## History
- 1995: original engine inside Netscape Navigator (simple interpreter).
- 2008: Google releases **V8**, introducing JIT (Just-In-Time) compilation — a huge performance leap, and later powers Node.js (2009).
- Modern engines mix interpreters + multiple tiers of JIT compilers for speed.

## Why Engines Matter
Understanding engine internals (parsing, JIT, garbage collection) explains real performance behavior — e.g. why the "same" code can be slow on first run and fast after warm-up.

## Syntax
```js
// Not syntax-specific — this is a runtime/internals topic.
```

## Types (V8 pipeline stages)
| Stage | Tool | Role |
|---|---|---|
| Parsing | Parser | Source → AST (Abstract Syntax Tree) |
| Interpreting | Ignition | AST/bytecode → runs code immediately |
| Optimizing | TurboFan | Compiles "hot" (frequently run) code to fast machine code |
| Memory | Orinoco | Garbage collector, manages heap memory |

## Examples
```js
// Code that becomes "hot" and gets optimized by the JIT
function square(n) { return n * n; }
for (let i = 0; i < 1_000_000; i++) {
  square(i); // after many calls, V8's TurboFan optimizes this function
}
```

## Memory Diagram
```
   Call Stack (function calls, primitives)      Heap (objects, closures, arrays)
   ┌───────────────┐                              ┌───────────────────────┐
   │ square(5)       │                              │ { name: "Shubham" }      │
   │ main()          │  ── references ───────────►  │ [1,2,3]                  │
   └───────────────┘                              └───────────────────────┘
```

## Flowchart
```
Source Code
    │
Parser ──► AST
    │
Ignition (Interpreter) ──► Bytecode, runs immediately
    │
   Is this function "hot" (called many times)?
    │                              │
   No                             Yes
    │                              │
Keep interpreting          TurboFan compiles to optimized machine code
                                   │
                          If assumptions break (type changes) → "deopt" back to bytecode
```

## Internal Working
1. **Parse**: source code → tokens → AST.
2. **Interpret**: Ignition executes bytecode directly (fast startup).
3. **Profile**: engine watches which functions run often ("hot" functions) and with what argument types.
4. **Optimize**: TurboFan compiles hot functions into highly optimized machine code, assuming consistent types.
5. **Deoptimize**: if a hot function suddenly receives different types than expected, V8 discards the optimized version and falls back to the interpreter ("deopt") — this is why consistent types help performance.

## Beginner Example
```js
console.log("Hello"); // engine parses, interprets, and executes this line immediately
```

## Intermediate Example
```js
// Monomorphic (single type) function — JIT-friendly
function add(a, b) { return a + b; }
add(1, 2); add(3, 4); add(5, 6); // always numbers → engine can optimize confidently
```

## Advanced Example
```js
// Polymorphic (mixed type) function — harder for the JIT to optimize
function add(a, b) { return a + b; }
add(1, 2);       // numbers
add("a", "b");   // strings — now the engine must handle multiple type shapes,
                  // which can prevent or undo optimization
```

## Real World Example
```js
// Node.js exposes V8 flags for inspecting engine behavior, e.g.:
// node --trace-opt --trace-deopt app.js
// (shows which functions get optimized/deoptimized at runtime)
```

## Industry Example
```js
// High-performance libraries intentionally keep function argument
// types consistent ("monomorphic") to stay JIT-friendly —
// a common optimization technique in performance-critical codebases.
```

## Interview Questions
See full list → [interview.md](./interview.md#engine)
1. What is a JavaScript engine? Name three real examples.
2. What does "JIT compilation" mean?
3. Explain the difference between Ignition and TurboFan in V8.
4. What is a "deopt" and why does it happen?
5. Why can functions with consistent argument types run faster?

## MCQs
See full list → [mcq.md](./mcq.md#engine)
1. Which company created the V8 engine? (a) Mozilla (b) Google (c) Apple (d) Microsoft → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#engine)
1. **(Easy)** Explain in your own words what happens when you run `console.log("hi")`.
2. **(Medium)** Write two versions of a function — one monomorphic, one polymorphic — and explain the JIT implication of each.
3. **(Hard)** Research and summarize V8's "hidden classes" concept and how it relates to object shape consistency.

## Assignments
- [ ] Diagram the V8 pipeline from source code to executed machine code.
- [ ] List 3 other JS engines besides V8 and which browser/runtime uses each.

## Mini Project
Build a benchmark page comparing a monomorphic vs polymorphic function's execution time using `performance.now()`.

## Common Mistakes
- Assuming JavaScript is "purely interpreted" — modern engines use JIT compilation, a hybrid approach.
- Mixing argument types unnecessarily in hot functions, unknowingly hurting JIT optimization.

## Best Practices
- Keep function argument shapes/types consistent in performance-critical code paths.
- Avoid changing an object's shape (adding/removing properties) after creation in hot code paths.

## Optimization Tips
- Initialize all object properties in the constructor (consistent "hidden class") rather than adding them later.
- Avoid `arguments` object and prefer rest parameters (`...args`) for JIT-friendlier code.

## Summary
A JS engine (V8, SpiderMonkey, JavaScriptCore) parses, interprets, and JIT-compiles your code, optimizing "hot" functions for speed while balancing fast startup via interpretation. Understanding this explains many real-world performance behaviors.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#engine)

---
[← Versions](./versions.md) | [Section Home](./README.md) | [Runtime →](./runtime.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
