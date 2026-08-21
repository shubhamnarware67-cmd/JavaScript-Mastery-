# Operators — Interview Questions

> Owner: **Shubham Narware**

### Operators {#operators}
1. **Main categories of JS operators?** — Arithmetic, assignment, comparison, logical, bitwise, ternary, nullish/optional.
2. **What determines evaluation order in a complex expression?** — Operator precedence and associativity rules.
3. **Difference between operators and expressions?** — Operators are symbols performing an action; expressions are the combinations (operator + operands) that produce a value.
4. **Example combining 3 categories?** — `(age >= 18 && hasID) ? "Adult" : "Minor"` combines comparison, logical, and ternary.
5. **Why does precedence matter?** — Wrong assumptions about evaluation order silently produce incorrect results without any error.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Arithmetic {#arithmetic}
1. **Why does `"5"+3` differ from `"5"-3`?** — `+` triggers string concatenation if either side is a string; other arithmetic ops coerce to numbers.
2. **Why isn't `0.1+0.2` exactly `0.3`?** — IEEE-754 floating point representation can't store many decimals exactly.
3. **What does `%` compute?** — The remainder after division.
4. **`**` shorthand for?** — `Math.pow()`.
5. **Safely comparing floats?** — Use an epsilon-based comparison or round via `.toFixed()`.
6. Difficulty: Q1–Q2 Easy, Q3 Medium, Q4–Q5 Hard.

### Comparison {#comparison}
1. **Core `==` vs `===` difference?** — `==` coerces types before comparing; `===` requires matching type and value.
2. **Why `null == undefined` but not `===`?** — A special-cased loose-equality rule; strict equality checks type too.
3. **Why is `NaN === NaN` false?** — By IEEE-754/spec definition, NaN never equals anything, including itself; use `Number.isNaN()`.
4. **What does ESLint's `eqeqeq` enforce?** — Requires `===`/`!==` everywhere, banning `==`/`!=`.
5. **3 surprising `==` results?** — `[] == false`, `0 == "0"`, `null == undefined`.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Logical {#logical}
1. **What does `&&` return if left is falsy?** — The falsy left operand itself, without evaluating the right side.
2. **What does `||` return if left is truthy?** — The truthy left operand, without evaluating the right side.
3. **Why is `name || "Guest"` risky?** — Legitimate falsy values like `""` or `0` get incorrectly overridden.
4. **What do `&&=`,`||=`,`??=` do?** — Conditionally assign based on the left operand's truthiness/nullishness.
5. **Effect of short-circuiting on function calls?** — The right-side function call may never execute if short-circuited, which matters if it has side effects.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Bitwise {#bitwise}
1. **How are numbers treated internally by bitwise ops?** — Converted to 32-bit signed integers, operated on, then converted back.
2. **`>>` vs `>>>` difference?** — `>>` preserves the sign bit; `>>>` fills with zeros regardless of sign.
3. **How do bitwise flags represent multiple booleans?** — Each bit position represents one boolean flag, combined via OR and checked via AND.
4. **`~5` result and why?** — `-6`, since bitwise NOT computes `-(x+1)`.
5. **Real use case for bitwise ops in JS?** — Permission flag systems, color/byte manipulation.
6. Difficulty: Q1–Q2 Easy, Q3 Medium, Q4–Q5 Hard.

### Assignment {#assignment}
1. **What does `a += b` expand to?** — `a = a + b`.
2. **`||=` vs `??=` difference?** — `||=` assigns on any falsy left value; `??=` assigns only on `null`/`undefined`.
3. **Why does `??=` preserve `retries: 0` but `||=` wouldn't?** — `0` is falsy (triggers `||=`) but not nullish (doesn't trigger `??=`).
4. **When were logical assignment operators introduced?** — ES2021.
5. **Are compound operators faster?** — No meaningful performance difference; the benefit is purely conciseness.
6. Difficulty: Q1 Easy, Q2–Q3 Medium, Q4–Q5 Hard.

### Ternary {#ternary}
1. **How does ternary differ from if/else?** — Ternary is an expression that produces a value; if/else is a statement that doesn't.
2. **Why "conditional expression" not "statement"?** — Because it can be used directly wherever a value is expected (assignment, template literal, etc).
3. **When does nesting hurt readability?** — Beyond 1-2 levels, readability drops sharply — prefer if/else or a lookup table.
4. **Does ternary evaluate both branches?** — No, only the taken branch is evaluated.
5. **Example inside a template literal?** — `` `${count} item${count!==1?"s":""}` ``.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### Nullish {#nullish}
1. **Core `??` vs `||` difference?** — `??` triggers fallback only for `null`/`undefined`; `||` triggers for any falsy value.
2. **Why does `0 ?? "default"` return `0`?** — `0` is not `null`/`undefined`, so no fallback occurs.
3. **Which ES version introduced `??`?** — ES2020.
4. **Real bug scenario `||` causes that `??` fixes?** — A volume setting of `0` being incorrectly replaced with a default.
5. **Can `??` mix directly with `&&`/`||`?** — No, without parentheses it's a SyntaxError.
6. Difficulty: Q1–Q2 Easy, Q3 Medium, Q4–Q5 Hard.

### Optional Chaining {#optional-chaining}
1. **What problem does `?.` solve?** — Avoids `TypeError`s when accessing properties on possibly `null`/`undefined` objects.
2. **How does it differ from manual `&&` chains?** — Same safety, far less verbose, and short-circuits the entire remaining chain automatically.
3. **Can `?.` be used for method calls?** — Yes, via `obj.method?.()`, only calling if the method exists.
4. **What does the whole chain evaluate to if a link is nullish?** — `undefined`.
5. **Why pair `?.` with `??`?** — `?.` safely returns `undefined` on missing data; `??` then supplies a meaningful fallback value.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
