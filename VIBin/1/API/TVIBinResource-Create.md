# Create constructor

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
constructor Create(VerResType: TVerResType);
```

## Description

Object constructor. Creates a new version information object in its default state.

See the [_Reset_](./TVIBinResource-Reset.md) method for a description of "default state"

Parameter:

* _VerResType_ -- A value from the [_TVIBinResourceType_](./TVIBinResourceType.md) enumeration that specifies whether the object is to be created as an ANSI (_vrtAnsi_) or Unicode (_vrtUnicode_) version information resource.

