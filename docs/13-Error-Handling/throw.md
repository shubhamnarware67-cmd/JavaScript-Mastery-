# Throw

> Section: Error Handling · Owner: **Shubham Narware**

## Definition
The `throw` statement lets you manually raise a custom or built-in error, halting normal execution and passing the thrown value up the call stack until a `catch` handles it (or the program crashes if none does).

## History
Part of JavaScript since **ECMAScript 3 (1999)**, introduced alongside `try...catch` to let developers not just catch engine-generated errors but also intentionally signal their own failure conditions.

## Why Throw Matters
It lets you enforce assumptions and validate inputs explicitly — instead of letting invalid data silently cause bugs later, you can `throw` immediately at the point something goes wrong, making failures loud and traceable.

## Syntax
```js
throw new Error("Something went wrong");
throw "a string";      // valid but discouraged
throw { code: 404 };   // valid but discouraged
```

## Types (what you can throw)
| Thrown value | Recommended? |
|---|---|
| `new Error(message)` | ✅ Yes — has `.message` and `.stack` |
| `new TypeError(...)` / `new RangeError(...)` | ✅ Yes — built-in specialized error types |
| Custom class extending `Error` | ✅ Yes — for domain-specific errors |
| Plain string or object | ❌ Discouraged — no stack trace, harder to debug |

## Examples
```js
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
```

## Memory Diagram
```
throw new Error("msg")
        │
Error object created: { message, stack, name }
        │
Execution stops immediately, unwinds call stack
        │
Looks for nearest enclosing try/catch
```

## Flowchart
```
throw statement executes
        │
Current function execution stops immediately
        │
Call stack unwinds, looking for a catch block
        │
Catch found? ──Yes──► catch block runs with thrown value
        │
        No
        ▼
Uncaught exception ──► program/script crashes (or process exits in Node)
```

## Internal Working
`throw` immediately stops the current execution context and begins unwinding the call stack frame by frame, checking each enclosing scope for a `try...catch` — if it reaches the top of the stack without being caught, the JS engine reports an "uncaught exception."

## Beginner Example
```js
function checkAge(age) {
  if (age < 0) throw new Error("Age cannot be negative");
  return age;
}
```

## Intermediate Example
```js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Invalid email format", "email");
  }
}
```

## Advanced Example
```js
function assert(condition, message) {
  if (!condition) throw new Error(`Assertion failed: ${message}`);
}

function processOrder(order) {
  assert(order.items.length > 0, "Order must have at least one item");
  assert(order.total >= 0, "Order total cannot be negative");
  // proceed...
}
```

## Real World Example
```js
// Form validation before submitting to an API
function validateForm(data) {
  if (!data.email) throw new Error("Email is required");
  if (!data.password || data.password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
}
```

## Industry Example
```js
// REST APIs commonly throw custom error classes (e.g. NotFoundError,
// UnauthorizedError) so middleware can catch them and map each type
// to the correct HTTP status code automatically.
```

## Interview Questions
See full list → [interview.md](./interview.md#throw)
1. Why is `throw new Error("message")` preferred over `throw "message"`?
2. What happens if a `throw`n error is never caught anywhere in the call stack?
3. How would you create a custom error type by extending the built-in `Error` class?
4. Can you `throw` inside a `.then()` callback? What happens to that error?
5. What's the difference between `throw` and simply `return`ing an error object?

## MCQs
See full list → [mcq.md](./mcq.md#throw)
1. What happens if a thrown error is never caught? (a) It's silently ignored (b) **It becomes an uncaught exception, crashing the script/process** (c) It's automatically logged and ignored (d) JavaScript retries the operation → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#throw)
1. **(Easy)** Write a function that throws an `Error` if a given number is negative.
2. **(Medium)** Create a custom error class `NotFoundError` extending `Error` with an extra `statusCode` property.
3. **(Hard)** Build a small validation function that throws different custom error subclasses for different kinds of invalid input, and a caller that catches and handles each type differently using `instanceof`.

## Assignments
- [ ] Explain, with an example, why throwing a plain string loses valuable debugging information compared to throwing an `Error` object.
- [ ] Write a custom error class and show how `instanceof` can distinguish it from other error types in a `catch` block.

## Mini Project
Build a small "Form Validator" that throws custom typed errors (`RequiredFieldError`, `InvalidFormatError`) for different validation failures, caught and displayed with distinct messages in the UI.

## Common Mistakes
- Throwing plain strings or objects instead of `Error` instances, losing the `.stack` trace.
- Throwing generic `Error` for every case instead of creating meaningful custom error types.
- Forgetting that a `throw` inside a Promise executor or `.then()` callback becomes a rejected Promise, not an immediately-catchable synchronous throw.

## Best Practices
- Always throw instances of `Error` (or a subclass) so `.message` and `.stack` are available for debugging.
- Create custom error classes for distinct failure categories in larger applications, so callers can use `instanceof` to react differently.

## Optimization Tips
- Avoid throwing errors for expected, frequent conditions (like "user not found" during normal lookups) — reserve `throw` for genuinely exceptional situations, and use return values/result objects for expected failure paths in hot code paths.

## Summary
`throw` lets you manually raise an error — ideally an `Error` instance or custom subclass — immediately halting execution and unwinding the call stack until a matching `catch` handles it, making failure conditions explicit and traceable instead of silent.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#throw)

---
[← Try Catch](./try-catch.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
