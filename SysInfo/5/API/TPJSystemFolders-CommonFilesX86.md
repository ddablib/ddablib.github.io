# CommonFilesX86 class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJSystemFolders](./TPJSystemFolders.md)_

**Applies to:** ~>5.0

```pascal
class function CommonFilesX86: string;
```

## Description

Returns the fully qualified path name of the system's Common Files x86 folder that is used for 32 bit programs running on 64 bit versions of Windows. This is usually a sub-folder of the Program Files x86 folder.

No such folder exists on 32 bit Windows and so _CommonFilesX86_ returns the empty string on that platform.

## See Also

  * _[CommonFiles](./TPJSystemFolders-CommonFiles.md)_
  * _[CommonFilesRedirect](./TPJSystemFolders-CommonFilesRedirect.md)_
  