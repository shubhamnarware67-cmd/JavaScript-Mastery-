# Cookies

> Section: Browser Storage · Owner: **Shubham Narware**

## Definition
Cookies are small pieces of key-value data stored by the browser and automatically sent to the server with every matching HTTP request, originally designed to give the stateless HTTP protocol a sense of "memory."

## History
Invented by Netscape engineer Lou Montulli in **1994**, cookies were the very first client-side storage mechanism in the web, predating `localStorage`/`sessionStorage` by 15 years.

## Why Cookies Matter
They remain the standard way to handle server-side session identification (like login sessions), since — unlike `localStorage` — they're automatically included in every HTTP request to the matching domain.

## Syntax
```js
document.cookie = "username=Shubham; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";
console.log(document.cookie); // "username=Shubham; other=value"
```

## Types (attributes)
| Attribute | Purpose |
|---|---|
| `expires` / `max-age` | Set expiration (omit for session-only cookie) |
| `path` | Restrict cookie to a URL path |
| `domain` | Restrict/share cookie across subdomains |
| `Secure` | Only sent over HTTPS |
| `HttpOnly` | Not accessible via JavaScript (server-set only) |
| `SameSite` | Controls cross-site request behavior (`Strict`, `Lax`, `None`) |

## Examples
```js
document.cookie = "theme=dark; max-age=31536000; path=/";
```

## Memory Diagram
```
Browser cookie jar (per domain):
  { theme: "dark", sessionId: "abc123" }
        │
Automatically attached to every matching HTTP request's headers
```

## Flowchart
```
document.cookie = "key=value; attributes"
        │
Browser stores cookie according to path/domain/expiry rules
        │
Every subsequent request to matching domain+path
        │
Cookie automatically included in the request's Cookie header
```

## Internal Working
Unlike `localStorage`/`sessionStorage`, cookies are limited to about **4KB** each and are sent with **every** matching HTTP request — including images and scripts — which is why storing large data in cookies hurts performance; `HttpOnly` cookies also can't be read via `document.cookie`, protecting them from XSS.

## Beginner Example
```js
document.cookie = "username=Shubham";
console.log(document.cookie);
```

## Intermediate Example
```js
function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}
```

## Advanced Example
```js
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; Secure; SameSite=Lax`;
}
```

## Real World Example
```js
// Login session cookies (typically HttpOnly, set by the server)
// let the backend recognize a logged-in user on every request
// without the client needing to manually attach a token.
```

## Industry Example
```js
// Almost every website uses a cookie-consent banner because cookies
// (especially third-party tracking cookies) are regulated by privacy
// laws like GDPR and the ePrivacy Directive.
```

## Interview Questions
See full list → [interview.md](./interview.md#cookies)
1. Why are cookies automatically sent with every HTTP request, unlike `localStorage`?
2. What does the `HttpOnly` flag do, and why is it a security best practice for session cookies?
3. What's the approximate size limit of a single cookie?
4. What is the purpose of the `SameSite` attribute, and what do `Strict`, `Lax`, and `None` mean?
5. How would you delete a cookie using JavaScript?

## MCQs
See full list → [mcq.md](./mcq.md#cookies)
1. Which cookie attribute prevents JavaScript from reading it via `document.cookie`? (a) `Secure` (b) **`HttpOnly`** (c) `SameSite` (d) `path` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#cookies)
1. **(Easy)** Set a cookie with a name, value, and expiration date.
2. **(Medium)** Write a `getCookie(name)` helper function that parses `document.cookie`.
3. **(Hard)** Write a `deleteCookie(name)` function (hint: set `expires` to a past date).

## Assignments
- [ ] Explain why sensitive session tokens should use `HttpOnly` and `Secure` flags.
- [ ] Compare cookies vs `localStorage`: which is automatically sent to the server, and why does that matter for performance?

## Mini Project
Build a small "Cookie Consent Banner" that sets a `cookieConsent=true` cookie with a 1-year expiration when accepted, and checks for it on page load to decide whether to show the banner again.

## Common Mistakes
- Storing large amounts of data in cookies, unnecessarily bloating every HTTP request.
- Forgetting to set the `path` attribute, causing a cookie to be scoped more narrowly than intended.
- Not setting `Secure`/`HttpOnly` on sensitive cookies, exposing them to interception or XSS.

## Best Practices
- Use `HttpOnly` and `Secure` for any cookie holding session/authentication data.
- Set `SameSite=Lax` or `Strict` by default to reduce CSRF risk, using `None` only when cross-site cookies are genuinely required (and always with `Secure`).

## Optimization Tips
- Keep cookies small and few in number, since every one is sent with every matching request, adding to request overhead — use `localStorage`/`sessionStorage` for client-only data instead.

## Summary
Cookies are the oldest browser storage mechanism, automatically attached to every matching HTTP request, making them ideal for server-recognized session data (especially with `HttpOnly`/`Secure`/`SameSite` protections) but a poor choice for large or purely client-side data.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#cookies)

---
[← SessionStorage](./sessionstorage.md) | [Section Home](./README.md) | [IndexedDB →](./indexeddb.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
