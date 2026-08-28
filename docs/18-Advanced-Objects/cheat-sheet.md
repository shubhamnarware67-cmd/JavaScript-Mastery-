# Advanced Objects — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### WeakMap {#weakmap}
```js
const wm = new WeakMap();
wm.set(obj, value); wm.get(obj); wm.has(obj); wm.delete(obj);
```
Object keys only. Not iterable. Auto-GC'd with key.

### WeakSet {#weakset}
```js
const ws = new WeakSet();
ws.add(obj); ws.has(obj); ws.delete(obj);
```
Objects only. Not iterable.

### Proxy {#proxy}
```js
new Proxy(target, { get(t, p) {}, set(t, p, v) {}, has(t, p) {}, deleteProperty(t, p) {} })
```

### Reflect {#reflect}
```js
Reflect.get(obj, prop); Reflect.set(obj, prop, val);
Reflect.has(obj, prop); Reflect.deleteProperty(obj, prop);
```
Use inside `Proxy` traps for correct default behavior.

---
[← Section Home](./README.md)
