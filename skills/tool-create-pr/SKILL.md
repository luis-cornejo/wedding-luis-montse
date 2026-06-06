---
name: tool-create-pr
description: >
  Prepare and create a pull request for this repository: verify branch state,
  summarize changes, propose a PR title/body, push if needed, and create the PR.
  Use when the user asks to open a PR or prepare one for review.
---

# Create Pull Request

## Goal

Create a clear PR for this repository with:

- a concise title
- a short summary of changes
- the current branch pushed to remote

## Git command format

Prefer:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager <command> 2>&1
```

## Step 1 — Gather context

Run:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager branch --show-current 2>&1
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager status --short 2>&1
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager fetch origin main 2>&1
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager log origin/main..HEAD --oneline 2>&1
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager diff origin/main...HEAD --stat 2>&1
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager rev-list --count HEAD..origin/main 2>&1
```

If the branch is behind `main`, warn the user before creating the PR.

## Step 2 — Handle uncommitted changes

If there are local changes, do not create the PR blindly.

Tell the user that PR creation should happen after commit/push, and use:

- `skills/tool-commit-push/SKILL.md`

Only continue if the branch is in a suitable state.

## Step 3 — Build the PR title

Use a short, human-readable title derived from the branch diff.

Format:

```text
Area: short description
```

Examples:

- `RSVP: refine guest type guidance`
- `Home: refactor sections into modular components`
- `Repo: add local commit and PR workflow skills`

Keep it under 70 characters.

## Step 4 — Build the PR body

Use this structure:

```md
## Summary

- Change 1
- Change 2
- Change 3
```

Rules:

- keep bullets concise
- group related changes
- prefer 3 to 8 bullets

## Step 5 — Push if needed

If the branch has not been pushed:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager push -u origin HEAD 2>&1
```

Otherwise:

```bash
GIT_TERMINAL_PROMPT=0 git -C <REPO_ROOT> --no-pager push 2>&1
```

## Step 6 — Create the PR

Use GitHub CLI:

```bash
gh pr create --title "<TITLE>" --body "<BODY>"
```

If the repo uses a non-default base branch, check it first instead of assuming.

## Step 7 — Report

Return:

- branch name
- PR title
- PR URL

## Repo-specific notes

- This project is small; do not use corporate ticket prefixes.
- Keep PR descriptions practical and short.
- If the branch contains mostly repo-structure or workflow changes, call that out explicitly.
