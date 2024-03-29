# ReadWdwState method

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJRegWdwState](./TPJRegWdwState.md)_

**Applies to:** ~>5.0

```pascal
procedure ReadWdwState(
  var Left, Top, Width, Height, State: Integer
); override;
```

## Description

_ReadWdwState_ is used  used to read a window's size, position and state from the registry.

This protected method is overrridden by _[TPJRegWdwState](./TPJRegWdwState.md)_ to read the window's state, size and position information from the registry. Before reading the registry _ReadWdwState_ triggers either the _[OnGetRegData](./TPJRegWdwState-OnGetRegData.md)_ or the _[OnGetRegDataEx](./TPJRegWdwState-OnGetRegDataEx.md)_ [~>5.6] event to enable the user to change the key from which the state data is to be read.

The position of the window is returned in the _Left_ and _Top_ parameters, the size in the _Width_ and _Height_ parameters and the state in the _State_ parameter. _State_ is the ordinal value of a member of the _TWindowState_ enumeration: `wsMinimized`, `wsMaximized` or `wsNormal`. The parameters are set to those currently existing for the associated window before calling the method.

This method is called by the _[Restore](./TPJRegWdwState-Restore.md)_ method.
