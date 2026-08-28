# Execution Context & Scope — Coding Practice

> Owner: **Shubham Narware** · Status: ✅ Complete

### Execution Context {#execution-context}
1. **(Easy)** Predict the output of a `console.log` before a `var` declaration.
2. **(Medium)** Demonstrate how `this` differs between a regular function and an arrow function called the same way.
3. **(Hard)** Trace the creation and execution phases of a nested function call in comments.

### Hoisting {#hoisting}
1. **(Easy)** Predict the output of accessing a `var` before its declaration line.
2. **(Medium)** Demonstrate the Temporal Dead Zone by accessing a `let` variable before its declaration.
3. **(Hard)** Explain why a function declaration can be called before it appears in the file, but a `const` function expression cannot.

### Scope {#scope}
1. **(Easy)** Show that a `var` inside a block leaks outside it while a `let` doesn't.
2. **(Medium)** Write a closure that uses scope to create a private counter variable.
3. **(Hard)** Demonstrate and fix the classic "var in a loop + setTimeout" bug using `let`.

### Scope Chain {#scope-chain}
1. **(Easy)** Write nested functions showing an inner function accessing an outer variable via the scope chain.
2. **(Medium)** Create a closure-based counter and explain how the scope chain keeps the count alive.
3. **(Hard)** Prove the scope chain is lexical by calling a function from a different scope than where it was defined.

### Garbage Collection {#garbage-collection}
1. **(Easy)** Show how setting a variable to `null` makes an object eligible for GC.
2. **(Medium)** Write a closure that unintentionally keeps a large object alive, then fix it.
3. **(Hard)** Demonstrate a DOM-related memory leak (forgotten event listener) and show the corrected version.

---
[← Section Home](./README.md)
