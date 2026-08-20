# Environment Setup — Coding Practice

> Owner: **Shubham Narware**

### Installation {#installation}
- **Easy:** Write the shell commands to install Node via nvm and verify with `node -v`.
- **Medium:** Create a `.nvmrc` file pinning Node 20 and explain how `nvm use` reads it.
- **Hard:** Write a small script that checks if the currently running Node version satisfies a semver range from `package.json`'s `engines` field.

### VS Code {#vscode}
- **Easy:** Write a `settings.json` snippet enabling format-on-save with 2-space indentation.
- **Medium:** Write a JSDoc-annotated function and describe what type errors VS Code would flag.
- **Hard:** Create a `launch.json` config to debug an Express server on a custom port with an environment variable set.

### Node {#node}
- **Easy:** Write a script that logs `process.version` and `process.platform`.
- **Medium:** Build a minimal `http` server that returns `"OK"` for any request.
- **Hard:** Using `fs.promises`, read a JSON file, update one field, and write it back — with proper error handling.

### NPM {#npm}
- **Easy:** Initialize an npm project and add a `start` script.
- **Medium:** Explain (with example) the behavioral difference between `^4.0.0` and `~4.0.0` version ranges.
- **Hard:** Set up an npm workspaces monorepo with two packages, where one imports the other.

### Extensions {#extensions}
- **Easy:** Write a `.vscode/extensions.json` recommending 3 JS-related extensions.
- **Medium:** Configure `settings.json` so Prettier is the default formatter and runs on save.
- **Hard:** Configure ESLint + Prettier together in one project without rule conflicts.

### Debugging {#debugging}
- **Easy:** Add a `debugger;` statement inside a loop; describe what you'd inspect at each pause.
- **Medium:** Set up a VS Code `launch.json` and successfully hit a breakpoint inside a function.
- **Hard:** Debug (using only breakpoints, not `console.log`) a snippet with an off-by-one loop error and document your steps.

---
[← Section Home](./README.md)
