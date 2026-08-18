# Security — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### Security {#security}
1. **What is the Same-Origin Policy, and what problem does it solve?** A browser default restricting scripts from one origin accessing another's data, preventing malicious cross-origin data access.
2. **How does CORS relax the Same-Origin Policy safely?** By letting servers explicitly declare which origins may access their resources via response headers.
3. **What's the difference between XSS and CSRF?** XSS injects malicious scripts into a trusted page; CSRF forges requests using a victim's existing authenticated session.
4. **Why is `textContent` safer than `innerHTML` for untrusted input?** It never parses the string as HTML, so injected markup/scripts can't execute.
5. **What role does CSP play in defense-in-depth?** It restricts what scripts/resources a page can load or execute, mitigating XSS even if some sanitization is missed.

### CORS {#cors}
1. **Is CORS enforced by the browser or the server?** The browser — the server always processes the request, but the browser blocks JS from reading a disallowed response.
2. **What triggers a preflight `OPTIONS` request?** Complex requests using custom headers or non-simple HTTP methods (like PUT/DELETE).
3. **What's required to send cookies with a cross-origin request?** `credentials: "include"` client-side plus `Access-Control-Allow-Credentials: true` server-side, with a specific (not `*`) allowed origin.
4. **Why can't `Access-Control-Allow-Origin: *` combine with credentials?** Allowing credentials from any origin would be a severe security hole, so the spec forbids wildcarding with credentialed requests.
5. **Does CORS prevent the server from processing a disallowed request?** No — it only prevents the browser from exposing the response to JavaScript.

### CSRF {#csrf}
1. **Why does CSRF specifically exploit cookies?** Because browsers automatically attach cookies to matching-domain requests regardless of which page initiated them.
2. **How does a CSRF token prevent a forged request?** The attacker's page can't know or reproduce the unpredictable, per-session token required for the request to be accepted.
3. **How does `SameSite=Strict` help mitigate CSRF?** It prevents the cookie from being sent at all on cross-site requests, blocking most forgery vectors.
4. **What is the "double-submit cookie" pattern?** The server sets a random token as a cookie; client JS reads it and sends it as a header; the server verifies they match (an attacker can't read the victim's cookie due to Same-Origin Policy).
5. **Why isn't checking `Referer` alone a complete CSRF defense?** The header can sometimes be missing or stripped by privacy tools/proxies, making it an unreliable sole defense.

### XSS {#xss}
1. **What's the difference between Stored, Reflected, and DOM-based XSS?** Stored: saved server-side and served to others later. Reflected: reflected back immediately from a request (like a URL param). DOM-based: entirely client-side, no server involvement.
2. **Why is `textContent` safe from XSS while `innerHTML` isn't?** `textContent` never parses its string as HTML, so no script can execute; `innerHTML` does parse it.
3. **How does CSP mitigate XSS even if sanitization is missed?** It can block inline scripts or scripts from untrusted sources entirely, providing a backup layer of defense.
4. **Why is React's raw-HTML API named `dangerouslySetInnerHTML`?** To make developers consciously aware they're bypassing React's automatic escaping and taking on the XSS risk themselves.
5. **What can an attacker accomplish with a successful XSS payload?** Steal cookies/session tokens, log keystrokes, redirect to phishing pages, or perform actions as the victim.

---
[← Section Home](./README.md)
