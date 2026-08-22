# Modules — MCQs

> Owner: **Shubham Narware** · Status: ✅ Complete

### Modules {#modules}
1. If module A is imported by both B and C, how many times does A's top-level code run? (a) Twice (b) **Once (cached)** (c) Zero (d) Depends on order → **(b)**
2. ES Modules run in: (a) Sloppy mode (b) **Strict mode by default** (c) Debug mode (d) Compatibility mode → **(b)**
3. Dynamic `import()` returns: (a) The module directly (b) **A Promise** (c) `undefined` (d) A callback → **(b)**

### Import {#import}
1. Which import form returns a Promise and can be called conditionally? (a) Named import (b) Default import (c) **Dynamic `import()`** (d) Namespace import → **(c)**
2. Static imports are: (a) Resolved at runtime only (b) **Hoisted and resolved at parse time** (c) Optional (d) Only for CommonJS → **(b)**
3. `import * as math from "./math.js"` gives you: (a) Only the default export (b) **A namespace object with all named exports** (c) Nothing (d) A single function → **(b)**

### Export {#export}
1. How many `export default` statements can one module have? (a) 0 (b) **1** (c) Unlimited (d) Depends on the bundler → **(b)**
2. Exported bindings are: (a) Copies taken at import time (b) **Live references to the current value** (c) Frozen forever (d) Only strings → **(b)**
3. Which syntax re-exports from another module? (a) `import { x } from "./y.js"` only (b) **`export { x } from "./y.js"`** (c) `require("./y.js")` (d) Not possible → **(b)**

---
[← Section Home](./README.md)
