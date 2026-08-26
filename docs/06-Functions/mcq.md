# Functions — MCQs

> Owner: **Shubham Narware**

### Functions {#functions}
1. A function with no return statement returns: (a) null (b) **undefined** (c) 0 (d) an error — *Correct: (b).*
2. Function declarations are: (a) Not hoisted (b) **Fully hoisted** (c) Only hoisted in strict mode (d) Deprecated — *Correct: (b).*
3. An IIFE is invoked: (a) Never (b) **Immediately upon definition** (c) Only with `new` (d) Only asynchronously — *Correct: (b).*

### Arrow Function {#arrow-function}
1. Arrow functions get `this` from: (a) The caller (b) **Lexical/enclosing scope** (c) `new` binding (d) The global object always — *Correct: (b).*
2. Arrow functions can be used with `new`: (a) Always (b) **Never** (c) Only in strict mode (d) Only with parentheses — *Correct: (b).*
3. Arrow functions have their own `arguments` object: (a) Yes always (b) **No** (c) Only with rest params (d) Only in Node — *Correct: (b).*

### Callback {#callback}
1. `arr.map(fn)` uses `fn` as a: (a) Constructor (b) **Callback** (c) Prototype (d) Generator — *Correct: (b).*
2. The error-first convention places the error argument: (a) Last (b) **First** (c) Randomly (d) Never included — *Correct: (b).*
3. "Callback hell" refers to: (a) Fast callbacks (b) **Deeply nested, hard-to-read callbacks** (c) Missing callbacks (d) Synchronous-only code — *Correct: (b).*

### Closure {#closure}
1. A closure lets a function access: (a) Only its own local variables (b) **Variables from its outer scope, even after that scope returns** (c) Global variables only (d) Nothing extra — *Correct: (b).*
2. The classic `var`+loop+`setTimeout` bug logs: (a) 0,1,2 (b) **The same final value repeatedly** (c) Random values (d) An error — *Correct: (b).*
3. Closures are created: (a) Only for specially marked functions (b) **For every function, automatically** (c) Only inside classes (d) Only with `let` — *Correct: (b).*

### Currying {#currying}
1. `const add = a => b => a + b; add(2)(3)` evaluates to: (a) A function (b) **5** (c) undefined (d) An error — *Correct: (b).*
2. Currying relies fundamentally on: (a) Prototypes (b) **Closures** (c) The event loop (d) Generators — *Correct: (b).*
3. Currying transforms a function into: (a) An async function (b) **A chain of single-argument functions** (c) A class (d) A generator — *Correct: (b).*

### Memoization {#memoization}
1. Memoization primarily improves performance by: (a) Parallelizing code (b) **Caching results to avoid recomputation** (c) Reducing bundle size (d) Removing arguments — *Correct: (b).*
2. Memoization is safe mainly for: (a) Any function (b) **Pure functions** (c) Async functions only (d) Constructor functions only — *Correct: (b).*
3. A common memoization data structure is: (a) An array only (b) **A Map or object cache** (c) A Set only (d) A Symbol — *Correct: (b).*

---
[← Section Home](./README.md)
