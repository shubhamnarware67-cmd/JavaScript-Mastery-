# Currying

> Section: Functions · Owner: **Shubham Narware**

## Definition
Currying transforms a function that takes multiple arguments into a sequence of functions that each take a single argument, returning a new function until all arguments are supplied.

## History
A concept borrowed from mathematical logic (named after logician Haskell Curry), used in functional programming languages long before JavaScript; it became a popular JS pattern especially with the rise of functional-programming-influenced libraries (Lodash, Ramda).

## Why Currying Matters
It enables partial application — pre-filling some arguments to create specialized, reusable functions — useful for configuration, composition, and reducing repetition.

## Syntax
```js
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}
curriedAdd(2)(3); // 5
```

## Types
| Style | Example |
|---|---|
| Manual nested functions | `a => b => a + b` |
| Curry utility (generic) | `curry(fn)` — converts any function automatically |

## Examples
```js
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // 6
```

## Memory Diagram
```
add(1) returns a NEW function that "remembers" a=1 (via closure)
    │
(that function)(2) returns ANOTHER function remembering a=1, b=2
    │
(that function)(3) finally computes and returns 1+2+3 = 6
```

## Flowchart
```
Call curried function with first argument
        │
Returns a NEW function (closure over that argument)
        │
Call it with the next argument
        │
Repeat until all expected arguments are supplied
        │
Final function call computes and returns the result
```

## Internal Working
Currying relies entirely on closures — each returned function "remembers" the arguments already supplied via its lexical scope, only computing the final result once the last expected argument arrives.

## Beginner Example
```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const double = multiply(2);
console.log(double(5)); // 10
```

## Intermediate Example
```js
// Arrow function shorthand version
const multiplyArrow = a => b => a * b;
const triple = multiplyArrow(3);
console.log(triple(4)); // 12
```

## Advanced Example
```js
// A generic curry() utility that curries ANY function automatically
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
function sum3(a, b, c) { return a + b + c; }
const curriedSum = curry(sum3);
console.log(curriedSum(1)(2)(3));   // 6
console.log(curriedSum(1, 2)(3));   // 6
console.log(curriedSum(1, 2, 3));   // 6
```

## Real World Example
```js
// Creating specialized, reusable validators via partial application
const isType = type => value => typeof value === type;
const isString = isType("string");
const isNumber = isType("number");
console.log(isString("hi")); // true
console.log(isNumber(5));     // true
```

## Industry Example
```js
// Libraries like Lodash provide _.curry() to convert any function
// into a curried version, widely used in functional-style codebases
// and Redux middleware/selector composition.
```

## Interview Questions
See full list → [interview.md](./interview.md#currying)
1. What is currying, in your own words?
2. How does currying relate to closures?
3. What is "partial application," and how does it differ conceptually from full currying?
4. Write (verbally describe) a generic `curry()` utility function's logic.
5. Give a practical use case for currying in real application code.

## MCQs
See full list → [mcq.md](./mcq.md#currying)
1. `const add = a => b => a + b; add(2)(3)` evaluates to: (a) `a=>b=>a+b` (b) **5** (c) undefined (d) an error → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#currying)
1. **(Easy)** Write a curried `multiply(a)(b)` function.
2. **(Medium)** Write a curried 3-argument function `volume(l)(w)(h)` computing volume.
3. **(Hard)** Implement a generic `curry(fn)` utility that works for any function regardless of its argument count.

## Assignments
- [ ] Convert a normal 3-argument function into a manually curried version.
- [ ] Explain, with an example, how currying enables creating specialized reusable functions (partial application).

## Mini Project
Build a small "Validator Factory" using currying: a generic `isType(type)` curried function used to derive `isString`, `isNumber`, and `isBoolean` validators.

## Common Mistakes
- Confusing currying (returning single-argument function chains) with simple multi-argument functions.
- Writing a generic `curry()` utility that doesn't correctly handle functions accepting extra arguments in one call (`curriedSum(1, 2)(3)`).

## Best Practices
- Use currying deliberately for genuine partial-application benefits, not just for its own sake — plain functions are often clearer for simple cases.
- Consider a well-tested generic `curry()` utility (or a library's) rather than hand-rolling one repeatedly.

## Optimization Tips
- Currying creates additional closures/function objects per call — for extremely hot code paths, a plain multi-argument function call may be marginally faster.

## Summary
Currying transforms a multi-argument function into a chain of single-argument functions using closures, enabling powerful partial-application patterns for building specialized, reusable functions.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#currying)

---
[← Closure](./closure.md) | [Section Home](./README.md) | [Memoization →](./memoization.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
