# Variables & Data Types — Interview Questions

> Owner: **Shubham Narware**

### Variables {#variables}
1. **3 ways to declare a variable in JS?** — `var`, `let`, `const`.
2. **What is the Temporal Dead Zone?** — The period between entering a scope and the `let`/`const` declaration line, where accessing the variable throws a `ReferenceError`.
3. **Why isn't `const` "truly immutable" for objects?** — It only locks the binding/reference, not the object's internal contents.
4. **Why avoid `var`?** — Function-scoping causes leaks and closure bugs that block-scoped `let`/`const` avoid.
5. **Declaring vs initializing vs assigning?** — Declaring creates the binding; initializing gives it a first value; assigning changes it later.
6. Difficulty: Q1 Easy, Q2–Q4 Medium, Q5 Hard.

### Var {#var}
1. **What scope does `var` use?** — Function scope, not block scope.
2. **Why doesn't `console.log(a); var a=5;` throw?** — `var` is hoisted and initialized to `undefined` during the creation phase.
3. **Why did the classic `for(var i...) setTimeout` loop log the same final value 3 times?** — All callbacks shared the single function-scoped `i`, which had already reached its final value by the time they ran.
4. **Pre-`let` workaround for that bug?** — Wrapping each iteration in an IIFE to capture its own copy of the loop variable.
5. **Why does ESLint's "no-var" rule exist?** — To guide teams away from `var`'s scoping pitfalls toward `let`/`const`.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Let {#let}
1. **How does `let` scoping differ from `var`?** — Block-scoped instead of function-scoped.
2. **What is the TDZ's effect on `let`?** — Accessing before declaration throws `ReferenceError` instead of returning `undefined`.
3. **Why does `for(let i...) setTimeout` log 0,1,2?** — Each loop iteration creates a fresh block-scoped `i` binding, so each closure captures its own value.
4. **Can you redeclare a `let` in the same scope?** — No, it throws a `SyntaxError`.
5. **When choose `let` over `const`?** — When the variable's value genuinely needs to be reassigned later.
6. Difficulty: Q1 Easy, Q2–Q3 Medium, Q4–Q5 Hard.

### Const {#const}
1. **Why is `user.name = "x"` valid on a `const user`?** — `const` locks the binding, not the object's internal properties.
2. **What happens with `const x;` (no value)?** — `SyntaxError` — const requires immediate initialization.
3. **How to make an object's properties unchangeable?** — Use `Object.freeze()` (shallow) or a deep-freeze utility for nested objects.
4. **Difference between const immutability and `Object.freeze()`?** — const prevents reassigning the binding; freeze prevents changing the object's own properties.
5. **Why enforce "const by default" via linting?** — Signals intent clearly and catches accidental reassignment bugs early.
6. Difficulty: Q1–Q2 Easy, Q3 Medium, Q4–Q5 Hard.

### Datatype {#datatype}
1. **List all 8 JS data types.** — Number, String, Boolean, Undefined, Null, Symbol, BigInt, Object.
2. **Why does `typeof null` return `"object"`?** — A long-standing historical bug in the language, kept for backward compatibility.
3. **Primitive vs non-primitive memory difference?** — Primitives use value semantics (copied); objects use reference semantics (shared pointer).
4. **What is Symbol used for?** — Creating guaranteed-unique property keys/identifiers.
5. **When would you need BigInt?** — When working with integers beyond `Number.MAX_SAFE_INTEGER` that need exact precision.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Primitive {#primitive}
1. **What does "value semantics" mean?** — Copying the variable copies the actual value, independent of the original.
2. **Why doesn't `str.toUpperCase()` mutate the original string?** — Strings are immutable; the method returns a brand-new string.
3. **Why are two `Symbol("id")` calls never equal?** — Each `Symbol()` call creates a guaranteed-unique value regardless of description.
4. **When is BigInt needed over Number?** — For precise arbitrary-size integer math beyond safe integer limits.
5. **List all 7 primitives.** — Number, String, Boolean, Undefined, Null, Symbol, BigInt.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Reference {#reference}
1. **Value vs reference semantics?** — Primitives copy the value; objects copy only a pointer to shared heap data.
2. **Why does mutating a "copied" object affect the original?** — Both variables reference the exact same object in memory.
3. **Shallow copy vs deep copy?** — Shallow copies only top-level properties (nested objects still shared); deep copy fully duplicates all nested data.
4. **Why do React/Redux avoid direct mutation?** — They rely on reference-equality checks to detect changes and trigger re-renders.
5. **Two ways to deep copy in modern JS?** — `structuredClone()`, or a custom recursive clone function (also JSON.parse(JSON.stringify()) with caveats).
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
