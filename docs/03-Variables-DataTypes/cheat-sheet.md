# Variables & Data Types — Cheat Sheet

> Owner: **Shubham Narware**

### Variables / var / let / const
| Keyword | Scope | Reassignable | Redeclarable | Hoisted |
|---|---|---|---|---|
| `var` | function | ✅ | ✅ | ✅ (→ `undefined`) |
| `let` | block | ✅ | ❌ | ✅ (TDZ) |
| `const` | block | ❌ | ❌ | ✅ (TDZ) |

- Default to `const`. Use `let` only when reassignment is needed. Avoid `var`.
- TDZ = Temporal Dead Zone — accessing `let`/`const` before declaration throws `ReferenceError`.
- `const obj = {}` → binding locked, but `obj.x = 1` still works (contents mutable).

### Datatype / Primitive
- 7 primitives: `Number, String, Boolean, Undefined, Null, Symbol, BigInt`.
- 1 non-primitive: `Object` (includes arrays, functions, dates).
- `typeof null === "object"` → known historical bug.
- `typeof []` → `"object"` → use `Array.isArray()` to detect arrays.
- Primitives = value semantics (copied). Objects = reference semantics (shared pointer).

### Reference
- `obj2 = obj1` → copies the reference, not the data — both point to the same object.
- `{...obj}` / `[...arr]` → shallow copy (nested objects still shared).
- `structuredClone(obj)` → deep copy (modern, built-in).
- React/Redux: always create new references, never mutate state directly.

---
[← Section Home](./README.md)
