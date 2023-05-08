# OnDropFiles event

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Class:** _[TPJDropFiles](./TPJDropFiles.md)_

```pascal
property OnDropFiles: TNotifyEvent;
```

## Description

This event is triggered after files have been dropped on the component and the files have been processed. When this event is triggered all the dropped files are available in the _[Files](./TPJDropFiles-Files.md)_  property.

This event is not triggered when the _[Enabled](./TPJDropFiles-Enabled.md)_ property is False.
