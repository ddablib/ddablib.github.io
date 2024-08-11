# DeleteStringByName method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure DeleteStringByName(TableIdx: Integer; Name: string);
```

## Description

Deletes a string information item from a string table, by name.

Parameters:

* _TableIdx_ -- Index of the string table within the string table list that contains the string information item to be deleted.
* _Name_ -- Name of the string information item to be deleted within the selected string table.

Exception:

* _EVIBinResource_ raised if either _TableIdx_ is out of bounds or if there is no string information in the string table item with the given name.

## See Also

* [_AddOrUpdateString_](./TVIBinResource-AddOrUpdateString.md)
* [_AddString_](./TVIBinResource-AddString.md)
* [_DeleteString_](./TVIBinResource-DeleteString.md)
* [_GetStringCount_](./TVIBinResource-GetStringCount.md)
* [_GetStringName_](./TVIBinResource-GetStringName.md)
* [_GetStringValue_](./TVIBinResource-GetStringValue.md)
* [_GetStringValueByName_](./TVIBinResource-GetStringValueByName.md)
* [_IndexOfString_](./TVIBinResource-IndexOfString.md)
* [_SetStringValue_](./TVIBinResource-SetStringValue.md)
* [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md)
