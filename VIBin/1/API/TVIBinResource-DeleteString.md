# DeleteString method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure DeleteString(TableIdx, StringIdx: Integer);
```

## Description

Deletes a string information item from a string table, by index.

Parameters:

* _TableIdx_ -- Index of the string table within the string table list containing the string information item to be deleted.
* _StringIdx_ -- Index of the string information item to be deleted within the selected string table.

Exception:

* _EVIBinResource_ raised if the either _TableIdx_ or _StringIdx_ are out of bounds.

## See Also

* [_AddOrUpdateString_](./TVIBinResource-AddOrUpdateString.md)
* [_AddString_](./TVIBinResource-AddString.md)
* [_DeleteStringByName_](./TVIBinResource-DeleteStringByName.md)
* [_GetStringCount_](./TVIBinResource-GetStringCount.md)
* [_GetStringName_](./TVIBinResource-GetStringName.md)
* [_GetStringValue_](./TVIBinResource-GetStringValue.md)
* [_GetStringValueByName_](./TVIBinResource-GetStringValueByName.md)
* [_IndexOfString_](./TVIBinResource-IndexOfString.md)
* [_SetStringValue_](./TVIBinResource-SetStringValue.md)
* [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md)
