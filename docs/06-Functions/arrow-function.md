# Arrow Function

> Section: Functions · Owner: **Shubham Narware**

## Definition
Arrow functions (`=>`) are a concise function syntax introduced in ES2015 that, unlike regular functions, do not bind their own `this`, `arguments`, or `super` — they inherit these from the surrounding (lexical) scope.

## History
Introduced in **ES2015**, largely to fix the recurring pain of `this` binding issues with regular function callbacks.

## Why Arrow Functions Matter
Their lexical `this` makes them ideal for callbacks inside methods (e.g. array methods, event handlers, promises) where you want `this` to remain the enclosing context.

## Syntax
```js
const fn = (param1, param2) => { /* body */ };
const short = x => x * 2;          // single param, implicit return
const noParams = () => "hello";     // no params
const obj = () => ({ key: "val" }); // returning an object literal needs parens
```

## Types
| Form | Example |
|---|---|
| No parameters | `() => "hi"` |
| Single parameter | `x => x * 2` |
| Multiple parameters | `(a, b) => a + b` |
| Block body | `(a, b) => { return a + b; }` |
| Implicit object return | `() => ({ a: 1 })` |

## Examples
```js
const square = x => x * x;
console.log(square(5)); // 25

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

## Memory Diagram
```
Regular function: gets its OWN `this` at call time
Arrow function:    captures `this` from where it was DEFINED (lexical scope)
```

## Flowchart
```
Function needs its own `this` (e.g. object method, constructor)?
        │
       Yes ──► use a regular function
        │
        No — want `this` to match the SURROUNDING scope (e.g. a callback)?
        │
       Yes ──► use an arrow function
```

## Internal Working
Arrow functions have no internal `[[Construct]]` slot (can't be used with `new`), no own `arguments` object, and no own `this` binding — any reference to `this` inside one is resolved by looking outward to the nearest enclosing non-arrow function's `this`.

## Beginner Example
```js
const greet = name => `Hello, ${name}!`;
console.log(greet("Shubham"));
```

## Intermediate Example
```js
// Arrow functions inheriting `this` correctly inside a method
const counter = {
  count: 0,
  start() {
    setInterval(() => {
      this.count++; // `this` correctly refers to `counter`, thanks to lexical binding
      console.log(this.count);
    }, 1000);
  }
};
```

## Advanced Example
```js
// Regular function INSIDE a method loses `this` — classic bug arrow functions fix
const counterBroken = {
  count: 0,
  start() {
    setInterval(function () {
      this.count++; // ❌ `this` is undefined/global here, NOT counterBroken!
    }, 1000);
  }
};
```

## Real World Example
```js
// Array methods commonly use arrow functions as callbacks
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
```

## Industry Example
```js
// React functional components/hooks rely heavily on arrow functions
// for event handlers that need to reference component state correctly
function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return <button onClick={handleClick}>{count}</button>;
}
```

## Interview Questions
See full list → [interview.md](./interview.md#arrow-function)
1. How does `this` behave differently in arrow functions vs regular functions?
2. Why can't arrow functions be used as constructors (`new Fn()`)?
3. Do arrow functions have their own `arguments` object?
4. Give a real example where using a regular function instead of an arrow function causes a `this` bug.
5. When would you deliberately choose a regular function over an arrow function?

## MCQs
See full list → [mcq.md](./mcq.md#arrow-function)
1. Arrow functions get `this` from: (a) The object calling them (b) **The surrounding lexical scope** (c) The global object always (d) `new` binding → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#arrow-function)
1. **(Easy)** Convert 3 regular function expressions into arrow functions.
2. **(Medium)** Fix a `this`-related bug in a `setTimeout` callback inside an object method using an arrow function.
3. **(Hard)** Explain and demonstrate why an arrow function cannot be used as an object method needing its own `this`.

## Assignments
- [ ] Write the same function using both regular and arrow syntax, and describe the `this` difference.
- [ ] Identify 3 real situations in typical app code where arrow functions are the clearly correct choice.

## Mini Project
Build a small "Ticking Counter" object using a regular method with an arrow-function `setInterval` callback, correctly incrementing `this.count` every second.

## Common Mistakes
- Using an arrow function as an object method when it needs its own dynamic `this`.
- Trying to use `new` with an arrow function (throws a `TypeError`).
- Assuming arrow functions have their own `arguments` object (they don't — use rest parameters instead).

## Best Practices
- Use arrow functions for callbacks (array methods, timers, promises) needing lexical `this`.
- Use regular functions (or method shorthand) for object methods and anything needing dynamic `this` or `arguments`.

## Optimization Tips
- No inherent performance difference from regular functions in modern engines — choose based on `this`-binding needs, not speed.

## Summary
Arrow functions provide concise syntax and lexically-scoped `this`, making them ideal for callbacks where you want `this` to match the enclosing context — but they're unsuitable as object methods, constructors, or anywhere dynamic `this`/`arguments` is needed.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#arrow-function)

---
[← Functions](./functions.md) | [Section Home](./README.md) | [Callback →](./callback.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
