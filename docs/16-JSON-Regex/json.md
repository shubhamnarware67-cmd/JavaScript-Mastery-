# JSON

> Section: JSON & Regex · Owner: **Shubham Narware**

## Definition
JSON (JavaScript Object Notation) is a lightweight, text-based data format for representing structured data, built into JavaScript via the `JSON.stringify()` and `JSON.parse()` methods.

## History
Specified by Douglas Crockford in the **early 2000s** and standardized as ECMA-404, JSON became the dominant data interchange format for web APIs, replacing much of the earlier reliance on XML.

## Why JSON Matters
It's the universal language for exchanging data between a client and server — nearly every REST API request/response body today uses JSON because it's simple, human-readable, and maps directly onto JS objects/arrays.

## Syntax
```js
const json = JSON.stringify({ name: "Shubham", age: 25 });
const obj = JSON.parse(json);
```

## Types (valid JSON values)
| Type | Example |
|---|---|
| String | `"hello"` |
| Number | `42`, `3.14` |
| Boolean | `true`, `false` |
| null | `null` |
| Object | `{ "key": "value" }` |
| Array | `[1, 2, 3]` |

## Examples
```js
const data = { id: 1, name: "Book" };
const jsonStr = JSON.stringify(data);
console.log(jsonStr); // '{"id":1,"name":"Book"}'
```

## Memory Diagram
```
JS Object (in memory)          JSON String (text)
{ id: 1, name: "Book" }  ──stringify──►  '{"id":1,"name":"Book"}'
{ id: 1, name: "Book" }  ◄──parse────    '{"id":1,"name":"Book"}'
```

## Flowchart
```
JS Object
    │
JSON.stringify() ──► JSON string (for sending over network / storage)
    │
Network / localStorage / file
    │
JSON.parse() ──► JS Object again (usable in code)
```

## Internal Working
`JSON.stringify()` skips `undefined`, functions, and Symbols entirely when encountered as object properties (or converts them to `null` inside arrays); `JSON.parse()` optionally accepts a "reviver" function to transform values during parsing.

## Beginner Example
```js
const user = { name: "Alex", age: 30 };
const jsonString = JSON.stringify(user);
console.log(jsonString);
```

## Intermediate Example
```js
const jsonString = '{"name":"Alex","age":30}';
const user = JSON.parse(jsonString);
console.log(user.name); // "Alex"
```

## Advanced Example
```js
const data = { name: "Alex", password: "secret123", age: 30 };
const safeJson = JSON.stringify(data, (key, value) =>
  key === "password" ? undefined : value
);
```

## Real World Example
```js
// Every fetch()-based API call typically ends with response.json(),
// which internally calls JSON.parse() on the response body text.
const res = await fetch("/api/users");
const users = await res.json();
```

## Industry Example
```js
// Config files (package.json, tsconfig.json) and REST API payloads
// across virtually every modern web stack use JSON as the standard format.
```

## Interview Questions
See full list → [interview.md](./interview.md#json)
1. What data types does JSON support, and how does that compare to full JavaScript objects?
2. What happens to `undefined` values and functions when you call `JSON.stringify()` on an object containing them?
3. What is a "replacer" function in `JSON.stringify()`, and what is it used for?
4. What is a "reviver" function in `JSON.parse()`?
5. Why can't JSON represent a `Date` object natively?

## MCQs
See full list → [mcq.md](./mcq.md#json)
1. What does `JSON.stringify({ a: undefined, b: 1 })` produce? (a) `'{"a":undefined,"b":1}'` (b) **`'{"b":1}'`** (c) Throws an error (d) `'null'` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#json)
1. **(Easy)** Convert a JS object to a JSON string and back.
2. **(Medium)** Use a replacer function to exclude a sensitive field when stringifying.
3. **(Hard)** Use a reviver function in `JSON.parse()` to convert ISO date strings back into `Date` objects.

## Assignments
- [ ] Explain why `JSON.stringify(new Date())` produces a string, not a `Date` object when parsed back.
- [ ] Write a function that deep-clones an object using `JSON.parse(JSON.stringify(obj))`, and explain one limitation of this technique.

## Mini Project
Build a small "Settings Exporter": serialize a settings object to JSON, let the user download it, then re-import and parse it back into the app's state.

## Common Mistakes
- Assuming `JSON.parse(JSON.stringify(obj))` is a perfect deep clone (it loses functions, `undefined`, `Date` objects become strings, etc.).
- Forgetting `JSON.stringify()` throws on circular references.
- Not handling `JSON.parse()` errors when parsing untrusted or malformed strings.

## Best Practices
- Always wrap `JSON.parse()` in a `try...catch` when parsing data from an external or untrusted source.
- Use a replacer function to strip sensitive fields (like passwords) before sending or logging JSON.

## Optimization Tips
- For very large objects, consider streaming JSON parsers/serializers instead of `JSON.parse`/`stringify`, which process the entire string in memory at once.

## Summary
JSON is the standard lightweight text format for structured data exchange, converted to/from JS objects via `JSON.stringify()` and `JSON.parse()` — simple and universal, but limited to a small set of data types and unable to represent functions, `undefined`, or native `Date`/`Map`/`Set` objects directly.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#json)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [Regex →](./regex.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
