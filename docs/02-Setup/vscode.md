# VS Code

> Section: Environment Setup · Owner: **Shubham Narware**

## Definition
**Visual Studio Code (VS Code)** is a free, extensible code editor by Microsoft — the most widely used editor for JavaScript development, thanks to built-in IntelliSense, debugging, and a huge extension ecosystem.

## History
- Released by Microsoft in **2015**.
- Built on Electron (itself built with... JavaScript!) — VS Code is literally a JS/TS app.
- Became the most popular editor in Stack Overflow's developer surveys within a few years of release.

## Why VS Code Matters
Its built-in JavaScript/TypeScript language service (autocomplete, inline errors, go-to-definition) dramatically speeds up development and reduces simple bugs before you even run the code.

## Syntax
```json
// settings.json — VS Code's own configuration is written in JSON
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2
}
```

## Types (ways to extend/configure VS Code)
| Mechanism | Purpose |
|---|---|
| Extensions | Add language support, linters, themes, tools |
| `settings.json` | Editor-wide or project-specific preferences |
| `launch.json` | Debugger configurations |
| Snippets | Reusable code templates |
| Workspaces | Multi-folder project setups |

## Examples
```json
// .vscode/launch.json — debug a Node script directly in VS Code
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```

## Memory Diagram
Not applicable — this is a tooling topic.

## Flowchart
```
Open a .js file in VS Code
        │
Built-in TypeScript/JavaScript Language Service activates
        │
   ┌────┴─────┬───────────────┬────────────────┐
IntelliSense  Inline errors   Go-to-definition  Auto-import suggestions
```

## Internal Working
VS Code uses the **TypeScript Language Server** (yes, even for plain `.js` files) under the hood to provide autocomplete, type-checking hints (via JSDoc or inferred types), and refactoring tools — all without you writing a line of TypeScript.

## Beginner Example
```js
// Type "console." in VS Code and IntelliSense shows all available methods
console.log("autocomplete works here");
```

## Intermediate Example
```js
// JSDoc comments give VS Code enough info to type-check plain JS
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) { return a + b; }
add("1", 2); // VS Code will flag this as a likely type error via JSDoc inference
```

## Advanced Example
```json
// .vscode/settings.json enabling stricter JS checking project-wide
{
  "js/ts.implicitProjectConfig.checkJs": true
}
```

## Real World Example
```
Popular extensions used daily by professional JS developers:
- ESLint (linting)
- Prettier (formatting)
- GitLens (git blame/history inline)
- Live Server (quick static preview)
```

## Industry Example
```json
// Teams commit a shared .vscode/extensions.json to recommend
// consistent tooling for every contributor:
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

## Interview Questions
See full list → [interview.md](./interview.md#vscode)
1. What technology is VS Code itself built with?
2. How does VS Code provide type-checking for plain `.js` files without TypeScript?
3. What is `launch.json` used for?
4. Name 3 essential extensions for JavaScript development.
5. What's the benefit of committing `.vscode/extensions.json` to a repo?

## MCQs
See full list → [mcq.md](./mcq.md#vscode)
1. VS Code was released by: (a) Google (b) **Microsoft** (c) Meta (d) JetBrains → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#vscode)
1. **(Easy)** Write a `settings.json` snippet enabling format-on-save with 2-space tabs.
2. **(Medium)** Write a JSDoc-annotated function and explain how VS Code type-checks it.
3. **(Hard)** Create a `launch.json` config to debug an Express server with a custom port.

## Assignments
- [ ] Install ESLint and Prettier extensions and configure format-on-save.
- [ ] Create a `launch.json` and successfully debug a simple Node script with breakpoints.

## Mini Project
Configure a small Node project in VS Code with ESLint, Prettier, and a working debugger launch config — document the steps in a README.

## Common Mistakes
- Not installing ESLint/Prettier, missing early bug/style feedback.
- Ignoring inline red squiggles from the TS language service in plain JS files.
- Debugging by only using `console.log` instead of VS Code's built-in breakpoint debugger.

## Best Practices
- Use JSDoc comments in plain JS for lightweight type safety without migrating to TypeScript.
- Commit `.vscode/settings.json` and `extensions.json` for team consistency.

## Optimization Tips
- Use the "Format on Save" + Prettier combo to avoid manual formatting time entirely.
- Use multi-cursor editing and VS Code's built-in refactor tools (rename symbol) to speed up repetitive edits.

## Summary
VS Code is the dominant JavaScript editor, offering built-in IntelliSense, debugging, and a vast extension ecosystem — mastering its JS-specific features (JSDoc checking, launch configs, recommended extensions) meaningfully speeds up development.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#vscode)

---
[← Installation](./installation.md) | [Section Home](./README.md) | [Node →](./node.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
