# Modules — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### Modules {#modules}
Each file = own scope. Top-level code runs once (cached). Strict mode by default.

### Import {#import}
```js
import { name } from "./mod.js";
import def from "./mod.js";
import * as ns from "./mod.js";
const mod = await import("./mod.js"); // dynamic
```
Static imports are hoisted, top-level only. Dynamic `import()` returns a Promise.

### Export {#export}
```js
export const x = 1;
export function fn() {}
export default fn;
export { x as y };
export { a } from "./other.js"; // re-export
```
Only 1 default export per module. Exports are live bindings.

---
[← Section Home](./README.md)
