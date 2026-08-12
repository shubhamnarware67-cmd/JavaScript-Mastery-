# Design Patterns — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### Design Patterns {#design-patterns}
Creational (Singleton, Factory) · Structural (Adapter, Decorator) · Behavioral (Observer, Strategy) · Architectural (MVC, MVVM).

### Singleton {#singleton}
```js
class Singleton {
  static instance;
  constructor() { if (Singleton.instance) return Singleton.instance; Singleton.instance = this; }
}
```
ES Modules are naturally singleton (cached, run once).

### Factory {#factory}
```js
function createShape(type) { /* returns different object shapes */ }
```
Centralizes creation logic; no `new` required.

### Observer {#observer}
```js
class EventEmitter {
  listeners = {};
  on(e, cb) { (this.listeners[e] ??= []).push(cb); }
  emit(e, data) { this.listeners[e]?.forEach(cb => cb(data)); }
}
```

### MVC {#mvc}
Model (data) ↔ Controller (input handling) ↔ View (render). Controller manually updates View.

### MVVM {#mvvm}
Model → ViewModel (reactive properties) → View (auto-binds). No manual render calls needed.

---
[← Section Home](./README.md)
