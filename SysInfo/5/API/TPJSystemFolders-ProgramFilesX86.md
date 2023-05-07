# ProgramFilesX86 class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJSystemFolders](./TPJSystemFolders.md)_

**Applies to:** ~>5.0

```pascal
class function ProgramFilesX86: string;
```

## Description

Returns the fully qualified path name of the system's Program Files x86 folder that is used for 32 bit programs running on 64 bit versions of Windows.

No such folder exists on 32 bit Windows and so _ProgramFilesX86_ returns the empty string on that platform.

## See Also

  * _[ProgramFiles](./TPJSystemFolders-ProgramFiles.md)_
  * _[ProgramFilesRedirect](./TPJSystemFolders-ProgramFilesRedirect.md)_
  