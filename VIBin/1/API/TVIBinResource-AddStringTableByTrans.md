# AddStringTableByTrans method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function AddStringTableByTrans(LanguageID, CharSet: Word): Integer;
```

## Description

Adds a new string table to the string table list, identified by its language identifier and character set code. 

Parameters:

* _LanguageID_ -- The language identifier component of the string table's translation code.
* _CharSet_ -- The character set code component of the string table's translation code.

Returns:

* The index of the new string table in the string table list.

## Notes

1. The language ID and character set code taken together form the translation code that identifies the string table.
2. The translation code should be unique within the translation table, but this is not checked.

## See Also

* [_AddStringTable_](./TVIBinResource-AddStringTable.md)
* [_DeleteStringTable_](./TVIBinResource-DeleteStringTable.md)
* [_GetStringTableCharSet_](./TVIBinResource-GetStringTableCharSet.md)
* [_GetStringTableCount_](./TVIBinResource-GetStringTableCount.md)
* [_GetStringTableLanguageID_](./TVIBinResource-GetStringTableLanguageID.md)
* [_GetStringTableTransStr_](./TVIBinResource-GetStringTableTransStr.md)
* [_IndexOfStringTable_](./TVIBinResource-IndexOfStringTable.md)
* [_IndexOfStringTableByTrans_](./TVIBinResource-IndexOfStringTableByTrans.md)
