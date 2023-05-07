# ProgramFilesRedirect class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJSystemFolders](./TPJSystemFolders.md)_

**Introduced:** v4.0

```pascal
class function ProgramFilesRedirect: string;
```

## Description

Returns the fully qualified path name of the Program Files folder, taking into account any redirection for 32 bit programs running on 64 bit Windows.

The return value will be the same as one of the _[ProgramFiles](./TPJSystemFolders-ProgramFiles.md)_ or _[ProgramFilesX86](./TPJSystemFolders-ProgramFilesX86.md)_ methods as follows:

| Operating System | Application | Return Value |
|:-----------------|:------------|:-------------|
| 32 bit Windows | 32 bit | _[ProgramFiles](./TPJSystemFolders-ProgramFiles.md)_ |
| 64 bit Windows | 32 bit | _[ProgramFilesX86](./TPJSystemFolders-ProgramFilesX86.md)_ |
| 64 bit Windows | 64 bit | _[ProgramFiles](./TPJSystemFolders-ProgramFiles.md)_ |

## See Also

  * _[ProgramFiles](./TPJSystemFolders-ProgramFiles.md)_
  * _[ProgramFilesX86](./TPJSystemFolders-ProgramFilesX86.md)_
  