14.07.2026

- as const works on any type of variable
- satisfies sets the literals as the type without widening the elements type
- satisfies and as const almost the same thing, but as const sets as ready only, satisfies keeps it the same

15.07.26

- git commits are written with imperative method
- pull requests are written in a way somebody can understand what happend, why, and how to check it
- to keep codebase clean open issues on github with a description of the issue and expected behavior after the fix.

- flex sets min-w to auto, which means that items won't shrink of the intrinsic width of its content
- git stash -u parks changes so I can move throughout branches without troubles
- master wasn't merged with icons branch, so I had to stash my changes, switch to master, use pull, then using switch -c (create) feat/mobile-layout, and bring back changes using git stash pop

16.07.26

- passing percentages to grid template and adding gap will go beyond the 100% size of the grid, the workaround is to simply use fr

17.07.26

- always branch from fresh master after merging changes

6.08.26 

- LF - Line Feed (\n) - linux/macOS convention
- CRLF - Carriage Return + Line Feed (\r\n) - windows convention
- LF will be replaced by CRLF - changes conventions to match my machine
