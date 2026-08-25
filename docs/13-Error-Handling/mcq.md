# Error Handling — MCQs

> Owner: **Shubham Narware** · Status: ✅ Complete

### Try Catch {#try-catch}
1. Which block always executes regardless of an error? (a) `try` (b) `catch` (c) **`finally`** (d) None → **(c)**
2. `try...finally` without a `catch` will: (a) Swallow the error silently (b) **Run finally, then let the error propagate** (c) Cause a syntax error (d) Never run finally → **(b)**
3. If both `try` and `finally` have a `return`, which wins? (a) `try`'s return (b) **`finally`'s return** (c) Neither, throws an error (d) Random → **(b)**
4. Can `try...catch` directly catch an error thrown inside a `setTimeout` callback? (a) Yes, always (b) **No, not directly** (c) Only in strict mode (d) Only in Node.js → **(b)**
5. The "optional catch binding" (ES2019) allows: (a) Multiple catch blocks (b) **`catch { }` without capturing the error object** (c) Catching without try (d) Async catch blocks → **(b)**

### Throw {#throw}
1. What happens if a thrown error is never caught? (a) Silently ignored (b) **Becomes an uncaught exception, crashing the script/process** (c) Auto-logged and ignored (d) JS retries the operation → **(b)**
2. Why prefer `throw new Error(msg)` over `throw "msg"`? (a) It's shorter (b) **It includes a stack trace and `.message`** (c) Strings can't be thrown (d) No real difference → **(b)**
3. A `throw` inside a `.then()` callback: (a) Crashes immediately (b) **Becomes a Promise rejection, caught by `.catch()`** (c) Is ignored (d) Must use `return throw` → **(b)**
4. Custom error classes should: (a) Never extend `Error` (b) **Extend `Error` to preserve stack traces** (c) Only use plain objects (d) Avoid `super()` → **(b)**
5. How many `export default` statements can appear in one module (context: general throw/error module design)? (a) Unlimited (b) **1** (c) 0 (d) 2 → **(b)**

---
[← Section Home](./README.md)
