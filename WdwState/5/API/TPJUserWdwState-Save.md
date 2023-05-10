# Save method

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJUserWdwState](./TPJUserWdwState.md)_

**Applies to:** ~>5.0

```pascal
procedure Save;
```

## Description

This method saves the state, size and position of the owning form's window to persistent storage. The _[OnSaveData](./TPJUserWdwState-OnSaveData.md)_ event is triggered by this method. The user must handle the event by saving the provided window state data.

For MDI child forms the window's top and left coordinates are relative to the MDI main form's client area. For other, top level, windows the coordinates are relative to the screen.

If the _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property is true then _Save_ is called automatically when the window is destroyed.
