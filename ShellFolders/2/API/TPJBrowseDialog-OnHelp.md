# OnHelp event

**Project:** [Shell Folders Unit](../API.md).

**Unit:** _PJShellFolders_.

**Class:** _[TPJBrowseDialog](./TPJBrowseDialog.md)_

**Applies to:** ~>2.3

```pascal
type
  TPJBrowseHelpEvent = procedure(Sender: TObject;
    var Cancel: Boolean) of object;

property OnHelp: TPJBrowseHelpEvent;
```

## Description

This event is triggered whenever help is requested and is available. Its purpose is to enable the user to intercept help requests before they are passed to the _Application_ object for processing and, optionally, to prevent _Application_ from receiving the request.

Help can be requested by clicking any visible and enabled help button or by pressing F1 whenever `boContextHelp` is not included in the _[Options](./TPJBrowseDialog-Options.md)_ property.  Help is available when either _[HelpContext](./TPJBrowseDialog-HelpContext.md)_ is non-zero or _[HelpKeyword](./TPJBrowseDialog-HelpKeyword.md)_ is not the empty string, depending on the value of the _[HelpType](./TPJBrowseDialog-HelpType.md)_ property. (On Delphis that don't support _[HelpType](./TPJBrowseDialog-HelpType.md)_, _[HelpContext](./TPJBrowseDialog-HelpContext.md)_ must be non-zero).

The event handler's parameters are described below:

* _Sender_ provides a reference to the calling component and can be cast to _[TPJBrowseDialog](./TPJBrowseDialog.md)_ to gain access to the _[HelpContext](./TPJBrowseDialog-HelpContext.md)_, _[HelpKeyword](./TPJBrowseDialog-HelpKeyword.md)_ and _[HelpType](./TPJBrowseDialog-HelpType.md)_ properties.
* _Cancel_ is false when the event handler is called which means the help request will be passed to the _Application_ object. To prevent this set _Cancel_ to true.
