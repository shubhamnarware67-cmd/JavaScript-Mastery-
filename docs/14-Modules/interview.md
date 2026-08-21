# Modules — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### Modules {#modules}
1. **How do ES Modules differ from CommonJS (`require`/`module.exports`)?** ES Modules are statically analyzable (imports resolved at parse time, enabling tree shaking), run in strict mode, and support live bindings; CommonJS is dynamic and synchronous.
2. **Why are ES Module imports described as "live bindings"?** Because the imported reference always reflects the current value in the exporting module — if the export changes, every importer sees the update immediately.
3. **Is a module's top-level code executed once or every time it's imported?** Once — subsequent imports reuse the cached module instance.
4. **What is dynamic `import()` and when would you use it?** A Promise-returning function for lazy-loading modules conditionally or on demand, unlike static `import` which must be top-level.
5. **Why do ES Modules run in strict mode automatically?** It's part of the ES Module specification, preventing common error-prone patterns like implicit globals.

### Import {#import}
1. **Why must static `import` statements appear at the top level?** They're hoisted and resolved at parse time, before any code executes, so the engine can build a complete dependency graph upfront.
2. **What's the difference between a named import and a default import?** Named imports require exact matching names (`{ add }`); default imports can be renamed freely since there's only one per module.
3. **Why does dynamic `import()` return a Promise?** Because module loading may involve network/file I/O, which is inherently asynchronous.
4. **What does `import * as name` give you?** A namespace object containing all of that module's named exports as properties.
5. **Can you conditionally use a static `import` inside an `if` block?** No — only dynamic `import()` supports conditional/runtime loading.

### Export {#export}
1. **How many default exports can a single module have?** Exactly one.
2. **What's the difference between a named export and a default export when importing?** Named exports must match the exact exported name (or be aliased); default exports can be imported under any chosen name.
3. **Why are exported bindings described as "live"?** Because they reference the exporting module's current value, not a snapshot copy taken at import time.
4. **How do you re-export from another module through an index file?** `export { add, subtract } from "./math.js";`
5. **Can you rename an export?** Yes: `export { internalName as publicName };`

---
[← Section Home](./README.md)
