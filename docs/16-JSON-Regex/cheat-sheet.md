# JSON & Regex — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### JSON {#json}
```js
JSON.stringify(obj, replacerFn, indent);
JSON.parse(str, reviverFn);
```
Supports: string, number, boolean, null, object, array. Drops `undefined`/functions.

### Regex {#regex}
```js
/pattern/flags
regex.test(str)      // boolean
regex.exec(str)      // match details
str.match(regex)      // matches or null
str.replace(regex, replacement)
```
Flags: `i` case-insensitive, `g` global, `m` multiline. `(?<name>...)` named groups.

---
[← Section Home](./README.md)
