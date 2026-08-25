# Try Catch

> Section: Error Handling · Owner: **Shubham Narware**

## Definition
`try...catch` is a JavaScript control structure that lets you attempt code that might throw an error, and gracefully handle that error instead of letting it crash the program.

## History
Introduced in **ECMAScript 3 (1999)**, modeled after exception handling in languages like Java and C++, to give JavaScript a structured way to deal with runtime errors instead of failing silently or crashing.

## Why Try Catch Matters
Without it, a single runtime error (like a failed JSON parse or a null reference) would stop script execution entirely — `try...catch` lets you isolate risky code and keep the rest of the program running.

## Syntax
```js
try {
  // risky code
} catch (error) {
  // handle error
} finally {
  // always runs, error or not
}
```

## Types (related forms)
| Form | Behavior |
|---|---|
| `try...catch` | Catch and handle an error |
| `try...catch...finally` | Catch, handle, and always run cleanup |
| `try...finally` (no catch) | Run cleanup, but let the error propagate up |
| Optional catch binding (ES2019) | `catch { }` without capturing the error object |

## Examples
```js
try {
  JSON.parse("{ invalid json }");
} catch (error) {
  console.log("Parsing failed:", error.message);
}
```

## Memory Diagram
```
try block throws ──► Error object created (on heap)
                            │
                     catch(error) binds it
                            │
                  error.message, error.stack available
```

## Flowchart
```
Enter try block
      │
Error thrown? ──No──► try block completes normally ──► finally runs (if present)
      │ Yes
      ▼
Jump to catch block
      │
catch block runs
      │
finally runs (if present) ──► execution continues after the try/catch
```

## Internal Working
When an error is thrown inside a `try` block, the JS engine immediately stops executing that block and searches up the call stack for a matching `catch` — if found, it unwinds to that point and runs the `catch` block with the error object bound to the catch parameter.

## Beginner Example
```js
try {
  const result = 10 / undefinedVar; // ReferenceError
} catch (error) {
  console.log("Caught:", error.message);
}
```

## Intermediate Example
```js
function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.warn("Invalid JSON, returning default");
    return {};
  } finally {
    console.log("Parse attempt finished");
  }
}
```

## Advanced Example
```js
async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Fetch failed:", error.message);
    throw error; // re-throw so caller can also handle it
  }
}
```

## Real World Example
```js
// Wrapping localStorage access, since it can throw in private browsing
// mode or when storage quota is exceeded.
function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Storage unavailable:", error.message);
  }
}
```

## Industry Example
```js
// Production APIs commonly wrap route handlers in try/catch to ensure
// a single failed request returns a proper error response instead of
// crashing the whole server process.
```

## Interview Questions
See full list → [interview.md](./interview.md#try-catch)
1. Does the `finally` block always run, even if `catch` re-throws or `try` returns?
2. Can you use `try...finally` without a `catch`? What happens to the error then?
3. What is the "optional catch binding" feature introduced in ES2019?
4. If you `return` from inside `try` and also from `finally`, which value wins?
5. Can `try...catch` catch errors thrown inside asynchronous callbacks (like `setTimeout`)?

## MCQs
See full list → [mcq.md](./mcq.md#try-catch)
1. Which block always executes regardless of whether an error occurred? (a) `try` (b) `catch` (c) **`finally`** (d) None → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#try-catch)
1. **(Easy)** Write a `try...catch` that safely parses JSON and returns `null` on failure.
2. **(Medium)** Write a function that retries a risky operation up to 3 times using `try...catch` in a loop.
3. **(Hard)** Explain and demonstrate why `try...catch` cannot catch an error thrown inside a `setTimeout` callback directly.

## Assignments
- [ ] Write a `try...catch...finally` block and explain, in comments, the exact order of execution when an error is thrown.
- [ ] Explain why wrapping an `await`ed `fetch()` call in `try...catch` is a common pattern.

## Mini Project
Build a small "Safe JSON Editor": a textarea where users type JSON, and a `try...catch`-wrapped parser shows either the parsed object or a friendly error message live.

## Common Mistakes
- Expecting `try...catch` to catch errors thrown inside asynchronous callbacks like `setTimeout` (it can't, unless you're inside an `async` function using `await`).
- Swallowing errors silently in `catch` without logging or handling them meaningfully.
- Forgetting that `finally` runs even if `try` or `catch` contains a `return` statement.

## Best Practices
- Only wrap the specific risky code in `try`, not large unrelated blocks, so you know exactly what failed.
- Always log or handle the error meaningfully in `catch` — never leave it empty without a comment explaining why.

## Optimization Tips
- Avoid using `try...catch` for routine control flow (e.g., checking if a key exists) — use it only for genuinely exceptional, unpredictable failures, since exception handling has a small performance cost.

## Summary
`try...catch` (optionally with `finally`) lets JavaScript gracefully handle runtime errors instead of crashing, catching thrown exceptions within synchronous code or `await`ed asynchronous code, with `finally` guaranteed to run for cleanup regardless of outcome.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#try-catch)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Throw →](./throw.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
