# ProgramFiles class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJSystemFolders](./TPJSystemFolders.md)_

**Applies to:** ~>5.0

```pascal
class function ProgramFiles: string;
```

## Description

Returns the fully qualified path name of the system's Program Files folder.

On 64 bit Windows, both 32 bit and 64 bit programs will report the same value, i.e. the value used for "native" 64 bit programs.

## See Also

  * _[ProgramFilesX86](./TPJSystemFolders-ProgramFilesX86.md)_
  * _[ProgramFilesRedirect](./TPJSystemFolders-ProgramFilesRedirect.md)_
  