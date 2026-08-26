# Node & Testing — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### Node.js {#nodejs}
```js
const http = require("http");
http.createServer((req, res) => res.end("Hi")).listen(3000);
```
V8 + libuv = event loop + non-blocking I/O.

### Express {#express}
```js
const app = express();
app.use(express.json());
app.get("/x", (req, res) => res.json({}));
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));
```

### Testing {#testing}
Unit (many, fast) → Integration (some) → E2E (few, slow). Mock external dependencies.

### Jest {#jest}
```js
test("desc", () => expect(actual).toBe(expected));
jest.mock("./module");
```
`.toBe()` primitives, `.toEqual()` objects/arrays.

### Chrome DevTools {#chrome-devtools}
Panels: Elements, Console, Sources (breakpoints), Network (waterfall), Memory (heap snapshots), Performance (flame chart).

---
[← Section Home](./README.md)
