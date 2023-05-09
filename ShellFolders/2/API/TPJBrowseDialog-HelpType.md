# HelpType property

**Project:** [Shell Folders Unit](../API.md).

**Unit:** _PJShellFolders_.

**Class:** _[TPJBrowseDialog](./TPJBrowseDialog.md)_

**Applies to:** ~>2.3

```pascal
type
  THelpType = (htKeyword, htContext);

property HelpType: THelpType;
```

## Description

This property determines whether the _[HelpContext](./TPJBrowseDialog-HelpContext.md)_ or _[HelpKeyword](./TPJBrowseDialog-HelpKeyword.md)_ properties are used to identify the associated help topic.

When _HelpType_ = `htKeyword`, the _[HelpKeyword](./TPJBrowseDialog-HelpKeyword.md)_ property is used and _[HelpContext](./TPJBrowseDialog-HelpContext.md)_ is ignored. Conversely when _HelpType_ = `htContext`, _[HelpContext](./TPJBrowseDialog-HelpContext.md)_ is used and _[HelpKeyword](./TPJBrowseDialog-HelpKeyword.md)_ is ignored.

**Note:** This property is only available when the unit is compiled with Delphi 6 or later.
