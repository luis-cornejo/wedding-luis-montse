---
name: local-styled-components
description: >
  Styled-components patterns for this repository: co-located .styled.ts files,
  named styled exports, and layout styling conventions. Use when adding or refactoring styles.
---

# Styled Components Conventions

## Styling Approach

This repository uses `styled-components` for custom styling.

Use:

- `styled-components`
- co-located `*.styled.ts` files
- named exports for styled primitives

Avoid:

- Emotion
- Tailwind
- CSS Modules
- inline layout styles

## File Pattern

```text
hero/
├── HeroSection.tsx
├── HeroSection.styled.ts
└── index.ts
```

Rules:

- one `*.styled.ts` per component
- keep visual primitives in the styled file
- keep render logic in the component file

## Basic Pattern

```ts
// HeroSection.styled.ts
import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
`;
```

```ts
// HeroSection.tsx
import { Section } from './HeroSection.styled';
```

## Shared Styles

If styles are reused across multiple sections, prefer shared primitives in:

- `src/common/components/ui`

If the styles are only for one component, keep them local.

## Validation

After styling changes:

```bash
npm run lint
npm run build
```
