# Security

> Section: Security · Owner: **Shubham Narware**

## Definition
JavaScript security covers the practices and defenses that protect web applications from common client-side vulnerabilities — including XSS, CSRF, and improper cross-origin data access.

## History
Web security concerns grew alongside JavaScript's increasing power — early 2000s attacks like XSS and CSRF drove the creation of browser-level protections (Same-Origin Policy, CSP, CORS) and framework-level safeguards that are standard today.

## Why Security Matters
A single unpatched vulnerability — like unsanitized user input rendered as HTML — can let attackers steal session cookies, impersonate users, or execute arbitrary code in victims' browsers.

## Syntax
```js
// Example: sanitizing before inserting user content
element.textContent = userInput; // safe — no HTML parsing
// vs
element.innerHTML = userInput;   // dangerous if userInput isn't sanitized
```

## Types (core web security concerns)
| Concern | Focus |
|---|---|
| XSS (Cross-Site Scripting) | Malicious scripts injected into a trusted page |
| CSRF (Cross-Site Request Forgery) | Tricking a user's browser into making unwanted authenticated requests |
| CORS (Cross-Origin Resource Sharing) | Controlling which origins can access a server's resources |
| Same-Origin Policy | Browser's default restriction on cross-origin script access |

## Examples
```js
// Content Security Policy header (set server-side) restricts script sources
// Content-Security-Policy: script-src 'self'
```

## Memory Diagram
```
Browser Security Model:
  Same-Origin Policy ──► default isolation between origins
  CORS               ──► explicit opt-in for cross-origin access
  CSP                ──► restricts what scripts/resources can run
```

## Flowchart
```
User input or third-party data enters the application
        │
Is it rendered as HTML/executed as script anywhere? ──Yes──► sanitize/escape it
        │
Is a request sent with user credentials to another origin? ──► verify CSRF protections
        │
Is data fetched from another origin? ──► verify CORS policy allows it safely
```

## Internal Working
Modern browsers enforce security through layered defenses — the Same-Origin Policy restricts script access by default, CORS headers let servers explicitly relax that restriction for trusted origins, and Content Security Policy (CSP) headers further restrict what kinds of scripts/resources a page is allowed to load or execute, even from its own origin.

## Beginner Example
```js
// Never trust user input rendered as HTML
const safe = document.createElement("div");
safe.textContent = userComment; // escapes any HTML automatically
```

## Intermediate Example
```js
// Setting a CSRF token in a form to validate requests server-side
fetch("/api/transfer", {
  method: "POST",
  headers: { "X-CSRF-Token": csrfToken },
  body: JSON.stringify(data),
});
```

## Advanced Example
```js
// Restricting cookies to prevent CSRF via SameSite
// Set-Cookie: sessionId=abc123; SameSite=Strict; Secure; HttpOnly
```

## Real World Example
```js
// Login forms commonly embed a hidden CSRF token that must match
// a server-side session value, preventing forged cross-site submissions.
```

## Industry Example
```js
// Every major framework (React, Angular, Vue) auto-escapes template
// output by default specifically to prevent accidental XSS vulnerabilities.
```

## Interview Questions
See full list → [interview.md](./interview.md#security)
1. What is the Same-Origin Policy, and what problem does it solve?
2. How does CORS relax the Same-Origin Policy safely?
3. What's the difference between XSS and CSRF?
4. Why is `textContent` safer than `innerHTML` for untrusted input?
5. What role does a Content Security Policy (CSP) header play in defense-in-depth?

## MCQs
See full list → [mcq.md](./mcq.md#security)
1. Which browser policy restricts scripts from one origin accessing another by default? (a) CORS (b) CSP (c) **Same-Origin Policy** (d) HTTPS → **Answer: (c)**

## Coding Questions
See full list → [practice.md](./practice.md#security)
1. **(Easy)** Rewrite an `innerHTML` assignment of user input to use `textContent` instead.
2. **(Medium)** Explain, with a code example, how a CSRF token is included in a form submission and validated.
3. **(Hard)** Draft a basic Content-Security-Policy header configuration for a page that only loads scripts from its own origin.

## Assignments
- [ ] Explain, in your own words, why the Same-Origin Policy alone isn't enough and why CORS/CSP/CSRF tokens are also needed.
- [ ] Identify one place in a personal project where user input is rendered, and verify it's properly escaped.

## Mini Project
Build a small "Comment Box" demo that safely renders user-submitted comments using `textContent`, and show (in comments) what would go wrong if `innerHTML` were used instead with malicious input.

## Common Mistakes
- Using `innerHTML` with unsanitized user input, opening the door to XSS.
- Assuming HTTPS alone protects against all client-side vulnerabilities.
- Not setting `SameSite`/`Secure`/`HttpOnly` on sensitive cookies, weakening CSRF/XSS defenses.

## Best Practices
- Default to `textContent` (or a trusted sanitization library) over `innerHTML` for any user-generated content.
- Layer defenses: CSP, CORS, CSRF tokens, and secure cookie flags together rather than relying on just one.

## Optimization Tips
- Security measures like CSP and input sanitization have negligible performance cost compared to the risk of an exploited vulnerability — never skip them for "performance."

## Summary
JavaScript security spans multiple layers of browser and server defenses — Same-Origin Policy, CORS, CSP, and CSRF protections — working together to prevent common attacks like XSS and forged cross-site requests, with careful handling of user input being the most fundamental line of defense.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#security)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [CORS →](./cors.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
