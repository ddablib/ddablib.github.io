# OnAfterWindowRestored event

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJCustomWdwState](./TPJCustomWdwState.md)_

**Introduced:** v5.4

```pascal
property OnAfterWindowRestored: TNotifyEvent;
```

## Description

This published event is triggered just after the window has been restored. This occurs either after program start-up if the _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property is True or after the _[Restore](./TPJCustomWdwState-Restore.md)_ method has been called.

Handle this event if you need to determine the state of the restored window or its restored size. Use methods of the host form to find the required information.

## See Also

* _[OnAfterWindowSized](./TPJCustomWdwState-OnAfterWindowSized.md)_ **<sup>v5.4</sup>**
