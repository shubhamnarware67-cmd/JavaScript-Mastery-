# Arrays — Cheat Sheet

> Owner: **Shubham Narware**

### Creation
```js
[1,2,3]                 // literal
Array.of(7)              // [7]
new Array(7)              // empty array, length 7
Array.from("abc")          // ["a","b","c"]
```

### The Big Methods
| Method | Mutates? | Returns |
|---|---|---|
| `map(fn)` | ❌ | New array, same length |
| `filter(fn)` | ❌ | New array, possibly shorter |
| `reduce(fn, init)` | ❌ | Single accumulated value |
| `sort(fn)` | **✅** | Same array, reordered |
| `splice(start, del, ...items)` | **✅** | Array of removed elements |
| `slice(start, end)` | ❌ | New (shallow-copied) sub-array |

### Key Gotchas
- `sort()` without a compare fn sorts as STRINGS — always pass `(a,b)=>a-b` for numbers.
- `slice()` end index is EXCLUSIVE.
- `slice()`/`map()`/`filter()` make shallow copies — nested objects are still shared.
- `splice()` mutates; `slice()` does not — easy to mix up due to similar names.

### Quick Reference
```js
arr.push(x); arr.pop();          // end
arr.unshift(x); arr.shift();      // start
arr.splice(i, 1);                  // remove at index i
arr.slice(i, j);                    // extract i..j-1 (new array)
[...arr].sort((a,b) => a-b);         // sort a COPY, ascending
```

---
[← Section Home](./README.md)
