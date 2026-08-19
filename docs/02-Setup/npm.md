# NPM

> Section: Environment Setup · Owner: **Shubham Narware**

## Definition
**npm (Node Package Manager)** is the default package manager for Node.js — used to install, share, and manage JavaScript libraries ("packages") and project scripts.

## History
- Created by **Isaac Schlueter**, released alongside early Node.js in **2010**, bundled with Node since 2011.
- Grew into the largest software registry in the world (over a million packages).
- Alternatives emerged later: **Yarn** (2016, Facebook), **pnpm** (faster, disk-efficient) — all compatible with the same `package.json` format.

## Why NPM Matters
Nearly every real JS project depends on third-party packages (React, Express, Lodash, etc.) — npm is how you install, version, and manage them reliably.

## Syntax
```bash
npm init -y                 # create a package.json
npm install <package>       # install and save as a dependency
npm install <package> -D    # install as a dev dependency
npm uninstall <package>     # remove a package
npm run <script-name>       # run a custom script from package.json
npm update                  # update packages within allowed version ranges
```

## Types (dependency categories)
| Field in package.json | Meaning |
|---|---|
| `dependencies` | Needed at runtime (e.g. `express`) |
| `devDependencies` | Only needed during development (e.g. `eslint`, `jest`) |
| `peerDependencies` | Expected to be provided by the consuming project |
| `scripts` | Named shell commands runnable via `npm run` |

## Examples
```json
// package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "eslint": "^9.0.0"
  }
}
```

## Memory Diagram
Not applicable — npm is a package/tooling system, not a runtime memory concept.

## Flowchart
```
npm install express
        │
npm reads package.json (or creates dependency entry)
        │
Downloads package + its own dependencies from the npm registry
        │
Writes exact resolved versions into package-lock.json
        │
Places files inside node_modules/
```

## Internal Working
When you run `npm install`, npm resolves your declared version ranges (like `^4.19.2`) against the npm registry, downloads the packages (and their transitive dependencies) into `node_modules/`, and records the exact versions actually installed in `package-lock.json` for reproducibility.

## Beginner Example
```bash
mkdir demo && cd demo
npm init -y
npm install chalk
```
```js
const chalk = require("chalk");
console.log(chalk.green("Installed successfully!"));
```

## Intermediate Example
```json
// Using npm scripts to standardize commands across a team
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "lint": "eslint .",
  "test": "jest --coverage"
}
```
```bash
npm run dev
npm run lint
```

## Advanced Example
```bash
# Semantic versioning ranges in package.json
# "^4.19.2" → accepts 4.x.x (not 5.0.0)  — minor/patch updates allowed
# "~4.19.2" → accepts 4.19.x only        — patch updates only
# "4.19.2"  → exact version only
npm install express@^4.19.2
```

## Real World Example
```bash
# CI pipelines use `npm ci` instead of `npm install` for
# fast, exact, lockfile-based installs (no version resolution surprises)
npm ci
```

## Industry Example
```json
// Monorepos use npm workspaces to manage multiple packages in one repo
// root package.json
{
  "workspaces": ["packages/*"]
}
```

## Interview Questions
See full list → [interview.md](./interview.md#npm)
1. What is the difference between `dependencies` and `devDependencies`?
2. What does `package-lock.json` do, and why commit it?
3. Explain the difference between `npm install` and `npm ci`.
4. What do `^` and `~` mean in a version range?
5. What are npm workspaces used for?

## MCQs
See full list → [mcq.md](./mcq.md#npm)
1. Which file locks exact installed dependency versions? (a) `package.json` (b) **`package-lock.json`** (c) `npmrc` (d) `node_modules.json` → **Answer: (b)**

## Coding Questions
See full list → [practice.md](./practice.md#npm)
1. **(Easy)** Initialize a new npm project and add a `start` script.
2. **(Medium)** Explain the difference in behavior between `npm install lodash@^4.0.0` and `npm install lodash@~4.0.0`.
3. **(Hard)** Set up an npm workspaces monorepo with two packages, one depending on the other.

## Assignments
- [ ] Create a `package.json`, add 2 dependencies and 1 devDependency, and write 2 custom scripts.
- [ ] Explain, with an example, why `package-lock.json` should be committed to version control.

## Mini Project
Build a small CLI tool packaged with npm — include a `bin` field in `package.json` so it can be run via `npx` or globally installed.

## Common Mistakes
- Committing `node_modules/` to version control instead of `.gitignore`-ing it.
- Not committing `package-lock.json`, causing inconsistent installs across machines.
- Confusing `dependencies` vs `devDependencies`, bloating production bundles with dev-only tools.

## Best Practices
- Always commit `package-lock.json` for reproducible builds.
- Use `npm ci` in CI/CD pipelines, not `npm install`.
- Regularly audit dependencies with `npm audit` for known vulnerabilities.

## Optimization Tips
- Use `npm dedupe` or a faster package manager (pnpm) for large monorepos to reduce disk usage and install time.
- Remove unused dependencies periodically (`npx depcheck`) to keep bundles lean.

## Summary
npm is the default package manager bundled with Node.js, used to install/manage dependencies and run project scripts via `package.json`. Understanding version ranges, lockfiles, and dependency types is essential for reliable, reproducible JavaScript projects.

## Cheat Sheet
See → [cheat-sheet.md](./cheat-sheet.md#npm)

---
[← Node](./node.md) | [Section Home](./README.md) | [Extensions →](./extensions.md)

*Part of [JavaScript Mastery](../../README.md) — Owner: **Shubham Narware***
