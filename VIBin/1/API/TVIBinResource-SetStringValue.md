# SetStringValue method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure SetStringValue(TableIdx, StringIdx: Integer;
  const Value: string);
```

## Description

Sets the value of a string information item in a string table.

Parameters:

* _TableIdx_ --  Index of the string table within the string table list that contains the string information item.
* _StringIdx_ -- Index of the string information item within the selected string table.
* _Value_ -- New value of the selected string information item.

Exception:

* _EVIBinResource_ is raised if either _TableIdx_ or _StringIdx_ is out of bounds.

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
* [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md)
