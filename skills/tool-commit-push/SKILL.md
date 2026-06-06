---
name: tool-commit-push
description: >
  Stage pending changes, propose a conventional-commit message, run repo checks,
  commit, and push to the current branch. Use when the user wants to send changes
  to the remote, update a branch, or asks for commit/push help in this repo.
---

# Commit and Push

## Goal

Create a safe, repeatable workflow for committing and pushing changes in this repository.

This repo requires:

- a conventional-commit message
- user confirmation before commit
- `npm run lint`
- `npm run build`

## Git command format

Always prefer:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager <command> 2>&1
```

Replace `<REPO_ROOT>` with the absolute repo path.

## Step 1 — Check repository state

Run:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager status --short 2>&1
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager branch --show-current 2>&1
```

If there are no changes, stop.

Watch for noise such as:

- `.idea/`
- generated files the user did not ask to commit

Do not silently stage unwanted files.

## Step 2 — Understand the diff

Run:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager diff --stat 2>&1
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager diff --staged --stat 2>&1
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager diff -- src package.json package-lock.json 2>&1
```

Read enough of the diff to infer the right commit type and scope.

## Step 3 — Build the commit message

Use conventional commits:

- `feat`
- `fix`
- `refactor`
- `docs`
- `chore`
- `style`
- `test`
- `build`
- `ci`
- `perf`

Format:

```text
type(scope): description
```

Rules:

- scope should reflect the changed area, such as `home`, `rsvp`, `layout`, `content`, `repo`, `build`
- description should be lowercase, imperative, and concise
- first line should stay under 72 characters

Show the proposal to the user before committing:

```text
Proposed commit: `type(scope): description`

Proceed? (y/n)
```

Wait for confirmation or a replacement message.

## Step 4 — Run required checks

Before staging and committing, run:

```bash
npm run lint
npm run build
```

If either command fails:

- fix the issue
- rerun the failed command
- do not commit until both pass

## Step 5 — Stage and commit

Only after user confirmation:

1. Stage the intended files:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager add -A 2>&1
```

2. Commit:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager commit -m "type(scope): description" 2>&1
```

If this repo later adopts a required trailer or co-author footer, update this step.

## Step 6 — Push

Run:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager push 2>&1
```

If no upstream exists:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager push -u origin HEAD 2>&1
```

## Step 7 — Report

Return a short summary with:

- branch name
- commit hash
- final commit message
- whether the push succeeded

## Repo-specific notes

- This repository uses `styled-components`, not Emotion.
- Prefer scopes that match the actual structure in `src/`.
- If changes affect structure or workflow only, prefer scopes like `repo` or `build`.
