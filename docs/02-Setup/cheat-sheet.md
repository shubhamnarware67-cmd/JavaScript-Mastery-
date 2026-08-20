# Environment Setup — Cheat Sheet

> Owner: **Shubham Narware**

### Installation {#installation}
- `node -v`, `npm -v` → check versions.
- Use `nvm install <version>` / `nvm use <version>` to manage multiple Node versions.
- Pin versions via `.nvmrc` or `package.json` `engines`.

### VS Code {#vscode}
- Built with Electron; uses TS Language Server for JS IntelliSense.
- `.vscode/settings.json` → editor prefs. `.vscode/launch.json` → debug configs. `.vscode/extensions.json` → recommended extensions.

### Node {#node}
- Runtime = V8 (executes JS) + libuv (event loop, async I/O).
- `require`/`module.exports` = CommonJS. `import`/`export` = ES Modules (`"type": "module"` in package.json).
- Built-ins: `fs`, `http`, `path`, `process`, `os`, `events`.

### NPM {#npm}
| Command | Purpose |
|---|---|
| `npm init -y` | Create package.json |
| `npm install <pkg>` | Add dependency |
| `npm install <pkg> -D` | Add dev dependency |
| `npm run <script>` | Run a package.json script |
| `npm ci` | Clean, exact, lockfile-based install (use in CI) |

- `^1.2.3` = minor+patch updates ok. `~1.2.3` = patch only. `1.2.3` = exact.

### Extensions {#extensions}
- Must-haves: ESLint (linting), Prettier (formatting), GitLens (git history).
- Extensions run in a separate Extension Host process (isolated from crashing the editor).

### Debugging {#debugging}
- `debugger;` → pauses when a debugger is attached.
- Step Over / Step Into / Step Out — core debugger navigation.
- `node --inspect` / `--inspect-brk` + `chrome://inspect` → debug Node in Chrome DevTools.
- `console.table()`, `console.trace()` → richer console debugging.

---
[← Section Home](./README.md)
