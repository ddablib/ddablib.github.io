# SetFixedFileInfo method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure SetFixedFileInfo(const Value: TVSFixedFileInfo);
```

## Description

Sets the version information's fixed file information record.

Parameters:

* Value -- A _TVSFixedFileInfo_ record containing the requierd fixed file information.

## Notes

1. _TVSFixedFileInfo_ is a Delphi type that is an alias for the Windows API's [_VS_FIXEDFILEINFO_ structure](https://learn.microsoft.com/en-us/windows/win32/api/verrsrc/ns-verrsrc-vs_fixedfileinfo).

2. The _dwSignature_ and _dwStrucVersion_ fields of the given _TVSFixedFileInfo_ record are required to have fixed values. _SetFixedFileInfo_ ensures that the fields have the correct values of `$FEEF04BD` and `$00010000` respectively.

## See Also

* [_GetFixedFileInfo_](./TVIBinResource-GetFixedFileInfo.md)
