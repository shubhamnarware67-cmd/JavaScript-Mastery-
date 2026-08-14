# Prototype Chain

> Section: Objects & OOP · Owner: **Shubham Narware**

## Definition
The prototype chain is the linked sequence of prototype objects (object → its prototype → that prototype's prototype → ... → `null`) that JavaScript walks to resolve property/method lookups.

## History
Part of JavaScript's design since 1995, as the mechanism enabling shared behavior between objects without classical classes.

## Why the Prototype Chain Matters
It explains how deeply nested inheritance hierarchies resolve properties, and why methods like `toString()` are available even on objects that never explicitly defined them.

## Syntax
```js
Object.getPrototypeOf(obj); // read an object's prototype
Object.setPrototypeOf(obj, proto); // set an object's prototype (use sparingly)
```

## Types
Not applicable — the prototype chain is a single conceptual structure, though its length/shape varies per object hierarchy.

## Examples
```js
const animal = { eats: true };
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.jumps); // true (own property)
console.log(rabbit.eats);  // true (inherited via prototype chain)
console.log(Object.getPrototypeOf(rabbit) === animal); // true
```

## Memory Diagram
```
rabbit ──► animal ──► Object.prototype ──► null
(jumps)    (eats)      (toString, etc.)
```

## Flowchart
```
Access rabbit.eats
        │
Is `eats` an own property of rabbit? ──No──► check rabbit's prototype (animal)
        │
Is `eats` an own property of animal? ──Yes──► return animal.eats (true)
```

## Internal Working
Each step up the chain is a real object reference (not a copy) — so changes to a prototype object are immediately visible to every object that inherits from it, since lookups always traverse live references at access time, not at creation time.

## Beginner Example
```js
const obj = {};
console.log(obj.toString()); // "[object Object]" — inherited from Object.prototype
```

## Intermediate Example
```js
// Multi-level chain
const base = { greet: () => "Hello from base" };
const middle = Object.create(base);
const top = Object.create(middle);
console.log(top.greet()); // "Hello from base" — resolved by walking up 2 levels
```

## Advanced Example
```js
// Shadowing — an own property "hides" an inherited one with the same name
const base2 = { greet: () => "base greet" };
const child = Object.create(base2);
child.greet = () => "child's own greet"; // shadows the inherited one
console.log(child.greet()); // "child's own greet"
```

## Real World Example
```js
// Checking inheritance relationships with instanceof
class Animal {}
class Dog extends Animal {}
const rex = new Dog();
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true — Animal is in Dog's prototype chain
```

## Industry Example
```js
// Debugging "why does this object have that method?" often means
// inspecting the prototype chain in DevTools (expand `[[Prototype]]` in the console)
console.log(Object.getPrototypeOf([]));               // Array.prototype
console.log(Object.getPrototypeOf(Array.prototype));   // Object.prototype
console.log(Object.getPrototypeOf(Object.prototype));  // null — end of chain
```

## Interview Questions
See full list → [interview.md](./interview.md#prototype-chain)
1. What is the prototype chain, in your own words?
2. What happens when the engine reaches the end of the prototype chain (`null`) without finding a property?
3. What is "shadowing" in the context of the prototype chain?
4. How does `instanceof` relate to the prototype chain?
5. Why are changes to a prototype object visible to all objects inheriting from it, immediately?

## MCQs
See full list → [mcq.md](./mcq.md#prototype-chain)
1. The prototype chain always ends at: (a) `undefined` (b) **`null`** (c) `Object` (d) The global object → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#prototype-chain)
1. **(Easy)** Create an object with `Object.create()` and verify inherited properties via the chain.
2. **(Medium)** Demonstrate property shadowing — an own property overriding an inherited one of the same name.
3. **(Hard)** Build a 3-level prototype chain and trace, step-by-step, how a property lookup resolves through it.

## Assignments
- [ ] Diagram the prototype chain for a `class Dog extends Animal` instance, all the way to `null`.
- [ ] Explain, with a code example, why mutating a shared prototype object affects all objects that inherit from it.

## Mini Project
Build a small 3-level prototype hierarchy (`Vehicle` → `Car` → `SportsCar`) manually with `Object.create()`, demonstrating property inheritance and shadowing at each level.

## Common Mistakes
- Assuming inherited properties are copied at creation time rather than resolved live at access time.
- Confusing "shadowing" (an own property hiding an inherited one) with actually modifying the inherited property.
- Overusing `Object.setPrototypeOf()` at runtime, which is slow and generally discouraged — prefer setting up the chain at creation time.

## Best Practices
- Use `class`/`extends` syntax for readability; understand it compiles to prototype chain linking underneath.
- Use `Object.create(null)` when you need an object with NO prototype chain at all (e.g. a pure dictionary/map use case).

## Optimization Tips
- Very long prototype chains slow down property lookups (each miss requires walking further) — keep hierarchies reasonably shallow for hot code paths.

## Summary
The prototype chain is the sequence of linked objects JavaScript walks to resolve properties not found directly on an object, ending at `null` — it's the real mechanism behind inheritance, shared methods, and even `class`/`extends` syntax.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#prototype-chain)

---
[← Prototype](./prototype.md) | [Section Home](./README.md) | [Classes →](./classes.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
