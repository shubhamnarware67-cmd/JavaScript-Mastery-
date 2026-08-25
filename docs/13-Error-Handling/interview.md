# Error Handling — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### Try Catch {#try-catch}
1. **Does `finally` always run, even if `catch` re-throws or `try` returns?** Yes — `finally` runs regardless of how the `try`/`catch` block exits, including via `return`, `throw`, or normal completion.
2. **Can you use `try...finally` without a `catch`?** Yes — the error still propagates up the call stack after `finally` runs, useful for cleanup without swallowing the error.
3. **What is the "optional catch binding" (ES2019)?** Lets you write `catch { }` without capturing the error object, when you don't need its details.
4. **If you `return` from both `try` and `finally`, which value wins?** The `finally` block's return value overrides the `try` block's — a common gotcha.
5. **Can `try...catch` catch errors thrown inside a `setTimeout` callback?** No — the callback runs in a separate execution context later; wrap the callback's own code in `try...catch` instead.
6. **Why wrap an `await`ed `fetch()` call in `try...catch`?** Because a rejected awaited Promise throws synchronously within the `async` function, making `try...catch` the natural way to handle it.
7. **What's the difference between `try...catch` and `.catch()` on a Promise?** `try...catch` handles synchronous throws (or `await`ed rejections); `.catch()` specifically handles Promise rejections in a `.then()` chain.
8. **Should you use `try...catch` for routine control flow (like checking if a key exists)?** No — it's meant for exceptional, unpredictable failures; overusing it for normal logic hurts readability and can have a small performance cost.

### Throw {#throw}
1. **Why is `throw new Error("msg")` preferred over `throw "msg"`?** `Error` objects carry a `.stack` trace and `.message`, aiding debugging; plain strings/objects don't.
2. **What happens if a thrown error is never caught anywhere?** It becomes an "uncaught exception" — crashing the script (browser) or process (Node, depending on config).
3. **How do you create a custom error type?** Extend the built-in `Error` class: `class MyError extends Error { constructor(msg) { super(msg); this.name = "MyError"; } }`.
4. **Can you `throw` inside a `.then()` callback?** Yes — it's caught by the next `.catch()` in the Promise chain, becoming a rejection.
5. **What's the difference between `throw` and returning an error object?** `throw` immediately halts execution and requires explicit handling (`try...catch`); returning an error object is just a regular value the caller must remember to check.
6. **Why avoid throwing for expected, frequent conditions?** Exceptions are meant for truly exceptional cases; using them for routine logic (like "not found" during a normal lookup) hurts clarity and can have overhead in hot paths.

---
[← Section Home](./README.md)
