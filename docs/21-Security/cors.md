# CORS

> Section: Security · Owner: **Shubham Narware**

## Definition
CORS (Cross-Origin Resource Sharing) is a browser security mechanism that lets a server explicitly declare which other origins are allowed to make requests to it, relaxing the default Same-Origin Policy in a controlled way.

## History
Standardized by the **W3C around 2014** (though implemented earlier), CORS was created to give web applications a safe way to make legitimate cross-origin requests (like a frontend on one domain calling an API on another) without disabling browser security entirely.

## Why CORS Matters
Without it, the Same-Origin Policy would block ALL cross-origin requests, making it impossible for legitimate use cases like a SPA calling a separately-hosted API — CORS lets servers opt in safely, request by request.

## Syntax
```
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type, Authorization
```

## Types (request categories)
| Type | Behavior |
|---|---|
| Simple request | GET/POST with simple headers — sent directly, browser checks response headers |
| Preflighted request | Complex requests (custom headers, PUT/DELETE) — browser sends an `OPTIONS` request first to check permission |
| Credentialed request | Requests including cookies/auth — requires `Access-Control-Allow-Credentials: true` and a specific (not `*`) origin |

## Examples
```js
fetch("https://api.example.com/data", {
  method: "GET",
})
  .then((res) => res.json())
  .then(console.log);
// Browser checks the response's Access-Control-Allow-Origin header
```

## Memory Diagram
```
Frontend: https://myapp.com
API:      https://api.example.com

Browser blocks the response UNLESS api.example.com responds with:
  Access-Control-Allow-Origin: https://myapp.com (or *)
```

## Flowchart
```
JS makes a cross-origin fetch/XHR request
        │
Is it a "complex" request (custom headers, non-simple method)? ──Yes──►
        │                                                  send OPTIONS preflight first
        No                                                          │
        ▼                                                  Server responds with allowed
Request sent directly                                       origins/methods/headers
        │                                                          │
Server's response includes CORS headers                   Preflight approved? ──►
        │                                                  actual request proceeds
Browser checks headers ──► allows or blocks the response from reaching JS
```

## Internal Working
CORS is enforced entirely by the **browser**, not the server — the server always processes the request and can send a response, but if the response's CORS headers don't permit the requesting origin, the browser blocks JavaScript from reading that response (the request may still have "happened" server-side).

## Beginner Example
```js
// This fails in the browser console with a CORS error if api.example.com
// doesn't include the right Access-Control-Allow-Origin header:
fetch("https://api.example.com/users").then((res) => res.json());
```

## Intermediate Example
```js
// Server-side (Express) example enabling CORS for one specific origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://myapp.com");
  next();
});
```

## Advanced Example
```js
// Credentialed CORS request (sending cookies cross-origin)
fetch("https://api.example.com/profile", {
  credentials: "include", // requires server: Access-Control-Allow-Credentials: true
});
```

## Real World Example
```js
// A React app hosted on app.example.com calling api.example.com
// needs the API server to send proper CORS headers, or all fetch()
// calls will fail silently with a CORS error in the console.
```

## Industry Example
```js
// Public APIs (like GitHub's REST API) explicitly configure CORS
// to allow browser-based applications to call them directly from
// any origin, while private/internal APIs restrict it tightly.
```

## Interview Questions
See full list → [interview.md](./interview.md#cors)
1. Is CORS enforced by the browser or the server?
2. What triggers a "preflight" `OPTIONS` request?
3. What's required to send cookies with a cross-origin request?
4. Why can't a server just set `Access-Control-Allow-Origin: *` for credentialed requests?
5. Does CORS prevent the server from processing a disallowed request, or just prevent the browser from exposing the response to JS?

## MCQs
See full list → [mcq.md](./mcq.md#cors)
1. CORS is enforced by: (a) The server, blocking the request entirely (b) **The browser, blocking the response from reaching JS** (c) DNS servers (d) Firewalls only → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#cors)
1. **(Easy)** Explain what response header a server must include to allow a specific frontend origin to fetch its data.
2. **(Medium)** Explain what triggers a CORS preflight request, using a code example with a custom header.
3. **(Hard)** Configure a credentialed CORS request (sending cookies) and describe both the client-side and server-side requirements.

## Assignments
- [ ] Explain, with an example, why `Access-Control-Allow-Origin: *` cannot be combined with `Access-Control-Allow-Credentials: true`.
- [ ] Diagram (in comments) the full flow of a preflighted CORS request from browser to server and back.

## Mini Project
Build a small demo (conceptual, with comments describing server config) of a frontend on one origin successfully fetching data from an API on another origin, correctly configured with CORS headers.

## Common Mistakes
- Assuming CORS is a server-side restriction that blocks requests outright (it's the browser blocking the response from JS).
- Forgetting to include `credentials: "include"` (client) and `Access-Control-Allow-Credentials: true` (server) together for cookie-based requests.
- Overly permissive CORS configuration (`Access-Control-Allow-Origin: *` everywhere) exposing APIs unnecessarily broadly.

## Best Practices
- Restrict `Access-Control-Allow-Origin` to specific, known origins rather than `*` whenever credentials or sensitive data are involved.
- Only enable the specific HTTP methods and headers actually needed, rather than allowing everything.

## Optimization Tips
- Cache preflight `OPTIONS` responses using the `Access-Control-Max-Age` header to reduce the number of preflight round-trips for repeated requests.

## Summary
CORS lets a server explicitly permit specific cross-origin requests from the browser, safely relaxing the Same-Origin Policy — enforced entirely client-side by the browser, with simple, preflighted, and credentialed requests each following slightly different rules.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#cors)

---
[← Security](./security.md) | [Section Home](./README.md) | [CSRF →](./csrf.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
