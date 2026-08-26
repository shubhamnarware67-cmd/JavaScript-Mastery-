# Node & Testing — Interview Questions

> Owner: **Shubham Narware** · Status: ✅ Complete

### Node.js {#nodejs}
1. **What makes Node.js's I/O model "non-blocking"?** Async operations (file/network) are delegated to libuv, freeing the single JS thread to keep processing other work while waiting.
2. **What is `libuv`?** A C library providing Node's event loop and a thread pool for operations that can't be done asynchronously at the OS level.
3. **Is Node.js single-threaded? How does it handle many concurrent connections?** Yes for JS execution — concurrency comes from non-blocking I/O, not multiple threads running JS simultaneously.
4. **What's the difference between `fs`'s callback and Promise-based APIs?** The callback API uses `(err, data) => {}`; `fs/promises` returns Promises usable with `async/await`.
5. **Why might Node.js be a poor fit for CPU-intensive tasks?** CPU-bound synchronous work blocks the single JS thread, stalling all other requests until it completes.

### Express {#express}
1. **What is middleware, and why must it call `next()`?** Functions running before route handlers; `next()` passes control onward, or the request hangs indefinitely.
2. **How does Express distinguish error-handling middleware?** By its 4-parameter signature `(err, req, res, next)`, versus regular middleware's 3 parameters.
3. **What's the purpose of `express.Router()`?** Groups related routes into a modular, mountable sub-application for better organization.
4. **How would you structure routes for a multi-resource REST API?** Separate router files per resource (users.js, orders.js), mounted under their respective paths in the main app.
5. **What happens if middleware never calls `next()` or sends a response?** The request hangs indefinitely, eventually timing out from the client's perspective.

### Testing {#testing}
1. **What's the difference between unit, integration, and E2E tests?** Unit tests isolate a single function; integration tests check multiple units together; E2E tests verify a full real user flow.
2. **Why is the testing pyramid shaped with many unit tests and few E2E tests?** Unit tests are fast/cheap; E2E tests are slow/expensive, so relying mainly on unit tests keeps feedback fast.
3. **What is mocking, and why is it useful?** Replacing a real dependency (like a network call) with a controllable stand-in, isolating the unit under test.
4. **How would you test an asynchronous function?** Use `async/await` in the test itself, or return the Promise so the test runner waits for it to settle.
5. **What is TDD, and how does it change writing order?** Test-Driven Development writes the failing test first, then the minimal code to pass it, then refactors.

### Jest {#jest}
1. **What's the difference between `.toBe()` and `.toEqual()`?** `.toBe()` checks strict equality (`===`, reference for objects); `.toEqual()` checks deep structural equality.
2. **What does `jest.mock()` do?** Replaces a module with an automatically-generated mock, letting tests control and assert on its behavior.
3. **How does Jest handle testing async code?** Via `async/await` in test functions, or returning a Promise, or using `.resolves`/`.rejects` matchers.
4. **Why does Jest run test files in isolated/parallel environments?** For speed and to prevent tests from accidentally sharing or corrupting each other's state.
5. **What is a "snapshot test"?** A test comparing current output against a previously saved "known good" version, flagging unexpected changes.

### Chrome DevTools {#chrome-devtools}
1. **What's the difference between a regular and conditional breakpoint?** A regular breakpoint always pauses; a conditional one only pauses when a specified expression evaluates true.
2. **How would you diagnose a memory leak using the Memory panel?** Take a heap snapshot, perform the suspected leaking action repeatedly, take another snapshot, and compare object counts.
3. **What does the Network panel's waterfall view show?** Timing breakdown of each request (DNS, connection, waiting, downloading), helping identify slow or blocking resources.
4. **What is the Chrome DevTools Protocol (CDP)?** The protocol DevTools uses to communicate with the browser engine — also used by automation tools like Puppeteer/Playwright.
5. **How can the Performance panel help with janky scrolling?** Its flame chart shows exactly which function calls consume the most time per frame, pinpointing the bottleneck.

---
[← Section Home](./README.md)
