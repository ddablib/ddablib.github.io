# Restore method

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJRegWdwState](./TPJRegWdwState.md)_

**Applies to:** ~>5.0

```pascal
procedure Restore;
```

## Description

This method restores the size and position of the owning form's window according to value saved in a specified part of the Windows registry. The root and sub keys of the registry where the information is stored are specfied by the _[RootKey](./TPJRegWdwState-RootKey.md)_ or _[RootKeyEx](./TPJRegWdwState-RootKeyEx.md)_ [~>5.6]  and _[SubKey](./TPJRegWdwState-SubKey.md)_ properties. If the key does not exist in the registry then this method has no effect.

Various values of the _[Options](./TPJCustomWdwState-Options.md)_ property may cause either the saved size or state to be ignored or for the window to be repositioned (and possibly resized) to fit within the desktop's work area.

If the _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property is true _Restore_ is called automatically when the window is created.
