# Prototype

> Section: Objects & OOP · Owner: **Shubham Narware**

## Definition
Every JavaScript object has an internal link to another object called its **prototype**, from which it can inherit properties and methods — the mechanism underlying JS's object-oriented behavior.

## History
Prototypal inheritance has been core to JavaScript since 1995 — a deliberate design choice by Brendan Eich, distinct from the class-based inheritance of languages like Java (which JS's syntax was superficially made to resemble for marketing reasons).

## Why Prototypes Matter
Understanding prototypes explains how methods like `.map()` or `.toString()` are available on every array/object without being copied onto each instance individually, and is the real mechanism behind `class` syntax.

## Syntax
```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};
```

## Types
| Concept | Description |
|---|---|
| `Object.prototype` | The root prototype most objects inherit from |
| `Function.prototype` | Shared methods for all functions (`call`, `apply`, `bind`) |
| `Array.prototype` | Shared methods for all arrays (`map`, `filter`, etc) |
| `__proto__` | The (legacy, discouraged) accessor for an object's prototype |
| `Object.getPrototypeOf()` | Modern way to read an object's prototype |

## Examples
```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};
const p1 = new Person("Shubham");
const p2 = new Person("Narware");
console.log(p1.greet()); // "Hi, I'm Shubham"
// Both p1 and p2 SHARE the same greet function via the prototype — not duplicated per instance
```

## Memory Diagram
```
p1 ──► Person.prototype ──► Object.prototype ──► null
       (has greet())         (has toString(), etc.)
```

## Flowchart
```
Access obj.property
        │
Does obj have this property directly (own property)?
        │                              │
       Yes                            No
        │                              │
Return it                    Walk up to obj's prototype
                              and repeat the check there
                                        │
                              Reached null (end of chain)? ──► return undefined
```

## Internal Working
When you access a property, the engine first checks the object's own properties; if not found, it walks up the **prototype chain** (object → its prototype → that prototype's prototype → ... → `Object.prototype` → `null`), returning the first match found, or `undefined` if the chain ends without one.

## Beginner Example
```js
const arr = [1, 2, 3];
console.log(arr.map); // a function — inherited from Array.prototype, not defined on `arr` itself
```

## Intermediate Example
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};
const dog = new Animal("Rex");
console.log(dog.speak()); // "Rex makes a sound."
console.log(dog.hasOwnProperty("speak")); // false — it's on the prototype, not the instance
```

## Advanced Example
```js
// Manually setting up prototype-based "inheritance" (pre-class syntax)
function Dog(name) {
  Animal.call(this, name); // borrow Animal's constructor logic
}
Dog.prototype = Object.create(Animal.prototype); // link Dog's prototype to Animal's
Dog.prototype.constructor = Dog;
const rex = new Dog("Rex");
console.log(rex.speak()); // "Rex makes a sound." — inherited via the prototype chain
```

## Real World Example
```js
// Every array "inherits" its methods this way
console.log([1,2,3].__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
```

## Industry Example
```js
// `class` syntax is syntax sugar over exactly this prototype mechanism —
// understanding prototypes explains what's really happening under a `class`.
class Animal2 {
  speak() { return "sound"; }
}
console.log(typeof Animal2.prototype.speak); // "function" — same underlying mechanism
```

## Interview Questions
See full list → [interview.md](./interview.md#prototype)
1. What is a prototype, and what problem does it solve?
2. How does the JS engine resolve a property that isn't found directly on an object?
3. What's the difference between `__proto__` and `prototype`?
4. How would you manually set up prototype-based inheritance without `class` syntax?
5. Is `class` syntax a completely different inheritance mechanism, or syntax sugar over prototypes?

## MCQs
See full list → [mcq.md](./mcq.md#prototype)
1. Array methods like `.map()` are defined on: (a) Each array instance individually (b) **`Array.prototype`**, shared by all arrays (c) `Object` only (d) Nowhere, they're built-in magic → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#prototype)
1. **(Easy)** Add a method to a constructor function's prototype and call it from two different instances.
2. **(Medium)** Demonstrate that a prototype method is NOT an "own property" using `hasOwnProperty()`.
3. **(Hard)** Manually implement prototype-based inheritance (without `class`) for a `Dog` "extending" an `Animal`.

## Assignments
- [ ] Draw the prototype chain for an array literal, ending at `null`.
- [ ] Explain, with an example, why shared prototype methods are more memory-efficient than copying methods onto every instance.

## Mini Project
Build a small "Shape" prototype hierarchy manually (without `class`): a base `Shape` constructor with an `area()` stub, and `Circle`/`Rectangle` "subtypes" linked via `Object.create()`.

## Common Mistakes
- Confusing `prototype` (a property on constructor functions) with `__proto__` (the actual link on instances).
- Assuming prototype methods are copied onto each instance (they're shared via the chain, not duplicated).
- Modifying built-in prototypes (`Array.prototype`) directly in production code — strongly discouraged, causes hard-to-debug conflicts.

## Best Practices
- Prefer `class` syntax for readability in modern code — it compiles down to the same prototype mechanism.
- Never modify built-in prototypes (`Array.prototype`, `Object.prototype`) in application code.

## Optimization Tips
- Defining methods on the prototype (rather than inside the constructor via `this.method = function(){}`) ensures they're shared, not duplicated per instance — a meaningful memory saving for many instances.

## Summary
Every JavaScript object links to a prototype object, forming a chain the engine walks when resolving properties not found directly on the object — this prototype mechanism, not classical inheritance, is the real foundation beneath JS's `class` syntax.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#prototype)

---
[← Objects](./objects.md) | [Section Home](./README.md) | [Prototype Chain →](./prototype-chain.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
