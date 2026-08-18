# XSS

> Section: Security · Owner: **Shubham Narware**

## Definition
XSS (Cross-Site Scripting) is an attack where malicious JavaScript is injected into a trusted web page and executed in other users' browsers — typically by exploiting unsanitized user input rendered as HTML.

## History
XSS has been recognized since the **late 1990s**, consistently ranking among the OWASP Top 10 web vulnerabilities for over two decades, driving the creation of defenses like output escaping, Content Security Policy (CSP), and framework-level auto-escaping.

## Why XSS Matters
A successful XSS attack can steal session cookies, log keystrokes, redirect users to phishing pages, or perform actions as the victim — all by running attacker-controlled code inside a trusted site's context.

## Syntax
```js
// Vulnerable: directly inserting untrusted input as HTML
element.innerHTML = userComment; // if userComment = "<img src=x onerror=alert(1)>", it EXECUTES

// Safe: treats input as plain text, not HTML
element.textContent = userComment;
```

## Types (categories of XSS)
| Type | Description |
|---|---|
| Stored XSS | Malicious script is saved (e.g., in a database) and served to other users later |
| Reflected XSS | Malicious script is part of a request (e.g., URL parameter) and reflected back in the response |
| DOM-based XSS | Vulnerability exists entirely in client-side JS manipulating the DOM unsafely, without the server being involved |

## Examples
```js
// Reflected XSS example (vulnerable):
// URL: example.com/search?q=<script>stealCookies()</script>
document.getElementById("results").innerHTML = `Results for: ${location.search}`;
```

## Memory Diagram
```
Untrusted input ──► rendered directly as HTML (innerHTML, document.write, etc.)
                            │
                Browser PARSES it as real HTML/JS
                            │
                Malicious <script> or event handler EXECUTES
                            │
                Runs with full access to the page's cookies, DOM, etc.
```

## Flowchart
```
User-controlled data enters the application (form input, URL param, DB record)
        │
Is it rendered/inserted as HTML anywhere? ──Yes──► is it properly escaped/sanitized?
        │                                                    │
        No                                                  No ──► XSS VULNERABILITY
        ▼                                                    │
Safe (treated as plain text)                                Yes ──► Safe
```

## Internal Working
The core vulnerability is the browser's inability to distinguish "trusted markup written by the developer" from "untrusted data that happens to look like markup" — escaping (converting `<`, `>`, `&`, etc. to their HTML entity equivalents) or using text-only APIs like `textContent` prevents the browser from ever parsing untrusted input as executable HTML/JS.

## Beginner Example
```js
// Safe rendering of user input
const div = document.createElement("div");
div.textContent = userInput; // never parsed as HTML
document.body.appendChild(div);
```

## Intermediate Example
```js
// A Content-Security-Policy header restricts inline scripts entirely,
// mitigating XSS even if some input sanitization is missed
// Content-Security-Policy: script-src 'self'; object-src 'none'
```

## Advanced Example
```js
// Sanitizing rich HTML input (e.g., a comment supporting basic formatting)
// using a dedicated sanitization library rather than manual regex
import DOMPurify from "dompurify";
element.innerHTML = DOMPurify.sanitize(userHtmlInput);
```

## Real World Example
```js
// A comment section that renders user comments with innerHTML
// (without sanitization) is a classic Stored XSS vulnerability —
// one malicious comment could compromise every visitor who views it.
```

## Industry Example
```js
// React, Vue, and Angular all auto-escape template output by default
// specifically to prevent this class of vulnerability, requiring
// developers to explicitly opt into raw HTML rendering (a red flag
// to review carefully) via APIs like dangerouslySetInnerHTML.
```

## Interview Questions
See full list → [interview.md](./interview.md#xss)
1. What's the difference between Stored, Reflected, and DOM-based XSS?
2. Why is `textContent` safe from XSS while `innerHTML` isn't (for untrusted input)?
3. How does a Content Security Policy (CSP) header help mitigate XSS even if some sanitization is missed?
4. Why do frameworks like React name their raw-HTML API `dangerouslySetInnerHTML`?
5. What can an attacker actually accomplish with a successful XSS payload?

## MCQs
See full list → [mcq.md](./mcq.md#xss)
1. Which type of XSS involves the malicious script being permanently saved on the server? (a) Reflected XSS (b) **Stored XSS** (c) DOM-based XSS (d) None of these → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#xss)
1. **(Easy)** Rewrite an `innerHTML`-based rendering of user input to use `textContent` instead.
2. **(Medium)** Explain, with an example URL, how Reflected XSS could occur via a search query parameter.
3. **(Hard)** Use a sanitization library (conceptually, in comments) to safely render rich-text user input that legitimately needs some HTML formatting.

## Assignments
- [ ] Explain, in your own words, why auto-escaping in frameworks like React doesn't make an app immune to ALL XSS risks.
- [ ] Identify a real-world example (news article, case study) of a significant XSS vulnerability and summarize what went wrong.

## Mini Project
Build a small "Safe Comment Renderer": accept user comments and render them safely using `textContent`, with comments explaining what would happen if `innerHTML` were used instead with a malicious payload.

## Common Mistakes
- Using `innerHTML`, `document.write()`, or `eval()` with any untrusted input.
- Assuming client-side-only validation is sufficient protection (attackers can bypass the client entirely).
- Using `dangerouslySetInnerHTML` (React) or `v-html` (Vue) without sanitizing the content first.

## Best Practices
- Default to text-only APIs (`textContent`, template literals rendered as text) for any user-generated content.
- Use a well-maintained sanitization library (like DOMPurify) whenever rich HTML input genuinely needs to be supported.

## Optimization Tips
- Combine output escaping with a strict Content-Security-Policy as defense-in-depth — CSP can block exploitation even if a sanitization bug slips through.

## Summary
XSS lets attackers inject and execute malicious scripts in a trusted page's context by exploiting improperly escaped user input — defended against primarily by treating untrusted data as text (never raw HTML), using sanitization libraries when rich content is needed, and layering a Content Security Policy for defense-in-depth.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#xss)

---
[← CSRF](./csrf.md) | [Section Home](./README.md) | [Section Home](./README.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
