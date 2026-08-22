# Modules

> Section: Modules · Owner: **Shubham Narware**

## Definition
Modules are self-contained files of JavaScript code that explicitly export and import functionality, allowing large codebases to be split into organized, reusable, and independently maintainable pieces.

## History
ES Modules (ESM) were standardized in **ECMAScript 2015 (ES6)**, replacing the need for community-created module systems like CommonJS (Node.js) and AMD (RequireJS) that had emerged earlier to fill this gap in the language.

## Why Modules Matter
Before modules, JavaScript files shared one global scope, causing naming collisions and unclear dependencies — modules give each file its own scope, with explicit control over what is shared and what stays private.

## Syntax
```js
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from "./math.js";
```

## Types (module systems)
| System | Where used |
|---|---|
| ES Modules (`import`/`export`) | Modern browsers, modern Node.js |
| CommonJS (`require`/`module.exports`) | Traditional Node.js |
| AMD | Older browser-based async loaders (RequireJS) |
| UMD | Universal wrapper supporting multiple systems |

## Examples
```js
// utils.js
export const PI = 3.14159;
export function square(n) { return n * n; }

// app.js
import { PI, square } from "./utils.js";
console.log(square(PI));
```

## Memory Diagram
```
Each module = its own scope, its own module-level variables
math.js  { add, subtract }  ──exported──►  main.js imports only what it names
                       (rest stays private to math.js)
```

## Flowchart
```
Browser/Node encounters <script type="module"> or import statement
        │
Module file is fetched/loaded
        │
Module's top-level code runs ONCE (cached for repeat imports)
        │
Exported bindings become available to importing files
```

## Internal Working
Unlike scripts, ES Modules run in **strict mode** by default, are only executed **once** no matter how many times they're imported (results are cached), and their imports are **live bindings** — if an exported variable changes, importers see the updated value.

## Beginner Example
```js
// greet.js
export function greet(name) { return `Hello, ${name}!`; }

// index.js
import { greet } from "./greet.js";
console.log(greet("Shubham"));
```

## Intermediate Example
```js
// config.js
export default { apiUrl: "https://api.example.com" };

// app.js
import config from "./config.js";
console.log(config.apiUrl);
```

## Advanced Example
```js
// Dynamic import — loads a module only when needed
async function loadFeature() {
  const module = await import("./heavyFeature.js");
  module.init();
}
```

## Real World Example
```js
// A large React/Vue app splits components into separate module files,
// importing only what each file needs, keeping bundles organized.
```

## Industry Example
```js
// Modern build tools (Vite, Webpack, Rollup) rely entirely on the
// static structure of ES Modules to perform tree-shaking — removing
// unused exports from the final bundle.
```

## Interview Questions
See full list → [interview.md](./interview.md#modules)
1. How do ES Modules differ from CommonJS (`require`/`module.exports`)?
2. Why are ES Module imports described as "live bindings"?
3. Is a module's top-level code executed once or every time it's imported?
4. What is dynamic `import()` and when would you use it over static `import`?
5. Why do ES Modules run in strict mode automatically?

## MCQs
See full list → [mcq.md](./mcq.md#modules)
1. If module A is imported by both B and C, how many times does A's top-level code run? (a) Twice (b) **Once (cached)** (c) Zero (d) Depends on order → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#modules)
1. **(Easy)** Create a module exporting two functions and import both into another file.
2. **(Medium)** Demonstrate a "live binding" by exporting a mutable variable and showing the importer sees updates.
3. **(Hard)** Use dynamic `import()` to lazy-load a module only when a button is clicked.

## Assignments
- [ ] Explain, with an example, why splitting code into modules helps avoid global namespace collisions.
- [ ] Compare CommonJS and ES Modules syntax side by side for the same small utility file.

## Mini Project
Build a small "Calculator" app split across 3 modules: `add.js`, `subtract.js`, and `main.js` that imports and uses both.

## Common Mistakes
- Mixing CommonJS (`require`) and ES Modules (`import`) syntax in the same file without proper configuration.
- Assuming a module re-runs its top-level code every time it's imported (it doesn't — it's cached).
- Forgetting to add `type="module"` to `<script>` tags when using ES Modules in the browser.

## Best Practices
- Keep each module focused on a single responsibility.
- Prefer named exports for utilities/multiple values, and default exports for a single primary value per file.

## Optimization Tips
- Use dynamic `import()` for code-splitting large, rarely-used features so they're only downloaded when needed.

## Summary
Modules let JavaScript code be split into self-contained files with explicit imports/exports, giving each file its own scope, running only once regardless of how many times it's imported, and enabling powerful build-tool optimizations like tree-shaking.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#modules)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Import →](./import.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
