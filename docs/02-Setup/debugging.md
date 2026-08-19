# Debugging

> Section: Environment Setup · Owner: **Shubham Narware**

## Definition
Debugging is the process of finding and fixing errors in code using tools like breakpoints, the browser/Node debugger, and console methods — rather than only guessing via `console.log`.

## History
- Early JS debugging: `alert()` boxes and `console.log`.
- **Chrome DevTools** (2008 onward) brought a full visual debugger, breakpoints, and network inspection to browser JS.
- **Node's `--inspect` flag** (and the `node inspect` CLI) later brought the same DevTools-based debugging experience to server-side code.

## Why Debugging Matters
Proper debugging (breakpoints, call stack inspection, watch expressions) finds root causes far faster than sprinkling `console.log` everywhere and guessing.

## Syntax
```js
debugger; // pauses execution here when DevTools/Node inspector is open

console.log(value);     // simple output
console.table(array);   // tabular view for arrays/objects
console.trace();        // prints the current call stack
```

## Types (debugging tools)
| Tool | Used for |
|---|---|
| Browser DevTools (Sources panel) | Breakpoints, step-through, scope inspection in browser JS |
| VS Code built-in debugger | Breakpoints for Node scripts, directly in the editor |
| `node --inspect` | Attach Chrome DevTools to a running Node process |
| `console.*` methods | Quick, lightweight inline inspection |

## Examples
```js
function add(a, b) {
  debugger; // execution pauses here if DevTools is open
  return a + b;
}
add(2, 3);
```

## Memory Diagram
```
Not applicable directly — but debuggers let you INSPECT the call stack
and scope chain live, which are the same structures covered in
01-Introduction/execution.md
```

## Flowchart
```
Bug reported / unexpected output
        │
Reproduce it reliably
        │
Set a breakpoint near the suspected code
        │
Step through line-by-line, inspect variables/scope
        │
Identify where actual behavior diverges from expected
        │
Fix, then verify with the same reproduction steps
```

## Internal Working
When a breakpoint is hit, the engine pauses the call stack exactly where it is — the debugger UI then lets you inspect every variable in scope (via the scope chain), the current `this`, and step forward one line ("step over"), into a function ("step into"), or out of it ("step out").

## Beginner Example
```js
// Browser: open DevTools (F12) → Sources tab → click a line number to set a breakpoint
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i; // set a breakpoint here, inspect `total` and `i` each iteration
}
```

## Intermediate Example
```json
// VS Code launch.json to debug a Node script with breakpoints set in the editor
{
  "version": "0.2.0",
  "configurations": [
    { "type": "node", "request": "launch", "name": "Debug App", "program": "${workspaceFolder}/app.js" }
  ]
}
```

## Advanced Example
```bash
# Attach Chrome DevTools to a running Node process
node --inspect-brk app.js
# then open chrome://inspect in Chrome to connect
```

## Real World Example
```js
// Conditional breakpoints (set via DevTools UI) only pause when a condition is true,
// e.g. only pause when `userId === 42`, instead of every loop iteration.
```

## Industry Example
```js
// Production issues are often debugged via structured logging + tools like
// Sentry, which capture stack traces and variable context automatically
// when errors occur in deployed apps — an extension of local debugging habits.
```

## Interview Questions
See full list → [interview.md](./interview.md#debugging)
1. What does the `debugger;` statement do?
2. What's the difference between "step over," "step into," and "step out" in a debugger?
3. How would you debug a running Node.js process using Chrome DevTools?
4. Why is `console.table()` sometimes more useful than `console.log()`?
5. What is a conditional breakpoint and when would you use one?

## MCQs
See full list → [mcq.md](./mcq.md#debugging)
1. Which flag lets Chrome DevTools attach to a Node process? (a) `--debug` (b) **`--inspect`** (c) `--trace` (d) `--devtools` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#debugging)
1. **(Easy)** Add a `debugger;` statement inside a loop and describe what you'd inspect at each pause.
2. **(Medium)** Set up a VS Code `launch.json` to debug a Node script and set a breakpoint inside a function.
3. **(Hard)** Debug a snippet with an off-by-one loop bug using only breakpoints and scope inspection (no guessing).

## Assignments
- [ ] Practice setting a breakpoint in Chrome DevTools and stepping through a loop.
- [ ] Configure and use VS Code's Node debugger on a real script.

## Mini Project
Intentionally write a small buggy script (off-by-one error, wrong variable reference) and document, step-by-step, how you used breakpoints to find and fix it.

## Common Mistakes
- Debugging solely with `console.log` for complex issues, missing the call stack/scope context a real debugger shows.
- Forgetting to remove `debugger;` statements before committing code.
- Not using conditional breakpoints, wasting time stepping through many irrelevant iterations.

## Best Practices
- Reach for the debugger (breakpoints) before adding more `console.log` lines for non-trivial bugs.
- Use conditional breakpoints and watch expressions to target exactly the problematic state.

## Optimization Tips
- Use `console.table()` for arrays/objects instead of manually formatting `console.log` output.
- Use the "Copy as cURL" / Network panel in DevTools to quickly reproduce and debug failing API calls.

## Summary
Real debugging tools (breakpoints, call stack/scope inspection, conditional breakpoints) in the browser and VS Code are far more effective than relying only on `console.log` — they let you directly observe program state instead of guessing.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#debugging)

---
[← Extensions](./extensions.md) | [Section Home](./README.md) | [Section Home →](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
