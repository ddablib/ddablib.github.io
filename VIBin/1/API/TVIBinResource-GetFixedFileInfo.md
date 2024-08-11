# GetFixedFileInfo method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function GetFixedFileInfo: TVSFixedFileInfo;
```

## Description

Gets the version information's fixed file information record.

Returns:

* A _TVSFixedFileInfo_ record containing the fixed file information.

## Note

_TVSFixedFileInfo_ is a Delphi type that is an alias for the Windows API's [_VS_FIXEDFILEINFO_ structure](https://learn.microsoft.com/en-us/windows/win32/api/verrsrc/ns-verrsrc-vs_fixedfileinfo).

## See Also

* [_SetFixedFileInfo_](./TVIBinResource-SetFixedFileInfo.md)
