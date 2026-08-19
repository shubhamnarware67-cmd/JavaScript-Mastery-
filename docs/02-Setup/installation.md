# Installation

> Section: Environment Setup · Owner: **Shubham Narware**

## Definition
"Installation" here means setting up everything needed to write and run JavaScript on your machine: a browser (already installed for browser-JS), and **Node.js** (for running JS outside the browser, plus npm for packages).

## History
- Browsers have shipped JS engines since 1995 — no separate install needed for browser JS.
- **Node.js (2009)** required a separate install to run JS server-side; it bundles **npm** since v0.6.3 (2011).
- Modern alternatives: **Deno** (2018), **Bun** (2022) — newer runtimes with built-in tooling.

## Why Installation Matters
A correctly installed, version-appropriate Node.js setup avoids "works on my machine" bugs and lets you use modern JS tooling (npm packages, bundlers, linters).

## Syntax
```bash
# Check versions after installing
node -v
npm -v
```

## Types (ways to install Node.js)
| Method | Best for |
|---|---|
| Official installer (nodejs.org) | Beginners, quick single-version setup |
| **nvm** (Node Version Manager) | Developers needing multiple Node versions |
| Package manager (`brew`, `apt`, `choco`) | OS-integrated installs |
| Docker image | Isolated/reproducible environments |

## Examples
```bash
# macOS (Homebrew)
brew install node

# Ubuntu/Debian
sudo apt update && sudo apt install nodejs npm

# Windows (Chocolatey)
choco install nodejs

# Using nvm (recommended for switching versions)
nvm install 20
nvm use 20
```

## Memory Diagram
Not applicable — this is a tooling/setup topic, not a runtime memory concept.

## Flowchart
```
Need to run JS outside the browser?
        │
       Yes
        │
Do you need multiple Node versions across projects?
        │                              │
       Yes                            No
        │                              │
 Install nvm, then                Install Node.js directly
 `nvm install <version>`          from nodejs.org (LTS recommended)
```

## Internal Working
The Node.js installer bundles the V8 engine plus Node's own C++ bindings (libuv for async I/O, `fs`, `http`, etc.) into a single executable — running `node file.js` boots this bundled runtime, parses your file, and executes it.

## Beginner Example
```bash
# After installing Node, run your first script
echo 'console.log("Hello from Node!");' > app.js
node app.js
```

## Intermediate Example
```bash
# Initialize a new project with npm
mkdir my-project && cd my-project
npm init -y
npm install lodash
```

## Advanced Example
```bash
# Managing multiple Node versions per-project with nvm + .nvmrc
echo "20" > .nvmrc
nvm use   # automatically reads .nvmrc and switches to Node 20
```

## Real World Example
```bash
# CI pipelines pin exact Node versions for reproducibility
# .github/workflows/ci.yml (conceptual)
# - uses: actions/setup-node@v4
#   with:
#     node-version: '20'
```

## Industry Example
```bash
# Companies often enforce Node version consistency via package.json "engines"
# {
#   "engines": { "node": ">=18.0.0 <21.0.0" }
# }
```

## Interview Questions
See full list → [interview.md](./interview.md#installation)
1. What is npm and why does it ship with Node.js?
2. Why would a developer use `nvm` instead of installing Node directly?
3. What's the difference between installing Node via an installer vs a package manager?
4. What does `node -v` tell you, and why check it after install?
5. Why might a team pin a Node version range in `package.json`'s `engines` field?

## MCQs
See full list → [mcq.md](./mcq.md#installation)
1. Which command checks your installed Node.js version? (a) `node --check` (b) **`node -v`** (c) `npm version` (d) `node version` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#installation)
1. **(Easy)** Write the shell commands to install Node via nvm and verify the version.
2. **(Medium)** Create a `.nvmrc` file and explain how `nvm use` reads it.
3. **(Hard)** Write a short script that checks if the installed Node version satisfies a `package.json` `engines` constraint.

## Assignments
- [ ] Install Node.js via nvm and confirm `node -v` / `npm -v` output.
- [ ] Create a new project folder, run `npm init -y`, and inspect the generated `package.json`.

## Mini Project
Set up a fresh project: install Node via nvm, initialize `package.json`, install one dependency (e.g. `chalk`), and write a script that prints colored console output.

## Common Mistakes
- Installing Node globally via multiple methods (installer + package manager) causing version conflicts.
- Forgetting to restart the terminal after installation, so `node`/`npm` aren't recognized.
- Not pinning a Node version for a team project, causing "works on my machine" bugs.

## Best Practices
- Use `nvm` (or `fnm`, `volta`) to manage Node versions per project.
- Commit a `.nvmrc` or `engines` field so teammates use a consistent version.

## Optimization Tips
- Use `npm ci` (not `npm install`) in CI pipelines for faster, reproducible installs based on the lockfile.

## Summary
Installing Node.js (ideally via a version manager like nvm) plus npm gives you everything needed to run JavaScript outside the browser and manage project dependencies — the foundation for nearly all modern JS tooling.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#installation)

---
[← Section Home](./README.md) | [Section Home](./README.md) | [VS Code →](./vscode.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
