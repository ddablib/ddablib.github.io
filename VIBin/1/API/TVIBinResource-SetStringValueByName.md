# SetStringValueByName method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure SetStringValueByName(TableIdx: Integer;
  const Name, Value: string);
```
## Description

Sets the value of a named string information item in a string table.

Parameters:

* _TableIdx_ --  Index of the string table within the string table list that contains the string information item.
* _Name_ -- Name of the string information item within the selected string table.
* _Value_ -- New value of the selected string information item.

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
* [_GetStringValueByName_](./TVIBinResource-GetStringValueByName.md)
* [_IndexOfString_](./TVIBinResource-IndexOfString.md)
* [_SetStringValue_](./TVIBinResource-SetStringValue.md)
