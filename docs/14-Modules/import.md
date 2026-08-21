# Import

> Section: Modules · Owner: **Shubham Narware**

## Definition
The `import` statement (or the dynamic `import()` function) is used to bring exported bindings — variables, functions, classes — from another module into the current file's scope.

## History
Introduced alongside `export` in **ECMAScript 2015 (ES6)** as part of the ES Modules standard, with dynamic `import()` added later in **ECMAScript 2020** to support lazy/conditional module loading.

## Why Import Matters
It gives explicit, traceable control over dependencies — you can see exactly what a file relies on just by reading its `import` statements, unlike older global-script approaches where dependencies were implicit.

## Syntax
```js
import { name1, name2 } from "./module.js";
import defaultExport from "./module.js";
import * as everything from "./module.js";
import defaultExport, { name1 } from "./module.js";
const module = await import("./module.js"); // dynamic
```

## Types (import forms)
| Form | Use case |
|---|---|
| Named import | `import { add } from "./math.js"` |
| Default import | `import add from "./math.js"` |
| Namespace import | `import * as math from "./math.js"` |
| Dynamic import | `await import("./math.js")` (lazy-loaded, returns a Promise) |
| Side-effect only import | `import "./setup.js"` (runs the module, imports nothing) |

## Examples
```js
import { PI, square } from "./utils.js";
console.log(square(PI));
```

## Memory Diagram
```
import { add } from "./math.js"
        │
Resolves to math.js's exported `add` binding
        │
Live reference — if math.js's `add` changes, this import sees it too
```

## Flowchart
```
import statement encountered
        │
Has this module already been loaded/cached? ──Yes──► reuse cached exports
        │ No
        ▼
Fetch/load the module file
        │
Execute its top-level code once
        │
Bind requested exports into current scope
```

## Internal Working
Static `import` statements are **hoisted** and resolved at parse time (before any code runs), which is why they must appear at the top level of a module and can't be conditionally executed — dynamic `import()`, by contrast, is a regular expression that returns a Promise and can be called anywhere, including inside conditionals.

## Beginner Example
```js
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from "./math.js";
console.log(add(2, 3));
```

## Intermediate Example
```js
// config.js
export default { env: "production" };

// app.js
import config, { version } from "./config.js";
```

## Advanced Example
```js
// Conditionally load a module only if needed
async function loadAnalytics(userOptedIn) {
  if (userOptedIn) {
    const analytics = await import("./analytics.js");
    analytics.init();
  }
}
```

## Real World Example
```js
// Route-based code splitting in a web app: each page's module
// is dynamically imported only when the user navigates to that route.
async function loadRoute(path) {
  const page = await import(`./pages/${path}.js`);
  page.render();
}
```

## Industry Example
```js
// Bundlers like Webpack/Vite automatically split code at each
// dynamic import() call, generating separate chunks loaded on demand.
```

## Interview Questions
See full list → [interview.md](./interview.md#import)
1. Why must static `import` statements appear at the top level of a module?
2. What's the difference between a named import and a default import?
3. Why does dynamic `import()` return a Promise?
4. What does `import * as name from "./module.js"` give you access to?
5. Can you conditionally use a static `import` statement inside an `if` block? Why or why not?

## MCQs
See full list → [mcq.md](./mcq.md#import)
1. Which import form returns a Promise and can be called conditionally? (a) Named import (b) Default import (c) **Dynamic `import()`** (d) Namespace import → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#import)
1. **(Easy)** Import both a named and a default export from the same module in one statement.
2. **(Medium)** Use `import * as` to namespace-import an entire module and call two of its functions.
3. **(Hard)** Implement a simple router that uses dynamic `import()` to lazy-load a page module based on the current URL path.

## Assignments
- [ ] Explain why static imports are hoisted and what that means for where they can be placed in a file.
- [ ] Write an example showing dynamic `import()` used inside a button's click handler.

## Mini Project
Build a small "Lazy Loaded Widget" demo: a button that, when clicked, dynamically imports and renders a separate module only at that moment (simulating code-splitting).

## Common Mistakes
- Trying to place a static `import` statement inside an `if` block or function (not allowed — only dynamic `import()` supports this).
- Confusing named imports (`{ name }`) with default imports (no braces), causing `undefined` values.
- Forgetting that dynamic `import()` returns a Promise, requiring `await` or `.then()`.

## Best Practices
- Keep static imports at the very top of the file, since they're hoisted and evaluated before any other code.
- Use dynamic `import()` deliberately for genuinely optional or heavy features, not as a default habit.

## Optimization Tips
- Combine dynamic `import()` with route-based or feature-based code splitting to reduce initial bundle size significantly.

## Summary
`import` brings exported bindings from other modules into scope — as static imports (hoisted, top-level only) for predictable dependency graphs, or as dynamic `import()` (a Promise-returning function) for lazy-loading modules on demand.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#import)

---
[← Modules](./modules.md) | [Section Home](./README.md) | [Export →](./export.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
