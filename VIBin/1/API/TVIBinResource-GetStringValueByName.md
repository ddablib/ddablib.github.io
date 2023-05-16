# GetStringValueByName method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function GetStringValueByName(TableIdx: Integer; Name: string): string;
```

## Description

Returns the value associated with a named string information item in a string table.

Parameters:

* _TableIdx_ -- Index of the string table within the string table list that contains the string information item.
* _Name_ -- Name of the string information item within the selected string table.

Returns:

* The value associated with the specified string information item.

Exception:

* _EVIBinResource_ is raised if either _TableIdx_ is out of bounds or if there is no string information with the specified name.

## See Also

* [_AddOrUpdateString_](./TVIBinResource-AddOrUpdateString.md)
* [_AddString_](./TVIBinResource-AddString.md)
* [_DeleteString_](./TVIBinResource-DeleteString.md)
* [_DeleteStringByName_](./TVIBinResource-DeleteStringByName.md)
* [_GetStringCount_](./TVIBinResource-GetStringCount.md)
* [_GetStringName_](./TVIBinResource-GetStringName.md)
* [_GetStringValue_](./TVIBinResource-GetStringValue.md)
* [_IndexOfString_](./TVIBinResource-IndexOfString.md)
* [_SetStringValue_](./TVIBinResource-SetStringValue.md)
* [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md)
