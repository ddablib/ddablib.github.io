# Path property

**Project:** [Shell Folders Unit](../API.md).

**Unit:** _PJShellFolders_.

**Class:** _[TPJSpecialFolderInfo](./TPJSpecialFolderInfo.md)_

**Applies to:** ~>2.0

```pascal
property Path: string;
```

## Description

The _Path_ property stores the directory of the special folder currently specified in _[FolderID](./TPJSpecialFolderInfo-FolderID.md)_.

If the folder is virtual then it is not in the file system and the _Path_ property is set to the empty string. Use the _[IsVirtual](./TPJSpecialFolderInfo-IsVirtual.md)_ property to check whether a folder is virtual or physical.

_Path_ is set to the empty string if the special folder is not supported by the operating system (see _[IsSupported](./TPJSpecialFolderInfo-IsSupported.md)_).
