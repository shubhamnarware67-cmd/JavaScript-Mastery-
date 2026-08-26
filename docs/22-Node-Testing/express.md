# Express

> Section: Node & Testing · Owner: **Shubham Narware**

## Definition
Express is a minimal, unopinionated web framework for Node.js that simplifies building HTTP servers and APIs through routing, middleware, and request/response helpers.

## History
Released in **2010**, Express quickly became the de-facto standard Node.js web framework due to its simplicity and flexibility, and remains one of the most widely used backend frameworks in the JavaScript ecosystem today.

## Why Express Matters
It removes the boilerplate of Node's raw `http` module — routing, parsing request bodies, and handling different HTTP methods become simple, declarative code instead of manual URL/method checks.

## Syntax
```js
const express = require("express");
const app = express();

app.get("/users", (req, res) => res.json({ users: [] }));
app.listen(3000);
```

## Types (core concepts)
| Concept | Purpose |
|---|---|
| Routes | Map HTTP method + path to a handler function |
| Middleware | Functions that run before the route handler (auth, logging, parsing) |
| `req`/`res` objects | Represent the incoming request and outgoing response |
| Routers | Group related routes into modular, mountable sub-applications |

## Examples
```js
app.use(express.json()); // middleware: parses JSON request bodies
app.post("/users", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ name });
});
```

## Memory Diagram
```
Incoming Request
     │
Middleware 1 (e.g. logging) ──► calls next()
     │
Middleware 2 (e.g. auth check) ──► calls next()
     │
Matching Route Handler ──► sends response
```

## Flowchart
```
Request arrives at the server
        │
Express checks middleware stack in order (top to bottom)
        │
Each middleware either modifies req/res and calls next(), or ends the response
        │
Request reaches the matching route (method + path)
        │
Route handler processes it and sends a response
```

## Internal Working
Express processes requests through a **middleware pipeline** — each middleware function receives `(req, res, next)` and must call `next()` to pass control to the next middleware/route, or the request will hang; error-handling middleware (with a 4-argument signature `(err, req, res, next)`) is specially recognized by Express to catch errors thrown anywhere in the pipeline.

## Beginner Example
```js
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello World"));
app.listen(3000, () => console.log("Server running"));
```

## Intermediate Example
```js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(logger);
app.get("/api/data", (req, res) => res.json({ data: "value" }));
```

## Advanced Example
```js
const router = express.Router();
router.get("/:id", (req, res) => res.json({ id: req.params.id }));
app.use("/users", router); // mounts routes under /users/:id

// Centralized error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```

## Real World Example
```js
// A typical REST API built with Express separates concerns using
// routers per resource (users.js, orders.js) and shared middleware
// for authentication, logging, and error handling.
```

## Industry Example
```js
// Countless production Node.js backends — from small startups to
// large enterprises — use Express (or frameworks built on top of it,
// like NestJS) as their core HTTP framework.
```

## Interview Questions
See full list → [interview.md](./interview.md#express)
1. What is middleware in Express, and why must it call `next()`?
2. How does Express distinguish regular middleware from error-handling middleware?
3. What's the purpose of `express.Router()`, and how does it help organize larger applications?
4. How would you structure routes for a REST API with multiple resources (users, orders, products)?
5. What happens if a middleware function never calls `next()` or sends a response?

## MCQs
See full list → [mcq.md](./mcq.md#express)
1. Error-handling middleware in Express is identified by having how many parameters? (a) 2 (b) 3 (c) **4** (d) Any number → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#express)
1. **(Easy)** Build a basic Express server with a `GET /` route returning JSON.
2. **(Medium)** Write a logging middleware that logs every request's method and URL before passing control onward.
3. **(Hard)** Build a small REST API with `express.Router()` for a `/products` resource supporting GET, POST, and DELETE.

## Assignments
- [ ] Explain, with an example, what happens if middleware forgets to call `next()`.
- [ ] Structure a mini Express app with separate router files for two different resources.

## Mini Project
Build a small "Task API": an Express server with routes for creating, listing, and deleting tasks stored in memory, using middleware for JSON parsing and basic request logging.

## Common Mistakes
- Forgetting to call `next()` in middleware, causing requests to hang indefinitely.
- Placing route handlers before required middleware (like `express.json()`), causing `req.body` to be `undefined`.
- Not centralizing error handling, leading to repeated try/catch boilerplate in every route.

## Best Practices
- Organize routes into separate router files per resource for maintainability as the app grows.
- Use a single centralized error-handling middleware at the end of the middleware stack.

## Optimization Tips
- Apply middleware selectively (e.g., only on routes that need authentication) rather than globally, to avoid unnecessary processing on every request.

## Summary
Express simplifies building Node.js web servers and APIs through a middleware pipeline and declarative routing, remaining one of the most widely used backend frameworks in the JavaScript ecosystem for its simplicity and flexibility.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#express)

---
[← Node.js](./nodejs.md) | [Section Home](./README.md) | [Testing →](./testing.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
