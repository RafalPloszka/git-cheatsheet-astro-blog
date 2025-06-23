---
title: What’s the difference between git pull and git fetch?
level: intermediate
tags: [git, remote]
---

**git fetch** downloads changes from a remote but doesn’t update your working directory.  
**git pull** does a fetch *and* merges (or rebases) those changes into your current branch.

Use `fetch` to review changes before integrating them.