# Restore method

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJUserWdwState](./TPJUserWdwState.md)_

**Applies to:** ~>5.0

```pascal
procedure Restore;
```

## Description

This method restores the size and position of the owning form's window according to value saved in persistent storage. The _[OnReadData](./TPJUserWdwState-OnReadData.md)_ event is triggered by this method. The user must handle the event by reading and passing back the required window state data.

Various values of the _[Options](./TPJCustomWdwState-Options.md)_ property may cause either the saved size or state to be ignored or for the window to be repositioned (and possibly resized) to fit within the desktop's work area.

If the _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property is true _Restore_ is called automatically when the window is created.
