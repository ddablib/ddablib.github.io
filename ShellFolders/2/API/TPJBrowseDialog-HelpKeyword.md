# HelpKeyword property

**Project:** [Shell Folders Unit](../API.md).

**Unit:** _PJShellFolders_.

**Class:** _[TPJBrowseDialog](./TPJBrowseDialog.md)_

**Applies to:** ~>2.3

```pascal
property HelpKeyword: string;
```

## Description

_HelpKeyword_ contains a keyword keyword that determines which help topic appears when the user requests help. _HelpKeyword_ has effect only if the following conditions are met:

  * The _[HelpType](./TPJBrowseDialog-HelpType.md)_ property is set to `htKeyword`.
  * The dialog's help button is displayed, enabled and is clicked.
  * The F1 key is pressed and the _[Options](./TPJBrowseDialog-Options.md)_ property does not include `boContextHelp`.

If _HelpKeyword_ is set to the default value of the empty string, and _[HelpType](./TPJBrowseDialog-HelpType.md)_ = `htKeyword` then any help button that is displayed is disabled.

**Note:** This property is only available when the unit is compiled with Delphi 6 or later.
