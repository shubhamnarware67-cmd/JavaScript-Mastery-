# Arrays — MCQs

> Owner: **Shubham Narware**

### Arrays {#arrays}
1. `new Array(3)` creates: (a) `[3]` (b) **An empty array, length 3** (c) An error (d) `[0,0,0]` — *Correct: (b).*
2. `Array.isArray([])` returns: (a) false (b) **true** (c) "object" (d) undefined — *Correct: (b).*
3. Arrays are: (a) Primitives (b) **Reference types** (c) Strings (d) Functions — *Correct: (b).*

### Map {#map}
1. `[1,2,3].map(n => n*2)` returns: (a) `[1,2,3]` (b) **`[2,4,6]`** (c) 6 (d) undefined — *Correct: (b).*
2. `map()` mutates the original array: (a) True (b) **False** (c) Only for numbers (d) Only with arrow functions — *Correct: (b).*
3. `map()`'s returned array length compared to the original: (a) Always shorter (b) **Always the same** (c) Always longer (d) Random — *Correct: (b).*

### Filter {#filter}
1. `[1,2,3,4].filter(n => n > 2)` returns: (a) `[1,2]` (b) **`[3,4]`** (c) 2 (d) `[1,2,3,4]` — *Correct: (b).*
2. `filter()` keeps elements where the callback returns: (a) false (b) **Truthy** (c) undefined (d) A string — *Correct: (b).*
3. `filter()` vs `find()`: `find()` returns: (a) All matches (b) **Only the first match** (c) A boolean (d) Nothing — *Correct: (b).*

### Reduce {#reduce}
1. `[1,2,3].reduce((acc,n)=>acc+n, 10)` returns: (a) 6 (b) **16** (c) 10 (d) undefined — *Correct: (b).*
2. Omitting `initialValue` in `reduce()` on an empty array: (a) Returns undefined (b) **Throws a TypeError** (c) Returns 0 (d) Returns null — *Correct: (b).*
3. `reduce()` can be used to implement: (a) Only sums (b) **map, filter, and forEach-like behavior** (c) Nothing else (d) Only string operations — *Correct: (b).*

### Sort {#sort}
1. `[40,5,200].sort()` (no compare fn): (a) `[5,40,200]` (b) **`[200,40,5]`** (c) Error (d) `[5,200,40]` — *Correct: (b).*
2. `sort()` mutates the original array: (a) False (b) **True** (c) Only with compare fn (d) Only for strings — *Correct: (b).*
3. A compare function returning a negative number means: (a) b comes first (b) **a comes first** (c) Equal (d) Error — *Correct: (b).*

### Splice {#splice}
1. `splice()` returns: (a) The modified array (b) **An array of removed elements** (c) undefined (d) true — *Correct: (b).*
2. `arr.splice(2, 0, "x")` does what? (a) Removes 2 elements (b) **Inserts "x" at index 2 without removing** (c) Replaces index 2 (d) Nothing — *Correct: (b).*
3. `splice()` mutates the original array: (a) False (b) **True** (c) Only sometimes (d) Only with negative index — *Correct: (b).*

### Slice {#slice}
1. `[10,20,30,40].slice(1,3)` returns: (a) `[10,20,30]` (b) **`[20,30]`** (c) `[20,30,40]` (d) `[10,40]` — *Correct: (b).*
2. `slice()` mutates the original array: (a) True (b) **False** (c) Only with negative index (d) Only for strings — *Correct: (b).*
3. `slice(-2)` returns: (a) The first 2 elements (b) **The last 2 elements** (c) An empty array (d) An error — *Correct: (b).*

---
[← Section Home](./README.md)
