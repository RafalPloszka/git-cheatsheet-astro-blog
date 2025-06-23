---
title: Undoing
order: 5
---


## 🔹 Undoing

### `git reset --soft HEAD~1`  
Undo last commit, keep changes staged.

### `git reset --mixed HEAD~1`  
Undo last commit, unstage changes (default behavior).

### `git reset --hard HEAD~1`  
**Warning:** Permanently erase last commit and changes.

### `git restore <file>`  
Discard changes in the working directory.