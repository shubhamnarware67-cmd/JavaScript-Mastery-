# Versions

> Section: Introduction to JavaScript · Owner: **Shubham Narware**

## Definition
JavaScript "versions" refer to yearly ECMAScript editions (ES5, ES2015...ES2024+), each adding new syntax and built-in features to the language.

## History
- **ES1 (1997)** → **ES5 (2009)**: infrequent releases, big gaps.
- **ES2015 (ES6)**: turning point — yearly release cadence begins.
- **ES2016–ES2024**: smaller, incremental yearly editions.

## Why Versions Matter
Knowing which version introduced a feature tells you whether it'll run in older environments, and helps you set correct Babel/TypeScript compile targets.

## Syntax
```js
// No special syntax to "select" a version at runtime in plain JS;
// version targeting happens in build tools (Babel, tsconfig "target").
```

## Types (major milestones)
| Version | Year | Headline Features |
|---|---|---|
| ES5 | 2009 | strict mode, `JSON`, `Array` iteration methods |
| ES2015 (ES6) | 2015 | `let/const`, classes, arrow fns, promises, modules, template literals |
| ES2016 | 2016 | `Array.prototype.includes`, `**` exponent operator |
| ES2017 | 2017 | `async/await`, `Object.entries/values` |
| ES2018 | 2018 | rest/spread for objects, async iteration |
| ES2019 | 2019 | `Array.flat/flatMap`, `Object.fromEntries` |
| ES2020 | 2020 | optional chaining `?.`, nullish coalescing `??`, `BigInt`, `Promise.allSettled` |
| ES2021 | 2021 | `String.replaceAll`, logical assignment (`&&=`, `||=`, `??=`) |
| ES2022 | 2022 | class private fields `#`, top-level `await`, `Array.at()` |
| ES2023/24 | 2023–24 | `Array.toSorted/toReversed`, `Object.groupBy` |

## Examples
```js
// ES2020
const city = user?.address?.city ?? "N/A";

// ES2021
count ||= 1; // logical OR assignment

// ES2022
class Wallet {
  #balance = 0; // private field
  add(n) { this.#balance += n; }
}
```

## Memory Diagram
Not applicable — versions describe available syntax, not memory layout.

## Flowchart
```
Write code ──► Target older environments? ──Yes──► Transpile (Babel) down to ES5
                        │
                        No
                        ▼
              Ship modern ES2020+ syntax directly
```

## Internal Working
Engines implement features incrementally; you can check per-feature support via `caniuse.com` or `node -p process.version` combined with Node's ECMAScript compatibility table.

## Beginner Example
```js
// ES5 way to check array membership
[1,2,3].indexOf(2) !== -1; // true

// ES2016+ way
[1,2,3].includes(2); // true
```

## Intermediate Example
```js
// ES2017 async/await vs ES2015 Promises
// ES2015
fetch("/api").then(res => res.json()).then(data => console.log(data));

// ES2017
async function load() {
  const res = await fetch("/api");
  const data = await res.json();
  console.log(data);
}
```

## Advanced Example
```js
// ES2022 top-level await (only valid inside ES modules)
// file: main.mjs
const data = await fetch("/api").then(r => r.json());
console.log(data);
```

## Real World Example
```js
// tsconfig.json target controls which ES version TypeScript compiles down to
// {
//   "compilerOptions": { "target": "ES2020" }
// }
```

## Industry Example
```js
// Node.js LTS releases document their ECMAScript support level,
// e.g. Node 18 fully supports ES2022 features like class private fields.
```

## Interview Questions
See full list → [interview.md](./interview.md#versions)
1. What changed about ECMAScript's release cadence after ES6?
2. Name 3 features introduced in ES2020.
3. What is the difference between `??` and `||`, and which ES version added `??`?
4. What are class private fields and which version introduced them?
5. Why might a project still target ES5 output today?

## MCQs
See full list → [mcq.md](./mcq.md#versions)
1. Optional chaining (`?.`) was introduced in: (a) ES2015 (b) ES2018 (c) ES2020 (d) ES2022 → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#versions)
1. **(Easy)** Rewrite an `indexOf !== -1` check using `.includes()`.
2. **(Medium)** Convert a `.then()` chain to `async/await`.
3. **(Hard)** Identify the minimum ES version required to run a given code snippet using 5 different features.

## Assignments
- [ ] Build a reference table mapping 10 features to their ES version.
- [ ] Configure a sample `tsconfig.json`/Babel config targeting ES2018.

## Mini Project
"ES Version Quiz" — show a code snippet, user guesses which ES version introduced the key feature used.

## Common Mistakes
- Assuming all browsers support the latest ES version equally — always check compatibility tables.
- Confusing "ES6" (community name) with "ES2015" (official name) as if they're different — they're the same edition.

## Best Practices
- Pin your build target (`browserslist`, `tsconfig.target`) explicitly instead of relying on tool defaults.
- Regularly review caniuse.com when adopting brand-new syntax in production.

## Optimization Tips
- Avoid transpiling further back than your actual audience needs — every polyfill/transform adds bundle size.

## Summary
Since ES2015, JavaScript evolves through yearly ECMAScript editions, each adding incremental, well-documented features. Knowing the version-to-feature mapping is essential for compatibility decisions and reading spec-referencing docs.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#versions)

---
[← JavaScript vs ECMAScript](./javascript-vs-ecmascript.md) | [Section Home](./README.md) | [Engine →](./engine.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
