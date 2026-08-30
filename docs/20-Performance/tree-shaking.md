# Tree Shaking

> Section: Performance · Owner: **Shubham Narware**

## Definition
Tree shaking is a build-time optimization that removes unused exports (dead code) from the final JavaScript bundle, based on statically analyzing ES Module `import`/`export` statements.

## History
The term was popularized by the **Rollup bundler around 2015**, later adopted by Webpack 2+ and other modern bundlers (Vite, esbuild), relying entirely on ES Modules' static structure to work.

## Why Tree Shaking Matters
It significantly reduces final bundle size by excluding code you import a library for but never actually use, directly improving load performance for end users.

## Syntax
```js
// utils.js — exports multiple functions
export function used() { /* ... */ }
export function unused() { /* ... */ }

// app.js — only imports what it needs
import { used } from "./utils.js";
used();
// `unused` is never imported, so a tree-shaking bundler removes it entirely
```

## Types (requirements for effective tree shaking)
| Requirement | Why |
|---|---|
| ES Modules (`import`/`export`) | Statically analyzable at build time, unlike CommonJS's dynamic `require()` |
| No side effects in unused code | Bundler must be sure removing code won't change behavior |
| `"sideEffects": false` in package.json | Tells bundlers a package is safe to tree-shake aggressively |

## Examples
```js
// Importing only what's needed from a large utility library
import { debounce } from "lodash-es"; // tree-shakeable ES Module build
// vs
import _ from "lodash"; // often pulls in the ENTIRE library (not tree-shakeable)
```

## Memory Diagram
```
utils.js exports: { used, unused, alsoUnused }
        │
Bundler analyzes all import statements across the app
        │
Only `used` is actually imported anywhere
        │
Final bundle: only `used`'s code is included; the rest is dropped
```

## Flowchart
```
Build process starts
        │
Bundler statically analyzes import/export graph across all files
        │
Marks every export that IS imported somewhere as "used"
        │
Everything NOT marked as used is considered dead code
        │
Dead code is stripped from the final bundle
```

## Internal Working
Tree shaking relies on ES Modules being **statically analyzable** — since `import`/`export` statements can't be conditionally constructed at runtime (unlike CommonJS's `require(someVariable)`), a bundler can build a complete, accurate dependency graph at build time and confidently remove anything not reachable from an actual usage.

## Beginner Example
```js
// math.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// app.js
import { add } from "./math.js"; // only `add` ends up in the final bundle
console.log(add(2, 3));
```

## Intermediate Example
```js
// Importing a specific function instead of the whole library
import debounce from "lodash-es/debounce";
// vs importing the entire default export, which may prevent shaking:
// import _ from "lodash-es"; _.debounce(...)
```

## Advanced Example
```json
// package.json — marking a package side-effect-free for aggressive shaking
{
  "name": "my-utils",
  "sideEffects": false
}
```

## Real World Example
```js
// A UI component library that exports 100+ components lets consumers
// import just the 3 they use, and tree shaking ensures the other 97
// never end up in the final production bundle.
```

## Industry Example
```js
// Modern bundlers (Vite, esbuild, Rollup, Webpack 5) all implement
// tree shaking as a core production build optimization, often
// combined with minification for maximum size reduction.
```

## Interview Questions
See full list → [interview.md](./interview.md#tree-shaking)
1. Why does tree shaking require ES Modules rather than CommonJS?
2. What does the `"sideEffects": false` field in `package.json` communicate to a bundler?
3. Why might importing an entire default export (`import _ from "lodash"`) prevent effective tree shaking?
4. What is "dead code," and how does tree shaking identify it?
5. How does tree shaking relate to overall bundle size and page load performance?

## MCQs
See full list → [mcq.md](./mcq.md#tree-shaking)
1. Tree shaking primarily relies on: (a) Minification (b) **Static analysis of ES Module import/export** (c) Runtime profiling (d) Gzip compression → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#tree-shaking)
1. **(Easy)** Explain, using a code example, why a CommonJS module (`require`) is harder to tree-shake than an ES Module.
2. **(Medium)** Rewrite an import statement that pulls in an entire library's default export to instead import only the specific function needed.
3. **(Hard)** Explain what happens if a module has side effects (e.g., modifies a global variable) and how that affects a bundler's ability to tree-shake it.

## Assignments
- [ ] Explain, in your own words, why tree shaking wouldn't work if `import` statements could be conditionally constructed at runtime.
- [ ] Investigate one dependency in a real project and check whether importing it a certain way is more tree-shakeable than another.

## Mini Project
Build a small utility module with 5 exported functions, use only 2 of them in a consuming file, and (conceptually, in comments) describe what a bundler's tree-shaking pass would remove.

## Common Mistakes
- Importing an entire library's default export when only a few named functions are actually used, defeating tree shaking.
- Writing modules with unintended side effects at the top level, preventing bundlers from safely removing unused parts.
- Assuming tree shaking works automatically with CommonJS (`require`) — it generally doesn't.

## Best Practices
- Prefer named imports of only what you need, especially from large utility libraries.
- Mark genuinely side-effect-free packages with `"sideEffects": false` in `package.json` to enable more aggressive tree shaking.

## Optimization Tips
- Check your bundler's production build analysis (e.g., Webpack Bundle Analyzer) to confirm large dependencies are actually being tree-shaken as expected.

## Summary
Tree shaking removes unused exported code from the final bundle by statically analyzing ES Module `import`/`export` statements, significantly reducing bundle size — but it requires ES Modules (not CommonJS) and code free of unexpected side effects to work reliably.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#tree-shaking)

---
[← Lazy Loading](./lazy-loading.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
