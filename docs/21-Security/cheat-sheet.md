# Security — Cheat Sheet

> Owner: **Shubham Narware** · Status: ✅ Complete

### Security {#security}
Same-Origin Policy (default isolation) + CORS (opt-in cross-origin) + CSP (restrict scripts). Always prefer `textContent` over `innerHTML` for untrusted data.

### CORS {#cors}
```
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Credentials: true (needs specific origin, not *)
```
Enforced by browser. Preflight via OPTIONS for complex requests.

### CSRF {#csrf}
```js
fetch(url, { headers: { "X-CSRF-Token": token } });
// Set-Cookie: sessionId=...; SameSite=Strict; Secure; HttpOnly
```
Defenses: CSRF tokens + SameSite cookies.

### XSS {#xss}
```js
element.textContent = userInput; // safe
element.innerHTML = DOMPurify.sanitize(userInput); // safe if rich HTML needed
```
Types: Stored, Reflected, DOM-based.

---
[← Section Home](./README.md)
