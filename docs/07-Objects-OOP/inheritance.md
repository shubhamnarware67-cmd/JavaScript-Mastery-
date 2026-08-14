# Inheritance

> Section: Objects & OOP · Owner: **Shubham Narware**

## Definition
Inheritance lets one class (or object) acquire the properties and methods of another, enabling code reuse and the modeling of "is-a" relationships (a `Dog` **is an** `Animal`).

## History
Prototypal inheritance has existed since 1995; the `extends`/`super` class syntax was introduced in **ES2015** to express it more readably.

## Why Inheritance Matters
It avoids duplicating shared logic across related types, letting a "child" class build on and specialize a "parent" class's behavior.

## Syntax
```js
class Child extends Parent {
  constructor(...args) {
    super(...args); // calls Parent's constructor
  }
}
```

## Types
| Concept | Description |
|---|---|
| `extends` | Establishes the parent-child class relationship |
| `super()` | Calls the parent constructor from the child |
| `super.method()` | Calls a parent's method from an overriding child method |
| Method overriding | Child redefines a method inherited from the parent |

## Examples
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}
class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}
const rex = new Dog("Rex");
console.log(rex.speak()); // "Rex barks." — overridden method
```

## Memory Diagram
```
Dog.prototype ──► Animal.prototype ──► Object.prototype ──► null
(speak - overridden)  (speak - original, name)
```

## Flowchart
```
new Dog("Rex")
        │
Dog's constructor runs, calls super("Rex")
        │
Animal's constructor runs, sets this.name = "Rex"
        │
Control returns to Dog's constructor (any additional setup runs)
        │
rex.speak() called ──► Dog.prototype has its OWN speak() ──► used instead of Animal's
```

## Internal Working
`class Dog extends Animal` sets `Dog.prototype`'s internal prototype to `Animal.prototype`, so instances of `Dog` can access both `Dog`'s own methods and (via the prototype chain) any of `Animal`'s methods not overridden; `super()` must be called before using `this` in a subclass constructor.

## Beginner Example
```js
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
}
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.brand, myCar.model); // "Toyota" "Corolla"
```

## Intermediate Example
```js
// Calling the parent's method via super.method() from an overriding child method
class Animal {
  speak() { return "Some generic sound"; }
}
class Dog extends Animal {
  speak() {
    return `${super.speak()}, specifically a bark`;
  }
}
console.log(new Dog().speak()); // "Some generic sound, specifically a bark"
```

## Advanced Example
```js
// Multi-level inheritance chain
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound.`; }
}
class Dog extends Animal {
  speak() { return `${this.name} barks.`; }
}
class Puppy extends Dog {
  speak() { return `${super.speak()} (but it's just a little yip!)`; }
}
console.log(new Puppy("Rex").speak());
// "Rex barks. (but it's just a little yip!)"
```

## Real World Example
```js
// UI component hierarchies commonly use inheritance for shared base behavior
class Component {
  render() { throw new Error("Must implement render()"); }
}
class Button extends Component {
  render() { return "<button>Click</button>"; }
}
```

## Industry Example
```js
// Custom Error subclasses in production error-handling code
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
try {
  throw new ValidationError("Invalid input");
} catch (e) {
  console.log(e.name, e.message); // "ValidationError" "Invalid input"
}
```

## Interview Questions
See full list → [interview.md](./interview.md#inheritance)
1. What does `extends` actually do under the hood?
2. Why must `super()` be called before using `this` in a subclass constructor?
3. What's the difference between overriding a method and calling `super.method()`?
4. Can a class extend a built-in like `Error` or `Array`? Give an example.
5. What are the risks of very deep inheritance chains?

## MCQs
See full list → [mcq.md](./mcq.md#inheritance)
1. `super()` in a subclass constructor: (a) Is optional always (b) **Calls the parent class's constructor** (c) Calls a static method (d) Deletes `this` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#inheritance)
1. **(Easy)** Create a `Shape` base class and a `Circle` subclass extending it.
2. **(Medium)** Override a method in a subclass, then also call the parent's version via `super.method()`.
3. **(Hard)** Build a 3-level inheritance chain (`Animal` → `Dog` → `Puppy`), each level adding to the previous `speak()` output.

## Assignments
- [ ] Create a custom Error subclass and demonstrate catching it with the correct `.name`.
- [ ] Explain, with an example, why deep inheritance chains can become hard to maintain (the "fragile base class" problem).

## Mini Project
Build a small shape hierarchy: `Shape` (base, with an abstract `area()` that throws if not overridden), `Circle`, and `Rectangle`, each correctly overriding `area()`.

## Common Mistakes
- Forgetting to call `super()` in a subclass constructor before using `this`.
- Overusing deep inheritance chains where composition would be clearer and more flexible.
- Assuming `extends` works only with custom classes (built-ins like `Error` and `Array` can also be extended).

## Best Practices
- Prefer shallow inheritance hierarchies (1-2 levels); consider composition for more complex sharing needs.
- Always call `super(...)` first thing in a subclass constructor that needs `this`.

## Optimization Tips
- Very deep prototype/inheritance chains slow down property lookups slightly — keep hierarchies as shallow as the domain reasonably allows.

## Summary
`extends`/`super` provide clean syntax for prototype-based inheritance, letting subclasses reuse and override parent behavior — powerful for modeling "is-a" relationships, but best kept shallow to avoid the fragility of deep inheritance chains.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#inheritance)

---
[← Classes](./classes.md) | [Section Home](./README.md) | [Encapsulation →](./encapsulation.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
