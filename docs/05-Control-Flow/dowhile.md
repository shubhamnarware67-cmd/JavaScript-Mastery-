# Do While

> Section: Control Flow · Owner: **Shubham Narware**

## Definition
The `do...while` loop runs its body **once before** checking the condition, guaranteeing at least one execution regardless of whether the condition is true or false.

## History
Present since JavaScript's creation in 1995, inherited from C-like `do...while` syntax.

## Why Do While Matters
It's the right tool whenever a task must happen at least once before deciding whether to repeat it — e.g. showing a menu, then asking "run again?"

## Syntax
```js
do {
  // body — always runs at least once
} while (condition);
```
Note the required semicolon after `while (condition)`.

## Types
Not applicable — single loop form.

## Examples
```js
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);
// Logs: 10 — runs once even though the condition (10 < 5) was already false!
```

## Memory Diagram
Not applicable — control flow topic.

## Flowchart
```
Run body (always, at least once)
        │
Check condition
        │
   ┌────┴────┐
 truthy     falsy
   │           │
Repeat      Exit loop
```

## Internal Working
Unlike `while`, which checks the condition **before** the first iteration, `do...while` defers the check until **after** the body has already executed once — the difference only matters when the condition happens to be false from the start.

## Beginner Example
```js
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);
// 1 2 3 4 5
```

## Intermediate Example
```js
// Simulating a menu that always shows at least once
let choice;
do {
  choice = getUserChoice(); // hypothetical input function
  handleChoice(choice);
} while (choice !== "exit");
```

## Advanced Example
```js
// Input validation pattern — always prompt at least once, repeat until valid
let input;
do {
  input = getInput();
} while (!isValid(input));
```

## Real World Example
```js
// Rolling a die until you get a 6 — you must roll at least once
let roll;
do {
  roll = Math.floor(Math.random() * 6) + 1;
  console.log("Rolled:", roll);
} while (roll !== 6);
```

## Industry Example
```js
// Retry logic that always attempts once before checking success
let result;
let attempts = 0;
do {
  result = attemptOperation();
  attempts++;
} while (!result.success && attempts < 3);
```

## Interview Questions
See full list → [interview.md](./interview.md#dowhile)
1. What's the fundamental difference between `while` and `do...while`?
2. Give a real scenario where `do...while` is clearly the right choice over `while`.
3. What happens if a `do...while` loop's condition is false from the very start?
4. Why does `do...while` require a semicolon after the `while(...)` part?
5. Could every `do...while` loop be rewritten as a `while` loop? How?

## MCQs
See full list → [mcq.md](./mcq.md#dowhile)
1. A `do...while` loop checks its condition: (a) **After the body** (b) Before the body (c) Never (d) Twice → **Answer: (a)**

## Coding Questions
See full list → [practice.md](./practice.md#dowhile)
1. **(Easy)** Write a `do...while` loop that logs numbers 1 to 5.
2. **(Medium)** Simulate rolling a die repeatedly until a 6 appears, using `do...while`.
3. **(Hard)** Implement an input-validation loop using `do...while` that always prompts at least once and repeats until input passes validation.

## Assignments
- [ ] Write a `do...while` example where the condition is false from the start, and confirm the body still runs once.
- [ ] Convert a `do...while` loop into an equivalent `while` loop (adding the necessary setup).

## Mini Project
Build a simple number-guessing game loop (conceptually) using `do...while` that always lets the player guess at least once before checking if they won.

## Common Mistakes
- Forgetting the required semicolon after `while (condition);`.
- Using `do...while` when `while` would be clearer, in cases where running the body zero times is actually valid/expected.
- Assuming `do...while` behaves identically to `while` in all cases (they differ specifically when the condition starts false).

## Best Practices
- Reserve `do...while` specifically for "must run at least once" scenarios — using it elsewhere can confuse readers expecting standard pre-condition-checked behavior.
- Always double-check semicolon placement to avoid syntax errors.

## Optimization Tips
- No performance difference from `while` — the choice is purely about matching the loop's semantics to the task's requirements.

## Summary
`do...while` guarantees its body executes at least once by checking the condition only after the first pass — ideal for menus, validation prompts, and "try once, then repeat if needed" patterns.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#dowhile)

---
[← While](./while.md) | [Section Home](./README.md) | [For Of →](./forof.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
