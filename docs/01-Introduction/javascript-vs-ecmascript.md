# JavaScript vs ECMAScript

> Section: Introduction to JavaScript · Owner: **Shubham Narware**

## Definition
**ECMAScript (ES)** is the official language *specification*. **JavaScript** is the most popular *implementation* of that specification (others include JScript and ActionScript, both now largely dead).

## History
- 1997: Netscape hands JS to **ECMA International** to prevent fragmentation (Microsoft's JScript vs Netscape's JavaScript).
- The committee that maintains the spec is **TC39**.
- Every browser engine (V8, SpiderMonkey, JavaScriptCore) implements ECMAScript, and each may call its dialect "JavaScript."

## Why This Distinction Matters
Job listings, docs, and specs say "ECMAScript 2015 introduces `let`" — knowing ES = the spec, JS = the language you write, avoids confusion when reading official documentation (MDN, TC39 proposals).

## Syntax
```js
// There is no syntax difference — code you write as "JavaScript"
// IS ECMAScript-compliant code.
const es = "ECMAScript";
const js = "JavaScript";
console.log(es === "the spec", js === "the language you write");
```

## Types
| Term | What it is |
|---|---|
| ECMAScript | The specification/standard (document) |
| JavaScript | The implementation used in browsers/Node |
| JScript | Microsoft's old IE implementation (deprecated) |
| ActionScript | Adobe Flash's dialect (deprecated) |

## Examples
```js
// TC39 proposals go through stages 0-4 before becoming part of ECMAScript.
// Example: the "??" (nullish coalescing) operator was a Stage 4 proposal
// before becoming official in ES2020.
const value = null ?? "default"; // "default"
```

## Memory Diagram
```
Not applicable — this is a naming/standards concept, not a runtime concept.
```

## Flowchart
```
TC39 Committee
     │
 Proposal (Stage 0 → 1 → 2 → 3 → 4)
     │
 Stage 4 = accepted into next ECMAScript edition
     │
 Browser/Node vendors implement it → becomes usable "JavaScript"
```

## Internal Working
Engines like V8 track which ECMAScript proposals they support (see V8's release notes). "JavaScript support" in a browser really means "how much of the current ECMAScript spec + proposals this engine implements."

## Beginner Example
```js
// You'll often see version names used interchangeably:
// "ES6" == "ES2015" == the JS features: let, const, arrow functions, classes, etc.
let x = 10; // this IS ECMAScript 2015 syntax, executed by a JavaScript engine
```

## Intermediate Example
```js
// Checking which ECMAScript features your current environment (JS engine) supports
console.log(typeof globalThis !== "undefined"); // ES2020 feature: globalThis
console.log(typeof Array.prototype.flat === "function"); // ES2019 feature
```

## Advanced Example
```js
// Following a live TC39 proposal (conceptual example):
// "Array grouping" (Object.groupBy) shipped in ES2024.
const inventory = [{type:"fruit"},{type:"veg"},{type:"fruit"}];
const grouped = Object.groupBy(inventory, item => item.type);
// grouped = { fruit: [...], veg: [...] }  (requires a modern engine)
```

## Real World Example
```js
// package.json "engines" field pins a minimum JS runtime, indirectly
// pinning ECMAScript feature support:
// "engines": { "node": ">=18.0.0" }
```

## Industry Example
```js
// Linters like ESLint use an "ecmaVersion" config option
// to decide which ECMAScript syntax to allow:
// .eslintrc.json
// { "parserOptions": { "ecmaVersion": 2022 } }
```

## Interview Questions
See full list → [interview.md](./interview.md#javascript-vs-ecmascript)
1. What is the difference between JavaScript and ECMAScript?
2. What is TC39 and what does it do?
3. Name two other (now largely dead) implementations of ECMAScript besides JavaScript.
4. What do proposal "stages" (0–4) mean in TC39's process?
5. Why might two browsers behave differently even though both "support JavaScript"?

## MCQs
See full list → [mcq.md](./mcq.md#javascript-vs-ecmascript)
1. Which body maintains the ECMAScript specification? (a) W3C (b) ECMA International/TC39 (c) IETF (d) ISO → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#javascript-vs-ecmascript)
1. **(Easy)** List 5 ES2015 features you use daily.
2. **(Medium)** Write a feature-detection snippet for 3 different ECMAScript versions.
3. **(Hard)** Research and summarize one active Stage 3 TC39 proposal in your own words.

## Assignments
- [ ] Visit the TC39 proposals GitHub repo and list 3 Stage 3 proposals.
- [ ] Write a short note explaining ES vs JS to a beginner in 3 sentences.

## Mini Project
Build a "Feature Support Checker" page that tests for 10 ECMAScript features (optional chaining, `Object.groupBy`, `structuredClone`, etc.) and reports which ones the visitor's browser supports.

## Common Mistakes
- Saying "ECMAScript 6" when official naming moved to "ES2015" (yearly naming).
- Thinking ECMAScript is a separate language you could write instead of JavaScript — it's the spec JS follows.

## Best Practices
- When citing a feature, reference its ECMAScript year (e.g. "ES2020's optional chaining") for precision in documentation.
- Check caniuse.com or MDN's compatibility tables against the ECMAScript version, not just "JavaScript" broadly.

## Optimization Tips
- Configure your linter/transpiler's `ecmaVersion`/`target` explicitly rather than leaving it as a default — this avoids silently allowing (or disallowing) syntax your users' browsers can't run.

## Summary
JavaScript is the language you write; ECMAScript is the standard it must follow, maintained by TC39. The distinction matters mainly for reading specs, configuring tools, and understanding why "ES2015" and "modern JavaScript features" mean the same thing.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#javascript-vs-ecmascript)

---
[← History](./history.md) | [Section Home](./README.md) | [Versions →](./versions.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
