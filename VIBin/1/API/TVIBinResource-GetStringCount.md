# GetStringCount method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function GetStringCount(TableIdx: Integer): Integer;
```

## Description

Gets the number of string information items in a string table.

Parameter:

* _TableIdx_ -- Index of the string table in the string table list.

Returns:

* The number of string information items in the selected string table.

Exception:

* _EVIBinResource_ is raised if _TableIdx_ is out of bounds.

## See Also

* [_AddOrUpdateString_](./TVIBinResource-AddOrUpdateString.md)
* [_AddString_](./TVIBinResource-AddString.md)
* [_DeleteString_](./TVIBinResource-DeleteString.md)
* [_DeleteStringByName_](./TVIBinResource-DeleteStringByName.md)
* [_GetStringName_](./TVIBinResource-GetStringName.md)
* [_GetStringValue_](./TVIBinResource-GetStringValue.md)
* [_GetStringValueByName_](./TVIBinResource-GetStringValueByName.md)
* [_IndexOfString_](./TVIBinResource-IndexOfString.md)
* [_SetStringValue_](./TVIBinResource-SetStringValue.md)
* [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md)
