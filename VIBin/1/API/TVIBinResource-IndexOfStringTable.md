# IndexOfStringTable method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function IndexOfStringTable(const TransStr: string): Integer;
```

## Description

Finds the index of the string table with a given translation code string within the string table list.

Parameters:

* _TransStr_ -- The translation code string that identifies the string table.

Returns:

* The index of the string table in the string table list, or `-1` if such a string table can not be not found.

## Note

The translation code should be unique within the translation table, but this is not checked.

## See Also

* [_AddStringTable_](./TVIBinResource-AddStringTable.md)
* [_AddStringTableByTrans_](./TVIBinResource-AddStringTableByTrans.md)
* [_DeleteStringTable_](./TVIBinResource-DeleteStringTable.md)
* [_GetStringTableCharSet_](./TVIBinResource-GetStringTableCharSet.md)
* [_GetStringTableCount_](./TVIBinResource-GetStringTableCount.md)
* [_GetStringTableLanguageID_](./TVIBinResource-GetStringTableLanguageID.md)
* [_GetStringTableTransStr_](./TVIBinResource-GetStringTableTransStr.md)
* [_IndexOfStringTableByTrans_](./TVIBinResource-IndexOfStringTableByTrans.md)
