# Introduction to JavaScript — MCQs

> Owner: **Shubham Narware**

### History {#history}
1. JavaScript was created in: (a) 1993 (b) **1995** (c) 1999 (d) 2005 — *Correct: it was built at Netscape in 1995.*
2. JavaScript's original name was: (a) Mocha (b) Java Lite (c) WebScript (d) NetCode — *Correct: (a), later renamed LiveScript then JavaScript.*
3. JavaScript was standardized by: (a) W3C (b) **ECMA International** (c) IEEE (d) ISO — *Correct: (b), producing the ECMAScript spec.*
4. ES6 is also known as: (a) ES2016 (b) **ES2015** (c) ES5.1 (d) ES7 — *Correct: (b), same edition, different name.*
5. Which company created JScript? (a) Google (b) Apple (c) **Microsoft** (d) Adobe — *Correct: (c), for Internet Explorer.*

### JavaScript vs ECMAScript {#javascript-vs-ecmascript}
1. ECMAScript is: (a) A browser (b) **A language specification** (c) A framework (d) A code editor — *Correct: (b).*
2. TC39 stage that means "finished, included in next edition" is: (a) Stage 1 (b) Stage 2 (c) Stage 3 (d) **Stage 4** — *Correct: (d).*
3. Which of these is a (mostly dead) ECMAScript implementation? (a) TypeScript (b) **ActionScript** (c) CoffeeScript (d) Dart — *Correct: (b), used in Flash.*

### Versions {#versions}
1. Optional chaining `?.` was introduced in: (a) ES2015 (b) ES2018 (c) **ES2020** (d) ES2022 — *Correct: (c).*
2. Class private fields (`#field`) arrived in: (a) ES2018 (b) ES2020 (c) **ES2022** (d) ES2023 — *Correct: (c).*
3. `async/await` was introduced in: (a) ES2015 (b) **ES2017** (c) ES2019 (d) ES2021 — *Correct: (b).*

### Engine {#engine}
1. V8 is developed by: (a) Mozilla (b) **Google** (c) Apple (d) Meta — *Correct: (b).*
2. V8's optimizing compiler is called: (a) Ignition (b) **TurboFan** (c) Crankshaft (d) SpiderMonkey — *Correct: (b) (Crankshaft was its predecessor).*
3. A "deopt" happens when: (a) Code has a syntax error (b) **An optimized function's type assumptions are violated** (c) Memory runs out (d) A Promise rejects — *Correct: (b).*

### Runtime {#runtime}
1. `document` is part of: (a) ECMAScript core (b) **Browser runtime API** (c) Node.js core (d) None of these — *Correct: (b).*
2. Node.js's global object is called: (a) window (b) **global** (c) root (d) self — *Correct: (b).*
3. Which of these works in BOTH browser and Node? (a) `document.title` (b) `fs.readFileSync` (c) **`Array.prototype.map`** (d) `window.alert` — *Correct: (c), it's core ECMAScript.*

### Browser vs Node {#browser-vs-node}
1. Node.js added JavaScript on the: (a) Client only (b) **Server** (c) Database (d) GPU — *Correct: (b).*
2. `localStorage` is available in: (a) Node.js only (b) **Browsers only** (c) Both (d) Neither — *Correct: (b).*
3. `process.argv` is available in: (a) Browsers only (b) **Node.js only** (c) Both (d) Neither — *Correct: (b).*

### Execution {#execution}
1. During the creation phase, `var` declarations are: (a) Ignored (b) Thrown as errors (c) **Hoisted and set to `undefined`** (d) Fully assigned their value — *Correct: (c).*
2. The call stack is a: (a) Queue (LIFO... wait FIFO) (b) **LIFO (Last-In-First-Out) structure** (c) Hash map (d) Binary tree — *Correct: (b).*
3. `setTimeout(fn, 0)` runs `fn`: (a) Immediately, synchronously (b) **After the current call stack empties** (c) Never (d) Before synchronous code — *Correct: (b).*

---
[← Section Home](./README.md)
