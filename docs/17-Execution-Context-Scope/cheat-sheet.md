# Execution Context & Scope — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### Execution Context {#execution-context}
Two phases: Creation (hoisting, `this`, scope chain setup) → Execution (line by line). One Global EC; new Function EC per call.

### Hoisting {#hoisting}
```
var x           → x: undefined (hoisted)
function f() {} → fully hoisted, callable immediately
let y           → hoisted but in TDZ until declaration line
```

### Scope {#scope}
`var` = function-scoped. `let`/`const` = block-scoped. Each call = new scope.

### Scope Chain {#scope-chain}
Lexical (definition-time) resolution: current scope → enclosing scopes → global. Not found → `ReferenceError`.

### Garbage Collection {#garbage-collection}
Roots: Global object + active call stack. Reachable = kept alive. Unreachable = GC'd. Generational mark-and-sweep in V8.

---
[← Section Home](./README.md)
