# Encapsulation

> Section: Objects & OOP · Owner: **Shubham Narware**

## Definition
Encapsulation is the OOP principle of bundling data and the methods that operate on it together, while restricting direct external access to internal state — exposing only a controlled interface.

## History
A foundational OOP concept long predating JavaScript; JS historically approximated it via closures and naming conventions (`_property`), until true private class fields (`#field`) arrived in **ES2022**.

## Why Encapsulation Matters
It protects internal state from invalid external modification, letting objects enforce their own rules (validation, consistency) rather than trusting external code to behave correctly.

## Syntax
```js
class Account {
  #balance = 0; // truly private (ES2022)
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
```

## Types (approaches to encapsulation in JS)
| Approach | Privacy Level |
|---|---|
| Closures (module pattern) | True privacy, pre-ES2022 |
| `_property` naming convention | Convention only — NOT enforced |
| `#privateField` (ES2022) | True privacy, enforced by the engine |
| `WeakMap`-based privacy | True privacy, used in some libraries pre-ES2022 |

## Examples
```js
class BankAccount {
  #balance;
  constructor(initial) {
    this.#balance = initial;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    return this.#balance;
  }
}
const acc = new BankAccount(100);
console.log(acc.withdraw(30)); // 70
// console.log(acc.#balance); // ❌ SyntaxError — truly inaccessible from outside
```

## Memory Diagram
```
BankAccount instance
┌─────────────────────────┐
│ #balance  (NOT accessible    │  ← truly private, engine-enforced
│            from outside)      │
│ withdraw(), getBalance()      │  ← public interface
└─────────────────────────┘
```

## Flowchart
```
External code wants to change balance
        │
Must go through a public method (withdraw/deposit)
        │
Method validates the request (e.g. sufficient funds?)
        │
   ┌────┴────┐
 Valid      Invalid
   │           │
Update      Reject (throw error / return unchanged)
#balance
```

## Internal Working
Fields prefixed with `#` are a genuinely distinct syntax the parser enforces — any attempt to access `obj.#field` from outside the class body is a `SyntaxError` at parse time, not just a runtime convention like `_field` naming.

## Beginner Example
```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  getAge() {
    return this.#age;
  }
}
const p = new Person(25);
console.log(p.getAge()); // 25
```

## Intermediate Example
```js
// Pre-ES2022 encapsulation via closures (module pattern)
function createCounter() {
  let count = 0; // private via closure, not class syntax
  return {
    increment: () => ++count,
    getCount: () => count
  };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
// `count` is inaccessible directly from outside — same encapsulation goal, different mechanism
```

## Advanced Example
```js
// Combining private fields with validation logic in setters
class Temperature {
  #celsius;
  constructor(celsius) {
    this.#celsius = celsius;
  }
  set celsius(value) {
    if (value < -273.15) throw new Error("Below absolute zero!");
    this.#celsius = value;
  }
  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }
}
const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
```

## Real World Example
```js
// API client hiding internal auth token, exposing only safe methods
class ApiClient {
  #token;
  constructor(token) {
    this.#token = token;
  }
  async get(path) {
    return fetch(path, { headers: { Authorization: `Bearer ${this.#token}` } });
  }
}
```

## Industry Example
```js
// Libraries frequently hide implementation details behind private fields/closures
// so internal refactors don't break consumers relying only on the public API surface.
```

## Interview Questions
See full list → [interview.md](./interview.md#encapsulation)
1. What is encapsulation, and why does it matter in OOP?
2. What's the difference between `_property` convention and `#property` true privacy?
3. How did developers achieve encapsulation before ES2022's private fields?
4. Why might a class expose a getter but not a public setter for a property?
5. What happens if you try to access a `#privateField` from outside its class?

## MCQs
See full list → [mcq.md](./mcq.md#encapsulation)
1. `#field` syntax was introduced in: (a) ES2015 (b) ES2018 (c) **ES2022** (d) ES2023 → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#encapsulation)
1. **(Easy)** Create a class with a `#private` field and a public getter for it.
2. **(Medium)** Add setter validation to a class that rejects invalid values for a private field.
3. **(Hard)** Reimplement a class's private-field encapsulation using the closure/module pattern instead, and compare the two approaches.

## Assignments
- [ ] Explain, with a code example, why `_balance` (underscore convention) is NOT true encapsulation.
- [ ] Convert a closure-based private-state object into an equivalent class using `#private` fields.

## Mini Project
Build a `Temperature` class with a private Celsius field, validated setters preventing physically impossible values, and computed getters for Fahrenheit/Kelvin.

## Common Mistakes
- Relying on `_property` naming as if it were enforced privacy (it's purely a convention — fully accessible from outside).
- Forgetting `#fields` must be declared in the class body (can't be added dynamically like regular properties).
- Exposing a public setter without validation, defeating the purpose of encapsulating the field in the first place.

## Best Practices
- Use `#private` fields for genuine internal state that shouldn't be modified directly from outside.
- Expose only the minimal public interface (getters/methods) actually needed by consumers of the class.

## Optimization Tips
- Private fields have no meaningful performance cost over public ones — the choice is purely about API design and safety.

## Summary
Encapsulation bundles data with the methods that safely operate on it, restricting direct external access — modern JavaScript enforces this properly via `#private` class fields (ES2022), building on older closure-based patterns used before that syntax existed.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#encapsulation)

---
[← Inheritance](./inheritance.md) | [Section Home](./README.md) | [Polymorphism →](./polymorphism.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
