# TPJWdwStateData

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Applies to:** ~>5.0

```pascal
type
  TPJWdwStateData = record
    Left: Integer;
    Top: Integer;
    Width: Integer;
    Height: Integer;
    State: Integer;
  end;
```

## Description

This record type collects together the window size, position and state data that must be saved to and read from persistent storage by the _[OnReadData](./TPJUserWdwState-OnReadData.md)_ and _[OnSaveData](./TPJUserWdwState-OnSaveData.md)_ events of the _[TPJUserWdwState](./TPJUserWdwState.md)_ component.

The fields are as follows:

| Field | Description |
|:------|:------------|
| _Left_ | Position of left hand side of window in screen coordinates. |
| _Top_ | Position of top of window in screen coordinates. |
| _Width_ | Width of window in pixels. |
| _Height_ | Height of window in pixels. |
| _State_ | State of window. This is the ordinal value of a _TWindowState_ value, i.e. `wsMinimized`, `wsMaximized` or `wsNormal`. |
