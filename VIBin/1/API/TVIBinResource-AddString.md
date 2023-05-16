# AddString method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function AddString(TableIdx: Integer; const Name, Value: string): Integer;
```

Adds a new string information item to a string table.

Parameters:

* _TableIdx_ -- Index of the string table within the string table list to which the string information item is to be added.
* _Name_ -- Name of the new string information item.
* _Value_ -- Value to be assigned to the new string information item.

Returns:

* Index of the new string information item in its string table.

Exception:

* _EVIBinResource_ raised if the string table index is out of bounds or if a string information item with the given name already exists in the string table.

## See Also

* [_AddOrUpdateString_](./TVIBinResource-AddOrUpdateString.md)
* [_DeleteString_](./TVIBinResource-DeleteString.md)
* [_DeleteStringByName_](./TVIBinResource-DeleteStringByName.md)
* [_GetStringCount_](./TVIBinResource-GetStringCount.md)
* [_GetStringName_](./TVIBinResource-GetStringName.md)
* [_GetStringValue_](./TVIBinResource-GetStringValue.md)
* [_GetStringValueByName_](./TVIBinResource-GetStringValueByName.md)
* [_IndexOfString_](./TVIBinResource-IndexOfString.md)
* [_SetStringValue_](./TVIBinResource-SetStringValue.md)
* [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md)
