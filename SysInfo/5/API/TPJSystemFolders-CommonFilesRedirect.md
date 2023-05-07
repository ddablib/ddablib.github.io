# CommonFilesRedirect class function #

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJSystemFolders](./TPJSystemFolders.md)_

**Introduced:** v4.0

```pascal
class function CommonFilesRedirect: string;
```

## Description ##

Returns the fully qualified path name of the Common Files folder, taking into account any redirection for 32 bit programs running on 64 bit Windows.

The return value will be the same as one of the _[CommonFiles](./TPJSystemFolders-CommonFiles.md)_ or _[CommonFilesX86](TPJSystemFolders-CommonFilesX86.md)_ methods as follows:

| Operating System | Application | Return Value |
|:-----------------|:------------|:-------------|
| 32 bit Windows | 32 bit | _[CommonFiles](./TPJSystemFolders-CommonFiles.md)_ |
| 64 bit Windows | 32 bit | _[CommonFilesX86](./TPJSystemFolders-CommonFilesX86.md)_ |
| 64 bit Windows | 64 bit | _[CommonFiles](./TPJSystemFolders-CommonFiles.md)_ |

**See also**

  * _[CommonFiles](./TPJSystemFolders-CommonFiles.md)_
  * _[CommonFilesX86](./TPJSystemFolders-CommonFilesX86.md)_