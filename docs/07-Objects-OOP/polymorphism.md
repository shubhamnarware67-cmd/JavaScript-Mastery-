# Polymorphism

> Section: Objects & OOP · Owner: **Shubham Narware**

## Definition
Polymorphism ("many forms") lets objects of different classes respond to the same method call in ways specific to their own type — most commonly achieved in JS via method overriding in subclasses.

## History
A classic OOP concept; in JavaScript it's achieved naturally through prototype-based method overriding, formalized readably with `class`/`extends` since ES2015.

## Why Polymorphism Matters
It lets calling code treat different object types uniformly (e.g. "call `.speak()` on any Animal"), while each type supplies its own specific behavior — a key tool for extensible, maintainable designs.

## Syntax
```js
class Animal {
  speak() { return "..."; }
}
class Dog extends Animal {
  speak() { return "Woof!"; } // overrides parent's version
}
```

## Types
| Form | Description |
|---|---|
| Method overriding | Subclass redefines a parent method |
| Duck typing | Objects treated as compatible based on having the right methods/shape, not a formal type |
| Polymorphic function parameters | A function that behaves correctly regardless of the specific object type passed in |

## Examples
```js
class Shape {
  area() { return 0; }
}
class Circle extends Shape {
  constructor(radius) { super(); this.radius = radius; }
  area() { return Math.PI * this.radius ** 2; }
}
class Square extends Shape {
  constructor(side) { super(); this.side = side; }
  area() { return this.side ** 2; }
}
const shapes = [new Circle(3), new Square(4)];
shapes.forEach(shape => console.log(shape.area().toFixed(2)));
// Each shape computes area DIFFERENTLY, but is called the SAME way
```

## Memory Diagram
```
shapes = [Circle instance, Square instance]
        │
Each has its OWN area() on its OWN prototype (Circle.prototype vs Square.prototype)
        │
shape.area() resolves to the CORRECT version for each object's actual type
```

## Flowchart
```
Loop over a mixed array of subclass instances
        │
Call the SAME method name on each (e.g. .area())
        │
JS resolves EACH call using that specific instance's own prototype chain
        │
Different implementations run automatically — no manual type-checking needed
```

## Internal Working
Polymorphism in JS works because method lookup always starts from the instance's own actual prototype — calling `shape.area()` doesn't care what static "type" the variable `shape` is declared as (JS has no static types); it simply resolves through whatever prototype chain that specific object actually has at runtime.

## Beginner Example
```js
class Animal {
  speak() { return "Some generic animal sound"; }
}
class Cat extends Animal {
  speak() { return "Meow"; }
}
class Dog extends Animal {
  speak() { return "Woof"; }
}
[new Cat(), new Dog()].forEach(animal => console.log(animal.speak()));
```

## Intermediate Example
```js
// Polymorphic function — works correctly regardless of the specific shape passed
function printArea(shape) {
  console.log(`Area: ${shape.area()}`);
}
printArea(new Circle(2));
printArea(new Square(3));
```

## Advanced Example
```js
// Duck typing — polymorphism without formal inheritance at all
const duck = { speak: () => "Quack" };
const robot = { speak: () => "Beep boop, hello" };
[duck, robot].forEach(thing => console.log(thing.speak()));
// Neither shares a class, but both satisfy the same "interface" informally
```

## Real World Example
```js
// Payment processing — different payment methods, same interface
class PaymentMethod {
  pay(amount) { throw new Error("Must implement pay()"); }
}
class CreditCard extends PaymentMethod {
  pay(amount) { return `Charged $${amount} to credit card`; }
}
class PayPal extends PaymentMethod {
  pay(amount) { return `Paid $${amount} via PayPal`; }
}
function checkout(method, amount) {
  console.log(method.pay(amount)); // works for ANY PaymentMethod subclass
}
```

## Industry Example
```js
// UI component libraries rely on polymorphism: every component implements
// render(), but each does so completely differently (Button vs Modal vs Card)
```

## Interview Questions
See full list → [interview.md](./interview.md#polymorphism)
1. What is polymorphism, in your own words?
2. How does method overriding relate to polymorphism?
3. What is "duck typing," and how does it relate to polymorphism without formal classes?
4. Why can a function that calls `.area()` on a "shape" parameter work correctly for any shape subclass?
5. Give a real-world example where polymorphism simplifies calling code.

## MCQs
See full list → [mcq.md](./mcq.md#polymorphism)
1. Polymorphism primarily allows: (a) Faster code execution (b) **The same method call to behave differently depending on the object's actual type** (c) Private variables (d) Static typing → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#polymorphism)
1. **(Easy)** Create 2 subclasses overriding the same parent method differently, then call it polymorphically in a loop.
2. **(Medium)** Write a function that works correctly on any object implementing a `.describe()` method, regardless of class (duck typing).
3. **(Hard)** Build a small "Payment" polymorphic system with 3 payment method subclasses, each implementing `pay()` differently.

## Assignments
- [ ] Explain, with a code example, how polymorphism avoids the need for `if/else` type-checking in calling code.
- [ ] Write a duck-typing example where two unrelated objects satisfy the same informal "interface."

## Mini Project
Build a small "Notification System" with `EmailNotification`, `SMSNotification`, and `PushNotification` classes, each implementing a `send(message)` method differently, dispatched polymorphically from a single `notify(notifier, message)` function.

## Common Mistakes
- Writing manual `if (obj instanceof X) {...} else if (obj instanceof Y) {...}` chains instead of leveraging polymorphism to let each object handle its own behavior.
- Forgetting to actually override a method in a subclass, silently inheriting unwanted default behavior.

## Best Practices
- Design base classes/interfaces so calling code never needs to know the specific subclass — just call the shared method name.
- Use duck typing deliberately for flexible, decoupled designs where formal inheritance isn't necessary.

## Optimization Tips
- Polymorphic dispatch (resolving which method version runs) has effectively no meaningful runtime overhead in modern JS engines — architectural clarity, not performance, is the deciding factor.

## Summary
Polymorphism lets different object types respond to the same method call each in their own way — achieved in JavaScript through method overriding (formal inheritance) or duck typing (informal shared interfaces) — simplifying calling code that would otherwise need explicit type-checking branches.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#polymorphism)

---
[← Encapsulation](./encapsulation.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
