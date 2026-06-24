oh shit git
https://learngitbranching.js.org/?locale=vi
# Git base
- git init : Create new repo in current documents
- git add <file>: stage one file specifically
- git add . : stage all file have changed
- git commit: save the snapshot of your project's changes in a Git repository
- git commit -m "message": commit with message
- git commit -am "message": add and commit with message
- git clone <url>: Clone repo from remote to your computer
- git checkout origin/main:
- git fetch:
---
# Check status
- git log : view commit history
- git log --oneline --graph : view a history in a condensed by branch format
- git status : check file status( Changed, not added,...)
---
# Branch
- git branch [branchName]: Create a new branch
- git checkout [branchName]: switch to another branch or restore file to a previous state
**git checkout -b [branchName] :create a new branch and switch to new branch**
--- 
# Merge & Rebase
- git merge [branchName]: merge branchName with current branch
- git rebase [branchName]: integrate changes from one branch into another by modifying your branch'base commit
  **state in git equal a commit**
- git checkout ^ ,~<number>
- git branch -f (branch force): is use to force-reset an existing branch pointer to a specific commit
---
# Undo
- git reset: undo changes by moving your current branch poiter(HEAD) to a specific preious commit 
- git revert <commit>: create new commit to reverse an old commit
---
# Other commonly used
- git cherry-pick <commit1> <commit2> <...> : copy a specific, individual commit from one branch and apply it onto your current branch
- git rebase -i HEAD~<number> : Edit the <number> most recent commits 
- git rebase -i <commit-hash>: Edit the changes made after that commit up to the present
- git tag <version1> <commit1>: create tag version1 and reference the commit1 (if you do not specify a commit, Git will tag the commit that HEAD currently points to)
- git describle <reference> : output <tag>-<numberCommit>-g<hashValue>