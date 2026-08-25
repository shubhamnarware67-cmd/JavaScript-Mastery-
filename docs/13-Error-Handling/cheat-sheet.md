# Error Handling — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### Try Catch {#try-catch}
```js
try {
  // risky code
} catch (error) {
  // handle
} finally {
  // always runs
}
```
`finally` always runs, even with `return`/`throw`. Optional catch binding: `catch { }`.

### Throw {#throw}
```js
throw new Error("message");
class MyError extends Error {
  constructor(msg) { super(msg); this.name = "MyError"; }
}
```
Always throw `Error` instances (not strings) to preserve `.stack`.

---
[← Section Home](./README.md)
