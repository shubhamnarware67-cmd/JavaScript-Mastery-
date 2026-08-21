# Operators — MCQs

> Owner: **Shubham Narware**

### Operators {#operators}
1. Which belongs to the "nullish/optional" category? (a) Arithmetic (b) **`??`** (c) Bitwise (d) Assignment — *Correct: (b).*
2. `**` was introduced in: (a) ES5 (b) **ES2016** (c) ES2020 (d) ES2021 — *Correct: (b).*
3. Ternary operator takes how many operands? (a) 1 (b) 2 (c) **3** (d) 4 — *Correct: (c).*

### Arithmetic {#arithmetic}
1. `2 ** 3` evaluates to: (a) 6 (b) **8** (c) 9 (d) 5 — *Correct: (b).*
2. `"5" + 3` evaluates to: (a) 8 (b) **"53"** (c) 53 (d) Error — *Correct: (b).*
3. `10 % 3` evaluates to: (a) 3 (b) 3.33 (c) **1** (d) 0 — *Correct: (c).*

### Comparison {#comparison}
1. `"5" == 5` evaluates to: (a) false (b) **true** (c) undefined (d) throws — *Correct: (b).*
2. `NaN === NaN` evaluates to: (a) true (b) **false** (c) undefined (d) throws — *Correct: (b).*
3. `null === undefined` evaluates to: (a) true (b) **false** (c) undefined (d) throws — *Correct: (b).*

### Logical {#logical}
1. `0 && "hello"` evaluates to: (a) "hello" (b) **0** (c) true (d) false — *Correct: (b).*
2. `"" || "default"` evaluates to: (a) "" (b) **"default"** (c) undefined (d) false — *Correct: (b).*
3. `!true` evaluates to: (a) true (b) **false** (c) 0 (d) undefined — *Correct: (b).*

### Bitwise {#bitwise}
1. `5 & 1` evaluates to: (a) 0 (b) **1** (c) 5 (d) 6 — *Correct: (b).*
2. `1 << 3` evaluates to: (a) 3 (b) **8** (c) 4 (d) 6 — *Correct: (b).*
3. `>>>` differs from `>>` by: (a) Being faster (b) **Always filling with zeros regardless of sign** (c) Working only on strings (d) Being deprecated — *Correct: (b).*

### Assignment {#assignment}
1. `x = 5; x **= 2;` results in x = : (a) 7 (b) 10 (c) **25** (d) 32 — *Correct: (c).*
2. `??=` assigns only when the left side is: (a) Falsy (b) **null or undefined** (c) Zero (d) A string — *Correct: (b).*
3. Logical assignment operators were introduced in: (a) ES2015 (b) ES2020 (c) **ES2021** (d) ES2022 — *Correct: (c).*

### Ternary {#ternary}
1. In `a ? b : c`, if `a` is falsy, result is: (a) a (b) b (c) **c** (d) undefined — *Correct: (c).*
2. The ternary operator is best described as a: (a) Statement (b) **Expression** (c) Loop (d) Declaration — *Correct: (b).*
3. How many branches of a ternary are evaluated? (a) 0 (b) **1** (c) 2 (d) 3 — *Correct: (b).*

### Nullish {#nullish}
1. `false ?? "default"` evaluates to: (a) "default" (b) **false** (c) true (d) undefined — *Correct: (b).*
2. `??` was introduced in: (a) ES2015 (b) ES2018 (c) **ES2020** (d) ES2022 — *Correct: (c).*
3. `null ?? "x"` evaluates to: (a) null (b) **"x"** (c) undefined (d) false — *Correct: (b).*

### Optional Chaining {#optional-chaining}
1. `const a = {}; a.b?.c` evaluates to: (a) throws (b) **undefined** (c) null (d) 0 — *Correct: (b).*
2. `?.` was introduced in: (a) ES2015 (b) ES2018 (c) **ES2020** (d) ES2022 — *Correct: (c).*
3. Safe method call syntax is: (a) `obj.method!()` (b) **`obj.method?.()`** (c) `obj?method()` (d) `obj??method()` — *Correct: (b).*

---
[← Section Home](./README.md)
