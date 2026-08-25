# Jest

> Section: Node & Testing · Owner: **Shubham Narware**

## Definition
Jest is a popular, batteries-included JavaScript testing framework — providing a test runner, assertion library (`expect`), and mocking utilities all in one package, requiring minimal configuration to get started.

## History
Originally created at Facebook and released publicly in **2014**, Jest was designed for testing React applications but has since become one of the most widely used general-purpose JavaScript testing frameworks across both frontend and Node.js backend projects.

## Why Jest Matters
It bundles everything needed for testing (runner, assertions, mocking, coverage reports) into a single tool with sensible defaults, reducing the setup friction compared to combining separate libraries.

## Syntax
```js
test("description", () => {
  expect(actualValue).toBe(expectedValue);
});

describe("a group of related tests", () => {
  test("first test", () => { /* ... */ });
  test("second test", () => { /* ... */ });
});
```

## Types (common matchers)
| Matcher | Checks |
|---|---|
| `.toBe(value)` | Exact equality (`===`) |
| `.toEqual(value)` | Deep equality (for objects/arrays) |
| `.toThrow()` | Function throws an error |
| `.toHaveBeenCalledWith(...)` | A mock function was called with specific arguments |
| `.resolves` / `.rejects` | Assertions on resolved/rejected Promises |

## Examples
```js
test("array contains item", () => {
  const fruits = ["apple", "banana"];
  expect(fruits).toContain("apple");
});
```

## Memory Diagram
```
Jest Test File
  describe("Calculator") {
    test("adds numbers") { expect(...).toBe(...) }
    test("subtracts numbers") { expect(...).toBe(...) }
  }
        │
Jest runner discovers, executes, and reports pass/fail for each test
```

## Flowchart
```
Run `jest` command
        │
Jest scans project for test files (*.test.js, *.spec.js)
        │
For each file: run describe/test blocks in order
        │
Each expect() assertion is checked
        │
Report: pass/fail summary + coverage (if configured)
```

## Internal Working
Jest runs test files in **isolated environments** (often in parallel worker processes) for speed and to prevent tests from accidentally affecting each other's state, and its built-in mocking (`jest.fn()`, `jest.mock()`) replaces real implementations with trackable stand-ins so tests can verify *how* a function was called without executing real side effects.

## Beginner Example
```js
function add(a, b) { return a + b; }
test("add works correctly", () => {
  expect(add(2, 3)).toBe(5);
});
```

## Intermediate Example
```js
describe("Calculator", () => {
  test("adds two numbers", () => expect(2 + 3).toBe(5));
  test("subtracts two numbers", () => expect(5 - 2).toBe(3));
});
```

## Advanced Example
```js
// Mocking a module and asserting on how it was called
jest.mock("./emailService");
import { sendEmail } from "./emailService";

test("calls sendEmail with correct arguments", () => {
  notifyUser("alex@example.com");
  expect(sendEmail).toHaveBeenCalledWith("alex@example.com");
});
```

## Real World Example
```js
// Testing an async API call using Jest's Promise-based matchers
test("fetchUser resolves with user data", () => {
  return expect(fetchUser(1)).resolves.toEqual({ id: 1, name: "Alex" });
});
```

## Industry Example
```js
// Jest ships as the default test runner in Create React App and is
// a common default choice for new Node.js and React projects alike.
```

## Interview Questions
See full list → [interview.md](./interview.md#jest)
1. What's the difference between `.toBe()` and `.toEqual()`?
2. What does `jest.mock()` do, and why is it useful?
3. How does Jest handle testing asynchronous code?
4. Why does Jest run test files in isolated/parallel environments?
5. What is a "snapshot test," and when might you use one?

## MCQs
See full list → [mcq.md](./mcq.md#jest)
1. Which matcher checks deep equality for objects/arrays? (a) `.toBe()` (b) **`.toEqual()`** (c) `.toContain()` (d) `.toThrow()` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#jest)
1. **(Easy)** Write a Jest test using `describe`/`test` for a simple utility function.
2. **(Medium)** Write a test using `jest.mock()` to isolate a function from a real external dependency.
3. **(Hard)** Write tests for an async function using both `async/await` and the `.resolves`/`.rejects` matcher styles.

## Assignments
- [ ] Explain, with an example, the difference between `.toBe()` and `.toEqual()` and when each is appropriate.
- [ ] Write a small test suite (3+ tests) for a string utility function (e.g., a `capitalize()` function).

## Mini Project
Build a small "String Utils" module (capitalize, reverse, truncate) with a complete Jest test suite covering typical inputs and edge cases (empty strings, single characters).

## Common Mistakes
- Using `.toBe()` to compare objects/arrays (fails due to reference inequality) instead of `.toEqual()`.
- Forgetting to `await` (or `return`) a Promise-based assertion, causing the test to pass falsely before the assertion actually runs.
- Not resetting mocks between tests, causing state to leak from one test to the next.

## Best Practices
- Use `.toEqual()` for objects/arrays and `.toBe()` for primitives.
- Reset or clear mocks between tests (`jest.clearAllMocks()`) to keep tests independent.

## Optimization Tips
- Run Jest in watch mode (`jest --watch`) during development to only re-run tests affected by recent changes, speeding up the feedback loop.

## Summary
Jest is an all-in-one JavaScript testing framework combining a test runner, assertions, and mocking utilities with minimal setup — widely used across both frontend and Node.js projects for its simplicity and comprehensive feature set.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#jest)

---
[← Testing](./testing.md) | [Section Home](./README.md) | [Chrome DevTools →](./chrome-devtools.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
