# History

> Section: Introduction to JavaScript · Owner: **Shubham Narware**

## Definition
JavaScript's history is the story of how a 10-day prototype at Netscape became the most widely-run programming language in the world, standardized today as ECMAScript.

## History
- **1995** — Brendan Eich writes the first version in ~10 days at Netscape, originally named **Mocha**, renamed **LiveScript**, then **JavaScript** (a marketing move to ride Java's popularity, despite the languages being unrelated).
- **1996** — Microsoft reverse-engineers it as **JScript** for Internet Explorer, causing browser incompatibility.
- **1997** — Netscape submits JS to **ECMA International** for standardization → **ECMAScript (ES1)** is born.
- **1999** — **ES3** ships (regex, try/catch) — the baseline for a decade of browsers.
- **2009** — **ES5** ships: strict mode, JSON support, `Array.prototype.map/filter/reduce`.
- **2015** — **ES6 / ES2015** — the biggest update ever: `let/const`, classes, arrow functions, promises, modules, template literals.
- **2016–present** — Yearly releases: ES2016, ES2017 (async/await), ES2020 (optional chaining, nullish coalescing), ES2022 (class private fields), ES2023/2024 (array grouping, more).

## Why History Matters
Understanding *why* a feature was added (e.g. `let` fixing `var`'s scoping bugs) helps you reason about **when** to use older vs newer syntax, and explains quirks you'll meet in legacy code.

## Syntax
```js
// Not applicable — this topic is conceptual, not syntax-based.
```

## Types
Not applicable (conceptual topic).

## Examples
```js
// ES3 style (1999) — no arrow functions, var only
var add = function (a, b) { return a + b; };

// ES6 style (2015) — arrow functions, let/const
const add2 = (a, b) => a + b;

// ES2020 style — optional chaining, nullish coalescing
const city = user?.address?.city ?? "Unknown";
```

## Memory Diagram
```
Not applicable — history is a timeline, not a runtime memory concept.
```

## Flowchart
```
1995 Netscape (Mocha/LiveScript)
        │
1995 renamed "JavaScript"
        │
1996 Microsoft JScript (fragmentation begins)
        │
1997 ECMA standardization → ECMAScript
        │
1999 ES3 ─────────────► 2009 ES5 ─────────────► 2015 ES6/ES2015
                                                         │
                                          2016–present: yearly ES20XX releases
```

## Internal Working
Not applicable at the engine level — but note that "JavaScript" (the language people write) and "ECMAScript" (the spec) are technically different names for the same standardized language (see [javascript-vs-ecmascript.md](./javascript-vs-ecmascript.md)).

## Beginner Example
```js
// Recognizing "old" vs "modern" JS in the wild
var name = "old style";   // pre-ES6 variable declaration
let name2 = "modern style"; // ES6+
```

## Intermediate Example
```js
// A function written the ES5 way vs the ES6+ way
// ES5
function Person(name) { this.name = name; }
Person.prototype.greet = function () { return "Hi " + this.name; };

// ES6+
class Person2 {
  constructor(name) { this.name = name; }
  greet() { return `Hi ${this.name}`; }
}
```

## Advanced Example
```js
// Detecting feature availability instead of assuming a JS "version"
// (real engines mix support levels — always feature-detect, don't version-sniff)
if (typeof Promise !== "undefined" && typeof fetch !== "undefined") {
  console.log("Modern async features available");
}
```

## Real World Example
```js
// Transpilers like Babel exist BECAUSE of this history —
// they convert modern ES2015+ syntax down to ES5 for old browsers.
// input:  const greet = name => `Hi ${name}`;
// output: var greet = function greet(name) { return "Hi " + name; };
```

## Industry Example
```js
// Companies pin a "browserslist" config to decide which JS versions
// their build tools (Babel/Webpack/Vite) must support, e.g.:
// package.json
// "browserslist": ["> 0.5%", "last 2 versions", "not dead"]
```

## Interview Questions
See full list → [interview.md](./interview.md#history)
1. Who created JavaScript and in how many days?
2. Why is it called "JavaScript" if it's unrelated to Java?
3. What is ECMAScript, and how does it relate to JavaScript?
4. What major problem did ES6 (2015) solve compared to ES5?
5. Why do new ECMAScript versions release yearly now instead of infrequently?

## MCQs
See full list → [mcq.md](./mcq.md#history)
1. JavaScript was created in the year: (a) 1993 (b) 1995 (c) 1999 (d) 2005 → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#history)
1. **(Easy)** Rewrite an ES5 `var`/`function` snippet using ES6 `const`/arrow functions.
2. **(Medium)** Given a code snippet, identify which ECMAScript version introduced each feature used.
3. **(Hard)** Write a small feature-detection utility that checks for ES2015, ES2017, and ES2020 features without relying on a version string.

## Assignments
- [ ] Create a one-page timeline (text or diagram) of ES5 → ES2024 with one headline feature per version.
- [ ] Find 3 pieces of legacy `var`-based code online and rewrite them in modern syntax.

## Mini Project
Build a small "JS Version Explorer" page: a dropdown of ES versions, and clicking one shows a code snippet demonstrating its signature feature.

## Common Mistakes
- Calling ECMAScript and JavaScript "different languages" — they're the same language, ECMAScript is the specification name.
- Assuming "ES6" and "modern JS" mean identical things — modern JS today includes ES2016 through ES2024+ features too.

## Best Practices
- Prefer feature detection (`typeof x !== "undefined"`) over assuming a JS "version" is available.
- Know your target environment (browser support matrix / Node version) before using very recent syntax.

## Optimization Tips
- Use tools like **Browserslist** + **Babel/SWC** to automatically compile modern syntax down only as far as your actual audience needs — avoids over-transpiling and bloating bundle size.

## Summary
JavaScript went from a 10-day Netscape prototype (1995) to a yearly-standardized global language (ECMAScript) that now powers browsers, servers (Node.js), mobile apps, and more. Knowing this timeline helps explain *why* old and new syntax coexist in real-world code.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#history)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Javascript Vs Ecmascript →](./javascript-vs-ecmascript.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
