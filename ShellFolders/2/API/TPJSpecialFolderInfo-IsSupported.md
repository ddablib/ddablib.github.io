# IsSupported property

**Project:** [Shell Folders Unit](../API.md).

**Unit:** _PJShellFolders_.

**Class:** _[TPJSpecialFolderInfo](./TPJSpecialFolderInfo.md)_

**Applies to:** ~>2.0

```pascal
property IsSupported: Boolean;
```

## Description

Use _IsSupported_ to determine if the current special folder is supported by the operating system.

This property returns true if the special folder specified by _[FolderID](./TPJSpecialFolderInfo-FolderID.md)_ is supported on the operating system and false if it is not. When _IsSupported_ is false the component's other properties have zero values: _[IsVirtual](TPJSpecialFolderInfo-IsVirtual.md)_ is false and _[DisplayName](./TPJSpecialFolderInfo-DisplayName.md)_ and _[Path](./TPJSpecialFolderInfo-Path.md)_ are empty strings.
