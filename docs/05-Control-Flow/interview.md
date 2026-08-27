# Control Flow — Interview Questions

> Owner: **Shubham Narware**

### If {#if}
1. **`if...else if` vs multiple separate `if`s?** — Only the first matching branch runs in a chain; separate `if`s each evaluate independently and could all run.
2. **What is a guard clause?** — An early return that handles an edge case immediately, avoiding deep nesting.
3. **How does JS coerce a non-boolean condition?** — Via internal ToBoolean rules based on truthy/falsy values.
4. **Why avoid deep nesting?** — It hurts readability and makes logic harder to trace/maintain.
5. **Can `if` omit curly braces?** — Yes for single statements, but risky when editing later adds a second line unintentionally outside the conditional.
6. Difficulty: Q1 Easy, Q2–Q4 Medium, Q5 Hard.

### Switch {#switch}
1. **Loose or strict comparison in `switch`?** — Strict (`===`).
2. **What happens without `break`?** — Execution falls through into the next case(s).
3. **What is case grouping?** — Multiple `case` labels sharing one block of code.
4. **Does `default`'s position matter?** — It's typically checked last regardless of position, but conventionally placed at the end for readability.
5. **When prefer `if/else if` over `switch`?** — For range-based or complex boolean conditions that `switch`'s exact-match style can't express directly.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Loops {#loops}
1. **`for` vs `while` choice?** — `for` when iteration count is known; `while` when driven by a runtime condition.
2. **`for...of` vs `for...in` difference?** — `for...of` iterates values of iterables; `for...in` iterates enumerable keys of objects.
3. **`break` vs `continue`?** — `break` exits the loop entirely; `continue` skips to the next iteration.
4. **Why does `do...while` guarantee one run?** — It checks the condition after the body executes, not before.
5. **Best loop for object properties?** — `for...in` or, preferably, `Object.entries()` + `for...of`.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### For {#for}
1. **3 parts of a `for` header and their timing?** — Initializer (once, before loop), condition (checked every iteration before body), update (runs after body, before next check).
2. **Why does `let` matter in `for` loops with closures?** — Each iteration gets its own `let` binding, avoiding the classic shared-variable closure bug that `var` has.
3. **Looping backward through an array?** — `for (let i = arr.length - 1; i >= 0; i--)`.
4. **Common off-by-one mistake?** — Using `<=` when `<` was intended (or vice versa), causing an extra/missing iteration.
5. **Nested `for` loop complexity implication?** — Generally O(n²) for two nested loops over similarly-sized inputs.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### While {#while}
1. **When choose `while` over `for`?** — When iteration count is unknown and depends on a runtime condition.
2. **What if the condition is false initially?** — The body never executes, not even once.
3. **How can `while` become infinite?** — If nothing inside the body ever makes the condition false.
4. **Real task suited to `while`?** — Polling/retrying until a condition succeeds or an attempt limit is reached.
5. **Condition-check timing difference from `do...while`?** — `while` checks before the body; `do...while` checks after.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Do While {#dowhile}
1. **Fundamental difference from `while`?** — `do...while` always runs the body at least once before checking the condition.
2. **Real scenario favoring `do...while`?** — A menu or prompt that must display at least once before asking "repeat?"
3. **What if condition is false from the start?** — The body still runs exactly once before the loop exits.
4. **Why the required semicolon?** — Syntax requirement of the `do...while` statement form.
5. **Can every `do...while` become a `while`?** — Yes, by running the body once manually before entering an equivalent `while` loop.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### For Of {#forof}
1. **What does `for...of` iterate?** — Values of any iterable (arrays, strings, Maps, Sets, etc).
2. **Requirement for an object to work with `for...of`?** — It must implement the iterable protocol (`[Symbol.iterator]`).
3. **Why doesn't it work on plain objects?** — Plain objects aren't iterable by default (no `[Symbol.iterator]`).
4. **Getting index + value together?** — Use `array.entries()` with destructuring inside `for...of`.
5. **What is `for await...of`?** — An async variant for iterating async iterables/streams, awaiting each value.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### For In {#forin}
1. **What does `for...in` iterate?** — Enumerable property keys, including inherited ones.
2. **Why discouraged for arrays?** — Can include unexpected non-index properties and iterates keys as strings.
3. **Restricting to own properties?** — Use `Object.hasOwn(obj, key)` (or `obj.hasOwnProperty(key)`) inside the loop.
4. **Modern alternative for plain objects?** — `Object.keys/values/entries` combined with `for...of`/`.forEach()`.
5. **Guaranteed property order?** — Mostly consistent in practice today, but not strictly guaranteed by spec for every key type.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
