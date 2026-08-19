# Extensions

> Section: Environment Setup · Owner: **Shubham Narware**

## Definition
VS Code **extensions** are add-ons that enhance the editor with new language support, linters, formatters, themes, and productivity tools — essential for a modern JavaScript workflow.

## History
- VS Code's extension marketplace launched alongside the editor in 2015.
- Popular JS tools like ESLint and Prettier started as standalone CLI tools, then got official VS Code extensions to surface their feedback inline.

## Why Extensions Matter
The right extensions catch bugs and style issues *before* you run code, auto-format on save, and visualize things like Git history or API calls — significantly speeding up development.

## Syntax
```json
// .vscode/extensions.json — recommend extensions to teammates
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}
```

## Types (essential categories for JS devs)
| Category | Example Extension | Purpose |
|---|---|---|
| Linting | ESLint | Catches bugs/style issues live |
| Formatting | Prettier | Auto-formats code consistently |
| Git | GitLens | Inline blame, history, comparisons |
| API testing | Thunder Client / REST Client | Test APIs without leaving the editor |
| Live preview | Live Server | Auto-reloading static page preview |
| Snippets | ES7+ React/Redux snippets | Fast boilerplate typing |

## Examples
```json
// settings.json — auto-format with Prettier on save
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Memory Diagram
Not applicable — tooling/setup topic.

## Flowchart
```
Install extension from Marketplace
        │
VS Code activates its "contribution points"
   (linters, formatters, language services, UI panels)
        │
Extension hooks into editor events
   (on save, on type, on open) to provide feedback
```

## Internal Working
Extensions run in a separate "Extension Host" process from the core editor UI, communicating via VS Code's API — this isolation means a buggy extension can't crash the whole editor, only itself.

## Beginner Example
```
1. Open the Extensions panel (Ctrl+Shift+X / Cmd+Shift+X)
2. Search "ESLint"
3. Click Install
```

## Intermediate Example
```json
// .eslintrc.json paired with the ESLint extension for live linting
{
  "extends": "eslint:recommended",
  "env": { "browser": true, "node": true, "es2022": true },
  "rules": { "no-unused-vars": "warn" }
}
```

## Advanced Example
```json
// Combine ESLint + Prettier without conflicts using eslint-config-prettier
{
  "extends": ["eslint:recommended", "prettier"]
}
```

## Real World Example
```
A typical professional JS setup:
ESLint (catch bugs) + Prettier (format) + GitLens (history) +
Error Lens (inline error highlighting) + Path Intellisense (import autocomplete)
```

## Industry Example
```json
// Teams enforce a consistent extension set via .vscode/extensions.json
// checked into the repo, so every new hire gets the same tooling automatically
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "eamodio.gitlens"]
}
```

## Interview Questions
See full list → [interview.md](./interview.md#extensions)
1. What is the purpose of the ESLint extension versus the ESLint CLI tool?
2. How does VS Code isolate extensions from crashing the main editor?
3. What does `.vscode/extensions.json` do for a team?
4. Why combine ESLint and Prettier instead of using just one?
5. Name 3 extensions that improve JS developer productivity and explain why.

## MCQs
See full list → [mcq.md](./mcq.md#extensions)
1. Extensions run in a separate process called the: (a) Renderer (b) **Extension Host** (c) Worker Thread (d) Sandbox VM → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#extensions)
1. **(Easy)** Write an `.vscode/extensions.json` recommending 3 JS-related extensions.
2. **(Medium)** Configure `settings.json` to format-on-save using Prettier as the default formatter.
3. **(Hard)** Set up ESLint + Prettier together without rule conflicts using `eslint-config-prettier`.

## Assignments
- [ ] Install and configure ESLint + Prettier in a sample project.
- [ ] Create a shareable `.vscode/extensions.json` for a team project.

## Mini Project
Set up a "batteries-included" JS starter template repo with pre-configured ESLint, Prettier, and recommended extensions, documented in a README.

## Common Mistakes
- Installing too many overlapping extensions that conflict (e.g. two different auto-formatters fighting).
- Not committing shared configs (`.eslintrc`, `.prettierrc`, `.vscode/settings.json`) — teammates get inconsistent behavior.

## Best Practices
- Keep the extension list lean — only what genuinely improves your JS workflow.
- Commit shared linter/formatter configs to the repo, not just personal machine settings.

## Optimization Tips
- Disable unused/heavy extensions per-workspace to keep VS Code responsive on large projects.

## Summary
The right VS Code extensions (ESLint, Prettier, GitLens, and similar) turn the editor into a full JavaScript development environment, catching errors and enforcing consistent style automatically.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#extensions)

---
[← NPM](./npm.md) | [Section Home](./README.md) | [Debugging →](./debugging.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
