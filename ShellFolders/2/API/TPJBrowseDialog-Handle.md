# Handle property

**Project:** [Shell Folders Unit](../API.md).

**Unit:** _PJShellFolders_.

**Class:** _[TPJBrowseDialog](./TPJBrowseDialog.md)_

**Applies to:** >=2.0.0 & <= 2.3.0

```pascal
property Handle: THandle;
```

**Applies to:** ~>2.3.1, ~>2.4

```pascal
property Handle: HWND;
```

## Description

This property provides access to the _Browse for Folder_ dialog box's window handle while the _[Execute](./TPJBrowseDialog-Execute.md)_ method is active. At other times _Handle_ is set to 0. _Handle_ therefore only references a valid window handle when the dialog box is displayed.

_Handle_ is intended for use in the _[OnInitialise](./TPJBrowseDialog-OnInitialise.md)_, _[OnSelChange](./TPJBrowseDialog-OnSelChange.md)_, _[OnSelChangeEx](./TPJBrowseDialog-OnSelChangeEx.md)_, _[OnValidationFailed](./TPJBrowseDialog-OnValidationFailed.md)_ [~>2.3] and _[OnClose](./TPJBrowseDialog-OnClose.md)_ events whenever it is necessary to customise the window's behaviour.
