# OnClose event

**Project:** [Shell Folders Unit](../API.md).

**Unit:** _PJShellFolders_.

**Class:** _[TPJBrowseDialog](./TPJBrowseDialog.md)_

**Applies to:** ~>2.0

```pascal
property OnClose: TNotifyEvent;
```

## Description

This event occurs when the dialog closes.

Write an _OnClose_ event handler to perform special processing when the dialog closes.

The dialog's window handle is available via the _[Handle](./TPJBrowseDialog-Handle.md)_ property. The _Sender_ parameter can be cast to _[TPJBrowseDialog](./TPJBrowseDialog.md)_ in order to access the _[Handle](./TPJBrowseDialog-Handle.md)_ property.
