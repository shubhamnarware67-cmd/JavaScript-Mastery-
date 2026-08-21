# Ternary

> Section: Operators · Owner: **Shubham Narware**

## Definition
The ternary (conditional) operator `condition ? valueIfTrue : valueIfFalse` is JavaScript's only operator that takes three operands — a compact alternative to a simple `if/else`.

## History
Present since JS's creation in 1995, inherited from C-like language syntax.

## Why Ternary Matters
It lets you write a conditional *expression* (something that produces a value) rather than a conditional *statement*, useful directly inside assignments, template literals, or JSX.

## Syntax
```js
condition ? valueIfTrue : valueIfFalse
```

## Types
Not applicable — single operator form (though it can be chained/nested).

## Examples
```js
let age = 20;
let type = age >= 18 ? "Adult" : "Minor";
console.log(type); // "Adult"
```

## Memory Diagram
Not applicable — the ternary evaluates to a value, no persistent memory structure.

## Flowchart
```
condition ? A : B
        │
Evaluate condition
        │
   ┌────┴────┐
 Truthy     Falsy
   │           │
Return A    Return B
```

## Internal Working
Only one branch (`A` or `B`) is ever evaluated — like `if/else`, the ternary short-circuits: the untaken branch's expression is never executed, which matters if it has side effects.

## Beginner Example
```js
let isRaining = true;
console.log(isRaining ? "Take an umbrella" : "Enjoy the sun");
```

## Intermediate Example
```js
// Using ternary directly inside a template literal
const count = 3;
console.log(`You have ${count} item${count !== 1 ? "s" : ""}`); // "You have 3 items"
```

## Advanced Example
```js
// Nested ternary — powerful but easy to overuse; keep to 1 level for readability
function getGrade(score) {
  return score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
}
console.log(getGrade(82)); // "B"
```

## Real World Example
```js
// Common in React/JSX for conditional rendering
// return <div>{isLoggedIn ? <Dashboard /> : <LoginPage />}</div>;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
```

## Industry Example
```js
// Ternaries are frequently used for concise inline class name logic
const buttonClass = isActive ? "btn btn-active" : "btn btn-inactive";
```

## Interview Questions
See full list → [interview.md](./interview.md#ternary)
1. How does the ternary operator differ from an `if/else` statement?
2. Why is the ternary called a "conditional expression" rather than a "conditional statement"?
3. When does excessive ternary nesting hurt readability, and what's a better alternative?
4. Does the ternary operator evaluate both branches or just one?
5. Give an example of using a ternary inside a template literal.

## MCQs
See full list → [mcq.md](./mcq.md#ternary)
1. In `a ? b : c`, if `a` is falsy, the result is: (a) `a` (b) `b` (c) **`c`** (d) `undefined` → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#ternary)
1. **(Easy)** Write a ternary that returns "Even" or "Odd" based on a number.
2. **(Medium)** Write a nested ternary that assigns a letter grade based on a numeric score (A/B/C/F).
3. **(Hard)** Refactor a 3-level nested ternary into clearer `if/else if/else` logic, preserving identical behavior.

## Assignments
- [ ] Write 3 ternary expressions replacing simple `if/else` statements.
- [ ] Explain, with an example, why deeply nested ternaries can hurt code readability.

## Mini Project
Build a small "Grade Calculator" using a nested ternary (or refactored `if/else` for comparison) that maps a numeric score to a letter grade.

## Common Mistakes
- Overusing deeply nested ternaries, making logic hard to follow.
- Using ternaries for side effects (e.g. `condition ? doA() : doB()`) instead of `if/else`, when no value is actually being produced/used.

## Best Practices
- Keep ternaries to a single condition where possible; use `if/else` or a lookup table for complex branching.
- Use ternaries specifically when you need the *result* as a value (assignment, JSX, template literals).

## Optimization Tips
- No meaningful performance difference from `if/else` — the ternary's value is purely expressiveness/conciseness in expression contexts.

## Summary
The ternary operator provides a compact conditional *expression*, ideal for simple value-producing conditions — but should be kept shallow, reserving `if/else` for more complex branching logic.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#ternary)

---
[← Assignment](./assignment.md) | [Section Home](./README.md) | [Nullish →](./nullish.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
