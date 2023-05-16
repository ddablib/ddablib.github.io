# AddOrUpdateString method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function AddOrUpdateString(TableIdx: Integer; const Name, Value: string):
  Integer;
```

## Description

Checks if a named string information item exists in a string table. If the string information name exists within the table then its value is updated. Otherwise a new string information item is added to the string table.

Parameters:

* _TableIdx_ -- Index of the string table within the string table list in which the string information item is to be added or updated.
* _Name_ -- Name of the string information item.
* _Value_ -- Value to be assigned to the named string information item.

Returns:

* Index of the string information item in its string table.

Exception:

* _EVIBinResource_ is raised _TableIdx_ is out of bounds.

## See Also

* [_AddString_](./TVIBinResource-AddString.md)
* [_DeleteString_](./TVIBinResource-DeleteString.md)
* [_DeleteStringByName_](./TVIBinResource-DeleteStringByName.md)
* [_GetStringCount_](./TVIBinResource-GetStringCount.md)
* [_GetStringName_](./TVIBinResource-GetStringName.md)
* [_GetStringValue_](./TVIBinResource-GetStringValue.md)
* [_GetStringValueByName_](./TVIBinResource-GetStringValueByName.md)
* [_IndexOfString_](./TVIBinResource-IndexOfString.md)
* [_SetStringValue_](./TVIBinResource-SetStringValue.md)
* [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md)
