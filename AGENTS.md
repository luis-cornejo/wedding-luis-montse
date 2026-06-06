# Codex Guide

## Objective

This repository contains a small wedding website built with React, TypeScript, Vite, and `styled-components`.

The goal is to keep the codebase simple, maintainable, and consistent without introducing monorepo-level complexity.

## Stack

- React
- TypeScript
- Vite
- `styled-components`
- ESLint

## Source Structure

Follow this structure unless there is a strong reason not to:

- `src/application`
  - global app concerns such as `copy`, shared types, and global styles
- `src/common`
  - reusable layout pieces, UI primitives, and hooks
- `src/pages`
  - page-level composition and page-specific components

## Component Rules

- Do not put a full page, its styles, and its copy in one file.
- Each non-trivial component should live in its own folder.
- Use this file pattern when applicable:
  - `Component.tsx`
  - `Component.styled.ts`
  - `index.ts`
- Keep `App.tsx` minimal. It should compose pages, not hold page implementation details.
- Prefer small functional components with explicit props.
- Prefer pure rendering logic where possible.

## Styling Rules

- Keep using `styled-components`.
- Do not introduce Emotion or another styling library unless explicitly requested.
- Put component-specific styled blocks in `*.styled.ts`.
- Shared visual primitives can live in `src/common/components/ui`.
- Preserve the existing visual language unless the task explicitly asks for redesign.

## Content Rules

- Keep static text and locale content outside component files.
- Put shared copy in `src/application/content`.
- Keep bilingual content aligned across languages.

## Hooks And Logic

- Put reusable hooks in `src/common/hooks`.
- Keep local state near the component that owns it.
- Extract logic into hooks only when it improves reuse or clarity.

## Refactoring Guidance

- Avoid overengineering.
- Mirror the structural discipline of `agile-management-portal`, but not its monorepo complexity.
- Create `common` components only when reuse or consistency is clear.
- Keep page-specific components under their page folder.

## Validation

Before closing any coding task, run:

- `npm run lint`
- `npm run build`

Tests are not required unless explicitly requested.

## Local Skills

Local skills live in `skills/`.

Available workflow skill:

- `skills/tool-commit-push/SKILL.md`
  - propose a conventional commit
  - run `npm run lint` and `npm run build`
  - commit only after user confirmation
  - push to the current branch

Available local conventions:

- `skills/local-code-conventions/SKILL.md`
  - folder structure
  - component boundaries
  - barrel exports
  - required validation
- `skills/local-styled-components/SKILL.md`
  - `styled-components` usage
  - co-located `*.styled.ts`
  - styling boundaries
- `skills/tool-create-pr/SKILL.md`
  - gather branch context
  - prepare PR title and body
  - push if needed
  - create PR with `gh`

## Skill Setup

To publish local repo skills into Codex's skills directory, run:

```bash
./skills/setup.sh
```

This links the repo skills into:

- `$CODEX_HOME/skills`
- or `~/.codex/skills` if `CODEX_HOME` is not set

`.codex/` is generated locally by `npm run skills:setup` and is not part of the source of truth.

## Dependency Rules

- Do not add new dependencies unless they are necessary for the task.
- Do not replace core libraries without approval.

## Git Hygiene

- Ignore editor metadata like `.idea/`.
- Do not revert unrelated user changes.
- Keep generated files and source files clearly separated.
