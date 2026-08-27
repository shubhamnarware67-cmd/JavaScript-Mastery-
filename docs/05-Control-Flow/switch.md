# Switch

> Section: Control Flow · Owner: **Shubham Narware**

## Definition
`switch` compares an expression against multiple `case` values using strict equality, executing the matching case's code (and, without `break`, all subsequent cases too).

## History
Present since JavaScript's creation in 1995, inherited from C-like switch syntax.

## Why Switch Matters
It's often clearer than a long `if/else if` chain when comparing one value against many discrete possibilities.

## Syntax
```js
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
```

## Types
| Form | Behavior |
|---|---|
| Standard `switch` with `break` | Each case runs independently |
| `switch` without `break` (fall-through) | Execution continues into the next case |
| Grouped cases | Multiple `case` labels sharing one block |

## Examples
```js
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}
```

## Memory Diagram
Not applicable — control flow topic.

## Flowchart
```
switch (day)
    │
day === 1? ──Yes──► "Monday" ──► break
    │No
day === 2? ──Yes──► "Tuesday" ──► break
    │No
day === 3? ──Yes──► "Wednesday" ──► break
    │No
default ──► "Invalid day"
```

## Internal Working
`switch` compares the expression to each `case` value using **strict equality (`===`)** — no type coercion occurs, unlike some loosely-typed comparisons elsewhere in JS.

## Beginner Example
```js
let fruit = "apple";
switch (fruit) {
  case "apple": console.log("Red fruit"); break;
  case "banana": console.log("Yellow fruit"); break;
  default: console.log("Unknown fruit");
}
```

## Intermediate Example
```js
// Grouped cases sharing one block (fall-through intentionally used)
let month = 4;
switch (month) {
  case 12: case 1: case 2:
    console.log("Winter"); break;
  case 3: case 4: case 5:
    console.log("Spring"); break;
  default:
    console.log("Other season");
}
```

## Advanced Example
```js
// Forgetting `break` causes accidental fall-through (a classic bug)
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
  case "B":
    console.log("Good"); // runs
  case "C":
    console.log("Average"); // ALSO runs — no break above stopped it!
    break;
  default:
    console.log("Unknown");
}
```

## Real World Example
```js
// HTTP status code handling
function getStatusMessage(code) {
  switch (code) {
    case 200: return "OK";
    case 404: return "Not Found";
    case 500: return "Server Error";
    default: return "Unknown Status";
  }
}
```

## Industry Example
```js
// Redux reducers historically used switch statements to handle action types
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    case "DECREMENT": return { count: state.count - 1 };
    default: return state;
  }
}
```

## Interview Questions
See full list → [interview.md](./interview.md#switch)
1. What comparison type does `switch` use (loose or strict)?
2. What happens if you forget `break` in a case block?
3. What is "case grouping" and when is it useful?
4. Where should `default` be placed, and does its position matter?
5. When would `if/else if` be preferred over `switch`?

## MCQs
See full list → [mcq.md](./mcq.md#switch)
1. `switch` compares values using: (a) `==` (b) **`===`** (c) `Object.is` (d) No comparison → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#switch)
1. **(Easy)** Write a `switch` mapping day numbers 1-7 to day names.
2. **(Medium)** Use grouped cases to map 12 months into 4 seasons.
3. **(Hard)** Intentionally demonstrate a fall-through bug (missing `break`), then fix it.

## Assignments
- [ ] Convert an `if/else if` chain with 5 branches into an equivalent `switch`.
- [ ] Explain, with an example, when fall-through is used intentionally vs accidentally.

## Mini Project
Build a simple "HTTP Status Explainer" using `switch` that maps common status codes (200, 301, 404, 500) to human-readable messages.

## Common Mistakes
- Forgetting `break`, causing unintended fall-through execution.
- Using `switch` for range-based conditions (like `> 90`), which it doesn't support directly — `if/else if` is better there.
- Assuming `switch` uses loose equality like `==`.

## Best Practices
- Always include `break` unless fall-through is intentional and clearly commented.
- Always include a `default` case to handle unexpected values.

## Optimization Tips
- Some engines can optimize large `switch` statements (via jump tables) better than an equivalent long `if/else if` chain — a minor factor, not typically the deciding reason to choose one over the other.

## Summary
`switch` compares an expression against multiple values using strict equality, executing matching cases — remember `break` to avoid fall-through, and prefer `if/else if` for range-based conditions that `switch` can't express directly.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#switch)

---
[← If](./if.md) | [Section Home](./README.md) | [Loops →](./loops.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
