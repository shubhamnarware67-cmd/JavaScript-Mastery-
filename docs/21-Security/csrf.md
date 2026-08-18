# CSRF

> Section: Security · Owner: **Shubham Narware**

## Definition
CSRF (Cross-Site Request Forgery) is an attack that tricks a logged-in user's browser into unknowingly sending an authenticated request to a site — exploiting the fact that cookies are sent automatically with matching requests.

## History
CSRF has been a known web vulnerability since the **early 2000s**, formally documented as one of the OWASP Top 10 web application security risks, driving the adoption of CSRF tokens and the `SameSite` cookie attribute as standard defenses.

## Why CSRF Matters
Without protection, a malicious website could silently trigger actions (like transferring money or changing an email) on a site where the victim is already logged in, simply by getting their browser to send a request there.

## Syntax
```html
<!-- A malicious page could include a hidden auto-submitting form -->
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="amount" value="1000" />
  <input type="hidden" name="to" value="attacker" />
</form>
<script>document.forms[0].submit();</script>
```

## Types (common defenses)
| Defense | How it works |
|---|---|
| CSRF tokens | A unique, unpredictable token embedded in forms/requests, validated server-side |
| `SameSite` cookies | Restricts when cookies are sent with cross-site requests |
| Checking `Origin`/`Referer` headers | Server verifies the request actually came from its own frontend |
| Requiring re-authentication | For highly sensitive actions (e.g., changing a password) |

## Examples
```js
// Server generates a token, embeds it in the form
// Client submits it back with the request
fetch("/api/transfer", {
  method: "POST",
  headers: { "X-CSRF-Token": csrfToken },
  body: JSON.stringify({ amount: 100 }),
});
```

## Memory Diagram
```
Victim is logged into bank.com (has a valid session cookie)
        │
Victim visits malicious-site.com in another tab
        │
malicious-site.com auto-submits a form to bank.com
        │
Browser AUTOMATICALLY attaches bank.com's cookies to that request
        │
Without CSRF protection: bank.com processes it as if the victim intended it
```

## Flowchart
```
Request arrives at the server with valid session cookies
        │
Does it include a valid, matching CSRF token? ──No──► reject the request
        │ Yes
        ▼
Is the SameSite cookie policy satisfied (request not blocked already)? 
        │ Yes
        ▼
Process the request as legitimate
```

## Internal Working
CSRF exploits the browser's automatic cookie-attachment behavior — since cookies are sent with every matching-domain request regardless of which page initiated it, a server must verify something the attacker's page *couldn't* have known or reproduced, like a per-session CSRF token or a strict `SameSite` cookie policy.

## Beginner Example
```js
// Client includes the server-issued CSRF token with state-changing requests
const token = document.querySelector('meta[name="csrf-token"]').content;
fetch("/api/update-profile", {
  method: "POST",
  headers: { "X-CSRF-Token": token },
});
```

## Intermediate Example
```js
// Setting SameSite=Strict prevents the cookie from being sent
// on cross-site requests entirely, blocking most CSRF vectors
// Set-Cookie: sessionId=abc123; SameSite=Strict; Secure; HttpOnly
```

## Advanced Example
```js
// Server-side double-submit cookie pattern (conceptual)
// 1. Server sets a random token as a readable cookie
// 2. Client JS reads that cookie and sends it as a custom header
// 3. Server verifies the header value matches the cookie value
// (An attacker's page can't read the victim's cookie due to Same-Origin Policy)
```

## Real World Example
```js
// Every banking or e-commerce checkout form includes a hidden
// CSRF token field precisely to prevent forged transfer/purchase requests.
```

## Industry Example
```js
// Frameworks like Django, Rails, and Express (with csurf middleware)
// provide built-in CSRF token generation and validation out of the box.
```

## Interview Questions
See full list → [interview.md](./interview.md#csrf)
1. Why does CSRF specifically exploit cookies rather than, say, `localStorage`-based tokens?
2. How does a CSRF token prevent a forged request from succeeding?
3. How does `SameSite=Strict` help mitigate CSRF?
4. What is the "double-submit cookie" pattern?
5. Why isn't checking the `Referer` header alone considered a complete CSRF defense?

## MCQs
See full list → [mcq.md](./mcq.md#csrf)
1. CSRF attacks specifically exploit: (a) SQL injection (b) **The browser automatically attaching cookies to requests** (c) Weak passwords (d) DNS spoofing → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#csrf)
1. **(Easy)** Explain, with an example, how a CSRF token is generated, embedded, and validated.
2. **(Medium)** Explain how `SameSite=Strict` vs `SameSite=Lax` cookies differ in CSRF protection.
3. **(Hard)** Describe (in comments/pseudocode) the double-submit cookie CSRF defense pattern step by step.

## Assignments
- [ ] Explain why storing auth tokens in `localStorage` (instead of cookies) sidesteps traditional CSRF, and what new risk it introduces instead (XSS-based token theft).
- [ ] Write an example form submission and explain exactly where a CSRF token would need to be added and validated.

## Mini Project
Build a small conceptual demo (with comments describing server-side validation) of a form that includes and validates a CSRF token before processing a "transfer funds" action.

## Common Mistakes
- Relying only on checking the `Referer`/`Origin` header without a proper CSRF token, since these headers can sometimes be stripped or spoofed in certain scenarios.
- Not setting `SameSite` on session cookies at all, leaving them vulnerable to cross-site sending by default in older browsers.
- Using predictable or reused CSRF tokens instead of cryptographically random, per-session (or per-request) tokens.

## Best Practices
- Combine CSRF tokens with `SameSite=Strict` or `Lax` cookies for layered protection.
- Require CSRF tokens on all state-changing requests (POST/PUT/DELETE), not just sensitive ones.

## Optimization Tips
- Generate and validate CSRF tokens efficiently server-side (e.g., HMAC-based tokens) to avoid unnecessary database lookups on every request.

## Summary
CSRF tricks a victim's browser into sending unwanted authenticated requests by exploiting automatic cookie attachment — defended against primarily with CSRF tokens and `SameSite` cookie policies, since the Same-Origin Policy alone doesn't prevent a malicious page from *triggering* a request, only from *reading* its response.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#csrf)

---
[← CORS](./cors.md) | [Section Home](./README.md) | [XSS →](./xss.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
