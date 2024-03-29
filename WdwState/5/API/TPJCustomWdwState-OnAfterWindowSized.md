# OnAfterWindowSized event

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJCustomWdwState](./TPJCustomWdwState.md)_

**Applies to:** ~>5.4

```pascal
property OnAfterWindowSized: TNotifyEvent;
```

## Description

This published event is triggered just after the window's size has been set. This occurs before the window is actually restored on screen and before its state has been set.

Handle this event if you need to determine the _normal_ size and position of the window, regardless of its final state. Use methods of the host form to find the required size and position information.

## See Also

* _[OnAfterWindowRestored](./TPJCustomWdwState-OnAfterWindowRestored.md)_ [~>5.4]
