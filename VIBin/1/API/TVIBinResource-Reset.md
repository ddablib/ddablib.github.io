# Reset method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure Reset;
```

## Description

Resets the version information object to its default state.

In its default state a version information object contains a root record with an empty fixed file info, an empty string information sub tree and a variable file info subtree containing an empty translation entry.

## Note

The [object construtor](./TVIBinResource-Create.md) creates a version information object in its default state.

## See Also

* [_ReadFromStream_](./TVIBinResource-ReadFromStream.md)
* [_Assign_](./TVIBinResource-Assign.md)
