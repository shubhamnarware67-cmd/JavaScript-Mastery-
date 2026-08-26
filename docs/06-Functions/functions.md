# Functions

> Section: Functions · Owner: **Shubham Narware**

## Definition
A function is a reusable block of code that performs a task, optionally accepting inputs (parameters) and optionally returning an output.

## History
Present since JavaScript's creation in 1995; arrow functions (ES2015), default parameters (ES2015), and rest parameters (ES2015) later expanded how functions could be written.

## Why Functions Matter
Functions let you avoid repeating code, organize logic into named, testable units, and pass behavior around as values (a cornerstone of JS's functional capabilities).

## Syntax
```js
function name(param1, param2) {
  return param1 + param2;
}
```

## Types
| Form | Example |
|---|---|
| Function Declaration | `function greet() {}` |
| Function Expression | `const greet = function() {}` |
| Arrow Function | `const greet = () => {}` |
| Anonymous function | passed inline as a callback |
| IIFE | `(function(){})()` |

## Examples
```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

## Memory Diagram
```
   ┌──────────┐
input ──►│ FUNCTION │──► return value
   └──────────┘
Each call creates its own execution context with its own local variables.
```

## Flowchart
```
Function called
    │
New execution context created (parameters bound, local scope set up)
    │
Code runs top to bottom
    │
`return` reached (or implicit undefined at the end)?
    │
Execution context popped off the call stack, value returned to caller
```

## Internal Working
Every function call creates a new execution context on the call stack, with its own scope for parameters and local variables — this context is destroyed when the function returns, unless a closure keeps some of its variables alive (see closure.md).

## Beginner Example
```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Shubham"));
```

## Intermediate Example
```js
// Functions as first-class values — passed as arguments
function processArray(arr, operation) {
  return arr.map(operation);
}
console.log(processArray([1,2,3], n => n * 2)); // [2,4,6]
```

## Advanced Example
```js
// Function returning a function (a "factory")
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
```

## Real World Example
```js
// Reusable validation function used across a form
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
```

## Industry Example
```js
// Express.js route handlers are functions passed as callbacks
app.get("/users", function(req, res) {
  res.json(getAllUsers());
});
```

## Interview Questions
See full list → [interview.md](./interview.md#functions)
1. What's the difference between a function declaration and a function expression?
2. What does "functions are first-class citizens" mean in JavaScript?
3. What happens if a function has no explicit `return` statement?
4. What is an IIFE, and why would you use one?
5. How does each function call get its own separate local scope?

## MCQs
See full list → [mcq.md](./mcq.md#functions)
1. A function with no `return` statement returns: (a) null (b) **undefined** (c) 0 (d) an error → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#functions)
1. **(Easy)** Write a function that returns the square of a number.
2. **(Medium)** Write a function that accepts another function as an argument and calls it on each array element.
3. **(Hard)** Write a function factory that generates specialized functions (e.g. `multiplier(factor)` returning a function).

## Assignments
- [ ] Write the same function 3 ways: declaration, expression, and arrow function.
- [ ] Explain, with an example, why function declarations are hoisted but expressions are not.

## Mini Project
Build a small "Math Utilities" module: functions for `add`, `subtract`, `multiply`, `divide`, each independently tested with a few example calls.

## Common Mistakes
- Forgetting `return`, then being surprised the function returns `undefined`.
- Confusing function declarations (hoisted) with function expressions (not hoisted the same way).
- Not realizing each function call gets an entirely fresh local scope.

## Best Practices
- Give functions clear, verb-based names describing what they do (`calculateTotal`, not `doStuff`).
- Keep functions small and focused on a single responsibility.

## Optimization Tips
- Avoid unnecessary function re-creation inside hot loops/render cycles (e.g. in React) — define stable function references outside when possible.

## Summary
Functions are JavaScript's core reusable unit of behavior — first-class values that can be declared multiple ways, passed around, and returned from other functions, forming the basis for callbacks, closures, and functional patterns covered later in this section.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#functions)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Arrow Function →](./arrow-function.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
