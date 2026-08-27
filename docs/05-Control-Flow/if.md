# If

> Section: Control Flow · Owner: **Shubham Narware**

## Definition
The `if` statement executes a block of code only when a specified condition evaluates to truthy, optionally paired with `else if`/`else` for alternative branches.

## History
Present since JavaScript's creation in 1995, inherited from C-like conditional syntax.

## Why If Matters
It's the most fundamental way programs make decisions — nearly every non-trivial script uses conditional branching.

## Syntax
```js
if (condition) {
  // runs if condition is truthy
} else if (otherCondition) {
  // runs if otherCondition is truthy
} else {
  // runs if none matched
}
```

## Types
| Form | Use case |
|---|---|
| `if` alone | Single conditional action |
| `if...else` | Two mutually exclusive branches |
| `if...else if...else` | Multiple ordered conditions |
| Nested `if` | Conditions depending on other conditions |

## Examples
```js
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

## Memory Diagram
Not applicable — control flow topic, not a memory-layout concept.

## Flowchart
```
        ┌─────────────┐
        │ marks >= 90 │── true ──► Grade A
        └──────┬──────┘
              false
               ▼
        ┌─────────────┐
        │ marks >= 60 │── true ──► Grade B
        └──────┬──────┘
              false
               ▼
            Grade C
```

## Internal Working
The engine evaluates the condition expression to a boolean (coercing if needed via ToBoolean rules), then executes only the matching block; conditions are checked top-to-bottom, and the first truthy one wins — later `else if`s are never evaluated.

## Beginner Example
```js
let age = 20;
if (age >= 18) {
  console.log("You can vote.");
}
```

## Intermediate Example
```js
function categorize(temp) {
  if (temp < 0) return "Freezing";
  else if (temp < 15) return "Cold";
  else if (temp < 25) return "Mild";
  else return "Hot";
}
console.log(categorize(20)); // "Mild"
```

## Advanced Example
```js
// Guard clauses instead of deep nesting — a common best practice
function processOrder(order) {
  if (!order) return "No order provided";
  if (!order.items.length) return "Order is empty";
  if (order.total <= 0) return "Invalid total";
  return "Processing order...";
}
```

## Real World Example
```js
// Form validation using sequential if checks
function validate(form) {
  if (!form.email.includes("@")) return "Invalid email";
  if (form.password.length < 8) return "Password too short";
  return "Valid";
}
```

## Industry Example
```js
// Feature flag gating in production code
if (featureFlags.newCheckout) {
  renderNewCheckout();
} else {
  renderLegacyCheckout();
}
```

## Interview Questions
See full list → [interview.md](./interview.md#if)
1. What's the difference between `if...else if` and multiple separate `if` statements?
2. What is a "guard clause" and why is it preferred over deep nesting?
3. How does JS coerce a non-boolean condition in an `if` statement?
4. Why might excessive nested `if`s hurt code readability/maintainability?
5. Can `if` be used without curly braces? What's the risk of doing so?

## MCQs
See full list → [mcq.md](./mcq.md#if)
1. In an `if...else if...else` chain, how many blocks can execute? (a) All matching ones (b) **Only the first matching one** (c) None (d) The last one → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#if)
1. **(Easy)** Write an `if/else` that logs "Even" or "Odd" for a number.
2. **(Medium)** Write a grading function using `if/else if/else` for 4 grade bands.
3. **(Hard)** Refactor a deeply nested `if` pyramid into guard clauses, preserving identical behavior.

## Assignments
- [ ] Convert 3 separate independent `if` statements into an `if/else if/else` chain and explain the behavior difference.
- [ ] Rewrite a nested `if` function using guard clauses.

## Mini Project
Build a simple traffic-light state describer: given a color string, use `if/else if/else` to log the correct action ("Stop", "Get Ready", "Go").

## Common Mistakes
- Forgetting curly braces on multi-line blocks, leading to only the first line being conditional.
- Using multiple independent `if`s when `else if` was intended, causing unintended blocks to run together.
- Deep nesting instead of guard clauses, hurting readability.

## Best Practices
- Prefer guard clauses (early returns) over deeply nested conditionals.
- Always use curly braces, even for single-line bodies, for clarity and to avoid bugs when editing later.

## Optimization Tips
- Order `else if` conditions from most likely to least likely to marginally reduce average comparisons made.

## Summary
`if`/`else if`/`else` is JavaScript's core conditional branching construct — evaluated top-to-bottom with only the first matching branch executing; guard clauses are a key technique for keeping conditional logic readable.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#if)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Switch →](./switch.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
