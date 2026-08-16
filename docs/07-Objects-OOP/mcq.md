# Objects & OOP — MCQs

> Owner: **Shubham Narware**

### Objects {#objects}
1. Bracket notation is required for: (a) All property access (b) **Dynamic/variable property names** (c) Nothing, dot works always (d) Numbers only — *Correct: (b).*
2. `Object.entries(obj)` returns: (a) Keys only (b) Values only (c) **[key, value] pairs** (d) A string — *Correct: (c).*
3. Objects are stored: (a) By value on the stack (b) **By reference on the heap** (c) In a database (d) As strings — *Correct: (b).*

### Prototype {#prototype}
1. Array methods like `.map()` live on: (a) Each array (b) **`Array.prototype`** (c) `Object` only (d) Nowhere — *Correct: (b).*
2. `__proto__` is: (a) A function (b) **A link to an object's prototype** (c) A deprecated array method (d) A private field — *Correct: (b).*
3. `class` is: (a) An unrelated new system (b) **Syntax sugar over prototypes** (c) Only for Node.js (d) Deprecated — *Correct: (b).*

### Prototype Chain {#prototype-chain}
1. The prototype chain always ends at: (a) undefined (b) **null** (c) Object (d) the global object — *Correct: (b).*
2. Shadowing means: (a) Deleting a property (b) **An own property hiding an inherited one** (c) A syntax error (d) Freezing an object — *Correct: (b).*
3. `instanceof` checks: (a) Type strings (b) **Whether a prototype appears in the object's chain** (c) Array length (d) Nothing real — *Correct: (b).*

### Classes {#classes}
1. Class methods are placed on: (a) Each instance (b) **The class's prototype** (c) The global scope (d) Nowhere — *Correct: (b).*
2. Private fields (`#field`) were introduced in: (a) ES2015 (b) ES2020 (c) **ES2022** (d) ES2023 — *Correct: (c).*
3. Calling a class constructor without `new`: (a) Works fine (b) **Throws a TypeError** (c) Returns undefined silently (d) Is required syntax — *Correct: (b).*

### Inheritance {#inheritance}
1. `super()` in a subclass constructor: (a) Is optional always (b) **Calls the parent's constructor** (c) Calls a static method (d) Deletes `this` — *Correct: (b).*
2. Can a class extend `Error`? (a) No (b) **Yes** (c) Only in Node (d) Only with a library — *Correct: (b).*
3. Very deep inheritance chains mainly risk: (a) Faster code (b) **Fragility/maintainability issues** (c) Syntax errors (d) Nothing — *Correct: (b).*

### Encapsulation {#encapsulation}
1. `_property` naming convention is: (a) Enforced by the engine (b) **Convention only, fully accessible** (c) A syntax error (d) The same as `#property` — *Correct: (b).*
2. `#privateField` accessed from outside its class: (a) Returns undefined (b) **SyntaxError** (c) Works fine (d) Returns null — *Correct: (b).*
3. Pre-ES2022 privacy commonly used: (a) `#field` (b) **Closures** (c) `public` keyword (d) `private` keyword — *Correct: (b), JS never had a `private` keyword outside `#`.*

### Polymorphism {#polymorphism}
1. Polymorphism primarily means: (a) Faster code (b) **Same method call, different behavior per type** (c) Private variables (d) Static typing — *Correct: (b).*
2. Duck typing relies on: (a) Formal class hierarchies (b) **An object having the right shape/methods** (c) TypeScript only (d) The `class` keyword — *Correct: (b).*
3. Overriding a method in a subclass: (a) Deletes the parent's version entirely from memory (b) **Replaces it for that subclass's instances** (c) Is not allowed (d) Requires `super` always — *Correct: (b).*

---
[← Section Home](./README.md)
