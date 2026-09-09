# Contributing to JavaScript Mastery

Thanks for your interest in improving **JavaScript Mastery** (owned & maintained by **Shubham Narware**).

## Ground Rules

1. **One topic = one file.** Never merge multiple topics into a single file.
2. Every new topic must include all 23 template sections (see any existing `*.md` in `docs/`).
3. Keep the `.md` and `.html` versions of a topic in sync.
4. Code examples must be runnable and follow modern ES2025 + Google JavaScript Style Guide conventions.
5. Add your topic to the section's `README.md` table and to `interview.md` / `mcq.md` / `practice.md` / `cheat-sheet.md` anchors.

## Adding a new topic

1. Pick the correct section folder under `docs/`.
2. Duplicate an existing topic's `.md` and `.html` as a starting template.
3. Fill in every section — no empty headers.
4. Update the section `README.md` topic table.
5. Update `CHANGELOG.md`.

## Adding a new section

1. Create `docs/NN-Section-Name/`.
2. Add `README.md`, `index.html`, `interview.md`, `mcq.md`, `practice.md`, `cheat-sheet.md`.
3. Add a card for it in the root `index.html`.

## Style

- HTML/CSS/JS: match `assets/css/style.css` design tokens (CSS variables) — don't hardcode colors.
- Markdown: use `#`/`##` heading levels exactly as in the template, so section anchors keep working.

## Commit messages

```
docs(section): add topic-name full content
fix(css): correct sidebar overflow on mobile
chore: update changelog
```

---
Maintained by **Shubham Narware**
