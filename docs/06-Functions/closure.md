# Closure

> Section: Functions · Owner: **Shubham Narware**

## Definition
A closure is a function that "remembers" the variables from its outer (enclosing) scope even after that outer function has finished executing.

## History
Closures have existed since JavaScript's creation in 1995 as a natural consequence of lexical scoping — there's no special syntax to "enable" them, they simply occur.

## Why Closures Matter
Closures enable private state (data hiding), function factories, and are the mechanism behind many patterns including memoization, currying, and the module pattern.

## Syntax
```js
function outer() {
  let variable = "I persist";
  return function inner() {
    console.log(variable); // inner "closes over" variable
  };
}
```

## Types
Not applicable as distinct "types" — but common closure patterns include: private counters, function factories, memoization, and the module pattern.

## Examples
```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3 — count persists between calls!
```

## Memory Diagram
```
counter() executes and returns inner function
        │
count = 0 is kept ALIVE in memory (not garbage collected)
because the returned inner function still references it
        │
Each call to increment() reads/updates that SAME persisted `count`
```

## Flowchart
```
Outer function runs, creates local variable
        │
Outer function returns an inner function referencing that variable
        │
Outer function's execution context normally would be destroyed...
        │
...EXCEPT the variable stays alive because the inner function's closure references it
        │
Every future call to the inner function accesses the SAME persisted variable
```

## Internal Working
When a function is defined, it keeps a reference to its lexical environment (the scope chain at the point of definition) — even after the outer function returns and its execution context would normally be discarded, any variables still referenced by an inner function remain in memory as part of that closure.

## Beginner Example
```js
function greet(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}
const greetShubham = greet("Shubham");
greetShubham(); // "Hello, Shubham" — remembers `name` even after greet() finished
```

## Intermediate Example
```js
// Private state via closures — true encapsulation
function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: amt => (balance += amt),
    withdraw: amt => (balance -= amt),
    getBalance: () => balance
  };
}
const account = bankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// `balance` is NOT accessible directly from outside — true privacy!
```

## Advanced Example
```js
// Classic loop + closure gotcha, and its fix
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100); // logs 4, 4, 4 — shared `var` closure
}
for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log(j), 100); // logs 1, 2, 3 — each `let` gets its own closure
}
```

## Real World Example
```js
// Module pattern using an IIFE + closure for private helper state
const Calculator = (function () {
  let history = [];
  return {
    add(a, b) {
      const result = a + b;
      history.push(result);
      return result;
    },
    getHistory: () => [...history]
  };
})();
console.log(Calculator.add(2, 3)); // 5
console.log(Calculator.getHistory()); // [5]
```

## Industry Example
```js
// React's useState hook relies conceptually on closures to
// preserve state between re-renders of a functional component.
```

## Interview Questions
See full list → [interview.md](./interview.md#closure)
1. What is a closure, in your own words?
2. Why does the classic `var`-in-a-loop `setTimeout` example log the same final value for every callback?
3. How do closures enable "private" variables in JavaScript?
4. Give a real use case for closures beyond a simple counter example.
5. Do closures cause memory leaks? Under what circumstances?

## MCQs
See full list → [mcq.md](./mcq.md#closure)
1. A closure allows a function to: (a) Run faster (b) **Access variables from its outer scope after that scope has returned** (c) Avoid using parameters (d) Become synchronous → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#closure)
1. **(Easy)** Write a `counter()` closure-based function that increments and returns a count each call.
2. **(Medium)** Build a `bankAccount` object using closures to keep `balance` private, exposing only `deposit`/`withdraw`/`getBalance`.
3. **(Hard)** Implement a simple memoization utility using a closure to cache previous function call results.

## Assignments
- [ ] Explain, with a diagram, why the returned inner function in a closure example doesn't lose access to the outer variable.
- [ ] Rewrite a `var`-based loop+`setTimeout` bug using `let`, confirming the closure now captures the correct value.

## Mini Project
Build a "Private Todo List" module using the module pattern (IIFE + closure) exposing only `addTodo`, `removeTodo`, and `getTodos`, with the underlying array kept fully private.

## Common Mistakes
- Assuming closures always cause memory leaks — they only retain what's still referenced, and are garbage collected normally once nothing references them anymore.
- Using `var` in loops expecting each iteration's callback to capture a different value.
- Not realizing closures are created for EVERY function, not just ones that obviously "need" one.

## Best Practices
- Use closures deliberately for private state/encapsulation (module pattern, factory functions).
- Prefer `let`/`const` in loops that create closures, to get correct per-iteration variable capture.

## Optimization Tips
- Be mindful that closures retaining large objects/arrays can delay garbage collection of that data — release references (set to `null`) if a long-lived closure no longer needs them.

## Summary
Closures let inner functions retain access to their outer function's variables even after that outer function has returned — a natural consequence of lexical scoping that enables private state, function factories, and patterns like memoization and the module pattern.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#closure)

---
[← Callback](./callback.md) | [Section Home](./README.md) | [Currying →](./currying.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
