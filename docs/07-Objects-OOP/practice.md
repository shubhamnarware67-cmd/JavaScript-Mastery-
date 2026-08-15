# Objects & OOP — Coding Practice

> Owner: **Shubham Narware**

### Objects {#objects}
- **Easy:** Create a book object (title, author, year) and log each property.
- **Medium:** Use destructuring to extract 3 properties from a nested object, renaming one.
- **Hard:** Write a function that deeply merges two objects.

### Prototype {#prototype}
- **Easy:** Add a method to a constructor function's prototype, call it from two instances.
- **Medium:** Demonstrate a prototype method isn't an "own property" via `hasOwnProperty()`.
- **Hard:** Manually implement prototype-based inheritance (no `class`) for `Dog` extending `Animal`.

### Prototype Chain {#prototype-chain}
- **Easy:** Create an object with `Object.create()` and verify inherited properties.
- **Medium:** Demonstrate property shadowing.
- **Hard:** Build a 3-level prototype chain and trace a property lookup through it.

### Classes {#classes}
- **Easy:** Write a `Book` class with a constructor and `describe()` method.
- **Medium:** Add a static method and a getter/setter to a class.
- **Hard:** Build a class with a private field enforcing validation via its setter.

### Inheritance {#inheritance}
- **Easy:** Create a `Shape` base class and a `Circle` subclass.
- **Medium:** Override a method in a subclass, also calling the parent's version via `super.method()`.
- **Hard:** Build a 3-level inheritance chain (`Animal`→`Dog`→`Puppy`).

### Encapsulation {#encapsulation}
- **Easy:** Create a class with a `#private` field and a public getter.
- **Medium:** Add setter validation rejecting invalid values for a private field.
- **Hard:** Reimplement a class's private-field encapsulation using the closure/module pattern instead.

### Polymorphism {#polymorphism}
- **Easy:** Create 2 subclasses overriding the same method differently, call polymorphically in a loop.
- **Medium:** Write a function working on any object with a `.describe()` method (duck typing).
- **Hard:** Build a small "Payment" polymorphic system with 3 payment method subclasses.

---
[← Section Home](./README.md)
