# Changelog

All notable changes to **JavaScript Mastery** are documented here.

## [0.1.0] — Scaffold Release — 2026-07-04

### Added
- Full project structure generated: 22 sections, 121 topics.
- Every topic has a `.md` file (23-section template) and matching `.html` page.
- Every section has `README.md`, `index.html`, `interview.md`, `mcq.md`, `practice.md`, `cheat-sheet.md`.
- Root `index.html` landing page with section cards, difficulty badges, dark/light toggle.
- Design system: `assets/css/style.css` (glassmorphism, dark/light mode, sticky sidebar, cards, progress bar, copy button).
- Shared behavior: `assets/js/main.js` (theme toggle, reading progress, copy-to-clipboard, sidebar search filter).
- Top-level `Examples/`, `Practice/`, `Interview/`, `CheatSheets/`, `Projects/` index folders.
- `LICENSE` (MIT), `CONTRIBUTING.md`, `package.json`.

### Status
- 🚧 Content is currently placeholder/TODO across all topics — structure and navigation are fully wired and production-ready; written content is being filled in section by section next.

### Planned
- [ ] Fill full content for `01-Introduction` through `05-Control-Flow` (beginner tier)
- [ ] Fill full content for `06-Functions` through `11-Events` (intermediate tier)
- [ ] Fill full content for `13-Error-Handling` through `22-Node-Testing` (advanced tier)

## [0.2.0] — Async JavaScript Complete — 2026-07-22

### Added
- Full content written for all 11 topics in `12-Async-JavaScript`: `promise`, `async-await`, `fetch`, `axios`, `ajax`, `xmlhttprequest`, `event-loop`, `call-stack`, `microtask`, `macrotask`, `web-api`.
- Each topic's `.md` file follows the full 23-part template (Definition → History → Why → Syntax → Types → Examples → Memory Diagram → Flowchart → Internal Working → Beginner/Intermediate/Advanced/Real-World/Industry Examples → Interview Questions → MCQs → Coding Questions → Assignments → Mini Project → Common Mistakes → Best Practices → Optimization Tips → Summary → Cheat Sheet link).
- Matching `.html` pages updated with real content (Definition, Syntax, Examples, Diagrams, Internal Working, Common Mistakes, Summary), replacing scaffold TODOs.
- Section `12-Async-JavaScript/README.md` status table updated: all 11 topics marked ✅ Complete.

### Status
- ✅ Section 12 (Async JavaScript) is now fully complete — 12/22 sections done.
- 🚧 Sections 13–22 (Error Handling through Node & Testing) remain as scaffolded TODOs.

## [0.3.0] — Error Handling Complete — 2026-07-22

### Added
- Full content written for both topics in `13-Error-Handling`: `try-catch`, `throw`.
- Both `.md` files follow the full 23-part template; matching `.html` pages updated with real content.
- Section `13-Error-Handling/README.md` status table updated: both topics marked ✅ Complete.

### Status
- ✅ Sections 12–13 fully complete — 13/22 sections done.
- 🚧 Sections 14–22 (Modules through Node & Testing) remain as scaffolded TODOs.

## [0.4.0] — Modules Complete — 2026-07-22

### Added
- Full content written for all 3 topics in `14-Modules`: `modules`, `import`, `export`.
- All `.md` files follow the full 23-part template; matching `.html` pages updated with real content.
- Section `14-Modules/README.md` status table updated: all 3 topics marked ✅ Complete.

### Status
- ✅ Sections 12–14 fully complete — 14/22 sections done.
- 🚧 Sections 15–22 (Browser Storage through Node & Testing) remain as scaffolded TODOs.

## [0.5.0] — Browser Storage Complete — 2026-07-22

### Added
- Full content written for all 4 topics in `15-Browser-Storage`: `localstorage`, `sessionstorage`, `cookies`, `indexeddb`.
- All `.md` files follow the full 23-part template; matching `.html` pages updated with real content.
- Section `15-Browser-Storage/README.md` status table updated: all 4 topics marked ✅ Complete.

### Status
- ✅ Sections 12–15 fully complete — 15/22 sections done.
- 🚧 Sections 16–22 (JSON & Regex through Node & Testing) remain as scaffolded TODOs.

## [0.6.0] — JSON & Regex, Execution Context & Scope Complete — 2026-07-22

### Added
- Full content written for both topics in `16-JSON-Regex`: `json`, `regex`.
- Full content written for all 5 topics in `17-Execution-Context-Scope`: `execution-context`, `hoisting`, `scope`, `scope-chain`, `garbage-collection`.
- All `.md` files follow the full 23-part template; matching `.html` pages updated with real content.
- Both section README.md status tables updated: all topics marked ✅ Complete.

### Status
- ✅ Sections 12–17 fully complete — 17/22 sections done.
- 🚧 Sections 18–22 (Advanced Objects through Node & Testing) remain as scaffolded TODOs.

## [1.0.0] — Full Project Complete — 2026-07-23

### Added
- Full content written for all remaining sections: `18-Advanced-Objects` (WeakMap, WeakSet, Proxy, Reflect), `19-Design-Patterns` (Design Patterns, Singleton, Factory, Observer, MVC, MVVM), `20-Performance` (Performance, Debounce, Throttle, Lazy Loading, Tree Shaking), `21-Security` (Security, CORS, CSRF, XSS), and `22-Node-Testing` (Node.js, Express, Testing, Jest, Chrome DevTools).
- All topic `.md` files follow the complete 23-part template; all matching `.html` pages carry real content (Definition, Syntax, Examples, Diagrams, Internal Working, Common Mistakes, Summary).
- Fixed two legacy `.html` files (`promise.html`, `async-await.html` in section 12) that still had scaffold TODOs despite their `.md` counterparts being complete.
- All 22 section `README.md` status tables now show every topic as ✅ Complete.
- Main project `README.md` status updated to reflect full completion.

### Status
- ✅ **All 22 sections, 121 topics fully complete.**
- 🚧 Companion reference pages (`interview.md`, `mcq.md`, `practice.md`, `cheat-sheet.md` per section) remain as a separate, lighter-weight scaffold — not part of the core topic content.

## [1.1.0] — Companion Pages Complete — 2026-07-25

### Added
- Full `interview.md`, `mcq.md`, `practice.md`, and `cheat-sheet.md` content for all remaining sections: `13-Error-Handling` through `22-Node-Testing` (10 sections, 24 topics).
- Each topic now has real interview Q&A with explanations, MCQs with answers, tiered coding practice problems (Easy/Medium/Hard), and a compact cheat-sheet reference.
- Sections `01` through `12` already had complete companion pages from earlier work; this update closes the gap for the remaining 10 sections.

### Status
- ✅ **All 22 sections, 121 topics, and all companion pages (interview/MCQ/practice/cheat-sheet) fully complete across the entire project.**
- [ ] Populate real Mermaid diagrams (currently text placeholders)
- [ ] Populate full 50-question interview banks and 100-question MCQ banks per topic
- [ ] Build out `Projects/` with 5-10 complete mini projects
