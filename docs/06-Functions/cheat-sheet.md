# Functions — Cheat Sheet

> Owner: **Shubham Narware**

### Functions / Arrow Functions
| Form | Hoisted? | Own `this`? | Own `arguments`? |
|---|---|---|---|
| Function Declaration | ✅ | ✅ | ✅ |
| Function Expression | ❌ (var only) | ✅ | ✅ |
| Arrow Function | ❌ | ❌ (lexical) | ❌ (use `...args`) |

- No `return` → function returns `undefined`.
- Arrow functions cannot be used with `new`.

### Callback
- A function passed to be called later. Sync (e.g. `.map()`) or async (e.g. `setTimeout`).
- Error-first convention: `callback(err, data)`.
- Deep nesting = "callback hell" → fixed by Promises/async-await.

### Closure
```js
function outer() {
  let x = 0;
  return () => ++x; // inner function "closes over" x
}
```
- Enables private state, module pattern, memoization, currying.
- `var` in loops + closures = classic shared-value bug; use `let`.

### Currying
```js
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6
```
- Relies on closures; enables partial application.

### Memoization
```js
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
```
- Only safe for pure functions.

---
[← Section Home](./README.md)
