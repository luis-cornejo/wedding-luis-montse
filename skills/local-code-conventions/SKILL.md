---
name: local-code-conventions
description: >
  Project-wide code conventions for this wedding site: folder structure, barrel exports,
  component boundaries, linting, and validation. Use when creating or refactoring components,
  hooks, content modules, or app structure in this repository.
---

# Local Code Conventions

## Folder Structure

Use these top-level areas:

- `src/application`
  - app-wide copy, shared types, global styles
- `src/common`
  - reusable layout pieces, UI primitives, hooks
- `src/pages`
  - page composition and page-specific components

## Module Structure

Every non-trivial component should live in its own kebab-case folder:

```text
components/
└── hero/
    ├── HeroSection.tsx
    ├── HeroSection.styled.ts
    └── index.ts
```

Rules:

- folder name: `kebab-case`
- component file: `PascalCase.tsx`
- styled file: `PascalCase.styled.ts`
- hook file: `camelCase.ts`
- barrel export required: `index.ts`

## Component Boundaries

- Do not keep page layout, styles, and static copy in one file.
- Keep `App.tsx` minimal.
- Keep page composition in `src/pages/.../HomePage.tsx`-style files.
- Extract reusable UI into `src/common/components`.
- Keep page-specific sections under their page folder.

## Styling

- This repo uses `styled-components`.
- Do not introduce Emotion, Tailwind, CSS Modules, or inline layout styling unless explicitly requested.
- Co-locate styles in `*.styled.ts`.
- Export styled primitives as named exports.

## Content

- Locale content belongs in `src/application/content`.
- Shared app types belong in `src/application/types`.
- Keep ES and CA content aligned when editing bilingual copy.

## Imports

- Prefer importing from folder barrels, not file internals.

Good:

```ts
import HeroSection from './components/hero';
```

Avoid:

```ts
import HeroSection from './components/hero/HeroSection';
```

## Validation

Before considering work complete, run:

```bash
npm run lint
npm run build
```

Do not skip validation.

## Refactoring Bias

- Prefer simple functional components.
- Extract hooks only when reuse or clarity justifies it.
- Mirror the discipline of `agile-management-portal`, but do not copy monorepo complexity.
- Avoid creating `common` abstractions too early.
