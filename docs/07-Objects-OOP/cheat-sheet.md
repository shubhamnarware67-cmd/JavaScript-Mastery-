# Objects & OOP — Cheat Sheet

> Owner: **Shubham Narware**

### Objects
```js
const obj = { key: "value" };
obj.key;        // dot notation
obj["key"];      // bracket notation (required for dynamic keys)
Object.keys(obj); Object.values(obj); Object.entries(obj);
```

### Prototype / Prototype Chain
- Every object links to a prototype; lookups walk this chain until found or `null`.
- `Constructor.prototype` → shared methods for all instances.
- `Object.getPrototypeOf(obj)` → read the prototype (modern, prefer over `__proto__`).
- Chain always ends at `null`.

### Classes
```js
class Person {
  #private = 0;          // ES2022 private field
  constructor(name) { this.name = name; }
  greet() { return `Hi, ${this.name}`; }   // instance method (on prototype)
  static create(name) { return new Person(name); } // static method
  get info() { return this.name; }          // getter
}
```

### Inheritance
```js
class Dog extends Animal {
  constructor(name) { super(name); }  // must call super() before using `this`
  speak() { return `${super.speak()} + bark`; }
}
```

### Encapsulation
| Approach | True Privacy? |
|---|---|
| `_property` convention | ❌ No |
| Closures (module pattern) | ✅ Yes |
| `#field` (ES2022) | ✅ Yes |

### Polymorphism
- Same method name (`speak()`, `area()`) → different behavior per subclass.
- Duck typing → object treated as compatible based on having the right method/shape, no formal inheritance needed.

---
[← Section Home](./README.md)
