# Functions — Interview Questions

> Owner: **Shubham Narware**

### Functions {#functions}
1. **Declaration vs expression?** — Declarations are hoisted fully; expressions are not (the variable may be hoisted but not the function body).
2. **"First-class citizens" meaning?** — Functions can be assigned to variables, passed as arguments, and returned from other functions, like any other value.
3. **No `return` statement result?** — Returns `undefined` implicitly.
4. **What is an IIFE?** — An Immediately Invoked Function Expression, used to run code once and create a private scope.
5. **Separate local scope per call?** — Each invocation creates a brand-new execution context with its own parameter/variable bindings.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Arrow Function {#arrow-function}
1. **`this` difference from regular functions?** — Arrow functions inherit `this` lexically from their enclosing scope instead of binding their own.
2. **Why can't arrow functions be constructors?** — They lack the internal `[[Construct]]` behavior needed for `new`.
3. **Own `arguments` object?** — No — they must use rest parameters (`...args`) instead.
4. **Example of a `this` bug fixed by arrow functions?** — A regular function callback inside `setInterval` inside an object method losing `this`; an arrow function fixes it.
5. **When choose a regular function over arrow?** — For object methods or anything needing its own dynamic `this`/`arguments`.
6. Difficulty: Q1 Easy, Q2–Q4 Medium, Q5 Hard.

### Callback {#callback}
1. **Callback definition?** — A function passed as an argument to be invoked later by the receiving function.
2. **Sync vs async callback?** — Sync callbacks run immediately within the same call stack frame; async callbacks run later, after an event/timer/IO completes.
3. **Error-first convention?** — `callback(err, data)` — a Node.js convention checking the error argument first.
4. **What is callback hell?** — Deeply nested callbacks making code hard to read; addressed by Promises/async-await.
5. **Built-in method using callbacks?** — `Array.prototype.map`, `forEach`, `setTimeout`, etc.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Closure {#closure}
1. **Closure definition?** — A function retaining access to its outer scope's variables even after that scope has returned.
2. **Why does the `var`+loop+setTimeout bug happen?** — All callbacks share the same function-scoped variable, which has already reached its final value by the time they run.
3. **How do closures enable privacy?** — Variables in the outer function are inaccessible from outside, only reachable through the returned inner function(s).
4. **Real use case beyond a counter?** — The module pattern, memoization, event handler factories.
5. **Do closures cause memory leaks?** — Only if they retain references to large data longer than actually needed; otherwise normal garbage collection applies.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Currying {#currying}
1. **Currying definition?** — Transforming a multi-argument function into a chain of single-argument functions.
2. **Relation to closures?** — Each returned function closes over the arguments already supplied.
3. **Partial application vs full currying?** — Partial application fixes some arguments upfront; currying specifically chains one-argument-at-a-time functions.
4. **Generic curry() logic?** — Collects arguments until enough are supplied to match the original function's arity, then calls it.
5. **Practical use case?** — Building specialized validator/formatter functions from a general-purpose one.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Memoization {#memoization}
1. **Memoization definition?** — Caching a function's results to avoid recomputing for repeated identical inputs.
2. **How does it use closures?** — A cache object/Map is kept alive across calls via the closure of the returned memoized function.
3. **Why only safe for pure functions?** — Impure functions may return different results for the same input due to external state, making cached results incorrect.
4. **Tradeoff of memoization?** — Uses additional memory to store cached results.
5. **Real example?** — React's `useMemo`, Lodash's `_.memoize`.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
