# Objects & OOP — Interview Questions

> Owner: **Shubham Narware**

### Objects {#objects}
1. **Ways to create an object?** — Object literal, `new Object()`, `Object.create()`, constructor function, class.
2. **Dot vs bracket notation?** — Dot notation for known static keys; bracket notation required for dynamic/variable keys or keys with special characters.
3. **What are computed property names?** — Using `[expression]` as a key inside an object literal, evaluated at creation time.
4. **How does property lookup work if not found directly?** — Walks up the prototype chain until found or the chain ends at `null`.
5. **`Object.keys` vs `values` vs `entries`?** — Return arrays of keys, values, or `[key,value]` pairs respectively.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Prototype {#prototype}
1. **What is a prototype?** — An object other objects can inherit properties/methods from via a chain.
2. **How does the engine resolve missing properties?** — Walks the prototype chain, returning the first match or `undefined`.
3. **`__proto__` vs `prototype`?** — `prototype` is a property on constructor functions; `__proto__` is the actual link on instances pointing to that prototype object.
4. **Manual prototype-based inheritance?** — Using `Object.create()` to link one constructor's prototype to another's.
5. **Is `class` a different mechanism from prototypes?** — No, it's syntax sugar over the same prototype system.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Prototype Chain {#prototype-chain}
1. **What is the prototype chain?** — The linked sequence of prototype objects walked during property lookup.
2. **What happens at the end of the chain?** — Returns `undefined` if the property was never found by `null`.
3. **What is shadowing?** — An object's own property hiding an inherited property of the same name.
4. **`instanceof` relation to the chain?** — Checks whether a constructor's prototype appears anywhere in the object's prototype chain.
5. **Why are prototype changes visible immediately everywhere?** — Because lookups traverse live object references at access time, not copies made at creation time.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Classes {#classes}
1. **Is `class` a new inheritance model?** — No, it compiles to the same prototype mechanism used since 1995.
2. **Instance method vs static method?** — Instance methods are called on instances via the prototype; static methods are called directly on the class itself.
3. **What are private fields and their ES version?** — `#field` syntax, introduced in ES2022, enforced privacy.
4. **Why must classes be called with `new`?** — Class constructors throw a `TypeError` if called without `new`, unlike older constructor functions.
5. **Getters/setters purpose?** — Computed property access/validation logic that looks like plain property access from the outside.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Inheritance {#inheritance}
1. **What does `extends` do?** — Links the subclass's prototype to the parent class's prototype.
2. **Why call `super()` before using `this`?** — The parent's constructor must initialize the instance before the subclass can add its own properties.
3. **Overriding vs `super.method()`?** — Overriding replaces the parent's method entirely; `super.method()` explicitly calls the parent's version from within the override.
4. **Can classes extend built-ins?** — Yes, e.g. `class ValidationError extends Error {}`.
5. **Risks of deep inheritance chains?** — Increased coupling/fragility ("fragile base class" problem), harder to maintain and reason about.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Encapsulation {#encapsulation}
1. **What is encapsulation?** — Bundling data with the methods operating on it, restricting direct external access.
2. **`_property` vs `#property`?** — `_property` is convention only, fully accessible; `#property` is genuinely enforced privacy by the engine.
3. **Pre-ES2022 encapsulation approach?** — Closures (module pattern) or `WeakMap`-based private storage.
4. **Why expose a getter without a public setter?** — To allow reading a computed/internal value while preventing external code from directly modifying it.
5. **What happens accessing `#field` from outside?** — A `SyntaxError` at parse time, not just a runtime restriction.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Polymorphism {#polymorphism}
1. **What is polymorphism?** — The same method call producing different behavior depending on the calling object's actual type.
2. **How does method overriding relate to it?** — It's the primary mechanism enabling polymorphism in class-based JS code.
3. **What is duck typing?** — Treating objects as compatible based on having the right methods/shape, without requiring formal shared inheritance.
4. **Why does a function calling `.area()` work for any shape subclass?** — Because method resolution happens per-instance at runtime via each object's own prototype chain.
5. **Real-world example?** — A payment system where `CreditCard`/`PayPal` classes each implement `pay()` differently, called uniformly by checkout code.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
