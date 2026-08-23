# JSON & Regex — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### JSON {#json}
1. **What data types does JSON support?** String, number, boolean, null, object, array — no functions, `undefined`, or Symbols.
2. **What happens to `undefined` values when you call `JSON.stringify()`?** They're dropped entirely from objects (or converted to `null` inside arrays).
3. **What is a "replacer" function in `JSON.stringify()`?** A function passed as the second argument to filter or transform values during serialization (e.g., excluding sensitive fields).
4. **What is a "reviver" function in `JSON.parse()`?** A function that transforms values during parsing, useful for converting date strings back into `Date` objects.
5. **Why can't JSON represent a `Date` object natively?** JSON only supports its 6 basic types; `Date` objects are serialized as ISO date strings instead.

### Regex {#regex}
1. **What's the difference between `.test()`, `.exec()`, and `String.prototype.match()`?** `.test()` returns a boolean; `.exec()` returns match details (and maintains state with the `g` flag); `.match()` on strings returns matches or `null`.
2. **What does the `g` flag do with `.exec()` in a loop?** It maintains `lastIndex` state between calls, letting repeated `.exec()` calls step through successive matches.
3. **What is a "capture group," and how do named groups help?** Parentheses `()` capture matched substrings; named groups `(?<name>...)` let you access them by name instead of index.
4. **What is "catastrophic backtracking"?** A performance/security issue where certain regex patterns with nested quantifiers cause exponential-time matching on certain inputs (ReDoS).
5. **How would you escape special regex characters in a dynamically-built pattern?** Escape characters like `.`, `*`, `$` with a backslash, or use a helper function/library to sanitize user input before building a `RegExp`.

---
[← Section Home](./README.md)
