# Objects

> Section: Objects & OOP · Owner: **Shubham Narware**

## Definition
An object is a collection of key-value pairs (properties), where values can be primitives, other objects, or functions (methods) — JavaScript's core structure for representing structured data and behavior.

## History
Objects have existed since JavaScript's creation in 1995; object literal shorthand, computed property names, and spread syntax for objects were added incrementally, mostly in ES2015 and ES2018.

## Why Objects Matter
Nearly all non-trivial data in JS (API responses, configuration, application state) is represented as objects — understanding their creation, access, and manipulation is foundational.

## Syntax
```js
const user = {
  name: "Shubham",
  age: 22,
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
```

## Types (ways to create objects)
| Method | Example |
|---|---|
| Object literal | `{ key: "value" }` |
| `new Object()` | `new Object()` |
| `Object.create()` | `Object.create(proto)` |
| Constructor function | `new Person("Shubham")` |
| Class | `new Person("Shubham")` (class syntax) |

## Examples
```js
const car = { brand: "Toyota", year: 2022 };
console.log(car.brand);      // dot notation
console.log(car["year"]);     // bracket notation
car.color = "blue";           // add property
delete car.year;               // remove property
```

## Memory Diagram
```
Stack                    Heap
┌───────────────┐      ┌──────────────────────────┐
│ car → (ref) ────────►│ { brand: "Toyota",           │
└───────────────┘      │   color: "blue" }            │
                        └──────────────────────────┘
```

## Flowchart
```
Need structured, named data?
        │
       Yes
        │
Use an object literal { key: value }
        │
Need many similar objects with shared behavior?
        │
       Yes ──► Consider a constructor function or class instead
```

## Internal Working
Objects are reference types stored on the heap; property access (`obj.key`) is resolved first by checking the object's own properties, then walking up its prototype chain if not found directly.

## Beginner Example
```js
const person = { name: "Shubham", city: "Indore" };
console.log(`${person.name} lives in ${person.city}`);
```

## Intermediate Example
```js
// Object destructuring and shorthand property names
const name = "Shubham", age = 22;
const user = { name, age }; // shorthand — same as { name: name, age: age }
const { name: userName, age: userAge } = user;
console.log(userName, userAge);
```

## Advanced Example
```js
// Computed property names and Object methods
const key = "role";
const employee = { [key]: "Developer" };
console.log(Object.keys(employee));    // ["role"]
console.log(Object.entries(employee)); // [["role", "Developer"]]
```

## Real World Example
```js
// Representing an API response as an object
const apiResponse = {
  status: 200,
  data: { id: 1, name: "Shubham" },
  timestamp: Date.now()
};
```

## Industry Example
```js
// Config objects are ubiquitous in real tooling (webpack.config.js, etc.)
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: { filename: "bundle.js" }
};
```

## Interview Questions
See full list → [interview.md](./interview.md#objects)
1. What are the different ways to create an object in JavaScript?
2. What's the difference between dot notation and bracket notation for property access?
3. What are computed property names, and when are they useful?
4. How does JavaScript resolve a property access that isn't found directly on an object?
5. What's the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?

## MCQs
See full list → [mcq.md](./mcq.md#objects)
1. Which notation is required for property names with spaces? (a) Dot notation (b) **Bracket notation** (c) Neither (d) Both equally → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#objects)
1. **(Easy)** Create an object representing a book (title, author, year) and log each property.
2. **(Medium)** Use destructuring to extract 3 properties from a nested object, renaming one.
3. **(Hard)** Write a function that deeply merges two objects (nested properties combined, not overwritten wholesale).

## Assignments
- [ ] Create an object using all 3 major creation methods (literal, constructor function, `Object.create`).
- [ ] Explain, with an example, when bracket notation is required instead of dot notation.

## Mini Project
Build a simple "Contact Card" object with nested address/phone data, and write functions to update and display formatted contact information.

## Common Mistakes
- Using dot notation with dynamic/variable property names (only works with bracket notation).
- Assuming object property order is guaranteed identically to insertion order for all key types (mostly true for string keys in practice, but numeric-like keys are reordered).
- Confusing shallow vs deep copying when duplicating objects with nested data.

## Best Practices
- Use object literal shorthand and destructuring for cleaner, more readable code.
- Prefer `Object.freeze()` for objects that should never change after creation.

## Optimization Tips
- Keep object shapes (property sets) consistent across similar objects to help JS engines optimize property access via internal "hidden classes."

## Summary
Objects are JavaScript's fundamental structure for representing key-value data and behavior — created via literals, constructors, or classes, and manipulated through dot/bracket notation, destructuring, and the `Object` static methods.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#objects)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Prototype →](./prototype.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
