---
title: How to use git reset? Explain different flags usage
level: intermediate
tags: [git, workflow]
---

git reset moves your HEAD to a different commit and optionally updates the staging area and working directory.

--soft: moves HEAD, keeps changes staged

--mixed (default): moves HEAD, unstages changes, but keeps them in the working directory

--hard: moves HEAD and discards all changes in staging and working directory ⚠️

Use --soft to redo a commit, --mixed to unstage, and --hard to discard completely.
