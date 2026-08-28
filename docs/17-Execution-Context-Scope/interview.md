# Execution Context & Scope — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### Execution Context {#execution-context}
1. **What are the two phases of an execution context's lifecycle?** Creation phase (hoisting, setting up `this`/scope chain) and execution phase (code runs line by line).
2. **What's the difference between the Global Execution Context and a Function Execution Context?** There's exactly one Global Execution Context per script; a new Function Execution Context is created every time any function is called.
3. **How does `this` get determined differently in a regular function vs an arrow function?** Regular functions get `this` based on how they're called (call-site); arrow functions inherit `this` lexically from their enclosing scope.
4. **What happens to an execution context after its function finishes executing?** It's popped off the call stack and becomes eligible for garbage collection (unless closures keep it alive).
5. **How does the "creation phase" explain `var` hoisting?** During creation, `var` declarations are registered and initialized to `undefined` before any code runs, which is why accessing them early returns `undefined` instead of throwing.

### Hoisting {#hoisting}
1. **Why does accessing a `var` before its declaration return `undefined`?** Because `var` declarations are hoisted and initialized to `undefined` during the creation phase, before the assignment line executes.
2. **Why does accessing a `let`/`const` before declaration throw a `ReferenceError`?** They're hoisted but remain in the "Temporal Dead Zone" until their declaration line runs.
3. **Are function declarations and function expressions hoisted the same way?** No — function declarations are hoisted with their full body (callable immediately); function expressions only hoist the variable (as `undefined` for `var`, or TDZ for `let`/`const`).
4. **What is the Temporal Dead Zone?** The period between entering a scope and a `let`/`const` variable's actual declaration line, during which accessing it throws.
5. **Why can you call a `function` declaration before its line, but not a `const fn = () => {}`?** Function declarations are fully hoisted with their implementation; the `const` arrow function's assignment only happens when that line executes.

### Scope {#scope}
1. **What's the key difference between function scope and block scope?** Function scope (`var`) spans the entire enclosing function; block scope (`let`/`const`) is limited to the nearest `{ }`.
2. **Why does a `var` inside an `if` block remain accessible outside it, but a `let` doesn't?** `var` ignores block boundaries entirely (function-scoped); `let`/`const` respect them (block-scoped).
3. **How does scope relate to closures?** A closure is a function retaining access to its defining scope's variables even after that outer function has returned — made possible by scope.
4. **What is "module scope"?** Each ES Module file has its own top-level scope, distinct from the global scope, so top-level variables don't leak globally.
5. **Does each function call create a new scope?** Yes — every invocation gets its own independent scope, even for the same function called multiple times.

### Scope Chain {#scope-chain}
1. **What does "lexical scoping" mean?** Scope is determined by where code is written (nesting structure), not where/how it's called.
2. **Is the scope chain determined by call site or definition site?** Definition site (lexical) — fixed when the function is written, not when invoked.
3. **What happens if a variable isn't found anywhere in the scope chain?** A `ReferenceError` is thrown.
4. **How does the scope chain enable closures?** An inner function retains a reference to its outer scopes via the scope chain, even after the outer function returns.
5. **Does the scope chain change based on where a function is called from?** No — it's fixed based on where the function is defined, regardless of call site.

### Garbage Collection {#garbage-collection}
1. **What does it mean for an object to be "reachable"?** It can be accessed, directly or indirectly, from a root (global object or active call stack) — reachable objects are kept alive.
2. **How does mark-and-sweep differ from reference counting?** Mark-and-sweep traces reachability from roots and reclaims everything unmarked; reference counting tracks reference counts per object and fails on circular references.
3. **What is a "memory leak" in JavaScript, given automatic GC?** Memory that's technically still reachable (via a lingering reference like an event listener) but functionally no longer needed — GC can't reclaim what's still referenced.
4. **How can closures unintentionally cause memory leaks?** A closure capturing a large object keeps that object alive as long as the closure itself is reachable (e.g., via an uncleaned event listener).
5. **What is "generational garbage collection"?** An optimization splitting objects into young/old generations, collecting young (short-lived) objects more frequently since most objects "die young."

---
[← Section Home](./README.md)
