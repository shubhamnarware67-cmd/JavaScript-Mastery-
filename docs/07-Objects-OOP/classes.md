# Classes

> Section: Objects & OOP · Owner: **Shubham Narware**

## Definition
The `class` keyword provides syntax-sugar for creating objects with shared behavior via prototypes, offering a more familiar, structured syntax for constructors, methods, inheritance, and (later) private fields.

## History
Introduced in **ES2015**; class private fields (`#field`) were added in **ES2022**. Classes do not introduce a new inheritance model — they compile down to the same prototype mechanism that existed since 1995.

## Why Classes Matter
They provide cleaner, more readable syntax for common OOP patterns (constructors, methods, inheritance) compared to manually wiring up constructor functions and prototypes.

## Syntax
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}
```

## Types
| Feature | Example |
|---|---|
| Constructor | `constructor(...) { }` |
| Instance method | `greet() { }` |
| Static method | `static create() { }` |
| Getter/Setter | `get fullName() { }` |
| Private field (ES2022) | `#balance = 0;` |

## Examples
```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  describe() {
    return `This is a ${this.brand}`;
  }
}
const myCar = new Car("Toyota");
console.log(myCar.describe()); // "This is a Toyota"
```

## Memory Diagram
```
class Car { ... }
        │
Car.prototype gets `describe` (shared, not duplicated per instance)
        │
new Car("Toyota") creates an instance whose [[Prototype]] is Car.prototype
```

## Flowchart
```
new Car("Toyota")
        │
A new object is created
        │
`constructor` runs, setting instance properties (this.brand = ...)
        │
Instance's prototype is linked to Car.prototype (for describe(), etc.)
        │
Fully constructed instance returned
```

## Internal Working
`class` is syntax sugar: methods defined inside a class body are automatically placed on the class's `.prototype`, exactly like manually assigning `Constructor.prototype.method = function(){}` — `class` just makes the syntax cleaner and adds strict-mode-by-default behavior plus some safety checks (like requiring `new`).

## Beginner Example
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}
const cat = new Animal("Whiskers");
console.log(cat.speak());
```

## Intermediate Example
```js
// Static methods belong to the class itself, not instances
class MathUtils {
  static square(n) {
    return n * n;
  }
}
console.log(MathUtils.square(5)); // 25
// const m = new MathUtils(); m.square(5); // ❌ not available on instances
```

## Advanced Example
```js
// Getters/setters and private fields (ES2022)
class BankAccount {
  #balance = 0;
  constructor(initial) {
    this.#balance = initial;
  }
  get balance() {
    return this.#balance;
  }
  set balance(amount) {
    if (amount < 0) throw new Error("Balance cannot be negative");
    this.#balance = amount;
  }
}
const acc = new BankAccount(100);
console.log(acc.balance); // 100 (via getter)
acc.balance = 200;          // via setter
```

## Real World Example
```js
// Modeling a domain entity with validation baked into the class
class Product {
  constructor(name, price) {
    if (price < 0) throw new Error("Price cannot be negative");
    this.name = name;
    this.price = price;
  }
  applyDiscount(percent) {
    this.price -= this.price * (percent / 100);
  }
}
```

## Industry Example
```js
// Many frameworks (Angular, NestJS) rely heavily on classes and decorators
// for structuring components, services, and dependency injection.
```

## Interview Questions
See full list → [interview.md](./interview.md#classes)
1. Is `class` a new inheritance model, or syntax sugar over something else?
2. What's the difference between an instance method and a static method?
3. What are class private fields, and which ES version introduced them?
4. Why must `class` constructors be called with `new`?
5. What are getters/setters used for in a class?

## MCQs
See full list → [mcq.md](./mcq.md#classes)
1. Class methods are placed on: (a) Each instance individually (b) **The class's prototype**, shared by all instances (c) The global object (d) Nowhere until called → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#classes)
1. **(Easy)** Write a `Book` class with a constructor and a `describe()` method.
2. **(Medium)** Add a static method and a getter/setter to a class, demonstrating both.
3. **(Hard)** Build a class with a private field (`#`) enforcing validation logic through its setter.

## Assignments
- [ ] Rewrite a constructor-function + prototype setup using `class` syntax, confirming identical behavior.
- [ ] Explain, with an example, why private fields (`#`) provide stronger encapsulation than a plain property convention like `_balance`.

## Mini Project
Build a `Product` class with private stock tracking, a static `Product.compare(a, b)` method, and getter/setter validation for price.

## Common Mistakes
- Forgetting `new` when instantiating a class (throws a `TypeError` in modern class syntax, unlike old constructor functions which would silently misbehave).
- Trying to call a static method on an instance (it's only available on the class itself).
- Using a plain `_property` naming convention and assuming it's truly private (it's not — only `#field` syntax is enforced by the engine).

## Best Practices
- Use `class` syntax for new OOP-style code — clearer and safer than manual constructor-function/prototype wiring.
- Use `#private` fields for genuine encapsulation needs, not just an underscore naming convention.

## Optimization Tips
- No inherent performance difference from constructor functions — `class` compiles to the same prototype mechanism, so the benefit is purely readability/safety.

## Summary
`class` provides modern, readable syntax for prototype-based OOP in JavaScript — constructors, instance/static methods, getters/setters, and (since ES2022) truly private fields — all while compiling down to the same underlying prototype chain mechanism.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#classes)

---
[← Prototype Chain](./prototype-chain.md) | [Section Home](./README.md) | [Inheritance →](./inheritance.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
