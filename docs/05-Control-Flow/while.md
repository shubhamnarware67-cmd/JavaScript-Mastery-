# While

> Section: Control Flow · Owner: **Shubham Narware**

## Definition
The `while` loop repeats a block as long as a condition remains truthy, checking the condition **before** each iteration — ideal when the number of iterations isn't known in advance.

## History
Present since JavaScript's creation in 1995, inherited from C-like `while` loop syntax.

## Why While Matters
Many real tasks (waiting for a condition to become true, processing until a queue is empty) don't have a fixed iteration count — `while` fits these naturally.

## Syntax
```js
while (condition) {
  // body — runs repeatedly while condition is truthy
}
```

## Types
Not applicable — single loop form (contrast with `do...while`, which checks the condition after the body).

## Examples
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// 0 1 2 3 4
```

## Memory Diagram
Not applicable — control flow topic.

## Flowchart
```
Check condition
        │
   ┌────┴────┐
 truthy     falsy
   │           │
Run body    Exit loop
   │
Back to condition check
```

## Internal Working
The condition is evaluated **before** the first (and every subsequent) execution of the body — if it's falsy from the very start, the body never runs even once, unlike `do...while`.

## Beginner Example
```js
let count = 3;
while (count > 0) {
  console.log(count);
  count--;
}
// 3 2 1
```

## Intermediate Example
```js
// Processing a queue until empty
const queue = ["task1", "task2", "task3"];
while (queue.length > 0) {
  const task = queue.shift();
  console.log("Processing:", task);
}
```

## Advanced Example
```js
// Polling pattern — retry until a condition is met or attempts run out
let attempts = 0;
let dataReady = false;
while (!dataReady && attempts < 5) {
  dataReady = checkIfDataReady(); // hypothetical check
  attempts++;
}
```

## Real World Example
```js
// Reading input until a sentinel value is entered (conceptual/CLI context)
let input = getNextInput();
while (input !== "quit") {
  process(input);
  input = getNextInput();
}
```

## Industry Example
```js
// Game loops (conceptually) run while a "game is active" flag remains true
let isRunning = true;
while (isRunning) {
  updateGameState();
  isRunning = checkGameOverCondition();
}
```

## Interview Questions
See full list → [interview.md](./interview.md#while)
1. When would you choose `while` over `for`?
2. What happens if a `while` loop's condition is falsy on the very first check?
3. How can a `while` loop accidentally become infinite, and how do you prevent it?
4. Give an example of a real task better suited to `while` than `for`.
5. What's the difference in condition-check timing between `while` and `do...while`?

## MCQs
See full list → [mcq.md](./mcq.md#while)
1. A `while` loop checks its condition: (a) After the body (b) **Before the body** (c) Never (d) Only once → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#while)
1. **(Easy)** Write a `while` loop counting down from 10 to 1.
2. **(Medium)** Process a queue (array) using `while` and `.shift()` until it's empty.
3. **(Hard)** Implement a retry-with-backoff pattern using `while`, capped at a maximum number of attempts.

## Assignments
- [ ] Convert a `for` loop into an equivalent `while` loop and explain the tradeoffs.
- [ ] Write a short explanation of how to safely prevent infinite `while` loops.

## Mini Project
Build a simple "Countdown Timer" (conceptually, using `while` and a decrementing counter) that logs each second remaining until zero.

## Common Mistakes
- Forgetting to update the condition variable inside the loop body, causing an infinite loop.
- Using `while` when the iteration count is actually known in advance (where `for` would be clearer).

## Best Practices
- Always ensure something inside the loop body will eventually make the condition false.
- Add a maximum iteration/attempt safeguard for polling/retry-style `while` loops to avoid true infinite loops in production.

## Optimization Tips
- For tight polling loops, add a delay (e.g. via `setTimeout` in async contexts) rather than tight-looping synchronously, which would otherwise block the single JS thread.

## Summary
`while` repeats a block based purely on a condition checked before each iteration — ideal for condition-driven tasks with an unknown iteration count, but requires care to avoid accidental infinite loops.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#while)

---
[← For](./for.md) | [Section Home](./README.md) | [Do While →](./dowhile.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
