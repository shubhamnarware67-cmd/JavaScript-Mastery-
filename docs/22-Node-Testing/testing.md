# Testing

> Section: Node & Testing · Owner: **Shubham Narware**

## Definition
Testing in JavaScript refers to writing automated code that verifies your application behaves correctly — catching bugs before they reach production and giving confidence when refactoring or adding features.

## History
Automated testing practices in JavaScript matured significantly through the 2010s, with the rise of frameworks like Jasmine, Mocha, and later Jest, alongside the broader industry shift toward Test-Driven Development (TDD) and Continuous Integration (CI).

## Why Testing Matters
Without automated tests, verifying an application works correctly requires manual checking every time code changes — tests let you verify behavior instantly and repeatedly, catching regressions before users ever see them.

## Syntax
```js
// Generic testing syntax (framework-agnostic)
test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});
```

## Types (levels of testing)
| Type | Scope |
|---|---|
| Unit test | Tests a single function/component in isolation |
| Integration test | Tests how multiple units work together |
| End-to-end (E2E) test | Tests a full user flow through the real (or near-real) application |
| Snapshot test | Compares current output against a saved "known good" version |

## Examples
```js
function add(a, b) { return a + b; }

test("add() sums two numbers", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});
```

## Memory Diagram
```
Testing Pyramid (fewer, higher up = slower & more expensive):
        ▲  E2E tests        (few, slow, high confidence)
       ▲▲▲ Integration tests (some)
      ▲▲▲▲▲ Unit tests        (many, fast, cheap)
```

## Flowchart
```
Write code / feature
        │
Write test(s) describing expected behavior
        │
Run test suite
        │
All tests pass? ──No──► fix code or test, re-run
        │ Yes
        ▼
Confidently ship / refactor / extend the feature
```

## Internal Working
A test runner (like Jest) discovers test files, executes each `test()`/`it()` block, and reports pass/fail based on whether `expect()` assertions inside match their expected values — failing fast on the first mismatched assertion within a test, while still running all other independent tests.

## Beginner Example
```js
function isEven(n) { return n % 2 === 0; }
test("isEven returns true for even numbers", () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(3)).toBe(false);
});
```

## Intermediate Example
```js
// Testing an async function
async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}
test("fetchUser returns user data", async () => {
  const user = await fetchUser(1);
  expect(user.id).toBe(1);
});
```

## Advanced Example
```js
// Mocking a dependency to isolate the unit under test
jest.mock("./api");
import { getUser } from "./api";
getUser.mockResolvedValue({ id: 1, name: "Alex" });

test("uses mocked API response", async () => {
  const user = await getUser(1);
  expect(user.name).toBe("Alex");
});
```

## Real World Example
```js
// A checkout flow's E2E test simulates a full user journey:
// add to cart → enter shipping → pay → confirm order — verifying
// the entire path works, not just individual functions.
```

## Industry Example
```js
// CI pipelines (GitHub Actions, GitLab CI) run the full test suite
// automatically on every pull request, blocking merges if tests fail.
```

## Interview Questions
See full list → [interview.md](./interview.md#testing)
1. What's the difference between unit, integration, and end-to-end tests?
2. Why is the "testing pyramid" shaped the way it is (many unit tests, few E2E tests)?
3. What is mocking, and why is it useful when unit testing?
4. How would you test an asynchronous function?
5. What is Test-Driven Development (TDD), and how does it change the order of writing code vs tests?

## MCQs
See full list → [mcq.md](./mcq.md#testing)
1. Which type of test verifies a single function in isolation? (a) E2E test (b) **Unit test** (c) Integration test (d) Manual test → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#testing)
1. **(Easy)** Write a unit test for a simple `add(a, b)` function.
2. **(Medium)** Write a test for an async function that fetches data, using `async/await` in the test itself.
3. **(Hard)** Write a test that mocks a dependency (like an API call) to isolate the function under test from external state.

## Assignments
- [ ] Explain, with an example, why mocking is important when unit testing a function that depends on a network call.
- [ ] Describe the testing pyramid and explain why unit tests should outnumber E2E tests.

## Mini Project
Build a small "Calculator" module with add/subtract/multiply/divide functions, along with a complete unit test suite covering normal cases and edge cases (like division by zero).

## Common Mistakes
- Writing too many slow, brittle E2E tests instead of a solid base of fast unit tests.
- Not mocking external dependencies, making unit tests slow or flaky due to real network/database calls.
- Testing implementation details instead of observable behavior, causing tests to break on harmless refactors.

## Best Practices
- Follow the testing pyramid: many fast unit tests, some integration tests, few E2E tests.
- Test behavior and outputs, not internal implementation details, so refactoring doesn't require rewriting tests.

## Optimization Tips
- Run unit tests in watch mode during development for fast feedback, reserving full E2E suites for CI pipelines where speed matters less.

## Summary
Testing verifies application behavior automatically, following a pyramid of unit (many, fast), integration (some), and E2E (few, slow) tests — essential for catching regressions early and enabling confident refactoring as a codebase grows.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#testing)

---
[← Express](./express.md) | [Section Home](./README.md) | [Jest →](./jest.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
