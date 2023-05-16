# IndexOfString method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function IndexOfString(TableIdx: Integer; const Name: string): Integer;
```

## Description

Gets the index of a named string information item within a string table.

Parameters:

* _TableIdx_ -- Index of the string table within the string table list.
* _Name_ -- Name of the string information item within the selected string table.

Returns:

* The index of the named string information item in the specified string table, or `-1` if the name can't be found.

Exception:

* _EVIBinResource_ is raised if _TableIdx_ is out of bounds.

## See Also

* [_AddOrUpdateString_](./TVIBinResource-AddOrUpdateString.md)
* [_AddString_](./TVIBinResource-AddString.md)
* [_DeleteString_](./TVIBinResource-DeleteString.md)
* [_DeleteStringByName_](./TVIBinResource-DeleteStringByName.md)
* [_GetStringCount_](./TVIBinResource-GetStringCount.md)
* [_GetStringName_](./TVIBinResource-GetStringName.md)
* [_GetStringValue_](./TVIBinResource-GetStringValue.md)
* [_GetStringValueByName_](./TVIBinResource-GetStringValueByName.md)
* [_SetStringValue_](./TVIBinResource-SetStringValue.md)
* [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md)
