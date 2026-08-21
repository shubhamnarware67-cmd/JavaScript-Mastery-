# Bitwise

> Section: Operators · Owner: **Shubham Narware**

## Definition
Bitwise operators treat numbers as 32-bit binary integers and perform operations bit-by-bit: AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), and shifts (`<<`, `>>`, `>>>`).

## History
Present since JS's creation in 1995, inherited conceptually from C-like languages, though used far less frequently in everyday JS than in lower-level languages.

## Why Bitwise Operators Matter
Rare in typical app code, but essential for flags/permissions systems, performance-sensitive numeric tricks, and understanding certain legacy or systems-adjacent code.

## Syntax
```js
a & b
a | b
a ^ b
~a
a << n
a >> n
a >>> n
```

## Types
| Operator | Name | Behavior |
|---|---|---|
| `&` | AND | 1 only if both bits are 1 |
| `\|` | OR | 1 if either bit is 1 |
| `^` | XOR | 1 if bits differ |
| `~` | NOT | Inverts all bits |
| `<<` | Left shift | Shifts bits left, fills with 0 |
| `>>` | Sign-propagating right shift | Shifts right, preserves sign |
| `>>>` | Zero-fill right shift | Shifts right, fills with 0 |

## Examples
```js
console.log(5 & 1);  // 1   (0101 & 0001 = 0001)
console.log(5 | 1);   // 5   (0101 | 0001 = 0101)
console.log(5 ^ 1);   // 4   (0101 ^ 0001 = 0100)
console.log(~5);      // -6  (bitwise NOT: -(x+1))
console.log(1 << 3);  // 8   (shifts 1 left by 3: 1000)
```

## Memory Diagram
```
5  in binary: 00000000000000000000000000000101
1  in binary: 00000000000000000000000000000001
5 & 1:        00000000000000000000000000000001  → 1
```

## Flowchart
```
Convert both operands to 32-bit integers
        │
Apply the bitwise operation to each bit pair
        │
Convert the result back to a regular JS Number
```

## Internal Working
JS numbers are stored as 64-bit floats, but bitwise operators internally convert operands to 32-bit signed integers first, perform the operation, then convert the result back to a standard Number — this conversion has real performance and range implications for very large numbers.

## Beginner Example
```js
console.log(4 & 5); // 4 — comparing bits: 100 & 101 = 100
```

## Intermediate Example
```js
// Using bitwise flags for permissions (a classic real use case)
const READ = 1;    // 001
const WRITE = 2;   // 010
const EXECUTE = 4; // 100

let permissions = READ | WRITE; // 011 → user can read and write
console.log((permissions & WRITE) !== 0); // true — has write permission
```

## Advanced Example
```js
// Fast integer truncation trick using double bitwise NOT
console.log(~~4.7); // 4 — truncates toward zero, faster than Math.floor for positive numbers
// (Modern engines optimize Math.trunc similarly — prefer clarity in most code)
```

## Real World Example
```js
// Color manipulation: extracting RGB channels from a packed 24-bit integer
const color = 0xff5733;
const red   = (color >> 16) & 0xff;
const green = (color >> 8) & 0xff;
const blue  = color & 0xff;
console.log(red, green, blue); // 255 87 51
```

## Industry Example
```js
// Game engines and graphics code frequently use bitwise flags/shifts
// for performance-critical state management (collision masks, render flags).
```

## Interview Questions
See full list → [interview.md](./interview.md#bitwise)
1. How do bitwise operators treat JavaScript numbers internally?
2. What's the difference between `>>` and `>>>`?
3. How can bitwise flags represent multiple boolean permissions in one number?
4. What does `~5` evaluate to, and why?
5. Give a real-world use case where bitwise operators are genuinely useful in JS.

## MCQs
See full list → [mcq.md](./mcq.md#bitwise)
1. `5 & 1` evaluates to: (a) 0 (b) **1** (c) 5 (d) 6 → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#bitwise)
1. **(Easy)** Compute `6 & 3`, `6 | 3`, and `6 ^ 3` and verify manually using binary.
2. **(Medium)** Implement a simple permissions system using bitwise flags (read/write/execute).
3. **(Hard)** Extract individual RGB channels from a packed hex color integer using bit shifting and masking.

## Assignments
- [ ] Convert 4 decimal numbers to binary manually, then verify a bitwise operation's result by hand.
- [ ] Explain, with an example, why bitwise flags are more memory-efficient than separate boolean properties.

## Mini Project
Build a simple permissions checker: define READ/WRITE/EXECUTE bit flags, combine them for a "user," and write functions to check/add/remove individual permissions using bitwise operators.

## Common Mistakes
- Using bitwise operators (`&`, `|`) by mistake instead of logical operators (`&&`, `||`).
- Forgetting bitwise operations convert to 32-bit integers, causing unexpected results with very large numbers.
- Overusing bitwise tricks where clearer code (`Math.floor`, boolean flags) would be more maintainable.

## Best Practices
- Reserve bitwise operators for genuinely appropriate cases (flags, low-level numeric manipulation) — don't use them just to look clever.
- Comment bitwise flag logic clearly, since it's less immediately readable than plain booleans.

## Optimization Tips
- Bitwise flag combinations can replace multiple boolean object properties, saving memory in very large datasets (e.g. thousands of permission records).

## Summary
Bitwise operators manipulate numbers at the binary level — rarely needed in typical JS app code, but valuable for flags/permissions systems, performance-sensitive numeric operations, and low-level tasks like color/byte manipulation.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#bitwise)

---
[← Logical](./logical.md) | [Section Home](./README.md) | [Assignment →](./assignment.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
