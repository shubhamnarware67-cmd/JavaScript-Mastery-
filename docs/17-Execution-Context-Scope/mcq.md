# Execution Context & Scope — MCQs

> Owner: **Shubham Narware** · Status: ✅ Complete

### Execution Context {#execution-context}
1. How many Global Execution Contexts exist per running script? (a) One per function (b) **Exactly one** (c) Unlimited (d) Zero → **(b)**
2. Arrow functions get `this` from: (a) The call site (b) **The enclosing lexical scope** (c) `globalThis` always (d) Their own binding → **(b)**

### Hoisting {#hoisting}
1. What is logged by `console.log(x); var x = 5;`? (a) `5` (b) **`undefined`** (c) `ReferenceError` (d) `null` → **(b)**
2. `let`/`const` before declaration throws because of: (a) Syntax error (b) **The Temporal Dead Zone** (c) They're not hoisted at all (d) Strict mode only → **(b)**

### Scope {#scope}
1. Which keyword is function-scoped rather than block-scoped? (a) `let` (b) `const` (c) **`var`** (d) None → **(c)**
2. Each function call creates: (a) A shared scope (b) **A new, independent scope** (c) No scope (d) The global scope → **(b)**

### Scope Chain {#scope-chain}
1. The scope chain is determined by: (a) Where a function is called (b) **Where a function is defined (lexically)** (c) Execution order (d) Random assignment → **(b)**
2. A variable not found anywhere in the scope chain causes: (a) `undefined` (b) **`ReferenceError`** (c) `null` (d) Silent failure → **(b)**

### Garbage Collection {#garbage-collection}
1. An object becomes eligible for GC when it is: (a) Declared with `var` (b) Passed to a function (c) **No longer reachable from any root** (d) Older than 1 second → **(c)**
2. Modern engines like V8 use: (a) Pure reference counting only (b) **Generational mark-and-sweep** (c) No garbage collection (d) Manual memory management → **(b)**

---
[← Section Home](./README.md)
