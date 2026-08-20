# Environment Setup — Interview Questions

> Owner: **Shubham Narware**

### Installation {#installation}
1. **What is npm and why does it ship with Node?** — Node's default package manager, bundled since v0.6.3 (2011), for installing/managing JS packages.
2. **Why use nvm instead of installing Node directly?** — Lets you switch Node versions per project, avoiding conflicts across projects with different requirements.
3. **Installer vs package manager install differences?** — Installer = official, simple, single version; package manager (brew/apt) = OS-integrated, easier to update via existing tooling.
4. **What does `node -v` tell you?** — The exact installed Node.js version, useful to confirm compatibility before running a project.
5. **Why pin a Node version range in `engines`?** — Prevents "works on my machine" bugs by documenting/enforcing the supported version range for a project.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

### VS Code {#vscode}
1. **What is VS Code built with?** — Electron, itself built using web technologies (JS/HTML/CSS) — VS Code is a JS app.
2. **How does VS Code type-check plain .js files?** — Via the built-in TypeScript Language Server, using JSDoc annotations or type inference.
3. **What is `launch.json` for?** — Configuring debugger sessions (e.g. which file to run, what port to attach to).
4. **Name 3 essential JS extensions.** — ESLint, Prettier, GitLens (among others).
5. **Benefit of `.vscode/extensions.json`?** — Ensures every contributor gets prompted to install the same recommended tooling.
6. Difficulty: Q1 Easy, Q2–Q3 Medium, Q4–Q5 Hard.

### Node {#node}
1. **Who created Node.js and why?** — Ryan Dahl, 2009, to make non-blocking event-driven I/O easy in JavaScript.
2. **What is libuv's role?** — Provides the event loop and thread pool enabling Node's async I/O despite JS being single-threaded.
3. **CommonJS vs ES Modules in Node?** — CommonJS uses `require`/`module.exports` (traditional); ES Modules use `import`/`export` (modern, standardized).
4. **Why is Node good for I/O-heavy apps?** — Its non-blocking event loop handles many concurrent I/O operations without spawning a thread per request.
5. **3 built-in Node modules?** — `fs` (files), `http` (servers/requests), `path` (path handling).
6. Difficulty: Q1 Easy, Q2–Q3 Medium, Q4–Q5 Hard.

### NPM {#npm}
1. **`dependencies` vs `devDependencies`?** — Former needed at runtime; latter only during development (linters, test tools).
2. **What does `package-lock.json` do?** — Records exact resolved dependency versions for reproducible installs across machines.
3. **`npm install` vs `npm ci`?** — `install` can update the lockfile/resolve new versions; `ci` does a clean, exact, lockfile-only install — faster and safer for CI.
4. **`^` vs `~` in version ranges?** — `^` allows minor/patch updates; `~` allows only patch updates.
5. **What are npm workspaces?** — A way to manage multiple related packages (a monorepo) from one root `package.json`.
6. Difficulty: Q1 Easy, Q2–Q3 Medium, Q4–Q5 Hard.

### Extensions {#extensions}
1. **ESLint extension vs ESLint CLI?** — Extension surfaces the same linting rules live inline in the editor; CLI runs it as a standalone command (e.g. in CI).
2. **How are extensions isolated from crashing VS Code?** — They run in a separate "Extension Host" process, communicating via VS Code's API.
3. **Purpose of `.vscode/extensions.json`?** — Recommends a consistent extension set to every contributor automatically.
4. **Why combine ESLint + Prettier?** — ESLint catches bugs/style issues; Prettier handles formatting — using `eslint-config-prettier` avoids rule conflicts between them.
5. **3 productivity extensions and why?** — GitLens (inline git history), Error Lens (inline error highlighting), Path Intellisense (import path autocomplete).
6. Difficulty: Q1–Q2 Easy, Q3 Medium, Q4–Q5 Hard.

### Debugging {#debugging}
1. **What does `debugger;` do?** — Pauses execution at that line when a debugger (DevTools/Node inspector) is attached.
2. **Step over vs step into vs step out?** — Over = run the current line without entering function calls; Into = enter the called function; Out = finish the current function and return to the caller.
3. **How to debug a running Node process with Chrome DevTools?** — Run with `--inspect`/`--inspect-brk`, then open `chrome://inspect` to attach.
4. **Why use `console.table()`?** — Presents arrays/objects in a readable tabular format, easier to scan than nested `console.log` output.
5. **What is a conditional breakpoint?** — A breakpoint that only pauses execution when a specified expression evaluates to true — avoids stepping through irrelevant iterations.
6. Difficulty: Q1–Q2 Easy, Q3–Q4 Medium, Q5 Hard.

---
[← Section Home](./README.md)
