# AddStringTable method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function AddStringTable(TransStr: string): Integer;
```

## Description

Adds a new string table to the string table list, identified by its translation string.

Parameters:

* _TransStr_ -- The translation code string that uniquely identifies the new string table

Returns:

* The index of the new string table in the string table list.

## Notes

The translation code should be unique within the translation table, but this is not checked.

## See Also

* [_AddStringTableByTrans_](./TVIBinResource-AddStringTableByTrans.md)
* [_DeleteStringTable_](./TVIBinResource-DeleteStringTable.md)
* [_GetStringTableCharSet_](./TVIBinResource-GetStringTableCharSet.md)
* [_GetStringTableCount_](./TVIBinResource-GetStringTableCount.md)
* [_GetStringTableLanguageID_](./TVIBinResource-GetStringTableLanguageID.md)
* [_GetStringTableTransStr_](./TVIBinResource-GetStringTableTransStr.md)
* [_IndexOfStringTable_](./TVIBinResource-IndexOfStringTable.md)
* [_IndexOfStringTableByTrans_](./TVIBinResource-IndexOfStringTableByTrans.md)