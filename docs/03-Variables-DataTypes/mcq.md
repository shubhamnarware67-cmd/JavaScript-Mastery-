# Variables & Data Types — MCQs

> Owner: **Shubham Narware**

### Variables {#variables}
1. Which keyword allows reassignment but not redeclaration in the same scope? (a) var (b) **let** (c) const (d) none — *Correct: (b).*
2. Variables declared with `let`/`const` before their line are in the: (a) Global scope (b) **Temporal Dead Zone** (c) Heap (d) Call stack — *Correct: (b).*
3. Which of these can be reassigned? (a) const (b) **let** (c) frozen object (d) none — *Correct: (b).*

### Var {#var}
1. `var` is scoped to the nearest: (a) Block (b) **Function** (c) Module (d) File — *Correct: (b).*
2. `console.log(a); var a=5;` results in: (a) SyntaxError (b) **undefined then no error** (c) ReferenceError (d) 5 — *Correct: (b).*
3. `var`'s classic loop bug with `setTimeout` is fixed by: (a) Using `var` twice (b) **Using `let` instead** (c) Removing the loop (d) Adding `async` — *Correct: (b).*

### Let {#let}
1. `let` is scoped to the nearest: (a) Function (b) **Block** (c) Module (d) Global — *Correct: (b).*
2. Redeclaring the same `let` in one scope causes: (a) Silent overwrite (b) **SyntaxError** (c) undefined (d) Nothing — *Correct: (b).*
3. Accessing a `let` variable before its declaration causes: (a) undefined (b) **ReferenceError** (c) 0 (d) null — *Correct: (b).*

### Const {#const}
1. `const obj = {}; obj.x = 1;` is: (a) A TypeError (b) **Valid — mutating contents is allowed** (c) A SyntaxError (d) Ignored silently — *Correct: (b).*
2. `const x;` (no initializer) causes: (a) x = undefined (b) **SyntaxError** (c) x = null (d) Nothing — *Correct: (b).*
3. To fully lock an object's properties, use: (a) const alone (b) **Object.freeze()** (c) let (d) var — *Correct: (b).*

### Datatype {#datatype}
1. Number of JS primitive types: (a) 5 (b) 6 (c) **7** (d) 8 — *Correct: (c).*
2. `typeof null` returns: (a) "null" (b) **"object"** (c) "undefined" (d) "number" — *Correct: (b), a known historical bug.*
3. `typeof []` returns: (a) "array" (b) **"object"** (c) "list" (d) "undefined" — *Correct: (b), arrays are objects.*

### Primitive {#primitive}
1. Which is NOT a primitive? (a) String (b) Boolean (c) **Object** (d) Symbol — *Correct: (c).*
2. `"abc".toUpperCase()` on the original string: (a) Mutates it (b) **Returns a new string, original unchanged** (c) Throws (d) Returns undefined — *Correct: (b).*
3. Two `Symbol("x")` calls are: (a) Equal (b) **Never equal to each other** (c) The same reference (d) Both undefined — *Correct: (b).*

### Reference {#reference}
1. Assigning `obj2 = obj1` copies: (a) The object's data (b) **Only the reference/pointer** (c) Nothing (d) A deep clone — *Correct: (b).*
2. Spread syntax `{...obj}` creates a: (a) Deep copy (b) **Shallow copy** (c) Reference (d) Frozen copy — *Correct: (b).*
3. For a true deep copy in modern JS, use: (a) `=` (b) `Object.assign` alone (c) **`structuredClone()`** (d) `typeof` — *Correct: (c).*

---
[← Section Home](./README.md)
